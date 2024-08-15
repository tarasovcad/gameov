import React from "react";
import {Poppins} from "next/font/google";
import Hero from "@/components/hero/Hero";
import ContentShowcase from "@/components/main/ContentShowcase";
import ListOfItems from "@/components/main/ListOfItems";
import {cookies} from "next/headers";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["600"],
});

const Home = () => {
  const cookieStore = cookies();
  console.log(cookieStore, "app");
  console.log(cookies, "app");
  return (
    <div className="wrapper">
      <Hero />
      <ContentShowcase />
      <ListOfItems />
    </div>
  );
};

export default Home;
