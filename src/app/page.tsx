import React from "react";
import Hero from "@/components/hero/Hero";
import ContentShowcase from "@/components/main/ContentShowcase";
import ListOfItems from "@/components/main/ListOfItems";

const Home = () => {
  return (
    <div className="wrapper">
      <Hero />
      <ContentShowcase />
      <ListOfItems />
    </div>
  );
};

export default Home;
