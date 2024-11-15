"use client";

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
import SinglePostCard from "../main/SinglePostCard";

interface CategoryOption {
  graphqlValue: string;
  searchParams: string;
  label: string;
}

const ListOfPosts = ({
  data,
  gridViewCookie,
  selectedCategory,
}: {
  data: PostsData;
  gridViewCookie: boolean | undefined;
  selectedCategory: CategoryOption;
}) => {
  const [gridView, setGridView] = useState<boolean>(gridViewCookie ?? true);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [currentData, setCurrentData] = useState(data);
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
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
    setCurrentData(data);
  }, [data]);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isInitialLoad) {
      setIsInitialLoad(false);
    }
  }, [isInitialLoad]);

  const handleGridViewChange = (isGrid: boolean) => {
    setGridView(isGrid);
    Cookies.set("gridViewGameov", isGrid.toString(), {expires: 30});
  };

  const isPcGames = selectedCategory.searchParams === "pc-games";

  console.log(`${gridView}-${data.posts.edges[0]?.slug}`, "key");
  return (
    <div className="max-[700px]:px-4 max-[450px]:px-[3.5vw]">
      <div className="flex justify-between items-center mb-5 max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-4">
        <div className="flex gap-3 ">
          <h2 className="font-semibold text-[32px] max-[1100px]:text-[30px] max-[850px]:text-[28px] ">
            {selectedCategory.label}{" "}
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
          key={`${gridView}-${data.posts.edges[0]?.slug}`}
          variants={containerVariants}
          initial={isInitialLoad ? undefined : "hidden"}
          animate={isInitialLoad ? undefined : "visible"}
          exit={isInitialLoad ? undefined : "exit"}
          className={`grid mt-5   ${
            !gridView
              ? "!grid-cols-1"
              : (isPcGames
                  ? "grid-cols-3 max-[1131px]:grid-cols-2 max-[850px]:grid-cols-1"
                  : "grid-cols-4 max-[1390px]:grid-cols-3 max-[870px]:grid-cols-2 max-[590px]:grid-cols-1") +
                " gap-5"
          }  `}>
          {currentData.posts.edges.map((item, index) => (
            <motion.div
              key={item.slug + index}
              custom={index}
              variants={cardVariants}
              layout>
              {isLoading ? (
                <BlogGameCartSkeleton gridView={gridView} />
              ) : (
                <SinglePostCard
                  item={item}
                  gridView={gridView}
                  totalItems={data.posts.edges.length}
                  index={index}
                  cardType={selectedCategory.searchParams}
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

export default ListOfPosts;
