import React from "react";
import Music from "../assets/category_image/music.png";
import { Button } from "@material-tailwind/react";

const MusicExperience = () => {
  return (
    <div>
      <div className="container bg-black py-[69px]">
        <div className="flex justify-between items-center px-14">
          <div>
            <h3 className="text-[#00FF66] leading-[20px] font-semibold font-Poppins text-base">
              Categories
            </h3>
            <h2 className="text-[48px] font-semibold leading-[60px] font-Inter w-[443px] mt-8 text-white">
              Enhance Your Music Experience
            </h2>
            <ul className="font-Poppins mt-8 mb-10 flex gap-6">
              <li className="flex flex-col justify-center items-center w-[62px] h-[62px] bg-white rounded-full">
                <span className="font-semibold text-base leading-5">05</span>
                <span className="font-[400] text-[11px] leading-[18px]">
                  Days
                </span>
              </li>
              <li className="flex flex-col justify-center items-center w-[62px] h-[62px] bg-white rounded-full">
                <span className="font-semibold text-base leading-5">23</span>
                <span className="font-[400] text-[11px] leading-[18px]">
                  Hours
                </span>
              </li>
              <li className="flex flex-col justify-center items-center w-[62px] h-[62px] bg-white rounded-full">
                <span className="font-semibold text-base leading-5">59</span>
                <span className="font-[400] text-[11px] leading-[18px]">
                  Minutes
                </span>
              </li>
              <li className="flex flex-col justify-center items-center w-[62px] h-[62px] bg-white rounded-full">
                <span className="font-semibold text-base leading-5">35</span>
                <span className="font-[400] text-[11px] leading-[18px]">
                  Seconds
                </span>
              </li>
            </ul>
            <Button className="bg-[#00FF66] py-4 px-12 rounded-[4px]">
              Buy Now!
            </Button>
          </div>
          <div>
            <img src={Music} alt="Music Expreience" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicExperience;
