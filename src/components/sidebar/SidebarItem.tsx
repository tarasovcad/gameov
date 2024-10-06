"use client";
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import AnimatedArrow from "../ui/AnimatedArrow";
import CustomTooltip from "../ui/CustomTooltip";

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
      className={`${isActive ? "bg-bg text-white" : ""} item transition ease-in-out duration-300 hover:bg-bg flex items-center justify-between py-2 px-3 max-[1000px]:px-2 rounded-lg hover:text-primary_text `}
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
      <div className="max-[999px]:block hidden">
        <CustomTooltip text={title}>{content}</CustomTooltip>
      </div>

      <div className="min-[1000px]:block hidden">{content}</div>
    </Link>
  );
};

export default SidebarItem;
