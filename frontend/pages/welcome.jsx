import Link from "next/link";

const Welcome = () => {
  return (
    <div className="flex flex-col h-full items-center justify-between pt-10">
      <div className="w-[360px] flex flex-col items-center">
        <img src="/brand/Logomark.png" />
        <div className="font-semibold text-3xl text-center mt-6">
          Welcome to Hire Me
        </div>
        <div className="text-center text-gray-500 mt-3">
          Register your lense account and recieve 100 Hire tokens to get
          started.
        </div>
        <div className="font-medium text-sm text-gray-700 mt-8 self-start">
          Lense Account
        </div>
        <input
          className="w-full py-2.5 px-3 border border-gray-300 bg-gray-50 rounded-lg outline-0 mt-2"
          placeholder="@JohnSmith"
        />
        <div className="text-sm text-gray-500 mt-2 self-start">
          Lense NFT in your wallet
        </div>
        <div className="font-medium text-sm text-gray-700 mt-5 self-start">
          Wallet Address
        </div>
        <input
          className="w-full py-2.5 px-3 border border-gray-300 bg-gray-50 rounded-lg outline-0 mt-2"
          placeholder="AQwsmsimSSsnsjns0988msmo420.DsmoO"
        />
        <Link href="/set-up">
          <div className="mt-6 bg-blue-600 text-white text-center w-full py-2 rounded-xl cursor-pointer hover:bg-blue-500">
            Register Account
          </div>
        </Link>
      </div>
      <div className="w-full py-6 2xl:py-12 text-gray-400 text-center bg-gray-50">
        See user flow <span className="font-semibold">without</span> lense NFT
      </div>
    </div>
  );
};

export default Welcome;
