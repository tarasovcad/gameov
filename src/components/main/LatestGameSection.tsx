"use client";
import React from "react";
import LatestMainSection from "./LatestMainSection";
import BlogGameCart from "./BlogGameCart";
import {defaultBreakpointsGameCart} from "@/data/defaultBreakpoints";
import {SixLatestPostsData} from "@/types/singlePost";

const LatestGameSection = ({data}: {data: SixLatestPostsData}) => {
  const gamesList = data.latestPosts;
  return (
    <LatestMainSection
      title="Latest PC Games"
      linkHref="/games"
      itemsList={gamesList}
      breakpoints={defaultBreakpointsGameCart}
      renderItemCard={(item) => <BlogGameCart item={item} />}
    />
  );
};

export default LatestGameSection;
