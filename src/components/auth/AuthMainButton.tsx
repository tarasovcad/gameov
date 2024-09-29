import {MoveRight} from "lucide-react";
import React from "react";
import {motion} from "framer-motion";

const AuthMainButton = ({
  buttonTitle,
  className,
  isLoading,
}: {
  buttonTitle: string;
  className?: string;
  isLoading?: boolean;
}) => {
  return (
    <motion.button
      className={`text-black rounded-md text-[15px] max-[600px]:text-[14px] font-medium h-10 px-4 py-2 w-full bg-[#E4FF6D] max-[600px]:bg-[#cef814] border border-[#A0C111] flex items-center justify-center gap-2 ${className}`}
      whileHover={{
        backgroundColor: "#daf369",
        scale: 1.05,
        transition: {duration: 0.2},
      }}
      whileTap={{
        scale: 0.95,
        transition: {duration: 0.1},
      }}>
      {isLoading ? (
        <>
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-black border-t-transparent"></div>
          <span className="ml-2">Loading... </span>
        </>
      ) : (
        buttonTitle
      )}
    </motion.button>
  );
};

export default AuthMainButton;
