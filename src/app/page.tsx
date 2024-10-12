import React from "react";
import Hero from "@/components/hero/Hero";
import LatestGameSection from "@/components/main/LatestGameSection";
import LatestDesktopSection from "@/components/main/LatestDesktopSection";
import LatestGraphicsSection from "@/components/main/LatestGraphicsSection";
import PopularBlogSection from "@/components/main/PopularBlogSection";
import LatestMacOSSoftware from "@/components/main/LatestMacOSSoftware";

const Home = () => {
  return (
    <div className="max-[700px]:px-0 relative">
      <Hero />
      <div className="flex flex-col gap-[45px] mb-[100px]">
        <LatestGameSection />
        <LatestDesktopSection />
        <LatestGraphicsSection />
        <PopularBlogSection />
        <LatestMacOSSoftware />
      </div>
    </div>
  );
};

export default Home;
