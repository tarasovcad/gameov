"use client";
import {
  ArrowUpRight,
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
import {useEffect, useState} from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useCustomToast from "@/hooks/useCustomToast";

interface Game {
  title: string;
  description: string;
  image: string;
  year: number;
  views: string;
  comments: number;
}

const GameCartMainMenu = ({game}: {game: Game}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [tooltipText, setTooltipText] = useState("Add to favorites");
  const [showTooltip, setShowTooltip] = useState(false);
  const toast = useCustomToast();

  useEffect(() => {
    setTooltipText(isFavorite ? "Remove from favorites" : "Add to favorites");
  }, [isFavorite]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsFavorite((prev) => !prev);
    toast.info(isFavorite ? "Removed from favorites" : "Added to favorites");
  };

  return (
    <Link href={"/games/" + game.title}>
      <Card
        key={game.title}
        className="bg-bg overflow-hidden border border-border relative group">
        <div className="overflow-hidden h-48 relative">
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
                <motion.button
                  className="p-[6px] bg-bg rounded-full flex items-center justify-center"
                  onClick={handleClick}
                  onMouseEnter={() =>
                    setTimeout(() => setShowTooltip(true), 50)
                  }
                  onMouseLeave={() => setShowTooltip(false)}>
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
                </motion.button>
              </TooltipTrigger>
            </div>
            <TooltipContent>
              <p>{tooltipText}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <CardContent className="p-4">
          <h3 className="text-2xl font-bold mb-2">
            {game.title} ({game.year})
          </h3>
          <p className="text-secondary_text mb-4">{game.description}</p>
          <div className="flex items-center text-sm text-secondary_text">
            <span className="mr-3 flex items-center">
              <Eye size={16} className="mr-1" /> {game.views}
            </span>
            <span className="flex items-center">
              <MessageSquare size={16} className="mr-1" /> {game.comments}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default GameCartMainMenu;
