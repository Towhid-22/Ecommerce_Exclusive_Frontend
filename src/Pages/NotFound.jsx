import React from "react";
import Navbar from "../Components/Navbar";
import { Button } from "@material-tailwind/react";
import Footer from "../Components/Footer";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="flex text-[14px] mt-20 leading-[21px] font-normal font-Poppins text-black/[50%] gap-3">
          <p>home</p>
          <p>/</p>
          <p className="text-black">404 Error</p>
        </div>
        <div className="text-center my-[140px]">
          <h1 className="font-Inter font-medium text-[110px] leading-[115px] tracking-[3%] mb-10">
            404 Not Found
          </h1>
          <p className="font-Poppins leading-6 mb-20">
            Your visited page not found. You may go home page.
          </p>
          <Button className="font-Poppins font-medium text-white py-4 px-12 leading-6 rounded-[4px] bg-[#DB4444] ">
            Back to home page
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
