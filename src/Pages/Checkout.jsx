import React from "react";
import Navbar from "../Components/Navbar";
import bKash from "../assets/checkout_image/Bkash.png";
import Visa from "../assets/checkout_image/Visa.png";
import Mastercard from "../assets/checkout_image/Mastercard.png";
import Nagad from "../assets/checkout_image/Nagad.png";
import Game from "../assets/checkout_image/Game.png";
import Monitor from "../assets/checkout_image/monitor.png";
import { Button } from "@material-tailwind/react";
import Footer from "../Components/Footer";

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="container">
          <div className="flex justify-between items-center mb-[140px]">
            <div className="mt-20">
              <div>
                <div className="flex text-[14px] leading-[21px] font-normal font-Poppins text-black/[50%] gap-3">
                  <p>Account</p>
                  <p>/</p>
                  <p>My Account</p>
                  <p>/</p>
                  <p>Product</p>
                  <p>/</p>
                  <p>View Cart</p>
                  <p>/</p>
                  <p className="text-black">CheckOut</p>
                </div>
              </div>
              <h1 className="font-Inter font-medium text-4xl leading-[30px] tracking-[4%] mb-12 mt-20">
                Billing Details
              </h1>
              <div className="font-Poppins flex flex-col gap-2 mb-8">
                <label htmlFor="name" className="leading-6 text-black/[40%]">
                  First Name
                  <span className="text-[#DB4444]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  id="name"
                  className="outline-none w-[470px] py-3 px-3 bg-[#F5F5F5] rounded-[4px]"
                />
              </div>
              <div className="font-Poppins flex flex-col gap-2 mb-8">
                <label htmlFor="name" className="leading-6 text-black/[40%]">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Company Name"
                  id="name"
                  className="outline-none w-[470px] py-3 px-3 bg-[#F5F5F5] rounded-[4px]"
                />
              </div>
              <div className="font-Poppins flex flex-col gap-2 mb-8">
                <label htmlFor="name" className="leading-6 text-black/[40%]">
                  Street Address
                  <span className="text-[#DB4444]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  id="name"
                  className="outline-none w-[470px] py-3 px-3 bg-[#F5F5F5] rounded-[4px]"
                />
              </div>
              <div className="font-Poppins flex flex-col gap-2 mb-8">
                <label htmlFor="name" className="leading-6 text-black/[40%]">
                  Apartment, floor, etc. (optional)
                </label>
                <input
                  type="text"
                  placeholder="Apartment, floor, etc."
                  id="name"
                  className="outline-none w-[470px] py-3 px-3 bg-[#F5F5F5] rounded-[4px]"
                />
              </div>
              <div className="font-Poppins flex flex-col gap-2 mb-8">
                <label htmlFor="name" className="leading-6 text-black/[40%]">
                  Town/City
                  <span className="text-[#DB4444]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="City"
                  id="name"
                  className="outline-none w-[470px] py-3 px-3 bg-[#F5F5F5] rounded-[4px]"
                />
              </div>
              <div className="font-Poppins flex flex-col gap-2 mb-8">
                <label htmlFor="name" className="leading-6 text-black/[40%]">
                  Phone Number
                  <span className="text-[#DB4444]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone"
                  id="name"
                  className="outline-none w-[470px] py-3 px-3 bg-[#F5F5F5] rounded-[4px]"
                />
              </div>
              <div className="font-Poppins flex flex-col gap-2 mb-8">
                <label htmlFor="name" className="leading-6 text-black/[40%]">
                  Email Address
                  <span className="text-[#DB4444]">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  id="name"
                  className="outline-none w-[470px] py-3 px-3 bg-[#F5F5F5] rounded-[4px]"
                />
              </div>
              <div className="flex gap-4 items-center juctify-center">
                <input
                  type="checkbox"
                  className="accent-[#DB4444] w-6 h-6 rounded-[4px]"
                />
                <p className="font-Poppins leading-6">
                  Save this information for faster check-out next time
                </p>
              </div>
            </div>
            <div>
              <div className="font-Poppins leading-6 flex justify-between items-center w-[430px] mb-8">
                <div className="flex justify-between items-center gap-6">
                  <img src={Monitor} alt="" />
                  <p>LCD Monitor</p>
                </div>
                <p>$650</p>
              </div>
              <div className="font-Poppins leading-6 flex justify-between items-center w-[430px] mb-8">
                <div className="flex justify-between items-center gap-6">
                  <img src={Game} alt="" />
                  <p>H1 Gamepad</p>
                </div>
                <p>$1100</p>
              </div>
              <div className="font-Poppins font-normal text-base leading-6 flex justify-between border-b-[1px] border-black/[50%] pb-4 mb-4">
                <h2>Subtotal:</h2>
                <h2>$1750</h2>
              </div>
              <div className="font-Poppins font-normal text-base leading-6 flex justify-between border-b-[1px] border-black/[50%] pb-4 mb-4">
                <h2>Shipping:</h2>
                <h2>Free</h2>
              </div>
              <div className="font-Poppins font-normal text-base leading-6 flex justify-between pb-4 mb-4">
                <h2>Total:</h2>
                <h2>$1750</h2>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-4">
                  <input type="radio" id="bank" className="w-6 h-6" />
                  <label htmlFor="bank">Bank</label>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <img src={bKash} alt="bKash" />
                  <img src={Visa} alt="Visa" />
                  <img src={Mastercard} alt="Mastercard" />
                  <img src={Nagad} alt="Nagad" />
                </div>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <input type="radio" id="cash" className="w-6 h-6" />
                <label htmlFor="cash">Cash on delivery</label>
              </div>
              <div className="flex gap-4 mt-8">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="w-[300px] py-4 border-[2px] border-black/[50%] rounded-[4px] px-6 text-base font-Poppins leading-6"
                />
                <Button className="font-medium text-white py-4 px-12 rounded-[4px] bg-[#DB4444] ">
                  Apply Coupon
                </Button>
              </div>
              <div className="mt-8">
                <Button className="font-medium text-white py-4 px-12 rounded-[4px] bg-[#DB4444] ">
                  Place Order
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

export default Checkout;
