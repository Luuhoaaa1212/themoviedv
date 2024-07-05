"use client";
import { useState } from "react";
import CardTrailer from "./CardTrailer";

const TrailerSection = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggleToday = () => {
    if (toggle) setToggle(false);
  };

  const handleToggleWeek = () => {
    if (!toggle) setToggle(true);
  };

  return (
    <div className="w-full min-h-[360px] mt-4">
      <div className="size-full flex flex-col pt-5 bg-[url('/banner/banner-1.jpg')] bg-no-repeat bg-center">
        <div className="flex items-center pl-12 gap-4 pt-4">
          <h1 className="text-white font-bold text-2xl">Latest Trailers</h1>
          <div
            className={`relative w-48 h-8 flex items-center rounded-[30px] btn-group-secondary-custome`}
          >
            <span
              onClick={handleToggleToday}
              className={`block cursor-pointer w-2/5 left-0 z-10 bottom-0 top-0 absolute transition-all text-white duration-200 ease-linear text-center translate-y-[6%] rounded-[30px] ${
                !toggle && "text-custom-secondary-active"
              }`}
            >
              Popular
            </span>
            <span
              onClick={handleToggleWeek}
              className={`block cursor-pointer w-3/5 z-30 left-[40%] absolute right-0 top-0 bottom-0 text-white transition-all duration-200 ease-linear translate-y-[6%] text-center rounded-[30px] ${
                toggle && "text-custom-secondary-active"
              }`}
            >
              In Thearters
            </span>
            <span
              className={`absolute inset-0 btn-custom-active-secondary rounded-[30px] transition-all duration-150 ease-linear ${
                toggle ? "w-3/5 left-[40%]" : "w-2/5 left-0"
              }`}
            ></span>
          </div>
        </div>

        <div className="scrollbar scrollbar-thin pl-12 mt-5 h-full flex-1 grid gap-5 grid-flow-col overflow-x-scroll">
          <CardTrailer />
          <CardTrailer />
          <CardTrailer />
          <CardTrailer />
          <CardTrailer />
          <CardTrailer />
        </div>
      </div>
    </div>
  );
};

export default TrailerSection;
