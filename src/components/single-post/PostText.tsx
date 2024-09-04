"use client";
import React, {useState} from "react";
import PostTabs from "./PostTabs";
import PostDescription from "./tabs/PostDescription";
import PostOtherVersions from "./tabs/PostOtherVersions";
import PostMinRequirements from "./tabs/PostMinRequirements";

const PostText = () => {
  const [selectedTab, setSelectedTab] = useState("Description");

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <PostTabs onTabChange={handleTabChange} />
      {selectedTab === "Description" && <PostDescription />}
      {selectedTab === "Min. requirements" && <PostMinRequirements />}
      {selectedTab === "Previous versions" && <PostOtherVersions />}
    </div>
  );
};

export default PostText;
