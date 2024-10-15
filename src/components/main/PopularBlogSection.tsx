"use client";
import React from "react";
import LatestMainSection from "./LatestMainSection";
import {gamesList} from "@/data/fakePostData";
import PopularBlogsCart from "./PopularBlogsCart";
import {defaultBreakpointsPopularBlogs} from "@/data/defaultBreakpoints";

const PopularBlogSection = () => {
  return (
    <div className="dark:bg-white/90 bg-[#161616] p-6 px-8 rounded-md relative max-[800px]:p-6 ">
      <LatestMainSection
        linkHref="/games"
        whiteButtons={true}
        itemsList={gamesList}
        breakpoints={defaultBreakpointsPopularBlogs}
        renderItemCard={(item) => <PopularBlogsCart item={item} />}
      />
    </div>
  );
};

export default PopularBlogSection;
