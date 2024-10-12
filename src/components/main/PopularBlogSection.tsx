"use client";
import React from "react";
import LatestMainSection from "./LatestMainSection";
import {gamesList} from "@/data/fakePostData";
import PopularBlogsCart from "./PopularBlogsCart";

const PopularBlogSection = () => {
  const defaultBreakpoints = {
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
      slidesPerView: 3,
      spaceBetween: 20,
    },
  };
  return (
    <div className="bg-white/90 p-6 px-8 rounded-md relative">
      <div className="absolute top-8 text-black">
        <h2 className="font-semibold text-[26px] ">Popular Blogs</h2>
      </div>
      <LatestMainSection
        linkHref="/games"
        whiteButtons={true}
        itemsList={gamesList}
        breakpoints={defaultBreakpoints}
        renderItemCard={(item) => <PopularBlogsCart item={item} />}
      />
    </div>
  );
};

export default PopularBlogSection;
