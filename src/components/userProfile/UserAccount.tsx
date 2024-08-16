import Image from "next/image";
import React from "react";
import {AtSign, Mail} from "lucide-react";
import DropZone from "../ui/DropZone";
import ProfileButton from "../ui/ProfileButton";
import {userSession} from "@/types/userSession";
import {Session} from "next-auth";
import {roleBadgeConfig} from "@/data/roleBadge";
import {redirect} from "next/navigation";
import InputSpotlight from "../ui/InputSpotlight";
import {InputLabel} from "../ui/InputLabel";

const UserAccount = ({data}: {data: Session | null}) => {
  const {name, email, image, role, username}: userSession = data?.user || {};
  if (!data) {
    redirect("/signin");
  }

  const [bg, border, text] =
    roleBadgeConfig[(role as keyof typeof roleBadgeConfig) ?? "User"];
  return (
    <div className="w-full bg-[#262626] rounded-2xl">
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
                <h1 className="text-white text-3xl font-extrabold">
                  {username}
                </h1>
                <span
                  className={`${bg} border ${border} rounded-full ${text} px-[14px] py-[5px] font-semibold text-sm cursor-default`}>
                  {role}
                </span>
              </div>
              <p className="text-white/50 font-normal text-lg">{email}</p>
            </div>
            <div className="flex gap-2">
              <ProfileButton share />
              <ProfileButton viewProfile />
            </div>
          </div>
          <form action="">
            <div className="flex flex-col gap-[10px] mt-9">
              <InputLabel label="Email Address" className="!text-lg" />
              <div className="relative border border-[#3C3C3C] rounded-[8px]">
                <InputSpotlight
                  type="text"
                  placeholder={email || ""}
                  disabled
                  id="email"
                  className="pl-10"
                />
                <Mail className="absolute top-1/2 left-[14px] transform -translate-y-1/2 w-[20px] h-[20px] text-white/70" />
              </div>
            </div>
            <div className="flex flex-col gap-[10px] mt-5">
              <InputLabel label="Username" className="!text-lg" />
              <div className="relative border border-[#3C3C3C] rounded-[8px]">
                <InputSpotlight
                  type="text"
                  placeholder={username || ""}
                  disabled
                  id="email"
                  className="pl-10"
                />
                <AtSign className="absolute top-1/2 left-[14px] transform -translate-y-1/2 w-[20px] h-[20px] text-white/70" />
              </div>
            </div>
            <div className="flex flex-col gap-[10px] mt-5">
              <InputLabel label="About me" className="!text-lg" />
              <textarea
                placeholder="Write your bio..."
                className=" w-fullborder-[#3C3C3C]placeholder:text-white/70 rounded-[8px] font-normal  min-h-[100px] border border-white/10 bg-[#1A1A1A] text-white/70 p-3 transition-colors duration-500 placeholder:text-white/40 placeholder:select-none focus:text-gray-100"
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
          </form>

          <div className="flex mt-5 justify-self-end gap-2 self-end">
            <ProfileButton cancel />
            <ProfileButton save />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;

//
