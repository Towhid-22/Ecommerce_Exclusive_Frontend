import React from "react";
import Navbar from "../Components/Navbar";
import { LuPhone } from "react-icons/lu";
import { GoMail } from "react-icons/go";
import { Button } from "@material-tailwind/react";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container mb-[140px]">
        <div className="flex text-[14px] leading-[21px] font-normal font-Poppins text-black/[50%] gap-3 my-20">
          <p>Home</p>
          <p>/</p>
          <p className="text-black">About</p>
        </div>
        <div className="flex justify-between gap-[30px]">
          <div className="rounded-[4px] shadow-[0px_2px_5px_1px_rgba(0,0,0,0.2)] px-[35px] py-10">
            <div className="font-Poppins">
              <div className=" flex items-center gap-4 mb-6">
                <p className="w-10 h-10 rounded-full bg-[#DB4444] flex items-center justify-center text-white">
                  <LuPhone className="w-5 h-5" />
                </p>
                <h3 className=" font-semibold leading-6">Call To Us</h3>
              </div>
              <p className="mb-4 leading-[21px] text-[14px]">
                We are available 24/7, 7 days a week.
              </p>
              <p className="leading-[21px] text-[14px]">
                Phone: +8801611112222
              </p>
            </div>
            <div className="w-full bg-black h-[1px] my-8"></div>
            <div className="font-Poppins">
              <div className=" flex items-center gap-4 mb-6">
                <p className="w-10 h-10 rounded-full bg-[#DB4444] flex items-center justify-center text-white">
                  <GoMail className="w-5 h-5" />
                </p>
                <h3 className=" font-semibold leading-6">Call To Us</h3>
              </div>
              <p className="mb-4 leading-[21px] text-[14px]">
                Fill out our form and we will contact <br /> you within 24
                hours.
              </p>
              <p className="leading-[21px] text-[14px] mb-4">
                Emails: customer@exclusive.com
              </p>
              <p className="leading-[21px] text-[14px]">
                Emails: support@exclusive.com
              </p>
            </div>
          </div>
          <div className="rounded-[4px] font-Poppins shadow-[0px_2px_5px_1px_rgba(0,0,0,0.2)] py-10 px-8">
            <div className="flex justify-between gap-4">
              <input
                className="w-[235px] py-[13px] pl-4 bg-[#F5F5F5] rounded-[4px] placeholder:text-black/[50%] outline-none leading-6"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="w-[235px] py-[13px] pl-4 bg-[#F5F5F5] rounded-[4px] placeholder:text-black/[50%] outline-none leading-6"
                type="email"
                placeholder="Your Email"
              />
              <input
                className="w-[235px] py-[13px] pl-4 bg-[#F5F5F5] rounded-[4px] placeholder:text-black/[50%] outline-none leading-6"
                type="tel"
                placeholder="Your Phone"
              />
            </div>
            <div className="mt-8">
              <input
                type="text"
                placeholder="Your Message"
                className="w-full pt-[13px] pl-4 pb-[180px] bg-[#F5F5F5] rounded-[4px] placeholder:text-black/[50%] outline-none leading-6"
              />
              <div className="text-right mt-8">
                <Button className="font-Poppins font-medium text-[#FAFAFA] py-4 px-12 bg-[#DB4444] rounded-[4px] cursor-pointer">
                  Send Massage
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
