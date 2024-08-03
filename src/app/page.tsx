import React from "react";
import {Poppins} from "next/font/google";
import Hero from "@/components/hero/Hero";
import ContentShowcase from "@/components/main/ContentShowcase";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["600"],
});

const Home = () => {
  return (
    <div className="wrapper">
      <Hero />
      <ContentShowcase />
    </div>
  );
};

export default Home;
