"use client";

import React, {useRef, useState} from "react";
import Image from "next/image";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Thumbs} from "swiper/modules";
import {AnimatePresence, motion} from "framer-motion";
import {Swiper as SwiperType} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const PostImageSlider = () => {
  const images = [
    "/post.jpg",
    "/post2.png",
    "/post3.jpg",
    "/post4.jpg",
    "/post5.jpg",
    "/post6.jpg",
    "/post7.jpg",
    "/post8.jpg",
    "/post9.jpg",
    "/post10.jpg",
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  const buttonVariants = {
    left: {
      hidden: {opacity: 0, x: -20},
      visible: {opacity: 1, x: 0},
    },
    right: {
      hidden: {opacity: 0, x: 20},
      visible: {opacity: 1, x: 0},
    },
  };

  return (
    <div className="w-full ">
      <div
        className="relative w-full aspect-[754/470] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <Swiper
          spaceBetween={10}
          navigation
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="!h-full !w-full rounded-xl">
          {images.map((src, index) => (
            <SwiperSlide key={index} className="!h-full !w-full">
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  fill
                  sizes="100vw"
                  style={{objectFit: "cover"}}
                  className="rounded-xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <AnimatePresence>
          {isHovered && (
            <>
              <motion.button
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={buttonVariants.left}
                transition={{duration: 0.3}}
                onClick={() => swiperRef.current?.slidePrev()}
                className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10">
                <ChevronLeft />
              </motion.button>
              <motion.button
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={buttonVariants.right}
                transition={{duration: 0.3}}
                onClick={() => swiperRef.current?.slideNext()}
                className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10">
                <ChevronRight />
              </motion.button>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* THUMBNAIL SLIDER */}
      <div className=" flex items-center justify-between gap-2 sm:gap-4 mb-4 sm:mb-[22px] mt-4 sm:mt-[22px]">
        <button className="swiper-button-prev cursor-pointer w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300">
          <ChevronLeft />
        </button>

        <div className=" flex gap-2  justify-center">
          {images.slice(0, 2).map((src, index) => (
            <div className="relative w-[94px] h-[54px]" key={index}>
              <Image
                src={src}
                alt={`Thumbnail ${index + 1}`}
                fill
                style={{objectFit: "cover"}}
                unoptimized
                className="cursor-pointer rounded-[5px]"
              />
            </div>
          ))}
        </div>

        <button className="cursor-pointer w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default PostImageSlider;
