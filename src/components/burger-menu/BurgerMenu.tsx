"use client";
import React, {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import BurgerMenuContent from "./BurgerMenuContent";

const BurgerMenu = ({
  username,
  image,
  email,
}: {
  username?: string | null;
  image?: string | null;
  email?: string | null;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  return (
    <>
      <button
        className="relative z-[60] w-6 h-[22px] focus:outline-none min-[701px]:hidden flex items-center justify-center "
        onClick={toggleMenu}>
        <div
          className={`absolute w-5 h-[1.5px] bg-black dark:bg-white transition-all duration-200 ease-in-out ${
            isOpen ? "rotate-45 top-2.5" : "top-1"
          }`}></div>
        <div
          className={`absolute w-5 h-[1.5px] bg-black dark:bg-white transition-all duration-200 ease-in-out ${
            isOpen ? "opacity-0" : "top-2.5"
          }`}></div>
        <div
          className={`absolute w-5 h-[1.5px] bg-black dark:bg-white transition-all duration-200 ease-in-out ${
            isOpen ? "-rotate-45 top-2.5" : "top-4"
          }`}></div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{clipPath: "circle(0% at top right)"}}
            animate={{clipPath: "circle(150% at top right)"}}
            exit={{clipPath: "circle(0% at top right)"}}
            transition={{duration: 0.3, ease: "easeInOut"}}
            className="fixed top-0 right-0 w-full h-full dark:bg-backgound bg-white min-[701px]:hidden overflow-y-auto z-40">
            <BurgerMenuContent
              username={username}
              image={image}
              email={email}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BurgerMenu;
