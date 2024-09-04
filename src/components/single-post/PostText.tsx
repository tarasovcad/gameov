"use client";
import React, {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import PostTabs from "./PostTabs";
import PostDescription from "./tabs/PostDescription";
import PostOtherVersions from "./tabs/PostOtherVersions";
import PostMinRequirements from "./tabs/PostMinRequirements";

const PostText = () => {
  const [selectedTab, setSelectedTab] = useState("Description");

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  const contentVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0},
    exit: {opacity: 0, y: -20},
  };

  return (
    <div>
      <PostTabs onTabChange={handleTabChange} />
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTab}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={contentVariants}
          transition={{duration: 0.15, ease: "easeInOut"}}>
          {selectedTab === "Description" && <PostDescription />}
          {selectedTab === "Min. requirements" && <PostMinRequirements />}
          {selectedTab === "Previous versions" && <PostOtherVersions />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PostText;
