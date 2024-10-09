"use client";
import {
  ArrowUpRight,
  Calendar,
  Check,
  Eye,
  MessageSquare,
  Plus,
  PlusCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {AnimatePresence, motion} from "framer-motion";

import {Card} from "@/components/ui/card";

import {type Desctop, Game} from "@/types/postProps";
import {useState} from "react";

const DesktopCartMainMenu = ({desctop}: {desctop: Desctop}) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Link href={"/games/" + desctop.title}>
      <Card
        key={desctop.title}
        className="bg-bg overflow-hidden border transition-colors duration-300 ease-in-out border-border/40 hover:border-border relative flex flex-col w-full h-full p-3 py-8 hover:bg-bg/90 "
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}>
        <div className="flex justify-center items-center w-full mb-5">
          <div className="relative w-[65px] h-[65px] rounded-md">
            <Image
              src={desctop.image}
              alt={desctop.title}
              layout="fill"
              objectFit="cover"
              className={`${isHovering ? "scale-105" : "scale-100"} transition-all duration-300 ease-in-out rounded-md`}
            />
          </div>
        </div>
        <div className=" flex flex-col flex-grow text-center">
          <h3 className="text-xl font-bold mb-2 ">{desctop.title}</h3>
          <div className="flex-grow">
            <p className="text-secondary_text text-sm max-[1150px]:text-[13px]">
              {desctop.brief_description}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default DesktopCartMainMenu;
