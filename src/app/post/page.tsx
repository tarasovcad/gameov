import Image from "next/image";
import React from "react";
import PostImageSlider from "@/components/single-post/PostImageSlider";
import PostSidebar from "@/components/single-post/PostSidebar";
import PostText from "@/components/single-post/PostText";
import PostAccordion from "@/components/single-post/PostAccordion";
import AccordionExample from "@/components/single-post/PostAccordion";
import PostDownload from "@/components/single-post/PostDownload";

const accordionItems = [
  {
    title: "How to install and activate?",
    content:
      "Discover new worlds of information with our interactive learning platform.",
  },
  {
    title: "Is the program damaged? Broken file? Or other errors?",
    content:
      "Experience cutting-edge educational techniques that adapt to your unique learning style.",
  },
  {
    title: "How to update? Officially? What will happen to activation?",
    content:
      "Connect with learners worldwide and share insights in our vibrant, diverse community.",
  },
  {
    title: "How to download? Link not working? What kind of .torrent?",
    content:
      "Track your progress and receive tailored recommendations to accelerate your learning journey.",
  },
  {
    title: "An update has been released. When will you update the version?",
    content:
      "Track your progress and receive tailored recommendations to accelerate your learning journey.",
  },
  {
    title: "Add... Where is the ordering table?",
    content:
      "Track your progress and receive tailored recommendations to accelerate your learning journey.",
  },
  {
    title: "How to change language?",
    content:
      "Track your progress and receive tailored recommendations to accelerate your learning journey.",
  },
];

const Post = () => {
  return (
    <div className="p-4 max-[1100px]:p-2 max-[1200px]:pr-6">
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
          <div className="flex flex-col gap-5">
            <div className="bg-[#181818] w-full rounded-[12px] p-6">
              <PostText />
            </div>
            <div className="bg-[#181818] w-full rounded-[12px] p-6">
              <h2 className="text-[22px] font-semibold mb-4 mt-1">FAQ</h2>
              <PostAccordion items={accordionItems} />
            </div>
            <div className="bg-[#181818] w-full rounded-[12px] p-6 pb-5">
              <PostDownload />
            </div>
            <div className="bg-[#181818] w-full rounded-[12px] p-6">
              <h2 className="text-[22px] font-semibold mb-16 mt-1">Comments</h2>
            </div>
          </div>
        </div>
        <PostSidebar />
      </div>
    </div>
  );
};

export default Post;
