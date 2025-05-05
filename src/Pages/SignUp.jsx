import React from "react";
import Navbar from "../Components/Navbar";
import SignUpImg from "../assets/signup_image/signupimage.png";
import { Button } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
import Footer from "../Components/Footer";

const SignUp = () => {
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
            Create an account
          </h1>
          <p className="font-Poppins leading-6 pb-12">
            Enter your details below
          </p>
          <form className="flex flex-col gap-10 w-[371px]">
            <input
              type="text"
              placeholder="Name"
              className="font-Poppins leading-6 outline-none border-b-[1px] border-[#7D8184]/[50%] py-2"
            />
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
          <div className="flex flex-col w-[371px]">
            <Button className="py-4 px-[122px] bg-[#DB4444] mt-10 rounded-[4px] font-Poppins leading-6 font-medium">
              Create Account
            </Button>
            <Button className="py-4  border-[1px] border-black/[40%] mt-4 rounded-[4px] font-Poppins leading-6 font-normal text-black flex items-center justify-center gap-4">
              <FcGoogle className="w-6 h-6" /> Sign up with Google
            </Button>
          </div>
          <p className="font-Poppins leading-6 text-black text-center mt-8">
            Already have account?{" "}
            <a
              href="#"
              className="font-Poppins text-black/[70%] text-base leading-6 ml-4 font-medium relative after:content[''] after:bg-black/[50%] after:w-full after:h-[2px] after:absolute after:left-0 after:rounded-[4px] after:bottom-[-2px]"
            >
              Log In
            </a>{" "}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
