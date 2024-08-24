import {getUserProfileBySearchparams} from "@/app/actions/profile/getUserProfileBySearchparams";
import UserBadge from "@/components/ui/UserBadge";
import UserProfileImage from "@/components/userProfile/UserProfileImage";
import {noRoutes} from "@/data/WrapperRoutes";
import {MessageSquareMore, SquarePen, User} from "lucide-react";
import {headers} from "next/headers";
import React from "react";
import {type Profile} from "@/types/userTypes";
import {formatDate} from "@/functions/formatDate";

const Profile = async () => {
  const headersList = headers();
  const header = headersList.get("x-pathname") ?? "";
  const match = header.match(/\/profile\/(.+)$/);
  const searchParamsUsername = match ? match[1] : null;

  const userProfile = await getUserProfileBySearchparams(searchParamsUsername);

  const {username, description, role, image, createdAt} =
    userProfile as Profile;

  if (typeof userProfile === "string") {
    return <div>{userProfile}</div>;
  }

  if (noRoutes.includes(header as string)) {
    return null;
  }

  return (
    <div className="w-full bg-[#111111] rounded-2xl mt-5">
      <div className="p-[17px]">
        <div className="relative h-[228px] w-full rounded-2xl">
          <div className="absolute rounded-2xl inset-0  h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="absolute rounded-2xl bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#E4FF6D,transparent)]"></div>
          </div>
        </div>
        <div className="px-8 flex flex-col">
          <UserProfileImage image={image} />
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <h1 className="text-white text-3xl font-extrabold">
                  {username}
                </h1>
                <UserBadge role={role} />
              </div>
              <p className="text-white/50 text-[18px] mt-2">
                Account created at {formatDate(createdAt as string | undefined)}
              </p>
              <p className="text-white text-xl mt-5 font-normal">
                Code wizard. Bug slayer. API architect. Coffee-fueled problem
                solver. Git master. Stack Overflow addict. 1s & 0s whisperer.
              </p>

              <div className="flex gap-14 mt-12">
                <div className="flex items-center gap-2">
                  <SquarePen className="w-6 h-6 text-white" />
                  <span className="text-white/80 text-xl">Posts: 0</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquareMore className="w-6 h-6 text-white" />
                  <span className="text-white/80 text-xl">Comments: 201</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
