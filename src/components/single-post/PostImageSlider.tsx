"use client";

import React, {useState} from "react";
import Image from "next/image";
import {ChevronLeft, ChevronRight} from "lucide-react";
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
  return (
    <div
      className="relative w-full h-[545px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <Image
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        fill
        sizes="100vw"
        style={{objectFit: "cover"}}
        unoptimized
        className="rounded-2xl"
      />
      {isHovered && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10">
            <ChevronLeft />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
            <ChevronRight />
          </button>
        </>
      )}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full z-10">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default PostImageSlider;
