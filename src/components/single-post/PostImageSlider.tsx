"use client";

import React, {useState} from "react";
import Image from "next/image";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {AnimatePresence, motion} from "framer-motion";
const PostImageSlider = () => {
  const images = ["/post.jpg", "/post2.png", "/post3.jpg"];

  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const buttonVariants = {
    left: {
      hidden: {opacity: 0, x: -20},
      visible: {opacity: 1, x: 0},
    },
    right: {
      hidden: {opacity: 0, x: 20},
      visible: {opacity: 1, x: 0},
    },
  };

  return (
    <div
      className="relative w-full h-[545px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div
        className="flex transition-transform duration-300 ease-in-out h-full"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
        }}>
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-full">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              fill
              sizes="100vw"
              style={{objectFit: "cover"}}
              unoptimized
              className="rounded-2xl"
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {isHovered && (
          <>
            <motion.button
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={buttonVariants.left}
              transition={{duration: 0.3}}
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10">
              <ChevronLeft />
            </motion.button>
            <motion.button
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={buttonVariants.right}
              transition={{duration: 0.3}}
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
              <ChevronRight />
            </motion.button>
          </>
        )}
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full z-10">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default PostImageSlider;
