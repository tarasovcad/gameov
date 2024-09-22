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
    <aside className="w-fit h-ful top-0 left-0 p-4 max-[1100px]:p-2 h-svh text-[#969696] float-left sticky max-[700px]:hidden">
      <div className="mx-8 max-[1100px]:mx-3">
        <Logo />
        <div className="stroke mt-5 max-[1000px]:mt-4 "></div>
        <div className="flex min-[1000px]:flex-col justify-center min-[1000px]:mt-[30px]">
          <span className="nav-subtitle max-[1000px]:hidden">General</span>
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
        <div className="flex min-[1000px]:flex-col justify-center min-[1000px]:mt-[30px]">
          <span className="nav-subtitle max-[1000px]:hidden">Other</span>
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

        <div className="absolute bottom-7 max-[1000px]:hidden">
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
