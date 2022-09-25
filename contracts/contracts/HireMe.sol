// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./interfaces/IArbitrable.sol";
import "./interfaces/IArbitrator.sol";

// Import this file to use console.log
import "hardhat/console.sol";

// todo pay/reward HIRE
// todo whitelisted ERC20s
// todo handle arbitrator payment

interface LensHub {
    function getProfileIdByHandle(string calldata handle)
        external
        view
        returns (uint256);

    function ownerOf(uint256 tokenId) external view returns (address owner);
}

interface Hire {
    function mint(address _to, uint256 _amount) external;
}

contract HireMe is IArbitrable {
    address constant ETH = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE;
    uint256 constant numberOfRulingOptions = 2; // Notice that option 0 is reserved for RefusedToArbitrate.

    // gigId => Gig
    mapping(uint256 => Gig) public gigs;
    // bidId => Bid
    mapping(uint256 => Bid) public bids;
    // address => Freelancer
    mapping(uint256 => Freelancer) public freelancers;
    // disputeId => gigId
    mapping(uint256 => uint256) public disputeToGig;
    uint256 public nextGigId;
    uint256 public nextBidId;
    bytes public arbitratorExtraData;

    event Register(address _freelancer, string _lensHandle, string _profile);

    event CreateGig(address _creator, string _details, uint256 _gigId);

    event BidGig(
        address _bidder,
        uint256 _gigId,
        uint256 _bidId,
        uint256 _price,
        uint256 _days
    );

    event AcceptBid(Gig _gig, uint256 _gigId);

    event ResolveGig(Gig _gig, uint256 _gigId);

    event DisputeGig(Gig _gig, uint256 _gigId);

    LensHub lensHub;
    Hire hire;
    IArbitrator arbitrator;

    struct Freelancer {
        uint256 lensTokenid;
        string profile;
    }

    enum Status {
        Zero,
        Created,
        Bidded,
        Accepted,
        Disputed,
        Resolved
    }

    enum RulingOptions {
        RefusedToArbitrate,
        PayerWins,
        PayeeWins
    }

    struct Gig {
        string details;
        address creator;
        uint256 confirmedPrice;
        uint256 confirmedDays;
        uint256 confirmationTimestamp;
        address confirmedCurrency;
        address confirmedBidder;
        Status status;
    }

    struct Bid {
        address bidder;
        uint256 price;
        uint256 deliveryDays;
        uint256 gigId;
        address currency;
    }

    constructor(
        LensHub _lensHub,
        Hire _hire,
        IArbitrator _arbitrator,
        bytes memory _arbitratorExtraData
    ) {
        lensHub = _lensHub;
        hire = _hire;
        arbitrator = _arbitrator;
        arbitratorExtraData = _arbitratorExtraData;
    }

    function register(string calldata lensHandle, string calldata profile)
        external
    {
        uint256 lensTokenId = lensHub.getProfileIdByHandle(lensHandle);
        require(lensHub.ownerOf(lensTokenId) == msg.sender, "not owner");
        Freelancer memory freelancer = Freelancer(lensTokenId, profile);
        freelancers[lensTokenId] = freelancer;
        hire.mint(msg.sender, 100 ether);
    }

    function createGig(string calldata details) external {
        nextGigId++;
        Gig memory gig = Gig(
            details,
            msg.sender,
            0,
            0,
            0,
            address(0),
            address(0),
            Status.Created
        );
        gigs[nextGigId] = gig;
    }

    function bidGig(
        uint256 _gigId,
        uint256 _price,
        uint256 _days,
        address _currency
    ) external {
        require(gigs[_gigId].status == Status.Created, "gig not created");
        nextBidId++;
        Bid memory bid = Bid(msg.sender, _price, _days, _gigId, _currency);
        bids[nextBidId] = bid;
        gigs[_gigId].status = Status.Bidded;
    }

    function acceptBid(uint256 _gigId, uint256 _bidId) external payable {
        require(msg.sender == gigs[_gigId].creator, "not creator");
        require(bids[_bidId].gigId == _gigId, "bid not matching");
        if (bids[_bidId].currency != ETH) {
            IERC20(bids[_bidId].currency).transferFrom(
                msg.sender,
                address(this),
                bids[_bidId].price
            );
        } else {
            require(msg.value == bids[_bidId].price);
        }
        gigs[_gigId].confirmedPrice = bids[_bidId].price;
        gigs[_gigId].confirmedDays = bids[_bidId].deliveryDays;
        gigs[_gigId].confirmedCurrency = bids[_bidId].currency;
        gigs[_gigId].confirmationTimestamp = block.timestamp;
        gigs[_gigId].status = Status.Accepted;
        delete bids[_bidId];
    }

    function resolveGig(uint256 _gigId) external {
        require(msg.sender == gigs[_gigId].creator, "not creator");
        if (gigs[_gigId].confirmedCurrency != ETH) {
            IERC20(gigs[_gigId].confirmedCurrency).transfer(
                gigs[_gigId].confirmedBidder,
                gigs[_gigId].confirmedPrice
            );
        } else {
            payable(gigs[_gigId].confirmedBidder).transfer(
                gigs[_gigId].confirmedPrice
            );
        }
        delete gigs[_gigId];
    }

    function disputeGig(uint256 _gigId) external {
        require(msg.sender == gigs[_gigId].creator, "not creator");
        require(
            block.timestamp >
                gigs[_gigId].confirmationTimestamp +
                    gigs[_gigId].confirmedDays *
                    3600,
            "not expired"
        );
        gigs[_gigId].status = Status.Disputed;
        uint256 disputeId = arbitrator.createDispute{value: 0}(
            numberOfRulingOptions,
            arbitratorExtraData
        );
        disputeToGig[disputeId] = _gigId;
    }

    function rule(uint256 _disputeID, uint256 _ruling) external {
        require(msg.sender == address(arbitrator));
        uint256 gigId = disputeToGig[_disputeID];
        require(gigs[gigId].status == Status.Disputed, "not disputed");
        require(_ruling <= numberOfRulingOptions, "Invalid ruling.");
        gigs[gigId].status = Status.Resolved;
        if (_ruling == uint256(RulingOptions.PayerWins)) {
            if (gigs[gigId].confirmedCurrency != ETH) {
                IERC20(gigs[gigId].confirmedCurrency).transfer(
                    gigs[gigId].creator,
                    gigs[gigId].confirmedPrice
                );
            } else {
                payable(gigs[gigId].creator).transfer(
                    gigs[gigId].confirmedPrice
                );
            }
        } else if (_ruling == uint256(RulingOptions.PayeeWins)) {
            if (gigs[gigId].confirmedCurrency != ETH) {
                IERC20(gigs[gigId].confirmedCurrency).transfer(
                    gigs[gigId].confirmedBidder,
                    gigs[gigId].confirmedPrice
                );
            } else {
                payable(gigs[gigId].confirmedBidder).transfer(
                    gigs[gigId].confirmedPrice
                );
            }
        }
        emit Ruling(arbitrator, _disputeID, _ruling);
    }
}
