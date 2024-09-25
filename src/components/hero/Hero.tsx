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
    <div className="aspect-[16/9] max-h-[504px] w-full bg-[url('/hero-slider/main.jpg')] bg-cover bg-center rounded-xl wrapper flex items-end  mb-8 p-2 py-6">
      {/* BLUR */}
      <div className="text-white text-sm sm:text-base w-full font-medium hero-blur flex flex-col justify-end py-4 sm:py-6 max-[860px]:py-9 px-4 sm:pl-6 max-[860px]:pl-8 sm:pr-4">
        <span className="mb-2 sm:mb-3 max-[860px]:mb-[17px]">
          Olivia Rhye • 20 Jan 2022
        </span>
        <h1
          className={`font-semibold text-xl sm:text-2xl max-[860px]:text-3xl mb-3 sm:mb-4 max-[860px]:mb-[19px] ${poppins.className}`}>
          Necromorphs - Dead Space
        </h1>
        <p className="mb-4 sm:mb-5 max-[860px]:mb-[24px] text-sm sm:text-base">
          Chaperone is a first-person psychological horror game. The events are
          completely real.
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="border border-white rounded-full px-2 sm:px-3 py-1 sm:py-[3px] text-xs sm:text-sm">
            Games 2024
          </span>
          <span className="border border-white rounded-full px-2 sm:px-3 py-1 sm:py-[3px] text-xs sm:text-sm">
            Horror
          </span>
          <span className="border border-white rounded-full px-2 sm:px-3 py-1 sm:py-[3px] text-xs sm:text-sm">
            Adventure
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
