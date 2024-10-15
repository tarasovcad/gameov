"use client";
import {Eye, MessageSquare} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {Card} from "@/components/ui/card";
import {Post} from "@/types/postProps";
import FavoriteTooltip from "./FavoriteTooltip";
import {useState} from "react";

const PopularBlogsCart = ({item}: {item: Post}) => {
  return (
    <Link href={"/games/" + item.title}>
      <Card
        key={item.title}
        className="bg-bg dark:bg-white overflow-hidden border transition-colors duration-300 ease-in-out border-border/40 hover:border-border dark:hover:border-border relative group flex flex-col w-full h-full hover:bg-bg/90 dark:hover:bg-white/60 ">
        <div className="aspect-[16/9] min-[1330px]:h-44 relative w-full max-[1159px]:aspect-[23/10] max-[1030px]:aspect-[23/9]  max-[789px]:aspect-[23/8] max-[731px]:aspect-[10/3] overflow-hidden max-[630px]:aspect-[16/7]">
          <Image
            src={item.image}
            alt={item.title}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100 scale-105 opacity-80 dark:opacity-90"
          />
        </div>
        <FavoriteTooltip reverseStyle={true} />
        <div className="p-4 flex flex-col flex-grow ">
          <h3 className="text-[#F8FAFC] dark:text-[#292929] text-xl font-bold mb-2 max-[1200px]:text-[18px] max-[1200px]:mb-[6px]">
            {item.title} ({item.year})
          </h3>
          <div className="flex-grow">
            <p className="text-secondary_text dark:text-[#464646] mb-6 text-sm max-[1150px]:text-[13px] max-[1150px]:mb-[20px]">
              {item.description}
            </p>
          </div>
          <div className="flex justify-between text-sm text-secondary_text dark:text-[#5E5E5E] mt-auto ">
            <div className="flex items-center text-sm">
              <span className="mr-3 flex items-center">
                <Eye size={16} className="mr-1" /> {item.views}
              </span>
              <span className="flex items-center">
                <MessageSquare size={16} className="mr-1" /> {item.comments}
              </span>
            </div>
            <span className="flex items-center">{item.date}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default PopularBlogsCart;
