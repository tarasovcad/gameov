import {SidebarGeneralLinks, SidebarOtherLinks} from "@/data/SidebarLinks";
import React from "react";
import SidebarItem from "../sidebar/SidebarItem";
import BurgerMenuSingleItem from "./BurgerMenuSingleItem";
import Image from "next/image";
import {GeistSans} from "geist/font/sans";
import Link from "next/link";
import BurgerMenuLogOutLink from "./BurgerMenuLogOutLink";
import BurgerMenuThemeToggle from "./BurgerMenuThemeToggle";
import BurgerMenuOtherLinks from "./BurgerMenuOtherLinks";

const BurgerMenuContent = ({
  username,
  image,
  email,
}: {
  username?: string | null;
  image?: string | null;
  email?: string | null;
}) => {
  return (
    <div
      className={`h-full w-full flex flex-col justify-start items-start px-[15px] font-normal ${GeistSans.className}  ${username || image || email ? "pt-[50px]" : "pt-[80px]"}`}>
      {!email && (
        <div className="flex flex-col gap-3 w-full text-sm">
          <Link
            href="/signup"
            className="bg-white text-black p-2 rounded-md border border-black/10 text-center transition-all duration-300 ease-in-out hover:bg-gray-100 hover:border-black/20 hover:shadow-lg active:transform active:scale-95">
            Get Started
          </Link>
          <Link
            href="/signin"
            className="bg-[#262626] p-2 rounded-md border border-white/10 text-center text-white transition-all duration-300 ease-in-out hover:bg-[#3a3a3a] hover:border-white/20 hover:shadow-lg active:transform active:scale-95">
            Sign In
          </Link>
        </div>
      )}

      <div className="flex flex-col gap-2 mt-[20px] cursor-pointer w-full">
        {email && (
          <div
            className={` text-white item transition ease-in-out duration-200 py-2 rounded-md px-2  hover:text-[#ffffff] `}>
            <div className="flex items-center justify-between gap-2  ">
              <span
                className="leading-normal text-nowrap text-base
               decoration-none no-underline">
                {email}
              </span>
              {image ? (
                <Image
                  className="cursor-pointer rounded-full object-cover"
                  src={image}
                  width={30}
                  height={30}
                  alt="Profile Image"
                  unoptimized
                  style={{height: "30px", width: "30px"}}
                />
              ) : (
                <Image
                  className="cursor-pointer rounded-full"
                  src="/profile/avatar.png"
                  width={30}
                  height={30}
                  alt="Profile Image"
                  unoptimized
                  style={{height: "30px", width: "30px"}}
                />
              )}
            </div>
          </div>
        )}
        <div className="flex flex-col gap-[6px] mb-4">
          {[...SidebarOtherLinks].map((link, index) => (
            <BurgerMenuSingleItem
              key={index}
              title={link.title}
              src={link.src}
              hasArrow={link.hasArrow}
              link={link.link}
            />
          ))}
          <BurgerMenuThemeToggle />
          {email && <BurgerMenuLogOutLink />}
          <div className="stroke"></div>
          {[...SidebarGeneralLinks].map((link, index) => (
            <BurgerMenuSingleItem
              key={index}
              title={link.title}
              src={link.src}
              hasArrow={link.hasArrow}
              link={link.link}
            />
          ))}
          <div className="stroke"></div>
          <BurgerMenuOtherLinks title={"Other"} />
        </div>
      </div>
    </div>
  );
};

export default BurgerMenuContent;
