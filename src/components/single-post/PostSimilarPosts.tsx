import React from "react";
import Image from "next/image";
const PostSimilarPosts = () => {
  const similarPosts = [
    {
      image: "/game1.jpg",
      title: "The Witcher 3",
      category: "PC Games",
    },
    {
      image: "/game2.jpg",
      title: "The Last of Us",
      category: "PC Games",
    },
    {
      image: "/game3.jpeg",
      title: "Genshin Impact",
      category: "PC Games",
    },
    {
      image: "/game5.jpg",
      title: "Uncharted 4",
      category: "PC Games",
    },
    {
      image: "/game4.jpg",
      title: "Cyberpunk 2077",
      category: "PC Games",
    },
    {
      image: "/game6.jpg",
      title: "God of War",
      category: "PC Games",
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      {similarPosts.map((post, index) => {
        return (
          <div
            className="flex justify-start gap-3 items-start hover:bg-white/10 transition-all duration-300 rounded-[8px] cursor-pointer p-2"
            key={index}>
            <div className="relative w-[60px] h-[60px]">
              <Image
                className="rounded-[8px]"
                src={post.image}
                alt="Post Image"
                unoptimized
                fill
                width={0}
                height={0}
                style={{objectFit: "cover"}}
              />
            </div>
            <div className=" flex flex-col gap-1 mt-1">
              <h3 className="text-white text-[16px] font-semibold">
                {post.title}
              </h3>
              <p className="text-white/80 text-sm font-medium">
                {post.category}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostSimilarPosts;
