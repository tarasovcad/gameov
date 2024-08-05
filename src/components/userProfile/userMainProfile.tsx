import Image from "next/image";
import React from "react";
import {InputFocusBlur} from "../ui/InputFoculesBlur";
import {AtSign, Mail} from "lucide-react";
import DropZone from "../ui/DropZone";
import ProfileButton from "../ui/ProfileButton";
const UserMainProfile = () => {
  return (
    <div className="w-full  bg-[#262626] rounded-2xl">
      <div className="p-[20px]">
        <div className="relative h-[228px] w-full rounded-2xl">
          <div className="absolute rounded-2xl inset-0  h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="absolute rounded-2xl bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#E4FF6D,transparent)]"></div>
          </div>
        </div>
        <div className="px-8 flex flex-col">
          <div className="z-10 relative rounded-full -mt-[112px] mb-4 bg-[#333333] p-[2px] flex w-fit ">
            <Image
              src={"/profile/avatar.jpg"}
              height={128}
              width={128}
              className="rounded-full z-10 object-cover"
              unoptimized
              alt="Profile Image"
              style={{height: "128px", width: "128px"}}
            />
          </div>
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <h1 className="text-white text-3xl font-extrabold">John Doe</h1>
                <span className="bg-[#1E1E1E] border  rounded-full text-white px-[14px] py-[5px] font-semibold text-sm cursor-default">
                  User
                </span>
                {/* ADMIN */}
                {/* <span className="bg-[#D8FF2E] border border-[#A0C111] rounded-full text-[#4D5B0F] px-[14px] py-[5px] font-semibold text-sm cursor-default">
                  Admin
                </span>
                // MODERATOR
                <span className="bg-[#EEF2FF] border border-[#A5B4FC] rounded-full px-[14px] py-[5px] font-semibold text-sm text-[#4F46E5] cursor-default">
                  Moderator
                </span> */}
              </div>
              <p className="text-white/50 font-normal text-lg">
                elementary221b@gmail.com
              </p>
            </div>
            <div className="flex gap-2">
              <ProfileButton share />
              <ProfileButton viewProfile />
            </div>
          </div>

          {/* <InputFocusBlur placeholder="Type something" /> */}
          <form className="flex flex-col gap-[10px] mt-9">
            <label className="text-white/80 text-lg">Email Adress</label>
            <div className="relative border border-[#3C3C3C] rounded-[8px]">
              <input
                type="text"
                placeholder="elementary221b@gmail.com"
                disabled
                className="border border-[#3C3C3C] bg-[#1E1E1E] text-white placeholder:text-white/70 p-2 rounded-[8px] w-full pl-[42px] font-normal"
              />
              <Mail className="absolute top-1/2 left-[14px] transform -translate-y-1/2 w-[20px] h-[20px] text-[#C4C4C4]" />
            </div>
          </form>
          <form className="flex flex-col gap-[10px] mt-5">
            <label className="text-white/80 text-lg">Username</label>
            <div className="relative border border-[#3C3C3C] rounded-[8px]">
              <input
                type="text"
                placeholder="elementary221b"
                disabled
                className="border border-[#3C3C3C] bg-[#1E1E1E] text-white placeholder:text-white/70 p-2 rounded-[8px] w-full pl-[42px] font-normal"
              />
              <AtSign className="absolute top-1/2 left-[14px] transform -translate-y-1/2 w-[20px] h-[20px] text-[#C4C4C4]" />
            </div>
          </form>
          <div className="flex flex-col gap-[10px] mt-5">
            <label className="text-white/70 text-lg">About me</label>
            <textarea
              placeholder="Write your bio..."
              className=" w-full border border-[#3C3C3C] bg-[#1E1E1E] text-white placeholder:text-white/70 rounded-[8px] font-normal p-2 min-h-[100px]"
            />
          </div>
          <div className="flex flex-col gap-[10px] mt-5">
            <label className="text-white/70 text-lg">Change Avatar</label>
            <div className="flex gap-8">
              <Image
                src={"/profile/avatar.jpg"}
                height={64}
                width={64}
                className="rounded-full z-10 object-cover"
                unoptimized
                alt="Profile Image"
                style={{height: "64px", width: "64px"}}
              />
              <DropZone />
            </div>
          </div>
          <div className="flex mt-5 justify-self-end gap-2 self-end">
            <ProfileButton cancel />
            <ProfileButton save />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMainProfile;

//
