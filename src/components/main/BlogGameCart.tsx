import {Eye, MessageSquare} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {format} from "date-fns";
import FavoriteTooltip from "./FavoriteTooltip";
import {Post} from "@/types/singlePost";
import {useState} from "react";
import ImageWithFallback from "@/errorBoundaries/ImageWithFallback";
const BlogGameCart = ({
  item,
  gridView = true,
  totalItems = 1,
  index = 0,
}: {
  item: Post;
  gridView?: boolean | null;
  totalItems?: number;
  index?: number;
}) => {
  const formatDate = (timestamp: string | number) => {
    try {
      const date =
        typeof timestamp === "string" ? parseInt(timestamp) : timestamp;
      return format(new Date(date), "dd MMM yyyy");
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid date";
    }
  };

  const generateRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const isFirst = index === 0;
  const isLast = index === totalItems - 1;
  return (
    <Link href={item.slug || ""}>
      <div
        key={item.title}
        className={`bg-white dark:bg-bg overflow-hidden  transition-colors duration-300 ease-in-out   relative group 
        ${
          gridView
            ? "flex flex-col w-full h-full border-border/40 border rounded-lg "
            : "flex flex-row items-center gap-4 p-4 h-[80px] border-b border-x border-border/40    "
        } 
        ${isFirst ? "rounded-t-lg border-t" : ""} 
        ${isLast ? "rounded-b-lg" : ""}
        
        dark:hover:bg-bg/80 hover:bg-white/60`}>
        <div
          className={`relative ${
            gridView
              ? "aspect-[339/156] w-full max-[850px]:aspect-auto max-[850px]:h-[200px] overflow-hidden "
              : "h-full aspect-square "
          }`}>
          <ImageWithFallback
            src={item.images[0]}
            alt={item.title + " image"}
            // fallbackSrc="/custom-fallback.svg"
            className={`transition-all duration-300 ease-in-out object-cover ${
              gridView
                ? "group-hover:scale-100 group-hover:opacity-100 scale-105"
                : "object-cover rounded-md group-hover:scale-105 scale-100"
            } dark:opacity-80 opacity-90`}
            fill
            priority
          />
        </div>

        {gridView && <FavoriteTooltip />}

        <div
          className={`${gridView ? "p-4 flex flex-col flex-grow" : "flex flex-grow justify-between items-center"}`}>
          <div className={`${!gridView && "flex-grow"}`}>
            <h3
              className={`dark:text-[#F8FAFC] font-bold text-[#292929]
              ${
                gridView
                  ? "text-xl mb-2 max-[1200px]:text-[18px] max-[1200px]:mb-[6px]"
                  : "text-lg mb-0 font-semibold !text-[15px] line-clamp-1"
              }`}>
              {item.title}
            </h3>

            {gridView && (
              <p className="dark:text-secondary_text line-clamp-2 text-[#464646] mb-6 text-sm max-[1150px]:text-[13px] max-[1150px]:mb-[20px]">
                {item.cardDescription}
              </p>
            )}
          </div>

          <div
            className={`flex ${gridView ? "justify-between" : "gap-8"} text-sm dark:text-secondary_text text-[#5E5E5E] ${gridView ? "mt-auto" : "pl-3 "}`}>
            <div
              className={`flex items-center ${gridView ? "" : "max-[450px]:hidden"}`}>
              <span className="mr-3 flex items-center" suppressHydrationWarning>
                <Eye size={16} className="mr-1" />
                {generateRandomNumber(1, 1000)}
              </span>
              <span className="flex items-center" suppressHydrationWarning>
                <MessageSquare size={16} className="mr-1" />
                {generateRandomNumber(1, 100)}
              </span>
            </div>
            <span
              className={`flex items-center  ${!gridView ? "max-[745px]:hidden" : ""}`}>
              {formatDate(item.date)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogGameCart;
