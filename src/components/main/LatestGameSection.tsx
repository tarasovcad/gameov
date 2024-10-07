"use client";
import {Game} from "@/types/postProps";
import React, {useState} from "react";
import {motion} from "framer-motion";
import {ChevronLeft, ChevronRight} from "lucide-react";
import Link from "next/link";
import GameCartMainMenu from "./GameCartMainMenu";
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
} from "@/components/ui/Carousel";

const LatestGameSection = ({games}: {games: Game[]}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Carousel>
      <div className="max-[700px]:px-4 max-[450px]:px-[5vw]">
        <div className="flex justify-between items-center">
          <Link
            href={"/games"}
            className="flex items-center justify-start gap-3 text-white w-fit mb-8"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
            <h2 className="font-semibold text-[28px]">Latest Games</h2>
            <motion.div
              animate={{x: isHover ? 5 : 0}}
              transition={{type: "spring", stiffness: 100}}>
              <ChevronRight size={28} className="cursor-pointer" />
            </motion.div>
          </Link>
          <CarouselNavigation />
        </div>
      </div>

      <div className="relative w-full px-4 max-w-[1100px] ">
        <CarouselContent className="-ml-[32px]">
          {games.map((game, index) => (
            <CarouselItem className="basis-1/3 pl-[17px] " key={index}>
              <GameCartMainMenu game={game} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
    </Carousel>
  );
};
export default LatestGameSection;
