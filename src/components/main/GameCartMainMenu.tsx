"use client";
import {
  ArrowUpRight,
  Calendar,
  Check,
  Eye,
  MessageSquare,
  Plus,
  PlusCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {AnimatePresence, motion} from "framer-motion";

import {Card, CardContent} from "@/components/ui/card";
import {useCallback, useEffect, useRef, useState} from "react";

import useCustomToast from "@/hooks/useCustomToast";
import {Game} from "@/types/postProps";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/Tooltip";

const GameCartMainMenu = ({game}: {game: Game}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [tooltipText, setTooltipText] = useState("Add to favorites");
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipTimeoutRef = useRef<NodeJS.Timeout>();
  const toast = useCustomToast();

  useEffect(() => {
    setTooltipText(isFavorite ? "Remove from favorites" : "Add to favorites");
  }, [isFavorite]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setIsFavorite((prev) => !prev);
      toast.info(isFavorite ? "Removed from favorites" : "Added to favorites");
    },
    [isFavorite, toast],
  );

  const handleMouseEnter = useCallback(() => {
    if (tooltipTimeoutRef.current) {
      clearTimeout(tooltipTimeoutRef.current);
    }
    setShowTooltip(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    tooltipTimeoutRef.current = setTimeout(() => {
      setShowTooltip(false);
    }, 100);
  }, []);

  useEffect(() => {
    return () => {
      if (tooltipTimeoutRef.current) {
        clearTimeout(tooltipTimeoutRef.current);
      }
    };
  }, []);

  return (
    <Link href={"/games/" + game.title}>
      <Card
        key={game.title}
        className="bg-bg overflow-hidden border border-border relative group flex flex-col w-full h-full">
        <div className="relative w-full min-[1300px]:h-48 aspect-[16/9] max-[1170px]:aspect-[16/10] max-[1100px]:aspect-[16/8] max-[769px]:aspect-[10/4] max-[701px]:aspect-[10/3] overflow-hidden max-[600px]:aspect-[16/7]">
          <Image
            src={game.image}
            alt={game.title}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100 scale-105 opacity-80"
          />
        </div>

        <div className="p-4 flex flex-col flex-grow ">
          <h3 className="text-xl font-bold mb-2 max-[1200px]:text-[18px] max-[1200px]:mb-[6px]">
            {game.title} ({game.year})
          </h3>
          <div className="flex-grow">
            <p className="text-secondary_text mb-6 text-sm max-[1150px]:text-[13px] max-[1150px]:mb-[20px]">
              {game.description}
            </p>
          </div>
          <div className="flex justify-between text-sm text-secondary_text mt-auto ">
            <div className="flex items-center text-sm">
              <span className="mr-3 flex items-center">
                <Eye size={16} className="mr-1" /> {game.views}
              </span>
              <span className="flex items-center">
                <MessageSquare size={16} className="mr-1" /> {game.comments}
              </span>
            </div>
            <span className="flex items-center">{game.date}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default GameCartMainMenu;
