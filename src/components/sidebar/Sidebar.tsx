import React from "react";
import Image from "next/image";
import SidebarItem from "./SidebarItem";
import {SidebarGeneralLinks} from "@/data/SidebarLinks";
import {SidebarOtherLinks} from "@/data/SidebarLinks";
import Logo from "../logo/Logo";
import {headers} from "next/headers";
import {noRoutes} from "@/data/WrapperRoutes";

const Sidebar = () => {
  const headersList = headers();
  const header = headersList.get("x-pathname");
  if (noRoutes.includes(header as string)) {
    return null;
  }
  return (
    <aside className="w-fit h-ful z-50 top-0 left-0 p-4 max-md:p-2 h-svh text-[#969696] float-left sticky">
      <div className="mx-8 max-md:mx-3">
        <Logo />
        <div className="w-12 h-12 bg-[#262626] dark:bg-white rounded-full flex items-center justify-center p-1 md:hidden">
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

export default Sidebar;
