import React from "react";
import { VscSend } from "react-icons/vsc";
import AppStore from "../assets/footer_image/appstore.png";
import PlayStore from "../assets/footer_image/playstore.png";
import QR from "../assets/footer_image/QRCode.png";
import { Button } from "@material-tailwind/react";
import { BiLogoFacebook } from "react-icons/bi";
import { RxTwitterLogo } from "react-icons/rx";
import { SiInstagram } from "react-icons/si";
import { ImLinkedin2 } from "react-icons/im";
import { LuCopyright } from "react-icons/lu";

const Footer = () => {
  return (
    <div className=" bg-black pt-20">
      <div className="container pb-15">
        <div className="flex justify-between">
          <div>
            <img src="ExclusiveWhite.png" alt="" className="pb-6" />
            <h2 className="font-Poppins font-medium text-[#FAFAFA] text-[20px] py-6">
              Subscribe
            </h2>
            <p className="font-Poppins leading-[24px] text-[#FAFAFA] pb-4">
              Get 10% off your first order
            </p>
            <div className="flex justify-center items-center relative border-[1px] border-[#FAFAFA] rounded-[4px] w-[217px] pr-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="font-Poppins leading-[24px] text-[#FAFAFA] w-full px-4 py-3 outline-none"
              />
              <span>
                {" "}
                <VscSend className="w-6 h-6 text-[#FAFAFA]" />
              </span>
            </div>
          </div>
          <div>
            <h3 className="font-Poppins font-medium text-[#FAFAFA] text-[20px] pb-6">
              Support
            </h3>
            <p className="font-Poppins leading-[24px] text-[#FAFAFA] py-4">
              111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
            </p>
            <p className="font-Poppins leading-[24px] text-[#FAFAFA] py-4">
              exclusive@gmail.com
            </p>
            <p className="font-Poppins leading-[24px] text-[#FAFAFA] py-4">
              +88015-88888-9999
            </p>
          </div>
          <div>
            <h3 className="font-Poppins font-medium text-[#FAFAFA] text-[20px] pb-6">
              Account
            </h3>

            <p className="font-Poppins leading-[24px] text-[#FAFAFA] py-4">
              My Account
            </p>
            <p className="font-Poppins leading-[24px] text-[#FAFAFA] py-4">
              Login / Register
            </p>
            <p className="font-Poppins leading-[24px] text-[#FAFAFA] py-4">
              Cart
            </p>
            <p className="font-Poppins leading-[24px] text-[#FAFAFA] py-4">
              Wishlist
            </p>
            <p className="font-Poppins leading-[24px] text-[#FAFAFA] py-4">
              Shop
            </p>
          </div>
          <div>
            <h3 className="font-Poppins font-medium text-[#FAFAFA] text-[20px] pb-6">
              Quick Link
            </h3>

            <p className="font-Poppins leading-[24px] text-[#FAFAFA] py-4">
              Privacy Policy
            </p>
            <p className="font-Poppins leading-[24px] text-[#FAFAFA] py-4">
              Terms Of Use
            </p>
            <p className="font-Poppins leading-[24px] text-[#FAFAFA] py-4">
              FAQ
            </p>
            <p className="font-Poppins leading-[24px] text-[#FAFAFA] py-4">
              Contact
            </p>
          </div>
          <div>
            <h3 className="font-Poppins font-medium text-[#FAFAFA] text-[20px] pb-6">
              Quick Link
            </h3>
            <p className="font-Poppins leading-[18px] text-[#FAFAFA]/[70%] py-4 text-[12px] font-medium">
              Save $3 with App New User Only
            </p>
            <div className=" w-[198px] h-[84px] flex justify-between items-center wf">
              <div className="bg-blue-300 w-20 h-20">
                <img
                  src={QR}
                  alt=""
                  className="border-[1px] border-black/[30%]"
                />
              </div>
              <div className="w-[110px] flex items-center flex-col gap-3">
                <Button className="p-0 cursor-pointer">
                  <img src={AppStore} alt="" />
                </Button>
                <Button className="p-0 cursor-pointer">
                  <img src={PlayStore} alt="" className="" />
                </Button>
              </div>
            </div>
            <ul className="flex items-center gap-6 mt-6">
              <li>
                <BiLogoFacebook className="w-6 h-6 text-white cursor-pointer" />
              </li>
              <li>
                <RxTwitterLogo className="w-6 h-6 text-white cursor-pointer" />
              </li>
              <li>
                <SiInstagram className="w-6 h-6 text-white cursor-pointer" />
              </li>
              <li>
                <ImLinkedin2 className="w-6 h-6 text-white cursor-pointer" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full border-t-[1px] border-white/[50%]  text-white/[30%] flex items-center justify-center py-6 gap-1">
        <LuCopyright />
        Copyright Rimel 2022. All right reserved
      </div>
    </div>
  );
};

export default Footer;
