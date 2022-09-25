import { useState } from "react";
import { landingAvatars, userJobsFilter } from "../lib/constants";
import { jobProposal, jobsCards } from "../lib/constants/fakeJobProposal";

const JobDetail = () => {
  const [filterSel, setFilterSel] = useState(0);

  return (
    <div className="bg-gray-50">
      <img src="/brand/jobs/jobTop.png" className="w-full h-60 object-cover" />
      <div className="mx-28 2xl:mx-52 py-6 flex items-center justify-between border-b border-gray-200">
        <div>
          <div className="font-semibold text-gray-900 text-2xl">
            UX / UI Designer for Mobile App
          </div>
          <div className="text-gray-500">
            <span className="text-blue-700 font-medium cursor-pointer">
              Pre Pix
            </span>{" "}
            - $100k+ total spent - 383 jobs posted
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="font-medium bg-white text-gray-700 text-center py-2 px-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 flex items-center gap-2">
            <img src="/brand/favorite.png" />
            <div>Save Job</div>
          </div>
          <div className="bg-blue-600 font-medium text-white text-center py-2 px-3 rounded-xl cursor-pointer hover:bg-blue-500">
            Submit proposal
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between py-7 mx-28 2xl:mx-52">
        <div className="w-3/5 2xl:w-2/3">
          {jobProposal.map((info, i) => (
            <div key={i} className="py-5 border-b border-gray-200">
              <div className="text-lg text-gray-900 font-medium">
                {info.title}
              </div>
              <div className="mt-1 text-gray-500">{info.description}</div>
              {info.startDate && (
                <div className="mt-5">
                  <div className="text-lg text-gray-900 font-medium">
                    {info.startDate}
                  </div>
                  <div className="mt-1 text-gray-500">Contract Start Date</div>
                </div>
              )}
              {info.endDate && (
                <div className="mt-5">
                  <div className="text-lg text-gray-900 font-medium">
                    {info.endDate}
                  </div>
                  <div className="mt-1 text-gray-500">Contract End Date</div>
                </div>
              )}
              {info.success && (
                <div>
                  <div className="text-gray-900 font-medium mt-2">
                    <span className="text-gray-500">Job Success Score:</span>{" "}
                    {info.success}
                  </div>
                  <div className="text-gray-900 font-medium mt-4">
                    <span className="text-gray-500">Time Zone:</span>{" "}
                    {info.timeZone}
                  </div>
                </div>
              )}
              {info.proposals && (
                <div>
                  <div className="text-gray-900 font-medium mt-2">
                    <span className="text-gray-500">Proposals:</span>{" "}
                    {info.proposals}
                  </div>
                  <div className="text-gray-900 font-medium mt-4">
                    <span className="text-gray-500">Acceptance:</span>{" "}
                    {info.acceptance}
                  </div>
                </div>
              )}
              {info.read && (
                <div className="text-blue-700 font-medium mt-5">
                  {info.read}
                </div>
              )}
            </div>
          ))}
          <div className="py-12">
            <div className="text-lg text-gray-900 font-medium">
              Pre Pix Job History
            </div>
            <div className="flex items-center gap-5 mt-5">
              {userJobsFilter.map((f, i) => (
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
            <div className="mt-8 grid grid-cols-2 gap-6">
              {jobsCards.map((j, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-xl bg-white"
                >
                  <div className="border-b border-gray-200">
                    <div className="p-6">
                      <div className="text-gray-900 font-medium">{j.title}</div>
                      <div className="text-sm text-gray-500">
                        {j.active ? "Active" : "Inactive"}
                      </div>
                      <div className="text-gray-500">{j.description}</div>
                    </div>
                  </div>
                  <div className="p-4 w-full text-end text-blue-700 font-medium">
                    View Job
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/3 2xl:w-1/4 bg-white border border-gray-200 rounded-xl p-6">
          <div className="text-lg text-gray-900 font-medium">
            About the client
          </div>
          <div className="mt-6 text-sm text-gray-500">
            11% hire rate, 7 open jobs
          </div>
          <div className="mt-2 text-gray-900">383 jobs posted</div>
          <div className="mt-6 text-sm text-gray-500">75 hires, 4 active</div>
          <div className="mt-2 text-gray-900">$100k dollars spent</div>
          <div className="mt-6 text-sm text-gray-500">
            12,244 hours commissioned
          </div>
          <div className="mt-2 text-gray-900">$13.56 avg hourly rate</div>
          <div className="mt-6 text-sm text-gray-500">Hire Me Profile</div>
          <div className="mt-2 text-blue-700 font-medium">Pre Pix</div>
          <div className="mt-6 text-sm text-gray-500">Website</div>
          <div className="mt-2 text-blue-700 font-medium">PrePix.com</div>
          <div className="mt-6 text-sm text-gray-500">Lend Handle</div>
          <div className="mt-2 text-blue-700 font-medium">@PrePix</div>
          <div className="mt-6 text-sm text-gray-500">Telegram</div>
          <div className="mt-2 text-blue-700 font-medium">@PrePix</div>
          <div className="flex items-center gap-4 mt-10">
            <div className="flex">
              {landingAvatars.map((a, i) => (
                <img key={i} src={a} className={`${i !== 0 && "ml-[-14px]"}`} />
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                {landingAvatars.map((a, i) => {
                  if (i <= 3) {
                    return <img key={i} src="/brand/Star.png" />;
                  }
                })}
                <div className="font-semibold">4.0</div>
              </div>
              <div className="text-gray-500 font-medium">
                from 12 freelancers
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
