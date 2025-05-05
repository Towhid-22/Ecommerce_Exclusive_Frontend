import React from "react";
import Navbar from "../Components/Navbar";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { PiEye } from "react-icons/pi";
import { GoHeart } from "react-icons/go";
import Cooler from "../assets/best_sale_product/cooler.png";
import Chair from "../assets/Sales_images/chair.png";
import Monitor from "../assets/Sales_images/Monitor.png";
import Keyboard from "../assets/Sales_images/keyboard.png";
import Footer from "../Components/Footer";

const Products = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="mt-20">
          <div className="flex text-[14px] leading-[21px] font-normal font-Poppins text-black/[50%] gap-3">
            <p>home</p>
            <p>/</p>
            <p>shop</p>
          </div>
          <div className="font-Poppins flex justify-between mt-[50px]">
            <div>
              <h2 className=" font-bold text-xl text-[#262626] mb-[15px]">
                Shop by Category
              </h2>
              <ul className="text-base mb-10">
                <li className="leading-6 mb-4">Woman’s Fashion</li>
                <li className="leading-6 mb-4">Men’s Fashion</li>
                <li className="leading-6 mb-4">Electronics</li>
                <li className="leading-6 mb-4">Home & Lifestyle</li>
                <li className="leading-6 mb-4">Medicine</li>
                <li className="leading-6 mb-4">Sports & Outdoor</li>
                <li className="leading-6 mb-4">Baby’s & Toys</li>
                <li className="leading-6 mb-4">Groceries & Pets</li>
                <li className="leading-6 mb-4">Health & Beauty</li>
              </ul>
              <h2 className=" font-bold text-xl text-[#262626] mb-[15px]">
                Shop by Color
              </h2>
              <ul>
                <li className="flex items-center gap-[10px] mb-[18px]">
                  <p className="w-[11px] h-[11px] bg-black rounded-full"></p>
                  <p>Color 1</p>
                </li>
                <li className="flex items-center gap-[10px] mb-[18px]">
                  <p className="w-[11px] h-[11px] bg-[#ff0000] rounded-full"></p>
                  <p>Color 1</p>
                </li>
                <li className="flex items-center gap-[10px] mb-[18px]">
                  <p className="w-[11px] h-[11px] bg-[#00FF38] rounded-full"></p>
                  <p>Color 1</p>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center justify-end">
                <label htmlFor="show" className="mr-3">
                  Show :
                </label>
                <input
                  type="text"
                  id="show"
                  value={6}
                  className="border-[1px] border-[#D9D9D9] rounded-[5px] text-center w-[97px] outline-none py-0.5"
                />
              </div>
              <div className="grid justify-between gap-[30px] grid-cols-3">
                <div>
                  <div className="relative bg-[#f5f5f5] rounded-[4px] p-[12px] h-[250px] w-[250px] group mt-6">
                    <span className="font-Poppins text-[12px] leading-[18px] text-white bg-salesBasic px-[12px] py-[4px] rounded-[4px]">
                      -40%
                    </span>
                    <div className="px-7 my-[14px]">
                      <img src={Keyboard} alt="Gamepad" className="" />
                    </div>
                    <ul className="absolute top-[12px] right-[12px]">
                      <li className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full mb-[8px]">
                        <GoHeart className="w-6 h-6 text-black" />
                      </li>
                      <li className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full">
                        <PiEye className="w-6 h-6 text-black" />
                      </li>
                    </ul>
                    <div className="bg-black text-white text-center  w-full absolute bottom-0 left-0 rounded-br-[4px] rounded-bl-[4px] hidden group-hover:block transition cursor-pointer ">
                      <p className="py-[9px] font-medium leading-[24px]">
                        Add To Cart
                      </p>
                    </div>
                  </div>
                  <p className="font-Poppins text-base leading-6 font-medium mt-4">
                    HAVIT HV-G92 Gamepad
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
                      (88)
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="relative bg-[#f5f5f5] rounded-[4px] p-[12px] h-[250px] w-[250px] group mt-6">
                    <span className="font-Poppins text-[12px] leading-[18px] text-white bg-salesBasic px-[12px] py-[4px] rounded-[4px]">
                      -40%
                    </span>
                    <div className="px-7 my-[14px]">
                      <img src={Monitor} alt="Gamepad" className="" />
                    </div>
                    <ul className="absolute top-[12px] right-[12px]">
                      <li className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full mb-[8px]">
                        <GoHeart className="w-6 h-6 text-black" />
                      </li>
                      <li className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full">
                        <PiEye className="w-6 h-6 text-black" />
                      </li>
                    </ul>
                    <div className="bg-black text-white text-center  w-full absolute bottom-0 left-0 rounded-br-[4px] rounded-bl-[4px] hidden group-hover:block transition cursor-pointer ">
                      <p className="py-[9px] font-medium leading-[24px]">
                        Add To Cart
                      </p>
                    </div>
                  </div>
                  <p className="font-Poppins text-base leading-6 font-medium mt-4">
                    IPS LCD Gaming Monitor
                  </p>
                  <p className="text-salesBasic font-Poppins text-base leading-6 font-medium mt-[8px]">
                    $370 <del className="ml-[12px] text-black/[50%]">$400</del>
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
                      (99)
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="relative bg-[#f5f5f5] rounded-[4px] p-[12px] h-[250px] w-[250px] group mt-6">
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
                    <div className="bg-black text-white text-center  w-full absolute bottom-0 left-0 rounded-br-[4px] rounded-bl-[4px] hidden group-hover:block transition cursor-pointer ">
                      <p className="py-[9px] font-medium leading-[24px]">
                        Add To Cart
                      </p>
                    </div>
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
                      <FaStar className="w-5 h-5 text-black/[25%]" />
                    </li>
                    <li className="font-Poppins text-[12px] leading-[21px] font-semibold text-black/[50%] ml-[8px]">
                      (65)
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="relative bg-[#f5f5f5] rounded-[4px] p-[12px] h-[250px] w-[250px] group mt-6">
                    <span className="font-Poppins text-[12px] leading-[18px] text-white bg-salesBasic px-[12px] py-[4px] rounded-[4px]">
                      -40%
                    </span>
                    <div className="px-7 my-[14px]">
                      <img src={Keyboard} alt="Gamepad" className="" />
                    </div>
                    <ul className="absolute top-[12px] right-[12px]">
                      <li className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full mb-[8px]">
                        <GoHeart className="w-6 h-6 text-black" />
                      </li>
                      <li className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full">
                        <PiEye className="w-6 h-6 text-black" />
                      </li>
                    </ul>
                    <div className="bg-black text-white text-center  w-full absolute bottom-0 left-0 rounded-br-[4px] rounded-bl-[4px] hidden group-hover:block transition cursor-pointer ">
                      <p className="py-[9px] font-medium leading-[24px]">
                        Add To Cart
                      </p>
                    </div>
                  </div>
                  <p className="font-Poppins text-base leading-6 font-medium mt-4">
                    HAVIT HV-G92 Gamepad
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
                      (88)
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="relative bg-[#f5f5f5] rounded-[4px] p-[12px] h-[250px] w-[250px] group mt-6">
                    <span className="font-Poppins text-[12px] leading-[18px] text-white bg-salesBasic px-[12px] py-[4px] rounded-[4px]">
                      -40%
                    </span>
                    <div className="px-7 my-[14px]">
                      <img src={Monitor} alt="Gamepad" className="" />
                    </div>
                    <ul className="absolute top-[12px] right-[12px]">
                      <li className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full mb-[8px]">
                        <GoHeart className="w-6 h-6 text-black" />
                      </li>
                      <li className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full">
                        <PiEye className="w-6 h-6 text-black" />
                      </li>
                    </ul>
                    <div className="bg-black text-white text-center  w-full absolute bottom-0 left-0 rounded-br-[4px] rounded-bl-[4px] hidden group-hover:block transition cursor-pointer ">
                      <p className="py-[9px] font-medium leading-[24px]">
                        Add To Cart
                      </p>
                    </div>
                  </div>
                  <p className="font-Poppins text-base leading-6 font-medium mt-4">
                    IPS LCD Gaming Monitor
                  </p>
                  <p className="text-salesBasic font-Poppins text-base leading-6 font-medium mt-[8px]">
                    $370 <del className="ml-[12px] text-black/[50%]">$400</del>
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
                      (99)
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="relative bg-[#f5f5f5] rounded-[4px] p-[12px] h-[250px] w-[250px] group mt-6">
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
                    <div className="bg-black text-white text-center  w-full absolute bottom-0 left-0 rounded-br-[4px] rounded-bl-[4px] hidden group-hover:block transition cursor-pointer ">
                      <p className="py-[9px] font-medium leading-[24px]">
                        Add To Cart
                      </p>
                    </div>
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
                      <FaStar className="w-5 h-5 text-black/[25%]" />
                    </li>
                    <li className="font-Poppins text-[12px] leading-[21px] font-semibold text-black/[50%] ml-[8px]">
                      (65)
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="relative bg-[#f5f5f5] rounded-[4px] p-[12px] h-[250px] w-[250px] group mt-6">
                    <span className="font-Poppins text-[12px] leading-[18px] text-white bg-salesBasic px-[12px] py-[4px] rounded-[4px]">
                      -40%
                    </span>
                    <div className="px-7 my-[14px]">
                      <img src={Keyboard} alt="Gamepad" className="" />
                    </div>
                    <ul className="absolute top-[12px] right-[12px]">
                      <li className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full mb-[8px]">
                        <GoHeart className="w-6 h-6 text-black" />
                      </li>
                      <li className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full">
                        <PiEye className="w-6 h-6 text-black" />
                      </li>
                    </ul>
                    <div className="bg-black text-white text-center  w-full absolute bottom-0 left-0 rounded-br-[4px] rounded-bl-[4px] hidden group-hover:block transition cursor-pointer ">
                      <p className="py-[9px] font-medium leading-[24px]">
                        Add To Cart
                      </p>
                    </div>
                  </div>
                  <p className="font-Poppins text-base leading-6 font-medium mt-4">
                    HAVIT HV-G92 Gamepad
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
                      (88)
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="relative bg-[#f5f5f5] rounded-[4px] p-[12px] h-[250px] w-[250px] group mt-6">
                    <span className="font-Poppins text-[12px] leading-[18px] text-white bg-salesBasic px-[12px] py-[4px] rounded-[4px]">
                      -40%
                    </span>
                    <div className="px-7 my-[14px]">
                      <img src={Monitor} alt="Gamepad" className="" />
                    </div>
                    <ul className="absolute top-[12px] right-[12px]">
                      <li className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full mb-[8px]">
                        <GoHeart className="w-6 h-6 text-black" />
                      </li>
                      <li className="bg-white w-[34px] h-[34px] flex items-center justify-center rounded-full">
                        <PiEye className="w-6 h-6 text-black" />
                      </li>
                    </ul>
                    <div className="bg-black text-white text-center  w-full absolute bottom-0 left-0 rounded-br-[4px] rounded-bl-[4px] hidden group-hover:block transition cursor-pointer ">
                      <p className="py-[9px] font-medium leading-[24px]">
                        Add To Cart
                      </p>
                    </div>
                  </div>
                  <p className="font-Poppins text-base leading-6 font-medium mt-4">
                    IPS LCD Gaming Monitor
                  </p>
                  <p className="text-salesBasic font-Poppins text-base leading-6 font-medium mt-[8px]">
                    $370 <del className="ml-[12px] text-black/[50%]">$400</del>
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
                      (99)
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="relative bg-[#f5f5f5] rounded-[4px] p-[12px] h-[250px] w-[250px] group mt-6">
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
                    <div className="bg-black text-white text-center  w-full absolute bottom-0 left-0 rounded-br-[4px] rounded-bl-[4px] hidden group-hover:block transition cursor-pointer ">
                      <p className="py-[9px] font-medium leading-[24px]">
                        Add To Cart
                      </p>
                    </div>
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
                      <FaStar className="w-5 h-5 text-black/[25%]" />
                    </li>
                    <li className="font-Poppins text-[12px] leading-[21px] font-semibold text-black/[50%] ml-[8px]">
                      (65)
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <ul className="flex gap-4 items-center mt-10 mb-25">
                  <li className="bg-black text-white flex items-center justify-center w-12 h-6 cursor-pointer">
                    1
                  </li>
                  <li className="bg-black text-white flex items-center justify-center w-12 h-6 cursor-pointer">
                    2
                  </li>
                  <li className="bg-black text-white flex items-center justify-center w-12 h-6 cursor-pointer">
                    3
                  </li>
                  <li className="bg-black text-white flex items-center justify-center w-12 h-6 cursor-pointer">
                    4
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
