"use client";
import React, {useState} from "react";
import PostTabs from "./PostTabs";
const PostText = () => {
  const [selectedTab, setSelectedTab] = useState("Description");

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };
  return (
    <div>
      <PostTabs onTabChange={handleTabChange} />
      {selectedTab === "Description" && <div>Description</div>}
      {selectedTab === "Min. requirements" && <div>Min. requirements</div>}
    </div>
  );
};

export default PostText;
