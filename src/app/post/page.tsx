import Image from "next/image";
import React from "react";

const Post = [
  {
    id: 1,
    title: "Black Myth: Wukong",
    author: "Olivia Rhye",
    date: "20 Jan 2022",
    image: "/post.jpg",
  },
];

const Page = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-2 mb-4">
        <h1 className="text-[40px] font-extrabold">Black Myth: Wukong</h1>
        <p className="text-sm text-white/50 font-medium">
          Olivia Rhye • 20 Jan 2022
        </p>
      </div>
      <div className="flex justify-between gap-4">
        <div className="relative w-full h-[545px]">
          <Image
            src="/post.jpg"
            alt="profile background"
            fill
            sizes="100vw"
            style={{objectFit: "cover"}}
            unoptimized
            className="rounded-2xl"
          />
        </div>
        <div className="bg-white/10 rounded-2xl w-[256px]">123123</div>
      </div>
    </div>
  );
};

export default Page;
