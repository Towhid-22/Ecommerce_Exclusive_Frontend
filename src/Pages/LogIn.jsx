import React from "react";
import Footer from "../Components/Footer";
import { Button } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
import Navbar from "../Components/Navbar";
import SignUpImg from "../assets/signup_image/signupimage.png";

const LogIn = () => {
  return (
    <div>
      <Navbar />
      <div className=" mt-15 flex  items-center gap-[160px] pb-[140px]">
        <div className="">
          <img
            src={SignUpImg}
            alt="SingUp Image"
            className="w-[988px] h-[781px]"
          />
        </div>
        <div>
          <h1 className="font-Inter font-medium text-4xl leading-[30px] tracking-[4%] pb-6">
            Log in to Exclusive
          </h1>
          <p className="font-Poppins leading-6 pb-12">
            Enter your details below
          </p>
          <form className="flex flex-col gap-10 w-[371px]">
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="font-Poppins leading-6 outline-none border-b-[1px] border-[#7D8184]/[50%] py-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="font-Poppins leading-6 outline-none border-b-[1px] border-[#7D8184]/[50%] py-2"
            />
          </form>
          <div className="flex justify-between items-center mt-12 ">
            <Button className="py-4 px-12 bg-[#DB4444] rounded-[4px] font-Poppins leading-6 font-medium">
              Log In
            </Button>
            <p className="font-Poppins leading-6 flex justify-center items-center text-[#DB4444] cursor-pointer">
              Forget Password?
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LogIn;
