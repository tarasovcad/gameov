"use client";
import React, {useState} from "react";
import {Poppins} from "next/font/google";
import {CirclePlus, ExternalLink, Heart} from "lucide-react";
import {motion, AnimatePresence} from "framer-motion";
import {au} from "vitest/dist/chunks/reporters.WnPwkmgA";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["600"],
});

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/hero-slider/hero1.png",
      title: "The Haunting of Blackwood Manor",
      date: "15 Mar 2024",
      author: "Emma Nightshade",
      description:
        "Explore the chilling secrets of Blackwood Manor in this atmospheric first-person horror game. Uncover the tragic history of the estate as you solve puzzles and evade malevolent spirits.",
      link: "https://www.blackwoodmanorgame.com",
    },
    {
      image: "/hero-slider/hero2.png",
      title: "Cyberpunk Nightmares",
      date: "3 Sep 2023",
      author: "Zack Neural",
      description:
        "Dive into a dystopian future where reality and virtual nightmares blend. As a rogue AI hunter, your mission is to track down corrupt programs that have gained sentience and are terrorizing the city's datascape.",
      link: "https://www.cyberpunknightmares.net",
    },
    {
      image: "/hero-slider/hero3.png",
      title: "Lovecraftian Depths",
      date: "7 Dec 2023",
      author: "H.P. Anderson",
      description:
        "Descend into the abyssal trenches of the ocean in this cosmic horror adventure. As a deep-sea explorer, you'll encounter ancient entities and face mind-bending terrors that challenge your sanity.",
      link: "https://www.lovecraftiandepths.com",
    },
  ];

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="flex flex-col">
        <div
          className="flex-grow min-h-[504px] max-h-[504px] w-full bg-cover bg-center rounded-xl px-4 max-[768px]:px-3 flex items-end mb-6 p-2 py-8 max-[540px]:px-2 max-[540px]:pb-3 max-[700px]:rounded-none"
          style={{backgroundImage: `url(${slides[currentSlide].image})`}}>
          {/* BLUR */}
          <div className="text-sm sm:text-base w-full font-medium hero-blur flex flex-col justify-end py-8 sm:py-12 sm:pt-12 max-[860px]:py-9 px-4 sm:pl-6 max-[860px]:pl-8 sm:pr-10 border border-white/20">
            <p className="mb-1 sm:mb-2 max-[860px]:mb-[17px] text-white/70  ">
              <span>{slides[currentSlide].author}</span>
              <span>{" • "}</span>
              <span>{slides[currentSlide].date}</span>
            </p>
            <h1
              className={`font-semibold text-xl sm:text-2xl max-[860px]:text-3xl mb-3 sm:mb-3 max-[860px]:mb-[19px] text-white ${poppins.className}`}>
              {slides[currentSlide].title}
            </h1>
            <p className="mb-4 sm:mb-4 max-[860px]:mb-[24px] text-sm sm:text-[15px] text-white/90">
              {slides[currentSlide].description}
            </p>
            <div className="flex items-center gap-2 mt-4 max-[450px]:flex-col max-[450px]:items-start">
              <button className="bg-white text-black w-fit py-3 rounded-lg px-10 transition-all duration-300 ease-in-out hover:bg-white/80 cursor-pointer text-base flex items-center gap-2 justify-center">
                Read more
              </button>
              <button className=" text-white w-fit py-3 rounded-lg px-5 transition-all duration-300 ease-in-out hover:bg-white/10 cursor-pointer text-base flex items-center gap-3 justify-center ">
                <CirclePlus size={20} />
                Add to Favorites
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 border border-white ${
              currentSlide === index ? "bg-white" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default Hero;
