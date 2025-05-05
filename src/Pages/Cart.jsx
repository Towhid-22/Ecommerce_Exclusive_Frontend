import React from "react";
import Navbar from "../Components/Navbar";
import Game from "../assets/cart_image/game.png";
import Monitor from "../assets/cart_image/monitor.png";
import { Button, ButtonGroup } from "@material-tailwind/react";
import Footer from "../Components/Footer";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-20 mb-[120px]">
        <div className="flex text-[14px] leading-[21px] font-normal font-Poppins text-black/[50%] gap-3">
          <p>home</p>
          <p>/</p>
          <p className="text-black">Cart</p>
        </div>
        <div className="mt-20">
          <div className="font-Poppins text-base leading-6 text-black flex gap-6 py-6 px-10 shadow-[0px_2px_5px_0.01px_rgba(0,0,0,0.2)] rounded-[4px]">
            <h2 className="w-[500px]">Product</h2>
            <h2 className="w-[320px]">Price</h2>
            <h2 className="w-[320px]">Qantity</h2>
            <h2 className="w-[320px]">Subtotal</h2>
          </div>
          {/* shadow-[0px_2px_5px_0.01px_rgba(0,0,0,0.2)] */}
          <div className="font-Poppins leading-6 text-black py-6 px-10 flex gap-6 shadow-[0px_2px_5px_0.01px_rgba(0,0,0,0.2)] rounded-[4px] mt-10 ">
            <div className="flex items-center jusbtify-center gap-5 w-[500px]">
              <img src={Monitor} alt="Monitor" />
              <p className="">LCD Monitor</p>
            </div>
            <h2 className="w-[320px]">$650</h2>
            <input
              type="number"
              placeholder="01"
              className="w-[320px] px-3 border-[2px] border-black/[40%] rounded-[4px]"
            />
            <h2 className="w-[320px]">$650</h2>
          </div>
          <div className="font-Poppins leading-6 text-black py-6 px-10 flex gap-6 shadow-[0px_2px_5px_0.01px_rgba(0,0,0,0.2)] rounded-[4px] mt-10 ">
            <div className="flex items-center jusbtify-center gap-5 w-[500px]">
              <img src={Game} alt="Monitor" />
              <p className="">H1 Gamepad</p>
            </div>
            <h2 className="w-[320px]">$550</h2>
            <input
              type="number"
              placeholder="01"
              className="w-[320px] px-3 border-[2px] border-black/[40%] rounded-[4px]"
            />
            <h2 className="w-[320px]">$1100</h2>
          </div>
        </div>
        <div className="mt-6 font-Poppins leading-6 flex justify-between">
          <Button className="font-medium text-black py-4 px-12 border-[2px] border-black/[50%] rounded-[4px]">
            Return To Shop
          </Button>
          <Button className="font-medium text-black py-4 px-12 border-[2px] border-black/[50%] rounded-[4px]">
            Update Cart
          </Button>
        </div>
        <div className="mt-20 flex justify-between">
          <div>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Coupon Code"
                className="w-[300px] py-4 border-[2px] border-black/[50%] rounded-[4px] px-6 text-base font-Poppins leading-6"
              />
              <Button className="font-medium text-white py-4 px-12 rounded-[4px] bg-[#DB4444] ">
                Apply Coupon
              </Button>
            </div>
          </div>
          <div className="w-[470px] border-[2px] border-black/[50%] pb-12 pt-8 px-6 rounded-[4px]">
            <h2 className="font-Poppins font-semibold text-xl leading-7 mb-6">
              Cart Total
            </h2>
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
            <div className="text-center">
              <Button className="font-medium text-white py-4 px-12 rounded-[4px] bg-[#DB4444] ">
                Procees to checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
