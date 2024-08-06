"use client";
import {Montserrat} from "next/font/google";
import {ArrowUpRight} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["700", "400"],
});

const GameCartMainMenu = ({name, year}: {name: string; year: number}) => {
  return (
    <Link href={""}>
      <div className="mainitem relative min-h-[210px] text-white rounded-xl flex overflow-hidden ">
        <div>
          <Image
            src="/hero-slider/slider1.jpg"
            fill
            className="scaleitem absolute object-cover rounded-xl opacity-40 scale-105 duration-300 transition ease-in-out"
            alt="game"
          />
        </div>

        <ArrowUpRight
          width={20}
          height={20}
          className="arrowupright absolute top-[14px] right-[14px] duration-300 transition ease-in-out"
        />
        <div
          className={`${"relative p-5 flex flex-col gap-1 justify-end max-[1335px]:p-4"} ${montserrat.className}`}>
          <h2 className="font-bold text-xl tracking-[0.02em] max-[1335px]:text-[18px]">
            Chaperone (2023)
          </h2>
          <p className="font-normal text-sm text-[#e9e9e9] tracking-[0.01em] leading-6 max-[1335px]:leading-5">
            Chaperone is a first-person psychological horror game. The events
            are ...
          </p>
        </div>
      </div>
    </Link>
  );
};

export default GameCartMainMenu;
