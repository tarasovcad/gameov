"use client";
import React, {useState} from "react";
import Image from "next/image";
import {Pencil, RotateCcw, User} from "lucide-react";
import UserProfileBackgroundSaveButton from "./UserProfileBackgroundSaveButton";
import {useProfileProvider} from "@/providers/ProfileProvider";
const UserProfileBackground = ({image}: {image: string | undefined | null}) => {
  const [backgroundImage, setBackgroundImage] = useState(image || "");

  return (
    <div className="relative h-[228px] w-full rounded-2xl">
      <div className="flex flex-col gap-2 absolute right-[15px] top-[10px]">
        <button
          // onClick={onSaveButton}
          className="cursor-pointer w-[30px] h-[30px] bg-white/20 z-10 rounded-full flex justify-center items-center hover:rotate-12 transition-all duration-300 ease-in-ou">
          <RotateCcw size={18} />
        </button>
        <UserProfileBackgroundSaveButton
          setBackgroundImage={setBackgroundImage}
        />
      </div>
      <Image
        src={backgroundImage}
        alt="profile background"
        layout="fill"
        objectFit="cover"
        unoptimized
        className="rounded-2xl"
      />
    </div>
  );
};

export default UserProfileBackground;
