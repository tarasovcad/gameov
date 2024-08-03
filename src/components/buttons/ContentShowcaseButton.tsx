"use client";

import {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
const BorderGlowButton = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const [mousePosition, setMousePosition] = useState({x: "-100%", y: "-100%"});

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({x: `${x}px`, y: `${y}px`});
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.button
      whileTap={{scale: -0.85}}
      className="relative overflow-hidden rounded-[5px] bg-[#8e8e8e] transform transition-transform ease-in-out mr-[1px]"
      ref={ref}>
      <span
        className={`absolute z-0 h-28 w-28 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(#fff_0%,transparent_70%)] `}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}></span>
      <div className="relative z-10 m-[1px] rounded-[5px] bg-[#262626] px-[24px] py-[10px] text-[15px] font-bold text-white backdrop-blur-sm">
        View all posts
      </div>
    </motion.button>
  );
};

export default BorderGlowButton;
