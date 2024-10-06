"use client";
import {ArrowUpRight, Eye, MessageSquare, Plus, PlusCircle} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {AnimatePresence, motion} from "framer-motion";

import {Card, CardContent} from "@/components/ui/card";
import {useState} from "react";
import toast from "react-hot-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Game {
  game: {
    title: string;
    description: string;
    image: string;
    year: number;
    views: string;
    comments: number;
  };
}

const GameCartMainMenu = ({game}: Game) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link href={"/games/" + game.title}>
      <Card
        key={game.title}
        className="bg-bg overflow-hidden border border-border relative"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}>
        <div className="overflow-hidden h-48 relative">
          <Image
            src={game.image}
            alt={game.title}
            layout="fill"
            objectFit="cover"
            className={`transition-all duration-300 ease-in-out ${
              isHover ? "scale-100 opacity-100" : "scale-105 opacity-80"
            }`}
          />
        </div>
        <TooltipProvider delayDuration={25}>
          <Tooltip>
            <AnimatePresence>
              {isHover && (
                <div className="absolute top-[9px] right-[9px]">
                  <TooltipTrigger asChild>
                    <motion.button
                      initial={{opacity: 0, scale: 0.8}}
                      animate={{opacity: 1, scale: 1}}
                      exit={{opacity: 0, scale: 0.8}}
                      transition={{duration: 0.2}}
                      className="p-[6px] bg-bg rounded-full flex items-center justify-center">
                      <Plus size={16} strokeWidth={3} />
                    </motion.button>
                  </TooltipTrigger>
                </div>
              )}
            </AnimatePresence>

            <TooltipContent>
              <p>Add to favorites</p>
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
