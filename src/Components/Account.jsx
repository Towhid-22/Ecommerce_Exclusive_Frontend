import React from "react";
import { BiLogOut } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { LuStar } from "react-icons/lu";
import { PiShoppingBagOpenDuotone } from "react-icons/pi";

const Account = () => {
  return (
    <div className="absolute right-0.5 top-12.5 bg-black/[70%] py-[18px] w-[270px] text-[#fafafa] text-[14px] font-Poppins leading-[21px] font-normal rounded-[4px]">
      <ul>
        <li className="flex items-center gap-4 mb-[13px] cursor-pointer">
          <FiUser className="w-6 h-6 ml-4" />{" "}
          Manage My Account
        </li>
        <li className="flex items-center gap-4 mb-[13px] cursor-pointer">
          <PiShoppingBagOpenDuotone className="w-6 h-6 ml-4" /> My Order
        </li>
        <li className="flex items-center gap-4 mb-[13px] cursor-pointer">
          <IoCloseCircleOutline className="w-6 h-6 ml-4" /> My Cancellations
        </li>
        <li className="flex items-center gap-4 mb-[13px] cursor-pointer">
          <LuStar className="w-6 h-6 ml-4" /> My Reviews
        </li>
        <li className="flex items-center gap-4 mb-[13px] cursor-pointer">
          <BiLogOut className="w-6 h-6 ml-4" /> Logout
        </li>
      </ul>
    </div>
  );
};

export default Account;
