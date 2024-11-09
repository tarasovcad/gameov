"use client";

import BlogGameCart from "@/components/main/BlogGameCart";
import React, {useEffect, useState} from "react";
import {LayoutGrid} from "lucide-react";
import {Icon} from "lucide-react";
import {layoutGridMoveVertical} from "@lucide/lab";
import FilterButton from "@/components/gamePage/FilterButton";
import SortByButton from "@/components/gamePage/SortByButton";
import {AnimatePresence, motion} from "framer-motion";
import PaginationGamePage from "@/components/gamePage/PaginationGamePage";
import {PostsData} from "@/types/singlePost";
import {BlogGameCartSkeleton} from "@/components/main/BlogGameCartSkeleton";
import Cookies from "js-cookie";

const GamesPage = ({
  data,
  gridViewCookie,
}: {
  data: PostsData;
  gridViewCookie: boolean | undefined;
}) => {
  const [gridView, setGridView] = useState<boolean>(gridViewCookie ?? true);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleGridViewChange = (isGrid: boolean) => {
    setGridView(isGrid);
    Cookies.set("gridViewGameov", isGrid.toString(), {expires: 30});
    console.log(isGrid, "isGrid");
  };

  return (
    <div className="max-[700px]:px-4 max-[450px]:px-[3.5vw] pt-3">
      <div className="flex justify-between items-center mb-5 max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-4">
        <div className="flex gap-3 ">
          <h2 className="font-semibold text-[32px] max-[1100px]:text-[30px] max-[850px]:text-[28px] ">
            All Games{" "}
            <span className="text-secondary_text ml-2 max-[730px]:ml-1">
              {data.posts.pageInfo.totalPosts}
            </span>
          </h2>
        </div>
        <div className="flex gap-4 text-white/90 min-h-[45px] text-[15px] max-[800px]:gap-3 max-[730px]:gap-2">
          <div className="bg-transparent rounded-lg border border-border min-h-[40px] max-[80px]:hidden relative">
            <div
              className={`absolute top-0 h-full w-1/2 bg-bg rounded-lg transition-transform duration-300 ease-in-out ${
                gridView ? "translate-x-0" : "translate-x-full"
              }`}
            />

            <div className="relative flex">
              <button
                className={`rounded-lg p-2.5 h-full transition-colors duration-300 ease-in-out hover:text-white/90 ${
                  gridView ? "text-white" : "text-white/60"
                }`}
                onClick={() => handleGridViewChange(true)}>
                <LayoutGrid size={19} />
              </button>

              <button
                className={`rounded-lg p-2.5 h-full transition-colors duration-300 ease-in-out hover:text-white/90 ${
                  !gridView ? "text-white" : "text-white/60"
                }`}
                onClick={() => handleGridViewChange(false)}>
                <Icon iconNode={layoutGridMoveVertical} size={19} />
              </button>
            </div>
          </div>
          <SortByButton />
          <FilterButton />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={gridView ? "grid" : "list"}
          // variants={containerVariants}
          // initial="hidden"
          // animate="visible"
          // exit="exit"
          className={`grid  mt-5  max-[1131px]:grid-cols-2 max-[850px]:grid-cols-1  ${
            !gridView ? "!grid-cols-1" : "grid-cols-3 gap-5 "
          } `}>
          {data.posts.edges.map((item, index) => (
            <motion.div
              key={item.slug + index}
              custom={index}
              variants={cardVariants}
              layout>
              {isLoading ? (
                <BlogGameCartSkeleton gridView={gridView} />
              ) : (
                <BlogGameCart
                  item={item}
                  gridView={gridView}
                  totalItems={data.posts.edges.length}
                  index={index}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <PaginationGamePage pageInfo={data.posts.pageInfo} />
    </div>
  );
};

export default GamesPage;
