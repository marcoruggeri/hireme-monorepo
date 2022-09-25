import Link from "next/link";
import { useState } from "react";
import { jobsBoardFilter } from "../lib/constants";
import { fakeJobs, pagesN } from "../lib/constants/fakeJobs";

const JobsBoard = () => {
  const [filterSel, setFilterSel] = useState(0);
  const [pageSel, setPageSel] = useState(0);

  return (
    <div className="py-24 px-28 2xl:px-52">
      <div className="text-semibold text-blue-600">Jobs Board</div>
      <div className="mt-3 text-semibold text-5xl">
        Build with the best in the world
      </div>
      <div className="mt-6 text-xl text-gray-500">
        Clear scope. Upfront pricing. No suprises.
      </div>
      <Link href="/new-job-form">
        <div className="mt-10 w-36 bg-blue-600 font-medium text-white text-center py-2 rounded-xl cursor-pointer hover:bg-blue-500">
          Add new Job
        </div>
      </Link>
      <div className="mt-24 flex items-center justify-between">
        <div className="flex items-center gap-5">
          {jobsBoardFilter.map((f, i) => (
            <div
              key={i}
              onClick={() => setFilterSel(i)}
              className={`py-2 px-3 text-gray-500 rounded-lg font-medium cursor-pointer hover:bg-blue-50 ${
                filterSel === i && "text-blue-700 bg-blue-50"
              }`}
            >
              {f}
            </div>
          ))}
        </div>
        <div className="w-1/5 py-2 px-3 border border-gray-300 rounded-lg flex items-center justify-between">
          <div className="text-gray-900">Most recent</div>
          <img src="/brand/downArrow.png" />
        </div>
      </div>
      <div className="py-14 grid grid-cols-3 gap-8 gap-y-16 border-b border-gray-100">
        {fakeJobs.map((j, i) => (
          <Link href="/job-page-applicant">
            <div key={i} className="flex flex-col cursor-pointer">
              <img src={j.img} />
              <div className="mt-8 text-sm text-blue-700 font-semibold">
                {j.worker} · {j.date}
              </div>
              <div className="mt-2 text-2xl text-gray-900">{j.name}</div>
              <div className="mt-2 text-gray-500">{j.description}</div>
              <div className="mt-6 flex items-center gap-2">
                {j.tags.map((t, i) => (
                  <div
                    className={`py-0.5 px-2.5 text-sm font-medium ${
                      i === 0
                        ? "text-blue-700 bg-blue-50"
                        : i === 1
                        ? "text-indigo-700 bg-indigo-50"
                        : "text-pink-700 bg-pink-50"
                    } rounded-xl `}
                  >
                    {t.name}
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="pt-6 flex items-center justify-between text-sm text-gray-500 font-medium">
        <div
          onClick={() =>
            setPageSel((p) => {
              if (p - 1 >= 0) {
                return p - 1;
              } else {
                return p;
              }
            })
          }
          className="flex items-center gap-3 cursor-pointer"
        >
          <img src="/brand/pageArrow.png" />
          <div>Previous</div>
        </div>
        <div className="flex items-center">
          {pagesN.map((n, i) => (
            <div
              key={i}
              onClick={() => setPageSel(i)}
              className={`w-10 h-10 flex items-center justify-center cursor-pointer ${
                pageSel === i && "bg-gray-50 text-gray-800 rounded-full"
              }`}
            >
              {n}
            </div>
          ))}
        </div>
        <div
          onClick={() =>
            setPageSel((p) => {
              if (p + 1 <= 6) {
                return p + 1;
              } else {
                return p;
              }
            })
          }
          className="flex items-center gap-3 cursor-pointer"
        >
          <div>Next</div>
          <img src="/brand/pageArrow.png" className="rotate-180" />
        </div>
      </div>
    </div>
  );
};

export default JobsBoard;
