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

const data = [
  {
    icon: History,
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

const PostSidebarAtSmallScreen = () => {
  return (
    <div>
      <div className="text-sm flex flex-col gap-5">
        {data.map((item, index) => {
          const {icon: Icon, title, value} = item;
          return (
            <div className="flex flex-col gap-1 relative" key={index}>
              <div className="flex items-center justify-start gap-1">
                <Icon size={15} className="text-whit" />
                <p className="text-white text-[15px] font-semibold">{title}</p>
              </div>
              <div className=" text-[#A3A3A3] text-[14px] ">{value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostSidebarAtSmallScreen;
