import React from "react";
import Hero from "@/components/hero/Hero";
import LatestGameSection from "@/components/main/LatestGameSection";
import LatestGraphicsSection from "@/components/main/LatestGraphicsSection";
import LatestMacOSSoftware from "@/components/main/LatestMacOSSoftware";
import LatestSoftwareSection from "@/components/main/LatestSoftwareSection";
import PopularBlogSection from "@/components/main/PopularBlogSection";
import BestPostsCollection from "@/components/main/BestPostsCollection";
import {FooterSection} from "@/components/main/FooterSection";

const Home = () => {
  return (
    <div className="max-[700px]:px-0 relative">
      <Hero />
      <div className="flex flex-col gap-[60px] mb-[1160px] max-[700px]:px-4 max-[450px]:px-[2.5vw] ">
        <LatestGameSection />
        <LatestSoftwareSection />
        <LatestGraphicsSection />
        <PopularBlogSection />
        <LatestMacOSSoftware />

        <BestPostsCollection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Home;
