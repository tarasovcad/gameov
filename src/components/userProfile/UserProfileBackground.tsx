"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {Loader2, Pencil, RotateCcw, User} from "lucide-react";
import UserProfileBackgroundSaveButton from "./UserProfileBackgroundSaveButton";
import {useProfileProvider} from "@/providers/ProfileProvider";
import {setRandomBackground} from "@/functions/setRandomBackground";
const UserProfileBackground = ({
  image,
  userBackgroundImage,
}: {
  image: string | undefined | null;
  userBackgroundImage: string | undefined | null;
}) => {
  console.log(userBackgroundImage, "userBackgroundImage");
  console.log(image, "image");
  const {backgroundImage, setBackgroundImage} = useProfileProvider();

  const [isLoading, setIsLoading] = useState(false);

  const setOtherBackground = () => {
    setRandomBackground({setBackgroundImage, setIsLoading});
  };

  return (
    <div className="relative h-[228px] w-full rounded-2xl">
      {isLoading && (
        <div className="absolute inset-0 bg-black/50 z-10 flex justify-center items-center">
          <Loader2 size={30} className="text-white animate-spin" />
        </div>
      )}

      <div className="flex flex-col gap-2 absolute right-[15px] top-[10px]">
        <button
          onClick={setOtherBackground}
          className="cursor-pointer w-[30px] h-[30px] bg-white/20 z-10 rounded-full flex justify-center items-center hover:rotate-12 transition-all duration-300 ease-in-ou">
          <RotateCcw size={18} />
        </button>
        <UserProfileBackgroundSaveButton
          setBackgroundImage={setBackgroundImage}
          image={image}
        />
      </div>
      <Image
        src={backgroundImage}
        alt="profile background"
        fill
        sizes="100vw"
        style={{objectFit: "cover"}}
        unoptimized
        className="rounded-2xl"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default UserProfileBackground;
