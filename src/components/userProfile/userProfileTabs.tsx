"use client";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";

import {userTabs} from "@/data/UserProfileTabs";
import {useSearchParams} from "next/navigation";

interface TabProps {
  label: string;
  selected: boolean;
  component: JSX.Element;
  setSelected: (text: string) => void;
}

const Tab = ({label, selected, setSelected, component}: TabProps) => {
  return (
    <>
      <button
        onClick={() => setSelected(label)}
        className={`${
          selected ? "text-white" : "text-[#8E8E8E] hover:text-[#A2A2A2]"
        } relative rounded-full px-[24px] py-2 text-base font-bold transition-colors flex items-center gap-3 z-10`}>
        {component}
        <span className="relative z-10">{label}</span>
        {selected && (
          <motion.span
            layoutId="tab"
            transition={{type: "spring", duration: 0.5}}
            className="absolute inset-0 z-1 rounded-full bg-[#262626]"></motion.span>
        )}
      </button>
    </>
  );
};

const UserProfileTabs = ({setTabs}: {setTabs: (text: string) => void}) => {
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") || "profile";
  return (
    <div className="mb-8 flex flex-wrap items-center gap-1">
      {userTabs.map((tab, index) => (
        <Tab
          label={tab.label}
          component={tab.component}
          selected={currentTab === tab.label.toLocaleLowerCase()}
          setSelected={setTabs}
          key={index}
        />
      ))}
    </div>
  );
};

export default UserProfileTabs;
