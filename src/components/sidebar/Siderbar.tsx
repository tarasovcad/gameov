"use client";
import React from "react";
import Image from "next/image";
import SidebarItem from "./SidebarItem";
import SidebarThemeChange from "@/components/checkboxes/SidebarThemeChange";
import {SidebarGeneralLinks} from "@/data/SidebarLinks";
import {SidebarOtherLinks} from "@/data/SidebarLinks";
const Siderbar = () => {
  return (
    <aside className=" w-fit h-ful z-50 top-0 left-0 p-4 max-md:p-2 bg-[#1E1E1E] h-svh text-white/50 float-left sticky ">
      <div className="container ">
        <Image
          src="/logo.svg"
          alt="logo"
          width={130}
          height={23}
          className="ml-[9px] mt-[5px] max-md:hidden"
        />
        <div className="w-12 h-12 bg-[#262626] rounded-full flex items-center justify-center p-1 md:hidden">
          <Image src="/mdLogo.svg" alt="avatar" width={50} height={50} />
        </div>
        <div className="stroke mt-5"></div>
        <div className="flex md:flex-col justify-center md:mt-[30px]">
          <span className="nav-subtitle max-md:hidden">General</span>
          <div className="flex flex-col gap-2 mt-3 cursor-pointer">
            {SidebarGeneralLinks.map((link, index) => {
              return (
                <SidebarItem
                  key={index}
                  title={link.title}
                  src={link.src}
                  hasArrow={link.hasArrow}
                  link={link.link}
                />
              );
            })}
          </div>
        </div>
        <div className="stroke mt-3"></div>
        <div className="flex md:flex-col justify-center md:mt-[30px]">
          <span className="nav-subtitle max-md:hidden">Other</span>
          <div className="flex flex-col gap-2 mt-3 cursor-pointer">
            {SidebarOtherLinks.map((link, index) => {
              return (
                <SidebarItem
                  key={index}
                  title={link.title}
                  src={link.src}
                  hasArrow={link.hasArrow}
                  link={link.link}
                />
              );
            })}
          </div>
        </div>
        <div className="stroke mt-3"></div>
        <SidebarThemeChange />
        <div className="absolute bottom-7 max-md:hidden">
          <p className="text-xs text-[#8e8e8e] font-normal leading-5 pr-5">
            Order an advertisement, About us, Copyright (DMCA), Privacy,
            Reviews, Contacts
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Siderbar;
