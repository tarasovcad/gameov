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
const data = [
  {
    icon: CalendarDays,
    title: "Updated",
    value: "30 Jan, 2023",
  },
  {
    icon: ChevronsLeftRight,
    title: "Game version",
    value: "v11938463",
  },
  {
    icon: CalendarDays,
    title: "Released Rate",
    value: "14 Apr, 2015",
  },
  {
    icon: SquarePen,
    title: "Developer",
    value: "Wargaming.net",
  },
  {
    icon: Languages,
    title: "Interface language",
    value: "Russian , English , German",
  },
  {
    icon: AudioLines,
    title: "Voice-over language",
    value: "English",
  },
  {
    icon: File,
    title: "Size",
    value: "1.5 GB",
  },
  {
    icon: AppWindow,
    title: "Platform",
    value: "PC, Mac",
  },
];

const PostSidebar = () => {
  return (
    <div className=" max-w-[280px] w-full flex flex-col max-[1100px]:hidden">
      <div className="my-4 self-center">
        <Image src="/game.png" alt="post" width={240} height={85} />
      </div>
      <div className="bg-[#181818] border border-[#212121] rounded-[8px] px-4 py-6  text-sm flex flex-col gap-4">
        {data.map((item, index) => {
          const {icon: Icon, title, value} = item;
          return (
            <div className="flex flex-col gap-1" key={index}>
              <div className="flex items-center justify-start gap-1">
                <Icon size={15} color="#A3A3A3" />
                <p className="text-[#A3A3A3]">{title}</p>
              </div>
              <p className="text-white font-semibold">{value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostSidebar;
