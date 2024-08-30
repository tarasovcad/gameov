import Image from "next/image";
import React from "react";
import PostImageSlider from "@/components/single-post/PostImageSlider";
{
  /* <div className="bg-white/10 rounded-2xl w-[256px]">123123</div> */
}
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
        <PostImageSlider />
      </div>
    </div>
  );
};

export default Page;
