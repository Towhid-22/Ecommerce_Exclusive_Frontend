import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <div>
      <div className="bg-black text-header text-center py-[15px]">
        <div className="container flex items-center justify-end">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span className="ml-[8px] font-Poppins font-semibold leading-6">
              ShopNow
            </span>
          </p>
          <p className="ml-[231px] flex items-center">
            English
            <MdKeyboardArrowDown className="w-8 h-8 ml-[5px]" />
          </p>
        </div>
      </div>
      <div className="container"></div>
    </div>
  );
};

export default Navbar;
