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
import {Game, Software} from "@/types/postProps";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/Tooltip";

const SoftwareCartMainMenu = ({software}: {software: Software}) => {
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
    <Link href={"/games/" + software.title}>
      <div
        key={software.title}
        className="overflow-hidden transition-colors group duration-300 ease-in-out relative group flex flex-col w-full h-full ">
        <div className="relative w-full aspect-[9/10] overflow-hidden">
          {/* min-[1300px]:h-44 */}
          <Image
            src={software.image}
            alt={software.title}
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
        <div className="py-4 flex flex-col flex-grow ">
          <h3 className="text-lg font-bold max-[1200px]:text-[18px] max-[1200px]:mb-[6px]">
            {software.title} ({software.year})
          </h3>
          <p className="text-secondary_text">PC Game</p>
        </div>
      </div>
    </Link>
  );
};

export default SoftwareCartMainMenu;
