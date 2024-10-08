"use client";

import Link from "next/link";
import {useState, useEffect} from "react";
import {useAnimate, stagger, motion} from "framer-motion";
import {ChevronDown, ChevronRightIcon, Moon, Sun} from "lucide-react";
import {cn} from "@/lib/utils";
import Image from "next/image";
import {signOut} from "next-auth/react";
import SignOutModalMenu from "../ui/SignOutModalMenu";

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
  username: string | null | undefined;
  image?: string | null | undefined;
  email: string | null | undefined;
};

export default function DropdownMenu({
  items,
  username,
  image,
  email,
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  const handleSignOut = () => {
    setIsSignOutModalOpen(true);
  };
  const confirmSignOut = () => {
    signOut({callbackUrl: "/"});
  };

  const closeSignOutModal = () => {
    setIsSignOutModalOpen(false);
  };

  return (
    <>
      <nav className={cn("max-w-fit w-fit mx-auto space-y-2")} ref={scope}>
        <motion.button
          whileTap={{scale: 0.97}}
          className="flex gap-3 items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}>
          {image ? (
            <Image
              className="rounded-full object-cover"
              src={image}
              width={30}
              height={30}
              alt="Profile Image"
              unoptimized
              style={{height: "30px", width: "30px"}}
            />
          ) : (
            <Image
              className="rounded-full object-cover"
              src="/profile/avatar.png"
              width={30}
              height={30}
              alt="Profile Image"
              unoptimized
              style={{height: "30px", width: "30px"}}
            />
          )}
          <div className="flex gap-[8px] items-center mr-[30px]">
            <span className="dark:text-[#C4C4C4] text-black font-medium">
              {username}
            </span>
            <div style={{transformOrigin: "50% 55%"}}>
              <ChevronDown
                size={20}
                id="menu-icon"
                className="dark:text-[#9B9B9B] text-black"
              />
            </div>
          </div>
        </motion.button>
        <ul
          // to move the dropdown menu set "-ml-20"
          className={cn(
            "absolute -ml-[107px] z-[1] max-w-fit w-fit space-y-3 p-2.5 bg-modal_bg border border-border rounded-xl pb-3",
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
            {image ? (
              <Image
                className="rounded-full object-cover"
                src={image}
                alt="Profile Image"
                width={35}
                height={35}
                unoptimized
                style={{height: "35px", width: "35px"}}
              />
            ) : (
              <Image
                className="rounded-full"
                src="/profile/avatar.png"
                alt="Profile Image"
                width={35}
                height={35}
                unoptimized
                style={{height: "35px", width: "35px"}}
              />
            )}
            <div className="flex flex-col max-w-full pr-10">
              <span className="text-[#C4C4C4] font-semibold">{username}</span>
              <span className="font-normal text-secondary_text text-sm">
                {email}
              </span>
            </div>
          </motion.div>
          {items.map(({icon, name}) => (
            <li key={name}>
              {name === "Sign out" ? (
                <button
                  onClick={handleSignOut}
                  className={cn(
                    "group flex items-center gap-2 rounded-md text-secondary_text hover:text-secondary_text_hover transition-colors duration-300 ease-in-out",
                  )}>
                  <span>{icon}</span>
                  <span className="flex items-center gap-1 text-sm font-medium">
                    {name}
                    <ChevronRightIcon
                      size={12}
                      className="-translate-x-1 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all"
                    />
                  </span>
                </button>
              ) : (
                <Link
                  href="/profile"
                  className={cn(
                    "group flex items-center gap-2 rounded-md text-secondary_text hover:text-secondary_text_hover transition-colors duration-300 ease-in-out",
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
              )}
            </li>
          ))}
        </ul>
      </nav>
      <SignOutModalMenu
        isOpen={isSignOutModalOpen}
        onClose={closeSignOutModal}
        onConfirm={confirmSignOut}
      />
    </>
  );
}
