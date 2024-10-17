import BlogGameCart from "@/components/main/BlogGameCart";
import {gamesList} from "@/data/fakePostData";
import React from "react";
import {ArrowDownUp, Filter, LayoutGrid, SlidersHorizontal} from "lucide-react";
import {Icon} from "lucide-react";
import {layoutGridMoveVertical} from "@lucide/lab";
import FilterButton from "@/components/gamePage/FilterButton";
const GamesPage = () => {
  const doubledGamesList = [...gamesList, ...gamesList];
  return (
    <div className="max-[700px]:px-4 max-[450px]:px-[2.5vw] pt-3">
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-semibold text-[35px] max-[700px]:text-[23px] max-[600px]:text-[22px] ">
          All Games
        </h2>
        <div className="flex gap-4 text-white/90 text-[15px]">
          <div className="bg-transparent rounded-lg border border-border  min-h-[40px]">
            <button className="bg-bg rounded-lg p-2.5 h-full">
              <LayoutGrid size={19} />
            </button>
            <button className=" rounded-lg p-2.5 h-full text-white/60 transition-colors duration-300 ease-in-out hover:text-white/90">
              <Icon iconNode={layoutGridMoveVertical} size={19} />
            </button>
          </div>
          <button className="flex items-center gap-2.5 rounded-md bg-bg py-[6px] px-5 border border-border hover:bg-border/50 transition-colors duration-300 ease-in-out">
            <ArrowDownUp size={18} /> Sort By
          </button>
          <FilterButton />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5">
        {doubledGamesList.map((item, index) => (
          <BlogGameCart item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default GamesPage;
