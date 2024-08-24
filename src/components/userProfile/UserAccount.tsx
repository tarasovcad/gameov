import Image from "next/image";
import React from "react";
import {AtSign, FileUp, Mail} from "lucide-react";
import DropZone from "../ui/DropZone";
import ProfileButton from "../ui/ProfileButton";
import {userSession} from "@/types/userSession";
import {Session} from "next-auth";
import {redirect} from "next/navigation";
import InputSpotlight from "../ui/InputSpotlight";
import {InputLabel} from "../ui/InputLabel";
import UserAccountFormSubmit from "./UserAccountFormSubmit";
import {getUserDescription} from "@/app/actions/profile/getUserDescription";
import UserBadge from "../ui/UserBadge";
import UserProfileImage from "./UserProfileImage";

const UserAccount = async ({data}: {data: Session | null}) => {
  const userDescription = await getUserDescription(data?.user?.email);

  const {email, image, role, username}: userSession = data?.user || {};
  if (!data) {
    redirect("/signin");
  }
  return (
    <div className="w-full  rounded-2xl">
      <div className="p-[17px]">
        <div className="relative h-[228px] w-full rounded-2xl">
          <div className="absolute rounded-2xl inset-0  h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="absolute rounded-2xl bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#E4FF6D,transparent)]"></div>
          </div>
        </div>
        <div className="px-8 flex flex-col">
          <UserProfileImage image={image} />
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <h1 className="text-white text-3xl font-extrabold">
                  {username}
                </h1>
                <UserBadge role={role} />
              </div>
              <p className="text-white/50 font-normal text-lg">{email}</p>
            </div>
            <div className="flex gap-2 items-end max-[930px]:flex-col-reverse">
              <ProfileButton share />
              <ProfileButton viewProfile />
            </div>
          </div>
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
          <UserAccountFormSubmit
            email={email}
            userDescription={userDescription}
          />
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
