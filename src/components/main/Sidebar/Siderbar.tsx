"use client";
import React, {useState} from "react";
import Image from "next/image";
import SidebarItem from "./SidebarItem";
const Siderbar = () => {
  const [isHovered, setIsHovered] = useState(true);

  const divStyle = {
    width: isHovered ? "287px" : "76px",
    transition: "width 0.3s ease-in-out",
  };
  return (
    <aside
      // onMouseEnter={() => {
      //   setIsHovered(true);
      // }}
      // onMouseLeave={() => setIsHovered(false)}
      className="h-ful fixed z-10 top-0 left-0 overflow-x-hidden p-4 bg-[#1E1E1E] h-svh text-white/50"
      style={divStyle}>
      <div className="container">
        <Image
          src="/logo.svg"
          alt="logo"
          width={130}
          height={23}
          className="ml-[9px] mt-[5px]"
        />
        <div className="stroke mt-5"></div>
        <div className="flex flex-col mt-[30px]">
          <span className="nav-subtitle">General</span>
          <div className="flex flex-col gap-1 mt-3 cursor-pointer">
            <SidebarItem
              title={"Home"}
              src={"/sidemenu/home.svg"}
              hasArrow={false}
              link={"/"}
            />
            <SidebarItem
              title={"PC Games"}
              src={"/sidemenu/swords.svg"}
              hasArrow={true}
              link={"/"}
            />
            <SidebarItem
              title={"Software"}
              src={"/sidemenu/software.svg"}
              hasArrow={true}
              link={"/"}
            />
            <SidebarItem
              title={"Desktop"}
              src={"/sidemenu/monitor-down.svg"}
              hasArrow={true}
              link={"/"}
            />
            <SidebarItem
              title={"Games for Mac OS"}
              src={"/sidemenu/mac.svg"}
              hasArrow={true}
              link={"/"}
            />
            <SidebarItem
              title={"Apps for Mac OS"}
              src={"/sidemenu/mac-apps.svg"}
              hasArrow={true}
              link={"/"}
            />
          </div>
        </div>
        <div className="stroke mt-3"></div>
        <div className="flex flex-col mt-[30px]">
          <span className="nav-subtitle">Other</span>
          <div className="flex flex-col gap-1 mt-3 cursor-pointer">
            <SidebarItem
              title={"Settings"}
              src={"/sidemenu/settings.svg"}
              hasArrow={false}
              link={"/"}
            />
            <SidebarItem
              title={"Help"}
              src={"/sidemenu/help.svg"}
              hasArrow={false}
              link={"/"}
            />
          </div>
        </div>
        <div className="stroke mt-3"></div>
        <div className="absolute bottom-7">
          <p className="text-xs text-[#8e8e8e] font-normal leading-5 pr-5">
            Order an advertisement, About us, Copyright (DMCA), Privacy,
            Reviews, Contacts
          </p>
        </div>
      </div>
    </aside>
  );
  s;
};

export default Siderbar;
