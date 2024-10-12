"use client";
import {bestPostsList, gamesList, mostWishedList} from "@/data/fakePostData";
import {motion} from "framer-motion";
import {ChevronRight} from "lucide-react";
import Link from "next/link";
import React, {useState} from "react";
import BestPostsCollectionCart from "./BestPostsCollectionCart";

const BestPostsCollection = () => {
  const [isHoverDownloaded, setIsHoverDownloaded] = useState(false);
  const [isHoverWished, setIsHoverWished] = useState(false);
  return (
    <div className=" grid grid-cols-2 gap-[20px] ">
      <div className="bg-bg  py-[25px] px-[20px] rounded-md border-border/40 border">
        <Link
          href={"/"}
          className="flex items-center justify-center gap-2 text-white w-fit  hover:text-white/80 transition-colors duration-300 ease-in-out"
          onMouseEnter={() => setIsHoverDownloaded(true)}
          onMouseLeave={() => setIsHoverDownloaded(false)}>
          <h2 className="font-semibold text-[22px] ">Most Downloaded</h2>
          <motion.div
            animate={{x: isHoverDownloaded ? 5 : 0}}
            transition={{type: "spring", stiffness: 100}}>
            <ChevronRight size={25} className="cursor-pointer" />
          </motion.div>
        </Link>
        <div className="mt-4 flex flex-col gap-[25px]">
          {bestPostsList.map((item, index) => (
            <BestPostsCollectionCart key={index} item={item} />
          ))}
        </div>
      </div>
      <div className="bg-bg  py-[25px] px-[20px] rounded-md border-border/40 border">
        <Link
          href={"/"}
          className="flex items-center justify-center gap-2 text-white w-fit  hover:text-white/80 transition-colors duration-300 ease-in-out"
          onMouseEnter={() => setIsHoverWished(true)}
          onMouseLeave={() => setIsHoverWished(false)}>
          <h2 className="font-semibold text-[22px] ">Most Wished </h2>
          <motion.div
            animate={{x: isHoverWished ? 5 : 0}}
            transition={{type: "spring", stiffness: 100}}>
            <ChevronRight size={25} className="cursor-pointer" />
          </motion.div>
        </Link>
        <div className="mt-4 flex flex-col gap-[25px]">
          {mostWishedList.map((item, index) => (
            <BestPostsCollectionCart key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestPostsCollection;
