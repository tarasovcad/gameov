import {DropdownMenuShortcut} from "@/components/ui/dropdown-menu";
import {Search} from "lucide-react";
import React from "react";

const SidebarInput = () => {
  return (
    <div>
      <div className="relative w-full">
        <button className="w-full border rounded-[8px] py-[7px] pl-[35px] pr-3 placeholder:font-normal font-medium cursor-pointer transition-all duration-300 ease-in-out dark:bg-[#151517] dark:text-secondary_text dark:hover:border-[#525252] text-[14px] border-border/60">
          <div className="flex items-center justify-between w-full">
            <span className="text-left">Search...</span>
            <p className="text-right text-[10px] dark:bg-[#2c2c2c] bg-[#797979] text-white/70 px-1.5 py-[3px] rounded-md">
              <span className="text-[9px]">⌘</span>{" "}
              <span className="ml-[0.5px]">T</span>
            </p>
          </div>

          <span className="absolute inset-y-0 left-0 flex items-center pl-3 searchsvg">
            <Search size={16} />
          </span>
        </button>
      </div>

      <Search
        size={22}
        className="min-[701px]:hidden cursor-pointer transition-all duration-200 ease-in-out"
      />
    </div>
  );
};

export default SidebarInput;
