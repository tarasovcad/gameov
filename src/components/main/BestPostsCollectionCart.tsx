"use client";
import {Eye, MessageSquare} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {Card} from "@/components/ui/card";
import {Post} from "@/types/postProps";
import FavoriteTooltip from "./FavoriteTooltip";
import {useState} from "react";

const BestPostsCollectionCart = ({item}: {item: Post}) => {
  const {section} = item;
  const listOfSmallIconImages = [
    "Mac OS Software",
    "Software",
    "Graphics and design",
  ];
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Link href={"/games/" + item.title}>
      <Card
        key={item.title}
        className="bg-bg overflow-hidden border-transparent transition-colors duration-300 ease-in-out gap-3 relative group flex w-full h-full hover:bg-bg/90"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}>
        {listOfSmallIconImages.includes(section || "") ? (
          <div className="flex justify-center items-center  relative w-full sm:w-56 flex-shrink-0 bg-[#252525] rounded-md">
            <div className="relative w-[75px] h-[75px] rounded-md">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className={`${isHovering ? "scale-105" : "scale-100"} transition-all duration-300 ease-in-out rounded-md`}
              />
            </div>
          </div>
        ) : (
          <div className="w-full sm:w-56 h-72 sm:h-auto relative flex-shrink-0 overflow-hidden rounded-md">
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100 scale-105 opacity-80 rounded-md"
            />
          </div>
        )}

        {/* <FavoriteTooltip /> */}
        <div className="flex flex-col flex-grow ">
          <span className="flex items-center text-[12px] text-[#888888] mb-2">
            {item.section}
          </span>
          <h3 className="text-[18px] font-bold  max-[1200px]:text-[18px] max-[1200px]:mb-[6px]">
            {item.title} ({item.year})
          </h3>
          <div className="flex-grow">
            <p className="text-secondary_text mb-7 text-[13px] max-[1150px]:text-[13px] max-[1150px]:mb-[20px] line-clamp-2">
              {item.description}
            </p>
          </div>
          <div className="flex justify-between text-sm text-secondary_text mt-auto ">
            <div className="flex items-center text-[13px]">
              <span className="mr-3 flex items-center">
                <Eye size={16} className="mr-1" /> {item.views}
              </span>
              <span className="flex items-center">
                <MessageSquare size={16} className="mr-1" /> {item.comments}
              </span>
            </div>
            <span className="flex items-center text-[13px]">{item.date}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BestPostsCollectionCart;
