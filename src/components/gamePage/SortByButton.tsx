"use client";
import React, {useEffect, useState} from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {ArrowDownUp} from "lucide-react";
import {sortBySection} from "@/data/filterSection";

const SortByButton = () => {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [sortInput, setSortInput] = useState("Newest");
  const [alignItems, setAlignItems] = useState<"start" | "center" | "end">(
    "center",
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 730) {
        setAlignItems("end");
      } else {
        setAlignItems("center");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Popover open={popoverVisible} onOpenChange={setPopoverVisible}>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-2.5 rounded-md bg-bg py-[6px] px-5 border border-border hover:bg-border/50 transition-colors duration-300 ease-in-out max-[730px]:px-[12px] ">
          <ArrowDownUp size={18} />{" "}
          <span className="max-[730px]:hidden">Sort By</span>
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[225px] bg-bg rounded-lg p-0 py-4"
        sideOffset={10}
        align={alignItems}
        alignOffset={alignItems === "center" ? 0 : -52}
        onOpenAutoFocus={(e) => e.preventDefault()}>
        <div className="text-white/90 text-[14px] flex flex-col gap-2 ">
          <h2 className="px-4 text-[16px] font-medium">Sort By</h2>
          <div className="stroke"></div>
          <div className="flex flex-col px-2 gap-[2px]">
            {sortBySection.options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  setPopoverVisible(false);
                  setSortInput(option);
                }}
                className={`transition-colors duration-200 ease-in-out hover:bg-[#1a1a1a] py-2 rounded-md px-2 text-start text-[14.5px] text-secondary_text ${sortInput === option && "bg-[#1a1a1a] text-white"}`}>
                {option}
              </button>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SortByButton;
