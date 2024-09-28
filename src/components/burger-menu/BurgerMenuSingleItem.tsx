import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import AnimatedArrow from "../ui/AnimatedArrow";

const BurgerMenuSingleItem = ({
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

  console.log(isActive);
  return (
    <>
      <Link href={"/"}>
        <div
          className={`${isActive ? " text-white " : "text-white/70"} item transition ease-in-out duration-200 py-2 rounded-md px-2  hover:text-[#ffffff] hover:bg-[#2D2D2D]  `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <div className="flex items-center justify-between gap-2 ">
            <span className=" leading-normal text-nowrap text-base">
              {title}
            </span>
            <Image
              src={src}
              alt="dashboard"
              width={20}
              height={20}
              className="mr-1"
            />
          </div>
          {hasArrow && <AnimatedArrow isHovered={isHovered} />}
        </div>
      </Link>
    </>
  );
};

export default BurgerMenuSingleItem;
