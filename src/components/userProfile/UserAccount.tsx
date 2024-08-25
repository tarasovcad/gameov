import React from "react";
import {AtSign, Mail} from "lucide-react";
import ProfileButton from "../ui/ProfileButton";
import {Session} from "next-auth";
import {redirect} from "next/navigation";
import InputSpotlight from "../ui/InputSpotlight";
import {InputLabel} from "../ui/InputLabel";
import UserAccountFormSubmit from "./UserAccountFormSubmit";
import {getUserDescription} from "@/app/actions/profile/getUserDescription";
import UserBadge from "../ui/UserBadge";
import UserProfileImage from "./UserProfileImage";
import {userSession} from "@/types/userTypes";
import UserProfileBackground from "./UserProfileBackground";
import {ProfileProvider} from "@/providers/ProfileProvider";

const UserAccount = async ({data}: {data: Session | null}) => {
  const userDescription = await getUserDescription(data?.user?.email);

  const {email, image, role, username}: userSession = data?.user || {};
  if (!data) {
    redirect("/signin");
  }
  const profileLink = `/profile/${username}`;
  const shareLink: string = `${process.env.SERVER_HOST}/profile/${username}`;
  return (
    <ProfileProvider>
      <div className="w-full rounded-2xl bg-second mb-6">
        <div className="p-[17px]">
          <UserProfileBackground image={image} />
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
                <ProfileButton share shareLink={shareLink} />
                <ProfileButton viewProfile profileLink={profileLink} />
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
                <Mail className="absolute top-1/2 left-[14px] transform -translate-y-1/2   w-[20px] h-[20px] text-white/70" />
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
    </ProfileProvider>
  );
};

export default UserAccount;
