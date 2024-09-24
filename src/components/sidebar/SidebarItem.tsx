"use client";
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import AnimatedArrow from "../ui/AnimatedArrow";
import Tooltip from "../ui/Tooltip";

const SidebarItem = ({
  title,
  src,
  hasArrow,
  link,
}: {
  title: string;
  src: string;
  hasArrow?: boolean;
  link: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === link;
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <div
      className={`${isActive ? "bg-[#2D2D2D] text-white" : ""} item transition ease-in-out duration-300 hover:bg-[#2D2D2D] flex items-center justify-between py-2 px-3 max-[1000px]:px-2 rounded-lg hover:text-[#ffffff] `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="flex items-center justify-between gap-2 ">
        <Image src={src} alt="dashboard" width={24} height={24} />
        <span className="text-base font-medium leading-normal max-[1000px]:hidden text-nowrap">
          {title}
        </span>
      </div>
      {hasArrow && <AnimatedArrow isHovered={isHovered} />}
    </div>
  );

  return (
    <Link href={link}>
      <div className="max-[1000px]:block hidden">
        <Tooltip text={title}>{content}</Tooltip>
      </div>

      <div className="min-[1000px]:block hidden">{content}</div>
    </Link>
  );
};

export default SidebarItem;
