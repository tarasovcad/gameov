import React from "react";
import {Poppins} from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["600"],
});

const Hero = () => {
  return (
    <div className="h-[504px] w-full bg-[url('/hero-slider/slider1.jpg')] bg-cover bg-center  rounded-xl wrapper flex items-end pb-4 mb-8">
      {/* BLUR */}
      <div className="text-white text-[14px] w-full font-medium hero-blur flex flex-col justify-end py-9 pl-8 pr-4 ">
        <span className="mb-[17px]">Olivia Rhye • 20 Jan 2022</span>
        <h1
          className={`${"font-semibold text-3xl mb-[19px]"} ${poppins.className}`}>
          Necromorphs - Dead Space
        </h1>
        <p className="mb-[24px]">
          Chaperone is a first-person psychological horror game. The events are
          completely real.
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="border border-white rounded-full px-3 font-medium py-[3px]">
            Games 2024
          </span>
          <span className="border border-white rounded-full px-3 font-medium py-[3px]">
            Horror
          </span>
          <span className="border border-white rounded-full px-3 font-medium py-[3px]">
            Adventure
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
