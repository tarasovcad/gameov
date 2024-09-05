import React from "react";
import {
  CalendarDays,
  ChevronsLeftRight,
  SquarePen,
  Languages,
  AudioLines,
  File,
  AppWindow,
} from "lucide-react";
import Image from "next/image";
import PostSidebarLanguages from "./PostSidebarLanguages";
import PostSimilarPosts from "./PostSimilarPosts";

const data = [
  {
    icon: ChevronsLeftRight,
    title: "Game version",
    value: "v11938463",
  },
  {
    icon: CalendarDays,
    title: "Publisher",
    value: "Newnight",
  },
  {
    icon: SquarePen,
    title: "Developer",
    value: "Endnight Games Ltd",
  },
  {
    icon: CalendarDays,
    title: "Released Rate",
    value: "14 Apr, 2015",
  },
  {
    icon: Languages,
    title: "Interface language",
    value:
      "British,Russian, English, German, French, Spanish, Italian, Portuguese, Turkish, Polish, Dutch, Czech, Hungarian, Romanian, Bulgarian, Greek, Russian",
  },
  {
    icon: AppWindow,
    title: "Platform",
    value: "PC, Mac",
  },
];

const tags = ["Games 2024", "Horror", "Adventure", "Action", "RPG", "Indie"];

const PostSidebar = () => {
  return (
    <div className=" max-w-[300px] w-full flex flex-col max-[1200px]:hidden">
      <div className="my-4 self-center">
        <Image src="/game_logo.png" alt="post" width={240} height={85} />
      </div>
      <div className="flex flex-col gap-5">
        <div className="bg-[#181818] border border-[#212121] rounded-[8px] px-5 py-5  text-sm flex flex-col gap-5">
          <div className="w-full border-b border-[#212121] ">
            <h2 className="text-white text-[20px] font-semibold mb-4">
              Product Information
            </h2>
          </div>
          {data.map((item, index) => {
            const {icon: Icon, title, value} = item;
            return (
              <div className="flex flex-col gap-1 relative" key={index}>
                <div className="flex items-center justify-start gap-1">
                  <Icon size={15} className="text-whit" />
                  <p className="text-white text-[15px] font-semibold">
                    {title}
                  </p>
                </div>
                <div className=" text-[#A3A3A3] text-[14px] ">
                  {title === "Interface language" ? (
                    <PostSidebarLanguages value={value} />
                  ) : (
                    value
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-[#181818] border border-[#212121] rounded-[8px] px-5 py-5  text-sm flex flex-col gap-5">
          <div className="w-full border-b border-[#212121] ">
            <h2 className="text-white text-[20px] font-semibold mb-4">Tags</h2>
          </div>
          <div className="flex items-center gap-2 flex-wrap mt-4">
            {tags.map((tag, index) => {
              return (
                <span
                  className="border border-white rounded-full px-2 font-medium py-[2px] text-[13px]"
                  key={index}>
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
        <div className="bg-[#181818] border border-[#212121] rounded-[8px] px-5 py-5  text-sm flex flex-col gap-5">
          <div className="w-full border-b border-[#212121] ">
            <h2 className="text-white text-[20px] font-semibold mb-4">
              Advertising
            </h2>
          </div>
          <h2 className="text-center text-white/80 text-[18px] leading-normal py-6">
            Here could be your advertising
          </h2>
        </div>
        <div className="bg-[#181818] border border-[#212121] rounded-[8px] px-5 py-5  text-sm flex flex-col gap-5">
          <div className="w-full border-b border-[#212121] ">
            <h2 className="text-white text-[20px] font-semibold mb-4">
              Related Products
            </h2>
          </div>
          <PostSimilarPosts />
        </div>
      </div>
    </div>
  );
};

export default PostSidebar;
