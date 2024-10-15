"use client";
import {LatestSectionProps, Post} from "@/types/postProps";
import React, {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import {ChevronLeft, ChevronRight, Eye, MessageSquare} from "lucide-react";
import Link from "next/link";

import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {Swiper as SwiperType} from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const LatestMainSection: React.FC<LatestSectionProps> = ({
  title,
  linkHref,
  itemsList,
  breakpoints,
  whiteButtons,
  renderItemCard,
}) => {
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
    if (itemsList.length > 0) {
      setIsLoading(false);
    }
  }, [itemsList]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={` text-black dark:text-white`}>
        <div className="flex justify-between items-center mb-4">
          {title ? (
            <Link
              href={linkHref}
              className="flex items-center justify-center gap-2  w-fit  hover:text-black/70  dark:hover:text-white/80 transition-colors duration-300 ease-in-out"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}>
              <h2 className="font-semibold text-[25px] max-[700px]:text-[23px] max-[600px]:text-[22px] ">
                {title}
              </h2>
              <motion.div
                animate={{x: isHover ? 5 : 0}}
                transition={{type: "spring", stiffness: 100}}>
                <ChevronRight size={25} className="cursor-pointer" />
              </motion.div>
            </Link>
          ) : (
            <div className="flex justify-between items-center w-full">
              <h2 className="dark:text-black text-white font-semibold text-[25px] max-[700px]:text-[23px] max-[600px]:text-[22px] ">
                Popular Blogs
              </h2>
            </div>
          )}
          <div
            className={`flex gap-2 justify-end items-end max-[601px]:hidden ${!title ? "w-full" : ""}`}>
            <button
              className={`w-10 h-10 flex items-center justify-center p-2 border border-boder  rounded-full transition duration-300 ease-in-out  ${whiteButtons ? "dark:bg-white dark:text-black dark:hover:bg-white dark:disabled:bg-[#eeeeee] dark:disabled:hover:bg-[#ebebeb] bg-bg disabled:bg-transparent  text-white" : "dark:bg-bg disabled:bg-[#eeeeee] disabled:hover:bg-[#ebebeb] dark:hover:bg-[#303030] dark:disabled:hover:bg-[#141414] dark:disabled:bg-[#141414] "}`}
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}>
              <ChevronLeft size={16} />
            </button>
            <button
              className={`w-10 h-10 flex items-center justify-center p-2 border border-boder  rounded-full transition duration-300 ease-in-out  ${whiteButtons ? "dark:bg-white dark:text-black dark:hover:bg-white dark:disabled:bg-[#eeeeee] dark:disabled:hover:bg-[#ebebeb] bg-bg disabled:bg-transparent  text-white" : "dark:bg-bg disabled:bg-[#eeeeee] disabled:hover:bg-[#ebebeb] dark:hover:bg-[#303030] dark:disabled:hover:bg-[#141414] dark:disabled:bg-[#141414] "}`}
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
          breakpoints={breakpoints}
          modules={[Navigation]}
          className="flex justify-center overflow-y-visible">
          {itemsList.map((item, index) => (
            <SwiperSlide key={index} style={{height: "auto"}}>
              {renderItemCard(item)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default LatestMainSection;
