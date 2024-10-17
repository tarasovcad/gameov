"use client";
import {ChevronDown, Filter, X} from "lucide-react";
import React, {useState} from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {filterSectionGame} from "@/data/filterSection";
import {ScrollArea} from "../ui/scroll-area";

interface OpenPopovers {
  [key: string]: boolean;
}

const FilterButton = () => {
  const [openPopovers, setOpenPopovers] = useState<OpenPopovers>({});

  const togglePopover = (title: string) => {
    setOpenPopovers((prev) => {
      const allClosed = Object.keys(prev).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {} as OpenPopovers);
      return {
        ...allClosed,
        [title]: !prev[title],
      };
    });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-2.5 rounded-md bg-bg py-[6px] px-5 border border-border hover:bg-border/50 transition-colors duration-300 ease-in-out">
          <Filter size={18} /> Filter
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[300px] bg-bg rounded-lg p-0 py-4"
        align="end"
        alignOffset={0}
        sideOffset={10}
        onOpenAutoFocus={(e) => e.preventDefault()}>
        <div className="text-white/90 text-[14px] flex flex-col gap-2.5 ">
          <h2 className="px-4 text-[16px]">Filters</h2>
          <div className="stroke"></div>
          <div className="flex flex-col gap-2.5 px-4">
            {filterSectionGame.map((item) => {
              return (
                <button
                  className="relative"
                  key={item.title}
                  onClick={() => togglePopover(item.title)}>
                  <input
                    type="text"
                    autoFocus={false}
                    placeholder={item.title}
                    className="rounded-md bg-[#1a1a1a] pl-3 px-2 py-[9px] w-full  placeholder:text-secondary_text font-medium border border-border"
                  />
                  <ChevronDown
                    size={18}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-secondary_text"
                  />
                  {openPopovers[item.title] && (
                    <div className="absolute top-full left-0 w-full border-b border-x bg-[#272727] rounded-lg pb-2 text-white/90 z-10 ">
                      <ScrollArea className="h-[196px] w-full rounded-md  text-start p-1 flex gap-4">
                        <div className="flex flex-col ">
                          {item?.options?.map((option, index) => (
                            <p
                              key={index}
                              className="transition-colors duration-200 ease-in-out hover:bg-[#1a1a1a] py-1.5 rounded-md px-2">
                              {option}
                            </p>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
          <div>
            <div className="stroke"></div>
            <div className="flex gap-2.5 items-center justify-between mt-3 text-sm px-4">
              <button className=" py-2 rounded-md flex items-center gap-2 text-secondary_text transition-colors duration-300 ease-in-out hover:text-white">
                <X size={16} /> Reset All
              </button>
              <button className="bg-white text-black px-5 py-2 rounded-md border border-border transition-colors duration-300 ease-in-out hover:bg-white/80">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FilterButton;
