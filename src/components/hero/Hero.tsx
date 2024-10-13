"use client";
import React, {useState, useEffect, useCallback, useRef} from "react";
import {Poppins} from "next/font/google";
import {CirclePlus, ExternalLink, Heart} from "lucide-react";
import {motion, AnimatePresence} from "framer-motion";
import {useSwipeable} from "react-swipeable";
import {heroSlider} from "@/data/fakePostData";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["600"],
});

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [key, setKey] = useState(0);
  const [shouldResetInterval, setShouldResetInterval] = useState(false);
  const [buttonFill, setButtonFill] = useState(100);
  const intervalDuration = 8000;

  const resetInterval = useCallback(() => {
    setKey((prevKey) => prevKey + 1);
    setShouldResetInterval(true);
    setButtonFill(100);
  }, []);

  // useEffect(() => {
  //   const nextSlide = () => {
  //     setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlider.length);
  //     resetInterval();
  //   };

  //   const interval = setInterval(nextSlide, intervalDuration);

  //   if (shouldResetInterval) {
  //     clearInterval(interval);
  //     const newInterval = setInterval(nextSlide, intervalDuration);
  //     setShouldResetInterval(false);
  //     return () => clearInterval(newInterval);
  //   }

  //   return () => clearInterval(interval);
  // }, [shouldResetInterval, resetInterval]);

  // useEffect(() => {
  //   const fillInterval = setInterval(() => {
  //     setButtonFill((prevFill) => Math.max(prevFill - 1, 0));
  //   }, intervalDuration / 100);

  //   return () => clearInterval(fillInterval);
  // }, [currentSlide]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    resetInterval();
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlider.length);
      resetInterval();
    },
    onSwipedRight: () => {
      setCurrentSlide(
        (prevSlide) => (prevSlide - 1 + heroSlider.length) % heroSlider.length,
      );
      resetInterval();
    },
    trackMouse: true,
  });

  return (
    <>
      <div className="flex flex-col" {...handlers}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.1, ease: "easeOut"}}
            className="flex-grow min-[1200px]:min-h-[504px] max-[1200px]:aspect-[16/9]   w-full bg-cover bg-center rounded-xl flex items-end mb-5 max-[700px]:aspect-[16/10] max-[600px]:h-[480px]"
            style={{backgroundImage: `url(${heroSlider[currentSlide].image})`}}>
            {/* BLUR */}
            <motion.div
              initial={{y: 10, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.2, delay: 0.1}}
              className="text-sm font-medium hero-blur flex flex-col justify-end  border border-white/20 px-10 pt-10 pb-8 relative pr-8 w-full rounded-lg rounded-tl-[59px] max-[800px]:px-8  max-[800px]:pb-6 max-[800px]:pr-6 max-[700px]:px-10">
              <p className="mb-1 sm:mb-2  text-white/70">
                <span>{heroSlider[currentSlide].author}</span>
                <span>{" • "}</span>
                <span>{heroSlider[currentSlide].date}</span>
              </p>
              <h1
                className={`font-semibold text-2xl mb-3 max-[860px]:mb-[19px] text-white ${poppins.className}`}>
                {heroSlider[currentSlide].title}
              </h1>
              <p className="mb-4 sm:mb-4 max-[860px]:mb-[24px] text-sm sm:text-[15px] text-white/90 line-clamp-2">
                {heroSlider[currentSlide].description}
              </p>
              <div className="flex items-end justify-between mt-3">
                <div className="flex items-center  gap-3 max-[450px]:flex-col max-[450px]:items-start ">
                  <motion.button
                    whileHover={{scale: 1.03}}
                    whileTap={{scale: 0.97}}
                    transition={{duration: 0.1}}
                    className="bg-white text-black w-fit py-3 rounded-lg px-10 transition-all duration-300 ease-in-out hover:bg-white/80 cursor-pointer text-sm flex items-center gap-2 justify-center max-[450px]:w-full">
                    Read more
                  </motion.button>
                  <motion.button
                    whileHover={{scale: 1.03}}
                    whileTap={{scale: 0.97}}
                    transition={{duration: 0.1}}
                    className="text-white w-fit py-3 rounded-lg px-5 transition-all duration-300 ease-in-out hover:bg-white/10 cursor-pointer text-sm flex items-center gap-3 justify-center max-[450px]:w-full">
                    <CirclePlus size={20} />
                    Add to Favorites
                  </motion.button>
                </div>
                <div className="flex gap-2 max-[800px]:hidden">
                  {heroSlider[currentSlide].ganre.map((genre, index) => (
                    <div
                      key={index}
                      className="border border-white rounded-xl px-[10px] py-[2px]">
                      {genre}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center mb-5">
        {heroSlider.map((_, index) => (
          <button
            key={`${index}-${key}`}
            onClick={() => handleDotClick(index)}
            className="w-3 h-3 rounded-full mx-1 border border-white overflow-hidden relative hover:scale-110 transition-all duration-300 ease-in-out">
            <span
              className={`absolute inset-0 bg-white transform transition-transform duration-300 ease-in-out ${
                currentSlide === index ? "scale-x-100" : "scale-x-0"
              }`}
              style={{
                transformOrigin: "left",
                transform:
                  currentSlide === index
                    ? `scaleX(${buttonFill / 100})`
                    : "scaleX(0)",
              }}
            />
          </button>
        ))}
      </div>
    </>
  );
};

export default Hero;
