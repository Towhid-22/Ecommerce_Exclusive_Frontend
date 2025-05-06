import React from "react";
import Navbar from "../Components/Navbar";
import { Button } from "@material-tailwind/react";
import Footer from "../Components/Footer";

const MyAccount = () => {
  return (
    <div>
      <Navbar />
      <div className="container font-Poppins mb-[140px]">
        <div className="mt-20 flex justify-between items-center">
          <div className="flex text-[14px] leading-[21px] font-normal font-Poppins text-black/[50%] gap-3">
            <p>Home</p>
            <p>/</p>
            <p className="text-black">My Account</p>
          </div>
          <h3 className="text-black text-[14px] leading-[21px]">
            Welcome! <span className="text-[#DB4444]">Md Rimel</span>
          </h3>
        </div>
        <div className="flex justify-between mt-20">
          <div>
            <div>
              <h3 className="mb-4 font-semibold">Manage My Account</h3>
              <div className="ml-[35px]">
                <p className="text-black/[50%] leading-6 hover:text-[#DB4444] transition-all duration-300 mb-2 cursor-pointer">
                  My Profile
                </p>
                <p className="text-black/[50%] leading-6 hover:text-[#DB4444] transition-all duration-300 mb-2 cursor-pointer">
                  Address Book
                </p>
                <p className="text-black/[50%] leading-6 hover:text-[#DB4444] transition-all duration-300 mb-6 cursor-pointer">
                  My Payment Options
                </p>
              </div>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">My Orders</h3>
              <div className="ml-[35px]">
                <p className="text-black/[50%] leading-6 hover:text-[#DB4444] transition-all duration-300 mb-2 cursor-pointer">
                  My Returns
                </p>
                <p className="text-black/[50%] leading-6 hover:text-[#DB4444] transition-all duration-300 mb-6 cursor-pointer">
                  My Cancellations
                </p>
              </div>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">My WishList</h3>
            </div>
          </div>
          <div className="shadow-[0px_2px_5px_0.01px_rgba(0,0,0,0.2)] py-10 px-20">
            <h2 className="text-xl font-semibold leading-7 text-[#DB4444]">
              Edit Your Profile
            </h2>
            <div className="mt-4">
              <div className="flex gap-[50px] mt-6">
                <div>
                  <label htmlFor="firstName" className="leading-6 pb-2">
                    First Name
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    className="w-[330px] bg-[#F5F5F5] py-[13px] pl-4 rounded-[4px] outline-none mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="leading-6 pb-2">
                    Last Name
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    className="w-[330px] bg-[#F5F5F5] py-[13px] pl-4 rounded-[4px] outline-none mt-2"
                  />
                </div>
              </div>
              <div className="flex gap-[50px] mt-6">
                <div>
                  <label htmlFor="email" className="leading-6 pb-2">
                    Email
                  </label>{" "}
                  <br />
                  <input
                    type="email"
                    id="email"
                    placeholder="example@gmail.com"
                    className="w-[330px] bg-[#F5F5F5] py-[13px] pl-4 rounded-[4px] outline-none mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="leading-6 pb-2">
                    Address
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    id="address"
                    placeholder="Enter your address"
                    className="w-[330px] bg-[#F5F5F5] py-[13px] pl-4 rounded-[4px] outline-none mt-2"
                  />
                </div>
              </div>
              <div className="mt-6">
                <div>
                  <label htmlFor="changepasword" className="leading-6 pb-2">
                    Change Password
                  </label>{" "}
                  <br />
                  <input
                    type="password"
                    id="changepasword"
                    placeholder="Current Password"
                    className="w-full bg-[#F5F5F5] py-[13px] pl-4 rounded-[4px] outline-none mt-2 mb-4"
                  />
                  <input
                    type="password"
                    placeholder="New Passwod"
                    className="w-full bg-[#F5F5F5] py-[13px] pl-4 rounded-[4px] outline-none mt-2 mb-4"
                  />
                  <input
                    type="password"
                    placeholder="Confirm New Passwod"
                    className="w-full bg-[#F5F5F5] py-[13px] pl-4 rounded-[4px] outline-none mt-2 mb-4"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-8 mt-10 items-center">
              <h2 className="leading-6 cursor-pointer">Cancel</h2>
              <Button className="font-medium text-[#FAFAFA] py-4 px-12 bg-[#DB4444] rounded-[4px] cursor-pointer">
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyAccount;
