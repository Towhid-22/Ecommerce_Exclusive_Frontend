import React from "react";
import Navbar from "../Components/Navbar";
import AboutImg from "../assets/about_image/About.png";
import Tom from "../assets/about_image/Tom.png";
import Emma from "../assets/about_image/emma.png";
import Smith from "../assets/about_image/smith.png";
import { CiShop, CiTwitter } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { FaSackDollar } from "react-icons/fa6";
import { IoGiftOutline } from "react-icons/io5";
import { RxInstagramLogo } from "react-icons/rx";
import { RiLinkedinLine } from "react-icons/ri";
import Customer from "../assets/service_image/customer-service.png";
import Delivery from "../assets/service_image/delivery.png";
import Secure from "../assets/service_image/secure.png";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-20">
        <div className="flex text-[14px] leading-[21px] font-normal font-Poppins text-black/[50%] gap-3">
          <p>Home</p>
          <p>/</p>
          <p className="text-black">About</p>
        </div>
        <div className="flex justify-between items-center mt-11 gap-[75px]">
          <div>
            <h1 className="font-Inter font-semibold text-[54px] tracking-[6%] leading-[64px]">
              Our Story
            </h1>
            <div className="w-[525px]">
              <p className="font-Poppins leading-[26px] mt-10">
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.
              </p>
              <p className="font-Poppins leading-[26px] mt-6">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
          </div>
          <div>
            <img src={AboutImg} alt="About" className="" />
          </div>
        </div>
        <div className="my-[140px]">
          <div className="flex justify-between items-center gap-[30px]">
            <div className="flex items-center justify-center rounded-[4px] w-[270px] h-[230px] border-[1px] border-black/[30%] group hover:bg-[#DB4444] transition-all duration-300">
              <div className=" flex flex-col items-center justify-center">
                <div className="w-20 h-20 mb-6 bg-black/[30%] group-hover:bg-white/[30%] rounded-full flex items-center justify-center transition-all duration-600">
                  <div className="w-[58px] h-[58px] bg-black group-hover:bg-white rounded-full flex items-center justify-center ">
                    <CiShop className="w-10 h-10 text-white group-hover:text-black" />
                  </div>
                </div>
                <h2 className="font-Inter font-bold text-[32px] group-hover:text-white leading-8 tracking-[4%] mb-3">
                  10.5k
                </h2>
                <p className="font-Poppins leading-6 group-hover:text-white">
                  Sallers active our site
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-[4px] w-[270px] h-[230px] border-[1px] border-black/[30%] group hover:bg-[#DB4444] transition-all duration-300">
              <div className=" flex flex-col items-center justify-center">
                <div className="w-20 h-20 mb-6 bg-black/[30%] group-hover:bg-white/[30%] rounded-full flex items-center justify-center transition-all duration-600">
                  <div className="w-[58px] h-[58px] bg-black group-hover:bg-white rounded-full flex items-center justify-center ">
                    <HiOutlineCurrencyDollar className="w-10 h-10 text-white group-hover:text-black" />
                  </div>
                </div>
                <h2 className="font-Inter font-bold text-[32px] group-hover:text-white leading-8 tracking-[4%] mb-3">
                  33k
                </h2>
                <p className="font-Poppins leading-6 group-hover:text-white">
                  Mopnthly Produduct Sale
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-[4px] w-[270px] h-[230px] border-[1px] border-black/[30%] group hover:bg-[#DB4444] transition-all duration-300">
              <div className=" flex flex-col items-center justify-center">
                <div className="w-20 h-20 mb-6 bg-black/[30%] group-hover:bg-white/[30%] rounded-full flex items-center justify-center transition-all duration-600">
                  <div className="w-[58px] h-[58px] bg-black group-hover:bg-white rounded-full flex items-center justify-center ">
                    <IoGiftOutline className="w-10 h-10 text-white group-hover:text-black" />
                  </div>
                </div>
                <h2 className="font-Inter font-bold text-[32px] group-hover:text-white leading-8 tracking-[4%] mb-3">
                  45.5k
                </h2>
                <p className="font-Poppins leading-6 group-hover:text-white">
                  Customer active in our site
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-[4px] w-[270px] h-[230px] border-[1px] border-black/[30%] group hover:bg-[#DB4444] transition-all duration-300">
              <div className=" flex flex-col items-center justify-center">
                <div className="w-20 h-20 mb-6 bg-black/[30%] group-hover:bg-white/[30%] rounded-full flex items-center justify-center transition-all duration-600">
                  <div className="w-[58px] h-[58px] bg-black group-hover:bg-white rounded-full flex items-center justify-center ">
                    <FaSackDollar className="w-10 h-10 text-white group-hover:text-black" />
                  </div>
                </div>
                <h2 className="font-Inter font-bold text-[32px] group-hover:text-white leading-8 tracking-[4%] mb-3">
                  25k
                </h2>
                <p className="font-Poppins leading-6 group-hover:text-white">
                  Anual gross sale in our site
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-[150px]">
          <div>
            <div className="bg-[#F5F5F5] flex justify-center rounded-[4px]">
              <img src={Tom} alt="tom cruise " />
            </div>
            <div className="mt-8">
              <h2 className="font-Inter font-medium text-[32px] leading-[30px] tracking-[4%] mb-2">
                Tom Cruise
              </h2>
              <p className="font-Poppins leading-6 mb-4">Founder & Chairman</p>
              <ul className="flex gap-4 items-center">
                <li className="cursor-pointer">
                  <CiTwitter className="w-6 h-6" />
                </li>
                <li className="cursor-pointer">
                  <RxInstagramLogo className="w-6 h-6" />
                </li>
                <li className="cursor-pointer">
                  <RiLinkedinLine className="w-6 h-6" />
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="bg-[#F5F5F5] flex  justify-center rounded-[4px]">
              <img src={Emma} alt="tom cruise " />
            </div>
            <div className="mt-8">
              <h2 className="font-Inter font-medium text-[32px] leading-[30px] tracking-[4%] mb-2">
                Emma Watson
              </h2>
              <p className="font-Poppins leading-6 mb-4">Managing Director</p>
              <ul className="flex gap-4 items-center">
                <li className="cursor-pointer">
                  <CiTwitter className="w-6 h-6" />
                </li>
                <li className="cursor-pointer">
                  <RxInstagramLogo className="w-6 h-6" />
                </li>
                <li className="cursor-pointer">
                  <RiLinkedinLine className="w-6 h-6" />
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="bg-[#F5F5F5] flex  justify-center rounded-[4px]">
              <img src={Smith} alt="tom cruise " />
            </div>
            <div className="mt-8">
              <h2 className="font-Inter font-medium text-[32px] leading-[30px] tracking-[4%] mb-2">
                Will Smith
              </h2>
              <p className="font-Poppins leading-6 mb-4">Product Designer</p>
              <ul className="flex gap-4 items-center">
                <li className="cursor-pointer">
                  <CiTwitter className="w-6 h-6" />
                </li>
                <li className="cursor-pointer">
                  <RxInstagramLogo className="w-6 h-6" />
                </li>
                <li className="cursor-pointer">
                  <RiLinkedinLine className="w-6 h-6" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="my-[140px]">
        <div className="container relative">
          <div className="flex justify-between items-center px-[114px]">
            <div className="flex justify-center items-center flex-col">
              <div className="w-20 h-20 bg-[#363738]/[30%]  flex items-center justify-center rounded-full text-center">
                <div className="bg-black rounded-full w-[58px] h-[58px] flex items-center justify-center">
                  <img src={Delivery} alt="" className="w-10 h-10" />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <h3 className="font-Poppins font-semibold leading-[20px] text-[20px] mt-6 mb-2">
                  FREE AND FAST DELIVERY
                </h3>
                <p className="font-Poppins font-normal leading-[21px] text-[14px]">
                  Free delivery for all orders over $140
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="w-20 h-20 bg-[#363738]/[30%]  flex items-center justify-center rounded-full text-center">
                <div className="bg-black rounded-full w-[58px] h-[58px] flex items-center justify-center">
                  <img src={Customer} alt="" className="w-10 h-10" />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <h3 className="font-Poppins font-semibold leading-[20px] text-[20px] mt-6 mb-2">
                  24/7 CUSTOMER SERVICE
                </h3>
                <p className="font-Poppins font-normal leading-[21px] text-[14px]">
                  Friendly 24/7 customer support
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="w-20 h-20 bg-[#363738]/[30%]  flex items-center justify-center rounded-full text-center">
                <div className="bg-black rounded-full w-[58px] h-[58px] flex items-center justify-center">
                  <img src={Secure} alt="" className="w-10 h-10" />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <h3 className="font-Poppins font-semibold leading-[20px] text-[20px] mt-6 mb-2">
                  MONEY BACK GUARANTEE
                </h3>
                <p className="font-Poppins font-normal leading-[21px] text-[14px]">
                  We reurn money within 30 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
