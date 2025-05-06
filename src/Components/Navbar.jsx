import React, { useState } from "react";
import { FiSearch, FiUser } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiShoppingCart2Line } from "react-icons/ri";
import AccountPopup from "./AccountPopup";

const Navbar = () => {
  const [accountPopup, setAccountPopup] = useState(false);

  return (
    <div className="border-b-[1px] border-black/[30%]">
      <div className="bg-black text-header text-center py-[15px]">
        <div className="container flex items-center justify-end">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span className="ml-[8px] font-Poppins font-semibold leading-6 hover:underline">
              ShopNow
            </span>
          </p>
          <p className="ml-[231px] flex items-center">
            English
            <MdKeyboardArrowDown className="w-8 h-8 ml-[5px]" />
          </p>
        </div>
      </div>
      <div className="container flex items-center justify-between mt-10 mb-4">
        <img src="Exclusive.png" alt="" />
        <ul className="flex items-center">
          <li className="text-base text-black font-Poppins leading-6 mr-12 hover:underline">
            Home
          </li>
          <li className="text-base text-black font-Poppins leading-6 mr-12 hover:underline">
            Contact
          </li>
          <li className="text-base text-black font-Poppins leading-6 mr-12 hover:underline">
            Contact
          </li>
          <li className="text-base text-black font-Poppins leading-6 hover:underline">
            Sign Up
          </li>
        </ul>
        <div className="flex items-center">
          <div className="relative mr-6">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="font-Poppins leading-[18px] pl-5 rounded text-[12px] text-black/[50%] placeholder:text-black/[50%] p-2 bg-searchBg w-[243px] outline-none"
            />
            <FiSearch className="absolute top-[6px] right-[12px] w-6 h-6 " />
          </div>
          <ul className="flex">
            <li>
              <GoHeart className="w-8 h-8 ml-4" />
            </li>
            <li>
              <RiShoppingCart2Line className="w-8 h-8 ml-4" />
            </li>
            <li
              onClick={() => setAccountPopup(!accountPopup)}
              className="relative ml-4 hover:w-8 hover:h-8 group flex justify-center items-center hover:rounded-full hover:border-[1px] border-[#DB4444] hover:bg-[#DB4444] hover:text-white"
            >
              <FiUser className="group-hover:w-4 group-hover:h-4 h-8 w-8 " />
              {accountPopup && <AccountPopup />}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
