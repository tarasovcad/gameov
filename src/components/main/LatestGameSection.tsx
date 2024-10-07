"use client";
import {Game} from "@/types/postProps";
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

const LatestGameSection = ({games}: {games: Game[]}) => {
  const [isHover, setIsHover] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (games.length > 0) {
      setIsLoading(false);
    }
  }, [games]);

  // useEffect(() => {
  //   if (swiperRef.current) {
  //     swiperRef.current.update();
  //   }
  // }, [games]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="max-[700px]:px-4 max-[450px]:px-[5vw]">
        <div className="flex justify-between items-center">
          <Link
            href={"/games"}
            className="flex items-center justify-start gap-3 text-white w-fit mb-8"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
            <h2 className="font-semibold text-[28px]">Latest Games</h2>
            <motion.div
              animate={{x: isHover ? 5 : 0}}
              transition={{type: "spring", stiffness: 100}}>
              <ChevronRight size={28} className="cursor-pointer" />
            </motion.div>
          </Link>
          <div className="flex gap-2 justify-center ">
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
      </div>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        // loop={true}
        // loopAddBlankSlides={true}
        // slidesPerGroupSkip={1}
        modules={[Navigation]}
        className="mb-[100px] flex justify-center">
        {games.map((game, index) => (
          <SwiperSlide key={index}>
            <GameCartMainMenu game={game} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default LatestGameSection;
