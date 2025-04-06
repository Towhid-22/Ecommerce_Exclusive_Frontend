import React from "react";
import { GoHeart } from "react-icons/go";
import { PiEye } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import Chair from "../assets/Sales_images/chair.png";
import Monitor from "../assets/Sales_images/Monitor.png";
import Keyboard from "../assets/Sales_images/keyboard.png";
import Gamepad from "../assets/Sales_images/gamepad.png";

const Sales = () => {
  return (
    <div className="mt-[140px]">
      <div className="container">
        <div>
          <h3 className="pl-8 relative font-Poppins text-salesBasic font-semibold text-base leading-5 after:content[''] after:bg-salesBasic after:w-5 after:h-10 after:absolute after:top-[-9px] after:left-0 after:rounded-[4px]">
            Today’s
          </h3>
          <div className="mt-6 flex gap-[87px]">
            <h2 className="font-Inter text-4xl leading-12 tracking-[0.64px] font-semibold">
              Flash Sales
            </h2>
            <div className="flex">
              <div>
                <p className="font-Poppins font-medium text-[12px] leading-[18px] text-black">
                  Days
                  <p
                    className="relative font-Inter font-bold text-[32px] leading-[30px] tracking-[0.64px] mt-[4px]
                "
                  >
                    03
                    <span className="ml-[17px] text-[#e07575] mr-[17px]">
                      :
                    </span>
                  </p>
                </p>
              </div>
              <div>
                <p className="font-Poppins font-medium text-[12px] leading-[18px] text-black">
                  Hours
                  <p
                    className="relative font-Inter font-bold text-[32px] leading-[30px] tracking-[0.64px] mt-[4px]
                "
                  >
                    23
                    <span className="ml-[17px] text-[#e07575] mr-[17px]">
                      :
                    </span>
                  </p>
                </p>
              </div>
              <div>
                <p className="font-Poppins font-medium text-[12px] leading-[18px] text-black">
                  Minutes
                  <p
                    className="relative font-Inter font-bold text-[32px] leading-[30px] tracking-[0.64px] mt-[4px]
                "
                  >
                    19
                    <span className="ml-[17px] text-[#e07575] mr-[17px]">
                      :
                    </span>
                  </p>
                </p>
              </div>
              <div>
                <p className="font-Poppins font-medium text-[12px] leading-[18px] text-black">
                  Seconds
                  <p
                    className="relative font-Inter font-bold text-[32px] leading-[30px] tracking-[0.64px] mt-[4px]
                "
                  >
                    56
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative bg-[#f5f5f5] rounded-[4px] p-[12px] w-[250px]">
            <span className="font-Poppins text-[12px] leading-[18px] text-white bg-salesBasic px-[12px] py-[4px] rounded-[4px]">
              -40%
            </span>
            <div className="px-7 my-[14px]">
              <img src={Gamepad} alt="Gamepad" className="" />
            </div>
            <ul className="absolute top-[12px] right-[12px]">
              <li className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full mb-[8px]">
                <GoHeart className="w-6 h-6 text-black" />
              </li>
              <li className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full">
                <PiEye className="w-6 h-6 text-black" />
              </li>
            </ul>
          </div>
          <p className="font-Poppins text-base leading-6 font-medium mt-4">
            HAVIT HV-G92 Gamepad
          </p>
          <p className="text-salesBasic font-Poppins text-base leading-6 font-medium mt-[8px]">
            $120 <del className="ml-[12px] text-black/[50%]">$160</del>
          </p>
          <ul className="mt-[8px] gap-1 flex">
            <li>
              <FaStar className="w-5 h-5 text-stars" />
            </li>
            <li>
              <FaStar className="w-5 h-5 text-stars" />
            </li>
            <li>
              <FaStar className="w-5 h-5 text-stars" />
            </li>
            <li>
              <FaStar className="w-5 h-5 text-stars" />
            </li>
            <li>
              <FaStar className="w-5 h-5 text-stars" />
            </li>
            <li className="font-Poppins text-[12px] leading-[21px] font-semibold text-black/[50%] ml-[8px]">
              (88)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sales;
