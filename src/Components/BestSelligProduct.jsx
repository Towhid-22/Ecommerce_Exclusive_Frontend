import { Button } from "@material-tailwind/react";
import React from "react";
import Bag from "../assets/best_sale_product/bag.png";
import Bookself from "../assets/best_sale_product/bookself.png";
import Coat from "../assets/best_sale_product/coat.png";
import Cooler from "../assets/best_sale_product/cooler.png";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { PiEye } from "react-icons/pi";
import { GoHeart } from "react-icons/go";

const BestSelligProduct = () => {
  return (
    <div>
      <div className="container">
        <div className="mb-10">
          <h3 className="pl-8 relative font-Poppins text-salesBasic font-semibold text-base leading-5 after:content[''] after:bg-salesBasic after:w-5 after:h-10 after:absolute after:top-[-9px] after:left-0 after:rounded-[4px]">
            This Month
          </h3>
          <div className="flex justify-between items-center">
            <div className="mt-6 flex gap-[87px]">
              <h2 className="font-Inter text-4xl leading-12 tracking-[0.64px] font-semibold">
                Browse By Category
              </h2>
            </div>
            <Button className="bg-[#DB4444] rounded-[4px] px-12 py-4 font-medium cursor-pointer">
              View All
            </Button>
          </div>
        </div>
        <div className="flex justify-between mb-[140px]">
          <div>
            <div className="relative bg-[#f5f5f5] rounded-[4px] p-[12px] w-[250px] group mt-10">
              <div className="px-7 my-[14px]">
                <img src={Coat} alt="Gamepad" className="" />
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
              The north coat
            </p>
            <p className="text-salesBasic font-Poppins text-base leading-6 font-medium mt-[8px]">
              $260 <del className="ml-[12px] text-black/[50%]">$360</del>
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
                (65)
              </li>
            </ul>
          </div>
          <div>
            <div className="relative bg-[#f5f5f5] rounded-[4px] p-[12px] w-[250px] group mt-10">
              <div className="px-7 my-[14px]">
                <img src={Bag} alt="Gamepad" className="" />
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
              Gucci duffle bag
            </p>
            <p className="text-salesBasic font-Poppins text-base leading-6 font-medium mt-[8px]">
              $960 <del className="ml-[12px] text-black/[50%]">$1160</del>
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
                <FaStar className="w-5 h-5 text-black/[25%]" />
              </li>
              <li className="font-Poppins text-[12px] leading-[21px] font-semibold text-black/[50%] ml-[8px]">
                (65)
              </li>
            </ul>
          </div>
          <div>
            <div className="relative bg-[#f5f5f5] rounded-[4px] p-[12px] w-[250px] group mt-10">
              <div className="px-7 my-[14px]">
                <img src={Cooler} alt="Gamepad" className="" />
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
              RGB liquid CPU Cooler
            </p>
            <p className="text-salesBasic font-Poppins text-base leading-6 font-medium mt-[8px]">
              $160 <del className="ml-[12px] text-black/[50%]">$170</del>
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
                (65)
              </li>
            </ul>
          </div>
          <div>
            <div className="relative bg-[#f5f5f5] rounded-[4px] p-[12px] w-[250px] group mt-10">
              <div className="px-7 my-[14px]">
                <img src={Bookself} alt="Gamepad" className="" />
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
              Small BookSelf
            </p>
            <p className="text-salesBasic font-Poppins text-base leading-6 font-medium mt-[8px]">
              $360 <del className="ml-[12px] text-black/[50%]">$400</del>
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
                <FaStarHalfStroke className="w-5 h-5 text-stars" />
              </li>
              <li className="font-Poppins text-[12px] leading-[21px] font-semibold text-black/[50%] ml-[8px]">
                (65)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSelligProduct;
