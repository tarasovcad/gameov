import React from "react";
import Image from "next/image";
import {MessageSquareMore, SquarePen} from "lucide-react";
const UserProfile = () => {
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

              <p className="text-white/50 text-xl mt-5">
                Code wizard. Bug slayer. API architect. Coffee-fueled problem
                solver. Git master. Stack Overflow addict. 1s & 0s whisperer.
              </p>
              <div className="w-full h-[1px] bg-white/50 my-5"></div>
              <div className="flex gap-14">
                <div className="flex items-center gap-3">
                  <SquarePen className="w-8 h-8 text-white" />
                  <span className="text-white text-xl">Posts: 0</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquareMore className="w-8 h-8 text-white" />
                  <span className="text-white text-xl">Comments: 201</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
