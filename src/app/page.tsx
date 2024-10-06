import React from "react";
import Hero from "@/components/hero/Hero";
import ContentShowcase from "@/components/main/ContentShowcase";
import ListOfItems from "@/components/main/ListOfItems";

const Home = () => {
  return (
    <div className="max-[700px]:px-0 relative">
      <Hero />
      {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 */}
      <div className="max-[700px]:px-4 max-[450px]:px-[5vw]">
        <ContentShowcase />
        <ListOfItems />
      </div>
    </div>
  );
};

export default Home;
