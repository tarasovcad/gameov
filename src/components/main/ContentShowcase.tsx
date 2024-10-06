"use client";
import React, {useState} from "react";
import {motion} from "framer-motion";
import {ChevronRight} from "lucide-react";
import Link from "next/link";

const ContentShowcase = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Link
      href={"/games"}
      className="flex items-center justify-start gap-3 text-white w-fit mb-8"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      <h2 className="font-semibold text-[28px]">Latest Games</h2>
      <motion.div
        animate={{x: isHover ? 5 : 0}}
        transition={{type: "spring", stiffness: 100}}>
        <ChevronRight size={28} className="cursor-pointer" />
      </motion.div>
    </Link>
  );
};

export default ContentShowcase;
