const SetUp = () => {
  return (
    <div className="max-h-full px-28 2xl:px-52 py-28 overflow-y-auto">
      <div className="h-40 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      <div className="px-10 flex items-center w-full justify-between">
        <div className="flex items-center gap-6">
          <div className="bg-white p-1 rounded-full h-32 w-32 mt-[-40px] shadow-lg cursor-pointer">
            <div className="rounded-full bg-gray-50 w-full h-full flex items-center justify-center">
              <img src="/brand/profileImgMiss.png" />
            </div>
          </div>
          <div>
            <div className="text-3xl">Set up your profile</div>
            <div className="text-gray-500">To post or propose jobs</div>
          </div>
        </div>
        <div className="bg-blue-600 text-white text-sm px-4 py-2 rounded-xl cursor-pointer hover:bg-blue-500">
          Save Profile
        </div>
      </div>
      <div className="flex items-center mt-12 pb-5 border-b border-gray-200">
        <div className="w-1/5 text-sm text-gray-700 font-medium">
          Display Name
        </div>
        <input
          className="w-1/2 py-2.5 px-3 border border-gray-300 rounded-lg outline-0 mt-3"
          placeholder="Enter display name"
        />
      </div>
      <div className="flex items-start py-5 border-b border-gray-200">
        <div className="w-1/5 text-sm">
          <div className="text-gray-700 font-medium">Your bio</div>
          <div className="text-gray-500">Write a short introduction.</div>
        </div>
        <div className="w-1/2">
          <div className="w-1/2 py-2.5 px-3 border border-gray-300 rounded-lg flex items-center justify-between">
            <div className="text-gray-900">Regular</div>{" "}
            <img src="/brand/downArrow.png" />
          </div>
          <textarea
            className="w-full mt-3 py-2.5 px-3 h-36 border border-gray-300 rounded-lg outline-0 resize-none"
            placeholder="Add a short bio..."
          />
          <div className="text-sm text-gray-500 mt-1.5">
            400 characters left
          </div>
        </div>
      </div>
      <div className="flex items-start py-5 border-b border-gray-200">
        <div className="w-1/5 text-sm text-gray-700 font-medium">Job title</div>
        <div className="w-1/2">
          <input
            className="w-full py-2.5 px-3 border border-gray-300 rounded-lg outline-0"
            placeholder="Enter role"
          />
          <div className="flex items-center gap-2 mt-4 cursor-pointer">
            <div className="h-4 w-4 rounded border border-blue-500 bg-blue-50"></div>
            <div className="text-sm text-gray-700 font-medium">
              Show my job title in my profile
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start py-5 border-b border-gray-200">
        <div className="w-1/5 text-sm text-gray-700 font-medium">Website</div>
        <div className="w-1/2 border border-gray-300 rounded-lg flex items-center">
          <div className="py-2.5 px-3 border-r border-gray-300">http://</div>
          <input
            className="w-5/6 py-2.5 px-3 outline-0"
            placeholder="www.mynewsite.com"
          />
        </div>
      </div>
      <div className="flex items-start py-5 border-b border-gray-200">
        <div className="w-1/5 text-sm text-gray-700 font-medium">
          Lens Social
        </div>
        <input
          className="w-1/2 py-2.5 px-3 border border-gray-300 rounded-lg outline-0"
          placeholder="@Lensexample"
        />
      </div>
      <div className="flex items-start py-5 border-b border-gray-200">
        <div className="w-1/5 text-sm text-gray-700 font-medium">
          Wallet Address
        </div>
        <input
          className="w-1/2 py-2.5 px-3 border border-gray-300 rounded-lg outline-0"
          placeholder="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
        />
      </div>
      <div className="flex items-start py-5 border-b border-gray-200">
        <div className="w-1/5 text-sm text-gray-700 font-medium">Telegram</div>
        <div className="w-1/2 flex items-center gap-2 py-2.5 px-3 border border-gray-300 rounded-lg">
          <img src="/brand/logos/telegram2.png" />
          <input className="w-full outline-0" placeholder="@myhandle" />
        </div>
      </div>
      <div className="flex items-start py-5 border-b border-gray-200">
        <div className="w-1/5 text-sm text-gray-700 font-medium">Discord</div>
        <div className="w-1/2 flex items-center gap-2 py-2.5 px-3 border border-gray-300 rounded-lg">
          <img src="/brand/logos/discord2.png" />
          <input className="w-full outline-0" placeholder="@myhandle" />
        </div>
      </div>
    </div>
  );
};

export default SetUp;
