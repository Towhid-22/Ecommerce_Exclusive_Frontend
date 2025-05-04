import React from "react";
import DogFood from "../assets/explore_products/dog_food.png";
import Camera from "../assets/explore_products/camera.png";
import Curology from "../assets/explore_products/curology.png";
import Laptop from "../assets/explore_products/laptop.png";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import { GoHeart } from "react-icons/go";
import { PiEye } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { Button } from "@material-tailwind/react";

const ExploreProducts = () => {
  return (
    <div className="mt-[71px]">
      <div className="container">
        <div>
          <h3 className="pl-8 relative font-Poppins text-salesBasic font-semibold text-base leading-5 after:content[''] after:bg-salesBasic after:w-5 after:h-10 after:absolute after:top-[-9px] after:left-0 after:rounded-[4px]">
            Our Products
          </h3>
          <div className="flex justify-between items-center">
            <div className="mt-6 flex gap-[87px]">
              <h2 className="font-Inter text-4xl leading-12 tracking-[0.64px] font-semibold">
                Explore Our Products
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
        <div className="flex justify-between">
          {/* grid grid-cols-4 */}
          <div>
            <div className="relative bg-[#f5f5f5] rounded-[4px] p-[12px] w-[250px] group mt-10">
              <div className="px-7 my-[14px]">
                <img src={DogFood} alt="Gamepad" className="" />
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
              Breed Dry Dog Food
            </p>
            <div className="flex items-center gap-2">
              <p className="text-salesBasic font-Poppins text-base leading-6 font-medium mt-[8px]">
                $100
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
                  <FaStar className="w-5 h-5 text-black/[25%]" />
                </li>
                <li>
                  <FaStar className="w-5 h-5 text-black/[25%]" />
                </li>
                <li className="font-Poppins text-[12px] leading-[21px] font-semibold text-black/[50%] ml-[8px]">
                  (35)
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="relative bg-[#f5f5f5] rounded-[4px] p-[12px] w-[250px] group mt-10">
              <div className="px-7 my-[14px]">
                <img src={Camera} alt="Gamepad" />
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
              CANON EOS DSLR Camera
            </p>
            <div className="flex items-center gap-2">
              <p className="text-salesBasic font-Poppins text-base leading-6 font-medium mt-[8px]">
                $360
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
                  (95)
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="relative bg-[#f5f5f5] rounded-[4px] p-[12px] w-[250px] group mt-10">
              <div className="px-7 my-[14px]">
                <img src={Laptop} alt="Gamepad" className="" />
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
              ASUS FHD Gaming Laptop
            </p>
            <div className="flex items-center gap-2">
              <p className="text-salesBasic font-Poppins text-base leading-6 font-medium mt-[8px]">
                $700
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
                  (325)
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="relative bg-[#f5f5f5] rounded-[4px] p-[12px] w-[250px] group mt-10">
              <div className="px-7 my-[14px]">
                <img src={DogFood} alt="Gamepad" className="" />
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
              Curology Product Set
            </p>
            <div className="flex items-center gap-2">
              <p className="text-salesBasic font-Poppins text-base leading-6 font-medium mt-[8px]">
                $500
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
                  (145)
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="relative bg-[#f5f5f5] rounded-[4px] p-[12px] w-[250px] group mt-10">
              <div className="px-7 my-[14px]">
                <img src={DogFood} alt="Gamepad" className="" />
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
              Breed Dry Dog Food
            </p>
            <div className="flex items-center gap-2">
              <p className="text-salesBasic font-Poppins text-base leading-6 font-medium mt-[8px]">
                $100
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
                  <FaStar className="w-5 h-5 text-black/[25%]" />
                </li>
                <li>
                  <FaStar className="w-5 h-5 text-black/[25%]" />
                </li>
                <li className="font-Poppins text-[12px] leading-[21px] font-semibold text-black/[50%] ml-[8px]">
                  (35)
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="relative bg-[#f5f5f5] rounded-[4px] p-[12px] w-[250px] group mt-10">
              <div className="px-7 my-[14px]">
                <img src={Camera} alt="Gamepad" />
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
              CANON EOS DSLR Camera
            </p>
            <div className="flex items-center gap-2">
              <p className="text-salesBasic font-Poppins text-base leading-6 font-medium mt-[8px]">
                $360
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
                  (95)
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="relative bg-[#f5f5f5] rounded-[4px] p-[12px] w-[250px] group mt-10">
              <div className="px-7 my-[14px]">
                <img src={Laptop} alt="Gamepad" className="" />
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
              ASUS FHD Gaming Laptop
            </p>
            <div className="flex items-center gap-2">
              <p className="text-salesBasic font-Poppins text-base leading-6 font-medium mt-[8px]">
                $700
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
                  (325)
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="relative bg-[#f5f5f5] rounded-[4px] p-[12px] w-[250px] group mt-10">
              <div className="px-7 my-[14px]">
                <img src={DogFood} alt="Gamepad" className="" />
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
              Curology Product Set
            </p>
            <div className="flex items-center gap-2">
              <p className="text-salesBasic font-Poppins text-base leading-6 font-medium mt-[8px]">
                $500
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
                  (145)
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-[51px] w-full text-center">
          <Button className="bg-[#DB4444] rounded-[4px] px-12 py-4 font-medium cursor-pointer">
            View All Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExploreProducts;
