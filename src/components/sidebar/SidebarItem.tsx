"use client";
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import LottieAnimation from "@/components/ui/LottieAnimation";
import homeAnimation from "./../../lottie/home-animation.json";
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

  console.log(src);
  return (
    <>
      <Link href={"/"}>
        <div
          className={`${isActive ? "bg-[#2D2D2D] text-white" : ""} item transition ease-in-out duration-300 hover:bg-[#2D2D2D] flex items-center justify-between py-2 px-3 max-[1000px]:px-2 rounded-lg hover:text-[#ffffff]`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <div className="flex items-center justify-between gap-2 ">
            <LottieAnimation
              animationData={homeAnimation}
              size={24}
              isHovered={isHovered}
            />
            {/* <Image src={src} alt="dashboard" width={24} height={24} /> */}
            <span className="text-base font-medium leading-normal max-[1000px]:hidden text-nowrap">
              {title}
            </span>
          </div>
          {hasArrow && (
            <Image
              src="/sidemenu/arrow-icon.svg"
              alt="arrow"
              width={20}
              height={20}
              className="max-[1000px]:hidden"
            />
          )}
        </div>
      </Link>
    </>
  );
};

export default SidebarItem;
