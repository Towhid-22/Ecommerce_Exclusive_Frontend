import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { SlScreenSmartphone } from "react-icons/sl";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import { IoWatch, IoWatchOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { GiSmartphone } from "react-icons/gi";
import { PiCamera, PiHeadphonesThin } from "react-icons/pi";
import { LuHeadphones } from "react-icons/lu";
import { TbDeviceGamepad } from "react-icons/tb";

const Categories = () => {
  return (
    <div>
      <div className="container">
        <div className="mb-15">
          <h3 className="pl-8 relative font-Poppins text-salesBasic font-semibold text-base leading-5 after:content[''] after:bg-salesBasic after:w-5 after:h-10 after:absolute after:top-[-9px] after:left-0 after:rounded-[4px]">
            Categories
          </h3>
          <div className="flex justify-between items-center">
            <div className="mt-6 flex gap-[87px]">
              <h2 className="font-Inter text-4xl leading-12 tracking-[0.64px] font-semibold">
                Browse By Category
              </h2>
            </div>
            <ul className="flex gap-2">
              <li className="w-[46px] h-[46px] bg-searchBg rounded-full flex items-center justify-center cursor-pointer">
                <VscArrowLeft className="w-6 h-6" />
              </li>
              <li className="w-[46px] h-[46px] bg-searchBg rounded-full flex items-center justify-center cursor-pointer">
                <VscArrowRight className="w-6 h-6" />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="border-[1px] border-black/[30%] w-[170px] h-[145px] flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-white cursor-pointer rounded-[4px]">
            <GiSmartphone className="w-14 h-14 mb-4" />
            <p className="font-Poppins">Phones</p>
          </div>
          <div className="border-[1px] border-black/[30%] w-[170px] h-[145px] flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-white cursor-pointer rounded-[4px]">
            <HiOutlineComputerDesktop className="w-14 h-14 mb-4" />
            <p className="font-Poppins">Computer</p>
          </div>
          <div className="border-[1px] border-black/[30%] w-[170px] h-[145px] flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-white cursor-pointer rounded-[4px]">
            <IoWatchOutline className="w-14 h-14 mb-4" />
            <p className="font-Poppins">SmartWatch</p>
          </div>
          <div className="border-[1px] border-black/[30%] w-[170px] h-[145px] flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-white cursor-pointer rounded-[4px]">
            <PiCamera className="w-14 h-14 mb-4" />
            <p className="font-Poppins">Camera</p>
          </div>
          <div className="border-[1px] border-black/[30%] w-[170px] h-[145px] flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-white cursor-pointer rounded-[4px]">
            <LuHeadphones className="w-14 h-14 mb-4" />
            <p className="font-Poppins">Headphone</p>
          </div>
          <div className="border-[1px] border-black/[30%] w-[170px] h-[145px] flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-white cursor-pointer rounded-[4px]">
            <TbDeviceGamepad className="w-14 h-14 mb-4" />
            <p className="font-Poppins">Gaming</p>
          </div>
        </div>
        <div className="bg-black/[25%] w-full h-[0.5px] mt-[70px] mb-15"></div>
      </div>
    </div>
  );
};

export default Categories;
