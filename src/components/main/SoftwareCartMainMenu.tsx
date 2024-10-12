"use client";

import Link from "next/link";
import Image from "next/image";
import {Post} from "@/types/postProps";
import {useState} from "react";
import {Card} from "../ui/card";

const SoftwareCartMainMenu = ({item}: {item: Post}) => {
  console.log(item);
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Link href={"/games/" + item.title}>
      <Card
        key={item.title}
        className="bg-bg overflow-hidden border transition-colors duration-300 ease-in-out border-border/40 hover:border-border relative flex flex-col w-full h-full px-2 py-8 hover:bg-bg/90 "
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}>
        {item.new ? (
          <div className="absolute top-[12px] left-[12px] bg-green-600 text-[13px] px-[9px] py-[2px] rounded-sm">
            NEW
          </div>
        ) : null}
        <div className="flex justify-center items-center w-full mb-5">
          <div className="relative w-[70px] h-[70px] rounded-md">
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className={`${isHovering ? "scale-105" : "scale-100"} transition-all duration-300 ease-in-out rounded-md`}
            />
          </div>
        </div>
        <div className=" flex flex-col text-center">
          <p className="text-white/50 text-[13px] max-[1150px]:text-[13px] ">
            {item.section}
          </p>
          <h3 className="text-[19px] font-bold mb-[6px] px-1">{item.title}</h3>
          <div className="">
            <p className="text-secondary_text text-[13px]">
              {item.briefDescription}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default SoftwareCartMainMenu;
