"use client";

import Link from "next/link";
import {useState, useEffect} from "react";
import {useAnimate, stagger, motion} from "framer-motion";
import {ChevronDown, ChevronRightIcon} from "lucide-react";
import {cn} from "@/lib/utils";
import Image from "next/image";

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  const staggerMenuItems = stagger(0.1, {startDelay: 0.15});

  useEffect(() => {
    animate("#menu-icon", {rotate: isOpen ? 180 : 0}, {duration: 0.2});

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
      "li",
      isOpen
        ? {opacity: 1, scale: 1, filter: "blur(0px)"}
        : {opacity: 0, scale: 0.3, filter: "blur(20px)"},
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      },
    );
  }, [isOpen, animate, staggerMenuItems]);

  return scope;
}

const userInfoVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(20px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      type: "spring",
      bounce: 0,
      staggerChildren: 0.2,
    },
  },
};

type DropdownMenuProps = {
  items: {icon: React.ReactNode; name: string}[];
};

export default function DropdownMenu({items}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <nav
      className={cn("max-w-fit w-fit mx-auto space-y-2 max-lg:hidden")}
      ref={scope}>
      <motion.button
        whileTap={{scale: 0.97}}
        className="flex gap-3 items-center"
        onClick={() => setIsOpen((prevState) => !prevState)}>
        <Image
          className="cursor-pointer"
          src="/navbar/avatar.png"
          alt="Arrow Down"
          width={30}
          height={30}
        />
        <div className="flex gap-[8px] items-center">
          <span className="text-[#C4C4C4] font-medium">tarasovcad</span>
          <div style={{transformOrigin: "50% 55%"}}>
            <ChevronDown size={20} color="#9B9B9B" id="menu-icon" />
          </div>
        </div>
      </motion.button>
      <ul
        // to move the dropdown menu set "-ml-20"
        className={cn(
          "absolute z-[1] max-w-fit w-fit space-y-3 p-2.5 bg-[#262626] border border-[#3c3c3c;] rounded-xl",
          isOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        style={{
          clipPath: "inset(10% 50% 90% 50% round 12px)",
        }}>
        <motion.div
          className="flex items-center gap-[10px]"
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          variants={userInfoVariants}>
          <Image
            className="cursor-pointer"
            src="/navbar/avatar.png"
            alt="Arrow Down"
            width={40}
            height={40}
          />
          <div className="flex flex-col max-w-full pr-10">
            <span className="text-[#C4C4C4] font-semibold">tarasovcad</span>
            <span className="font-normal text-[#9b9b9b] text-sm">
              tarasovcad@gmail.com
            </span>
          </div>
        </motion.div>
        {items.map(({icon, name}) => (
          <li key={name}>
            <Link
              href=""
              className={cn(
                "group flex items-center gap-2 rounded-md border border-transparent text-neutral-400 hover:text-neutral-300 focus-visible:text-neutral-300 focus-visible:border-neutral-800 focus-visible:outline-none",
              )}>
              <span>{icon}</span>
              <span className="flex items-center gap-1 text-sm font-medium">
                {name}
                <ChevronRightIcon
                  size={12}
                  className="-translate-x-1 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all"
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
