import React from "react";
import Image from "next/image";
import Link from "next/link";
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
  return (
    <>
      <Link href={"/"}>
        <div className="item transition ease-in-out duration-300 hover:bg-[#2D2D2D] flex items-center justify-between py-2 px-3 max-[1000px]:px-2 rounded-lg hover:text-[#ffffff]">
          <div className="flex items-center justify-between gap-3">
            <Image
              src={src}
              alt="dashboard"
              width={24}
              height={24}
              className="stroke"
            />
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
