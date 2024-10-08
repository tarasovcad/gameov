"use client";
import {Desctop, Game} from "@/types/postProps";
import React, {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import {ChevronLeft, ChevronRight, Eye, MessageSquare} from "lucide-react";
import Link from "next/link";
import GameCartMainMenu from "./GameCartMainMenu";

import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {Swiper as SwiperType} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import DesktopCartMainMenu from "./DesktopCartMainMenu";
import SoftwareCartMainMenu from "./SoftwareCartMainMenu";

const LatestSoftwareSection = ({softwareList}: {softwareList: Desctop[]}) => {
  const [isHover, setIsHover] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  const updateSwiper = () => {
    if (swiperRef.current) {
      const screenWidth = window.innerWidth;
      swiperRef.current.params.allowTouchMove = screenWidth < 700;
      swiperRef.current.update();
    }
  };
  useEffect(() => {
    window.addEventListener("resize", updateSwiper);
    return () => {
      window.removeEventListener("resize", updateSwiper);
    };
  }, []);

  useEffect(() => {
    if (softwareList.length > 0) {
      setIsLoading(false);
    }
  }, [softwareList]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="max-[700px]:px-4 max-[450px]:px-[5vw]">
        <div className="flex justify-between items-center mb-4">
          <Link
            href={"/games"}
            className="flex items-center justify-center gap-2 text-white w-fit  "
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
            <h2 className="font-semibold text-[25px] ">Latest Desktop Apps</h2>
            <motion.div
              animate={{x: isHover ? 5 : 0}}
              transition={{type: "spring", stiffness: 100}}>
              <ChevronRight size={25} className="cursor-pointer" />
            </motion.div>
          </Link>
          <div className="flex gap-2 justify-center max-[601px]:hidden">
            <button
              className="w-10 h-10 flex items-center justify-center p-2 bg-bg bg border border-boder rounded-full transition duration-300 ease-in-out hover:bg-[#303030] disabled:hover:bg-[#141414] disabled:bg-[#141414]"
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}>
              <ChevronLeft size={16} />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center p-2 bg-bg bg border border-boder rounded-full transition duration-300 ease-in-out hover:bg-[#303030] disabled:hover:bg-[#141414] disabled:bg-[#141414]"
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateSwiper();
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          allowTouchMove={false}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 10,
              allowTouchMove: true,
              slidesPerGroup: 1,
            },
            700: {
              slidesPerView: 1.2,
              spaceBetween: 20,
              slidesPerGroup: 1,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 30,
            },

            1100: {
              slidesPerView: 3,
              slidesPerGroup: 3,

              spaceBetween: 20,
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation]}
          className="flex justify-center ">
          {softwareList.map((software, index) => (
            <SwiperSlide key={index} style={{height: "auto"}}>
              <SoftwareCartMainMenu software={software} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default LatestSoftwareSection;
