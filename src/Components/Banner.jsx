import React from "react";
import { FaApple } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { RiArrowRightSLine } from "react-icons/ri";

const Banner = () => {
  return (
    <div>
      <div className="container">
        <div className="flex">
          <ul className="w-[233px] font-Poppins border-r-[1px] border-black/[30%] pr-4">
            <li className="flex items-center justify-between text-base leading-6 pt-10">
              Woman’s Fashion <RiArrowRightSLine className="w-6 h-6" />
            </li>
            <li className="flex items-center justify-between text-base leading-6 mt-4">
              Men’s Fashion <RiArrowRightSLine className="w-6 h-6" />
            </li>
            <li className="flex items-center justify-between text-base leading-6 mt-4">
              Electronics
            </li>
            <li className="flex items-center justify-between text-base leading-6 mt-4">
              Home & Lifestyle
            </li>
            <li className="flex items-center justify-between text-base leading-6 mt-4">
              Medicine
            </li>
            <li className="flex items-center justify-between text-base leading-6 mt-4">
              Sports & Outdoor
            </li>
            <li className="flex items-center justify-between text-base leading-6 mt-4">
              Baby’s & Toys
            </li>
            <li className="flex items-center justify-between text-base leading-6 mt-4">
              Groceries & Health & Beauty
            </li>
          </ul>
          <div>
            <div className="bg-black text-white font-Poppins">
              <div>
                <p className="flex items-center">
                  <FaApple className="w-10 h-[49px]" />
                  <span className="text-base leading-6 ml-[14.5px]">
                    iPhone 14 Series
                  </span>
                </p>
                <h1 className="text-5xl mt-5">
                  Up to 10% <br /> off Voucher
                </h1>
                <p className="flex items-center font-medium ">
                  Shop Now
                  <span className="ml-2">
                    <GoArrowRight className="w-6 h-6" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
