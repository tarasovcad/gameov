"use client";

import {cn} from "@/lib/utils";
import {motion} from "framer-motion";
import {useState} from "react";

const tabs = ["Description", "Min. requirements"];

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
  customID?: string;
}

const Tab = ({text, selected, setSelected, customID}: TabProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={` ${
        selected
          ? "text-red-500"
          : "hover:text-gray-900 dark:hover:text-gray-100"
      } relative rounded-md px-2 py-4 pt-2 text-sm font-medium text-gray-500 transition-colors duration-300 focus-within:outline-red-500/50`}>
      <span
        className={`relative z-10 duration-300 ease-in-out transition-colors text-base ${
          selected ? "text-white" : "text-white/50"
        }`}>
        {text}
      </span>

      {selected && (
        <motion.div
          className="absolute left-0 top-0 flex  h-full w-full items-end justify-center"
          layoutId={customID + "linetab"}
          transition={{type: "spring", duration: 0.4, bounce: 0, delay: 0.1}}>
          <span className="z-0 h-[2px] w-[90%]  bg-white"></span>
        </motion.div>
      )}
    </button>
  );
};

interface LineTabProps {
  center?: boolean;
  customID?: string;
  onTabChange: (tab: string) => void;
}

const PostTabs = ({center, customID, onTabChange}: LineTabProps) => {
  const [selected, setSelected] = useState<string>(tabs[0]);

  const handleTabChange = (tab: string) => {
    setSelected(tab);
    onTabChange(tab);
  };
  return (
    <div
      className={cn(
        "mb-8 flex flex-wrap items-center gap-2 border-b border-[#2E2E2E]",
        center && "justify-center",
      )}>
      {tabs.map((tab) => (
        <Tab
          text={tab}
          selected={selected === tab}
          setSelected={handleTabChange}
          key={tab}
          customID={customID}
        />
      ))}
    </div>
  );
};

export default PostTabs;
