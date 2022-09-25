const NewJob = () => {
  return (
    <div className="bg-gray-50">
      <img className="w-full h-60 mb-6" src="/brand/newJobHeader.png" />
      <div className="px-28 2xl:px-52 flex items-center justify-between">
        <div className="font-medium text-gray-900 text-3xl">Add new job</div>
        <div className="flex items-center gap-3">
          <div className="font-medium bg-white text-gray-700 text-center py-2 px-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
            Cancel
          </div>
          <div className="bg-blue-600 font-medium text-white text-center py-2 px-3 rounded-xl cursor-pointer hover:bg-blue-500">
            Submit job
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center py-14">
        <div className="w-1/2 flex flex-col gap-2 pb-5 border-b border-gray-200">
          <div className="text-sm text-gray-700 font-medium">Job name</div>
          <input
            className="w-4/5 py-2.5 px-3 border border-gray-300 rounded-lg outline-0"
            placeholder="Our next big idea"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-2 pb-5 border-b border-gray-200 mt-5">
          <div className="text-sm text-gray-700 font-medium">About you</div>
          <textarea
            className="w-full py-2.5 px-3 h-36 border border-gray-300 rounded-lg outline-0 resize-none"
            placeholder="Add a short bio..."
          />
        </div>
        <div className="w-1/2 flex flex-col gap-2 pb-5 border-b border-gray-200 mt-5">
          <div className="text-sm text-gray-700 font-medium">
            What you're looking for
          </div>
          <textarea
            className="w-full py-2.5 px-3 h-36 border border-gray-300 rounded-lg outline-0 resize-none"
            placeholder="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
          />
        </div>
        <div className="w-1/2 flex flex-col gap-2 pb-5 border-b border-gray-200 mt-5 text-sm text-gray-500 cursor-pointer">
          <div className="w-full flex py-4 flex-col items-center bg-white border border-gray-300 rounded-lg">
            <img src="/brand/uploadImg.png" />
            <div className="mt-3">
              <span className="text-blue-700 font-medium">
                Click to upload cover image
              </span>{" "}
              or drag and drop
            </div>
            <div className="mt-3">SVG, PNG, JPG or GIF (max. 800x400px)</div>
          </div>
        </div>
        <div className="w-1/2 mt-5 flex flex-col gap-2 pb-5 border-b border-gray-200">
          <div className="text-sm text-gray-700 font-medium">
            Candidate Type
          </div>
          <input
            className="w-4/5 py-2.5 px-3 border border-gray-300 rounded-lg outline-0"
            placeholder="Intermediate"
          />
        </div>
        <div className="w-1/2 mt-5 flex flex-col gap-2 pb-5 border-b border-gray-200">
          <div className="text-sm text-gray-700 font-medium">
            Job Guide Budget
          </div>
          <div className="w-3/5 py-2.5 px-3 bg-white border border-gray-300 rounded-lg flex items-center gap-10">
            <div className="flex items-center justify-between gap-3">
              <div>USDC</div>
              <img src="/brand/downArrow.png" />
            </div>
            <div className="w-4/5 flex items-center justify-between gap-3">
              <input
                type="number"
                className="w-full outline-0"
                placeholder="2000"
              />
              <img src="/brand/questionMark.png" />
            </div>
          </div>
        </div>
        <div className="w-1/2 mt-5 flex flex-col gap-2 pb-5 border-b border-gray-200">
          <div className="text-sm text-gray-700 font-medium">
            Contract Start Date
          </div>
          <div className="w-4/5 py-2.5 px-3 bg-white border border-gray-300 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-5">
              <img src="/brand/calendar.png" />
              <input type="date" className="outline-0" />
              <div>-</div>
              <input type="date" className="outline-0" />
            </div>
            <img src="/brand/questionMark.png" />
          </div>
        </div>
        <div className="w-1/2 mt-5 flex flex-col gap-2 pb-5 border-b border-gray-200">
          <div className="text-sm text-gray-700 font-medium">
            Candidate Type
          </div>
          <div className="w-4/5 py-2.5 px-3 bg-white border border-gray-300 rounded-lg flex items-center justify-between">
            <div>90%</div>
            <img src="/brand/downArrow.png" />
          </div>
        </div>
        <div className="w-1/2 mt-5 flex flex-col gap-2 pb-5 border-b border-gray-200">
          <div className="text-sm text-gray-700 font-medium">Timezone</div>
          <div className="w-4/5 py-2.5 px-3 bg-white border border-gray-300 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/brand/clockIcon.png" />
              <div>
                Pacific Standard Time (PST){" "}
                <span className="ml-5 text-gray-500">UTC−08:00</span>
              </div>
            </div>
            <img src="/brand/downArrow.png" />
          </div>
        </div>
        <div className="w-1/2 mt-5 flex flex-col gap-2 pb-5">
          <div className="self-end flex items-center gap-3">
            <div className="font-medium bg-white text-gray-700 text-center py-2 px-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
              Cancel
            </div>
            <div className="bg-blue-600 font-medium text-white text-center py-2 px-3 rounded-xl cursor-pointer hover:bg-blue-500">
              Submit job
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewJob;
