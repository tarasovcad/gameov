import Image from "next/image";
import React from "react";
import PostImageSlider from "@/components/single-post/PostImageSlider";
import PostSidebar from "@/components/single-post/PostSidebar";
import PostText from "@/components/single-post/PostText";
const Post = () => {
  return (
    <div className="p-4 max-[1100px]:p-2 max-[1100px]:pr-4">
      <div className="flex flex-col gap-1 mb-4">
        <h1 className="text-[40px] font-extrabold">Black Myth: Wukong</h1>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="border border-white rounded-full px-2 font-semibold py-[2px] text-[14px]">
            Games 2024
          </span>
          <span className="border border-white rounded-full px-2 font-semibold py-[2px] text-[14px]">
            Action
          </span>
          <span className="border border-white rounded-full px-2 font-semibold py-[2px] text-[14px]">
            China
          </span>
        </div>
        {/* <p className="text-sm text-white/50 font-medium">
          Olivia Rhye • 20 Jan 2022
        </p> */}
      </div>
      <div className="flex justify-between gap-4">
        <div className="w-full flex flex-col">
          <PostImageSlider />
          <div className="bg-[#181818] w-full rounded-[8px] p-4">
            <PostText />
          </div>
        </div>
        <PostSidebar />
      </div>
    </div>
  );
};

export default Post;
