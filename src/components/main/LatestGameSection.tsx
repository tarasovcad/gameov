"use client";
import React from "react";
import LatestMainSection from "./LatestMainSection";
import {gamesList} from "@/data/fakePostData";
import GameCartMainMenu from "./GameCartMainMenu";

const LatestGameSection = () => {
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
      spaceBetween: 30,
    },
  };
  return (
    <LatestMainSection
      title="Latest PC Games"
      linkHref="/games"
      itemsList={gamesList}
      breakpoints={defaultBreakpoints}
      renderItemCard={(item) => <GameCartMainMenu item={item} />}
    />
  );
};

export default LatestGameSection;
