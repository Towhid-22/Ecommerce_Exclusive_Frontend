import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { SiAdguard } from "react-icons/si";
import { SlEarphonesAlt } from "react-icons/sl";

import Customer from "../assets/service_image/customer-service.png";
import Delivery from "../assets/service_image/delivery.png";
import Secure from "../assets/service_image/secure.png";
import { LuArrowUp } from "react-icons/lu";

{
  /* <FaTruckFast />
        <SlEarphonesAlt />
        <SiAdguard /> */
}

const Services = () => {
  return (
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
        <div className="w-12 h-12 bg-[#F5F5F5] rounded-full flex items-center justify-center cursor-pointer absolute right-[-70px] bottom-[-60px]">
          <LuArrowUp className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Services;
