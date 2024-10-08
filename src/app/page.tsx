import React from "react";
import Hero from "@/components/hero/Hero";
import LatestGameSection from "@/components/main/LatestGameSection";
import LatestDesktopSection from "@/components/main/LatestDesktopSection";
import LatestSoftwareSection from "@/components/main/LatestSoftwareSection";
import {desktopList, gamesList, softwareList} from "@/data/fakePostData";
import LatestMainSection from "@/components/main/LatestMainSection";
import GameCartMainMenu from "@/components/main/GameCartMainMenu";

const Home = () => {
  return (
    <div className="max-[700px]:px-0 relative">
      <Hero />
      <div className="flex flex-col gap-[45px] mb-[100px]">
        <LatestGameSection />
        <LatestDesktopSection />
      </div>
    </div>
  );
};

export default Home;
