import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";

const SignUpProgressComponent = ({
  progress,
}: {
  progress?: number | undefined;
}) => {
  return (
    <div className="h-screen flex flex-col  gap-12 max-[600px]:gap-10 max-[410px]:gap-8 max-[345px]:gap-6 max-[315px]:gap-4 items-center justify-center">
      <div className="flex items-center justify-center cursor-pointer">
        <Link
          href={"/"}
          className="w-fit items-center justify-start hidden dark:block">
          <Image
            src="/logo.svg"
            alt="logo"
            width={130}
            height={23}
            className="cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 p-4 max-[600px]:gap-3 max-[410px]:gap-2 max-[345px]:gap-1 max-[315px]:gap-0">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-3xl max-[600px]:text-2xl max-[410px]:text-xl max-[355px]:text-lg max-[315px]:text-sm ">
            <span>We create your account, wait</span> <AnimatedEllipsis />
          </h1>

          <div className="flex items-center">
            <p className="text-secondary_text text-sm max-[600px]:text-[13px] max-[410px]:text-[12px] max-[345px]:text-[11px] max-[320px]:text-[10px]">
              Generating your unique profile
            </p>
          </div>
        </div>
        {/* progress bar */}
        <div className="max-w-64 w-full h-[5px] bg-bg rounded-full mt-4 relative">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out absolute top-0 left-0"
            style={{
              width: `${progress}%`,
              background: `linear-gradient(90deg, 
        rgba(46, 191, 145, 1) 0%, 
        rgba(96, 221, 142, 1) 50%, 
        rgba(168, 255, 150, 1) 100%)`,
              boxShadow: `0 0 10px rgba(46, 191, 145, 0.7), 
                  0 0 20px rgba(96, 221, 142, 0.5), 
                  0 0 30px rgba(168, 255, 150, 0.3)`,
            }}></div>
        </div>
        {/* progress bar ends */}
      </div>
    </div>
  );
};
const AnimatedEllipsis = () => {
  const dotVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
  };

  const containerVariants = {
    start: {transition: {staggerChildren: 0.4}},
    end: {transition: {staggerChildren: 0.4}},
  };

  return (
    <motion.span
      className="inline-flex w-8 ml-1"
      variants={containerVariants}
      initial="start"
      animate="end">
      {[0, 1, 2].map((index) => (
        <motion.span
          key={index}
          variants={dotVariants}
          initial="hidden"
          animate="visible"
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.2,
            delay: index * 0.4,
          }}>
          .
        </motion.span>
      ))}
    </motion.span>
  );
};

export default SignUpProgressComponent;
