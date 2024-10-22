"use client";
import {ChevronUp, ChevronDown} from "lucide-react";
import React, {useState, useMemo} from "react";
import {motion, AnimatePresence} from "framer-motion";

const PostSidebarLanguages = ({value}: {value: string}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const {threeLanguages, fullLanguages, showExpand} = useMemo(() => {
    const languages = value.split(",").map((lang) => lang.trim());
    const threeLanguages = languages.slice(0, 3).join(", ");
    const fullLanguages = languages.slice(3).join(", ");
    const showExpand = languages.length > 3;
    return {threeLanguages, fullLanguages, showExpand};
  }, [value]);

  const contentVariants = {
    expanded: {
      height: "auto",
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    collapsed: {
      height: "24px",
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const fullContentVariants = {
    expanded: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        delay: 0.1,
      },
    },
    collapsed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  if (!showExpand) {
    return <div className="text-[#A3A3A3] text-[14px]">{value}</div>;
  }

  return (
    <div className="text-[#A3A3A3] text-[14px] pr-6 relative">
      <motion.div
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={contentVariants}
        style={{overflow: "hidden"}}>
        {threeLanguages}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              variants={fullContentVariants}>
              {fullLanguages}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div
        className="absolute top-0 right-0 cursor-pointer"
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        onClick={toggleExpand}>
        {isExpanded ? <ChevronUp /> : <ChevronDown />}
      </motion.div>
    </div>
  );
};

export default PostSidebarLanguages;
