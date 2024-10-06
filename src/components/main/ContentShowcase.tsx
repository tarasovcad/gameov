"use client";
import React from "react";
import {motion} from "framer-motion";
import {ChevronRight} from "lucide-react";
import Link from "next/link";

const ContentShowcase = () => {
  return (
    <Link
      href={"/games"}
      className="flex items-center justify-start gap-3 text-white w-fit mb-8">
      <h2 className="font-semibold text-[32px]">Latest Games</h2>
      <motion.div
        whileHover={{x: 5}}
        transition={{type: "spring", stiffness: 100}}>
        <ChevronRight size={28} className="cursor-pointer" />
      </motion.div>
    </Link>
  );
};

export default ContentShowcase;
