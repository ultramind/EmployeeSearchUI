import React from "react";
import { BiTimeFive } from "react-icons/bi";

import Data from "../../contants/Data";

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(({ id, title, time, location, desc, comapny, image }) => {
          return (
            <div
              className="group group/item sinleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg "
              key={id}
            >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive /> {time}
                </span>
              </span>
              <h6 className="text-[#cc] ">{location}</h6>
              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white ">
                {desc}
              </p>
              <div className="company flex items-center gap-2 ">
                <img
                  src={image}
                  alt="Company logo"
                  className="w-[10%] rounded-full"
                />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {comapny}
                </span>
              </div>
              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white ">
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
