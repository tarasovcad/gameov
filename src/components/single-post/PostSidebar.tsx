import React from "react";
import {
  CalendarDays,
  ChevronsLeftRight,
  SquarePen,
  Languages,
  AudioLines,
  File,
  AppWindow,
  History,
} from "lucide-react";
import Image from "next/image";
import PostSidebarLanguages from "./PostSidebarLanguages";
import PostSimilarPosts from "./PostSimilarPosts";
import PostTags from "./PostTags";
import PostSidebarSection from "./PostSidebarSection";
import {Icon} from "@iconify/react";

const data = [
  {
    icon: Icon,
    optional: "lineicons:game",
    title: "Game version",
    value: "v11938463",
  },
  {
    icon: Icon,
    optional: "streamline:computer-pc-desktop",
    title: "Publisher",
    value: "Newnight",
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
    icon: Icon,
    optional: "material-symbols:record-voice-over-outline-rounded",
    title: "Voice language",
    value: "Italian, Portuguese, Turkish",
  },
  {
    icon: AppWindow,
    title: "Platform",
    value: "PC, Mac",
  },
];

const PostSidebar = () => {
  return (
    <div className=" max-w-[325px] w-full flex flex-col max-[1200px]:hidden gap-4">
      <PostSidebarSection title="Product Information">
        <div className="flex flex-col gap-5">
          {data.map((item, index) => {
            const {icon: Icon, title, value, optional} = item;
            return (
              <div className="flex flex-col gap-1 relative " key={index}>
                <div className="flex items-center justify-start gap-2 ">
                  {optional ? (
                    <Icon icon={optional} fontSize={16} />
                  ) : (
                    <Icon size={16} className="text-white" icon={""} />
                  )}
                  <p className="text-white text-[15px] font-semibold">
                    {title}
                  </p>
                </div>
                <div className=" text-secondary_text text-[14px] ">
                  {title === "Interface language" ||
                  title === "Voice language" ? (
                    <PostSidebarLanguages value={value} />
                  ) : (
                    value
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </PostSidebarSection>

      <PostSidebarSection title="Tags">
        <PostTags />
      </PostSidebarSection>

      <PostSidebarSection title="Advertising">
        <h2 className="text-center text-secondary_text text-[16px] py-8">
          Here could be your advertising
        </h2>
      </PostSidebarSection>

      <PostSidebarSection title="You may also like">
        <PostSimilarPosts />
      </PostSidebarSection>
    </div>
  );
};

export default PostSidebar;
