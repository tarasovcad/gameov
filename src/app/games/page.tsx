"use client";

import BlogGameCart from "@/components/main/BlogGameCart";
import {gamesList} from "@/data/fakePostData";
import React, {useEffect, useState} from "react";
import {LayoutGrid} from "lucide-react";
import {Icon} from "lucide-react";
import {layoutGridMoveVertical} from "@lucide/lab";
import FilterButton from "@/components/gamePage/FilterButton";
import SortByButton from "@/components/gamePage/SortByButton";
import {AnimatePresence, motion} from "framer-motion";
import PaginationGamePage from "@/components/gamePage/PaginationGamePage";
const GamesPage = () => {
  const doubledGamesList = [...gamesList, ...gamesList];
  const [gridView, setGridView] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      switch (true) {
        case window.innerWidth < 550:
          setGridView(true);
          break;
        case window.innerWidth > 550 && window.innerWidth < 851:
          setGridView(false);
          break;
        default:
          // setGridView(true);
          break;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
    exit: {opacity: 0},
  };

  const cardVariants = {
    hidden: {opacity: 0, scale: 0.6},
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
    exit: {opacity: 0, scale: 0.9, transition: {duration: 0.2}},
  };
  return (
    <div className="max-[700px]:px-4 max-[450px]:px-[3.5vw] pt-3">
      <div className="flex justify-between items-center mb-5">
        <div className="flex gap-3">
          <h2 className="font-semibold text-[32px] max-[1100px]:text-[30px] max-[850px]:text-[28px] max-[700px]:text-[25px] ">
            All Games{" "}
            <span className="text-secondary_text ml-2 max-[730px]:ml-1">
              4014
            </span>
          </h2>
        </div>
        <div className="flex gap-4 text-white/90 min-h-[40px] text-[15px] max-[800px]:gap-3 max-[730px]:gap-2">
          <div className="bg-transparent rounded-lg border border-border min-h-[40px] max-[850px]:hidden">
            <button
              className={` rounded-lg p-2.5 h-full  transition-colors duration-300 ease-in-out hover:text-white/90 ${gridView ? "bg-bg text-white" : "text-white/60"}`}
              onClick={() => setGridView(true)}>
              <LayoutGrid size={19} />
            </button>
            <button
              className={` rounded-lg p-2.5 h-full  transition-colors duration-300 ease-in-out hover:text-white/90 ${!gridView ? "bg-bg text-white" : "text-white/60"}`}
              onClick={() => setGridView(false)}>
              <Icon iconNode={layoutGridMoveVertical} size={19} />
            </button>
          </div>
          <SortByButton />
          <FilterButton />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={gridView ? "grid" : "list"}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`grid gap-5 mt-5 max-[1250px]:gap-4 max-[1131px]:grid-cols-2 max-[850px]:grid-cols-1  ${
            !gridView ? "!grid-cols-1" : "grid-cols-3"
          } `}>
          {doubledGamesList.map((item, index) => (
            <motion.div
              key={item.title}
              custom={index}
              variants={cardVariants}
              layout>
              <BlogGameCart item={item} gridView={gridView} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <PaginationGamePage />
    </div>
  );
};

export default GamesPage;
