"use client";

import {useState, useEffect} from "react";
import {useAnimate, stagger, motion} from "framer-motion";
import {Sun, Moon, Laptop} from "lucide-react";
import {cn} from "@/lib/utils";
import {useTheme} from "next-themes";

const themes = [
  {icon: <Sun size={22} />, name: "light", keydown: "L"},
  {icon: <Moon size={22} />, name: "dark", keydown: "D"},
  {icon: <Laptop size={22} />, name: "system", keydown: "S"},
];

export default function ThemeDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scope, animate] = useAnimate();
  const staggerMenuItems = stagger(0.1, {startDelay: 0.15});

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      animate(
        "ul",
        {
          clipPath: isOpen
            ? "inset(0% 0% 0% 0% round 12px)"
            : "inset(10% 50% 90% 50% round 12px)",
        },
        {
          type: "spring",
          bounce: 0,
          duration: 0.5,
        },
      );
      animate(
        "li, p",
        isOpen
          ? {opacity: 1, scale: 1, filter: "blur(0px)"}
          : {opacity: 0, scale: 0.3, filter: "blur(20px)"},
        {
          duration: 0.2,
          delay: isOpen ? staggerMenuItems : 0,
        },
      );
    }
  }, [isOpen, animate, staggerMenuItems, mounted]);

  const getSelectedIcon = () => {
    switch (theme) {
      case "light":
        return <Sun size={22} color="black" />;
      case "dark":
        return <Moon size={22} color="#C4C4C4" />;
      default:
        return <Laptop size={22} color="black" />;
    }
  };

  if (!mounted) return <div className="w-[35px] h-[35px]  rounded-full"></div>;

  return (
    <nav className={cn("max-w-fit w-fit mx-auto space-y-2")} ref={scope}>
      <div
        className="cursor-pointer flex items-center w-[35px] h-[35px]  rounded-full justify-center transtiuon duration-300 ease-in-out dark:hover:bg-[#2D2D2D] hover:bg-[#C4C4C4]"
        onClick={() => setIsOpen((prevState) => !prevState)}>
        {getSelectedIcon()}
      </div>
      <ul
        className={cn(
          "absolute z-[1] max-w-fit w-fit space-y-3 p-2.5 bg-[#262626] border border-[#3c3c3c] rounded-xl",
          isOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        style={{
          clipPath: "inset(10% 50% 90% 50% round 12px)",
        }}>
        {themes.map(({icon, name, keydown}) => (
          <div className="flex gap-6 items-center justify-between" key={name}>
            <li>
              <button
                onClick={() => {
                  setTheme(name);
                  setIsOpen(false);
                }}
                className={cn(
                  "group flex items-center gap-2 rounded-md border border-transparent text-neutral-400 hover:text-white/70 focus-visible:text-neutral-300 focus-visible:border-neutral-800 focus-visible:outline-none",
                  theme === name && "text-white hover:text-white",
                )}>
                <span className="flex items-center gap-1 text-sm font-medium">
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </span>
              </button>
            </li>
            <motion.p
              className={`text-right text-[12px] text-neutral-400 px-2 py-[1px] rounded-md ${theme === name && "text-white"}`}>
              {`⌘+${keydown}`}
            </motion.p>
          </div>
        ))}
      </ul>
    </nav>
  );
}
