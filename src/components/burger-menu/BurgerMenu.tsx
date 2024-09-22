"use client";
import React, {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import BurgerMenuContent from "./BurgerMenuContent";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="relative z-50 w-10 h-10 focus:outline-none min-[701px]:hidden "
        onClick={toggleMenu}>
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-[2px]">
          <span
            className={`w-6 h-[1px] bg-white transition-all duration-300 ease-out ${
              isOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}></span>
          <span
            className={`w-6 h-[1px] bg-white transition-all duration-300 ease-out my-[3px] ${
              isOpen ? "opacity-0" : ""
            }`}></span>
          <span
            className={`w-6 h-[1px] bg-white transition-all duration-300 ease-out ${
              isOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}></span>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{clipPath: "circle(0% at top right)"}}
            animate={{clipPath: "circle(150% at top right)"}}
            exit={{clipPath: "circle(0% at top right)"}}
            transition={{duration: 0.3, ease: "easeInOut"}}
            className="fixed inset-0 bg-[#0A0A0A] z-40">
            <BurgerMenuContent />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BurgerMenu;
