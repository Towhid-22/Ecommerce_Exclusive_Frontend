import { Button, Link } from "@material-tailwind/react";
import React from "react";
import Womens from "../assets/feature_image/womens.png";

const Feature = () => {
  return (
    <div className="mt-[120px]">
      <div className="container">
        <div>
          <h3 className="pl-8 relative font-Poppins text-salesBasic font-semibold text-base leading-5 after:content[''] after:bg-salesBasic after:w-5 after:h-10 after:absolute after:top-[-9px] after:left-0 after:rounded-[4px]">
            Featured
          </h3>
          <div className="flex justify-between items-center">
            <div className="mt-6 flex gap-[87px]">
              <h2 className="font-Inter text-4xl leading-12 tracking-[0.64px] font-semibold">
                New Arrival
              </h2>
            </div>
          </div>
        </div>
        <div className="flex gap-[30px] mt-15">
          <div className="bg-black flex items-center justify-center pt-[89px] px-[30px] rounded-[4px]">
            <div className="bg-[url(./assets/feature_image/playstation.png)] bg-cover bg-center w-[511px] h-[511px]">
              <div className="flex flex-col gap-4 justify-end items-start h-full pb-8">
                <h3 className="font-Inter font-semibold text-white text-2xl">
                  PlayStation 5
                </h3>
                <p className="font-Poppins text-[#FAFAFA] text-[14px] leading-[21px] font-normal">
                  Black and White version of the PS5 <br /> coming out on sale.
                </p>
                <a
                  href="#"
                  className="text-white text-base leading-[24px] font-medium relative after:content[''] after:bg-white/[50%] after:w-full after:h-[1px] after:absolute after:left-0 after:rounded-[4px] after:bottom-0"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col gap-8">
            <div className="w-[570px] h-[284px] bg-black flex rounded-[4px]">
              <div className="flex flex-col gap-1 justify-end items-start h-full p-8">
                <h3 className="font-Inter font-semibold text-white text-2xl">
                  Women’s Collections
                </h3>
                <p className="font-Poppins text-[#FAFAFA] text-[14px] leading-[21px] font-normal">
                  Featured woman collections that <br /> give you another vibe.
                </p>
                <a
                  href="#"
                  className="text-white text-base leading-[24px] font-medium relative after:content[''] after:bg-white/[50%] after:w-full after:h-[1px] after:absolute after:left-0 after:rounded-[4px] after:bottom-0"
                >
                  Shop Now
                </a>
              </div>
              <img src={Womens} alt="" className="w-[270px]" />
            </div>
            <div className="w-[570px] h-[284px] flex gap-[30px]">
              <div className="w-[270px] bg-black h-[284px] bg-[url(./assets/feature_image/speaker.png)] bg-cover bg-no-repeat rounded-[4px]">
                <div className="flex flex-col gap-1 justify-end items-start h-full p-8">
                  <h3 className="font-Inter font-semibold text-white text-2xl">
                    Speakers
                  </h3>
                  <p className="font-Poppins text-[#FAFAFA] text-[14px] leading-[21px] font-normal">
                    Amazon wireless speakers
                  </p>
                  <a
                    href="#"
                    className="text-white text-base leading-[24px] font-medium relative after:content[''] after:bg-white/[50%] after:w-full after:h-[1px] after:absolute after:left-0 after:rounded-[4px] after:bottom-0"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
              <div className="w-[270px] h-[284px] bg-black bg-[url(./assets/feature_image/perfume.png)] bg-cover bg-no-repeat rounded-[4px]">
                <div className="flex flex-col gap-1 justify-end items-start h-full p-8">
                  <h3 className="font-Inter font-semibold text-white text-2xl">
                    Perfume
                  </h3>
                  <p className="font-Poppins text-[#FAFAFA] text-[14px] leading-[21px] font-normal">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <a
                    href="#"
                    className="text-white text-base leading-[24px] font-medium relative after:content[''] after:bg-white/[50%] after:w-full after:h-[1px] after:absolute after:left-0 after:rounded-[4px] after:bottom-0"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
