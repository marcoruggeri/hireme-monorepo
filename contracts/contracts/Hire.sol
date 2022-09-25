// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Hire is ERC20 {
    address hireMe;

    constructor(address _hireMe) ERC20("HireMe", "HIRE") {
        hireMe = _hireMe;
    }

    function mint(address _to, uint256 _amount) external {
        require(msg.sender == hireMe, "Only HireMe");
        _mint(_to, _amount);
    }
}
