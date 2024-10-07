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
        className="bg-bg overflow-hidden border border-border relative group flex flex-col w-full">
        <div className="overflow-hidden h-48 relative ">
          <Image
            src={game.image}
            alt={game.title}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100 scale-105 opacity-80"
          />
        </div>
        <TooltipProvider delayDuration={50}>
          <Tooltip open={showTooltip}>
            <div className="absolute top-[9px] right-[9px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <TooltipTrigger asChild>
                <button
                  className="p-[6px] rounded-full flex items-center justify-center"
                  onClick={handleClick}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                  <motion.div className="p-[6px] bg-bg rounded-full flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      {!isFavorite ? (
                        <motion.div
                          key="plus"
                          initial={{rotate: 0}}
                          animate={{rotate: 90}}
                          exit={{rotate: 180, opacity: 0}}
                          transition={{duration: 0.3}}>
                          <Plus size={16} strokeWidth={3} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="check"
                          initial={{scale: 0}}
                          animate={{scale: 1}}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}>
                          <Check size={16} strokeWidth={3} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </button>
              </TooltipTrigger>
            </div>
            <TooltipContent>
              <p>{tooltipText}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="p-4 h-full ">
          <h3 className="text-xl font-bold mb-2">
            {game.title} ({game.year})
          </h3>
          <div className="flex-grow ">
            <p className="text-secondary_text mb-6 text-sm ">
              {game.description}
            </p>
          </div>
          <div className="flex justify-between text-sm text-secondary_text">
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
