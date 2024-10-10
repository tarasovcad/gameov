import React, {useState, useRef, useCallback, useEffect} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Check, Plus} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import useCustomToast from "@/hooks/useCustomToast";

interface FavoriteTooltipProps {
  initialIsFavorite?: boolean;
}

const FavoriteTooltip: React.FC<FavoriteTooltipProps> = ({
  initialIsFavorite = false,
}) => {
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);
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
  );
};

export default FavoriteTooltip;
