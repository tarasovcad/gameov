"use client";
import React from "react";
import LatestMainSection from "./LatestMainSection";
import {gamesList} from "@/data/fakePostData";
import BlogGameCart from "./BlogGameCart";
import {defaultBreakpointsGameCart} from "@/data/defaultBreakpoints";

const LatestGameSection = () => {
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
