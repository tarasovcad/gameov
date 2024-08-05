import React from "react";

import {Lock} from "lucide-react";
import Image from "next/image";
const UserSecurity = () => {
  return (
    <div className="w-full bg-[#262626] rounded-2xl">
      <div className="p-[20px] relative">
        <div className="max-w-[50%]">
          <div className="w-24 h-24 bg-[#333333] rounded-full flex items-center justify-center mb-8">
            <Lock className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-white text-2xl font-extrabold mb-5">
            Change Password
          </h2>
          <p className="text-white/50 mb-5">
            To change your password, please fill in the fields below. Your
            password must contain at least 8 characters, it must also include at
            least one upper case letter, one lower case letter, one number and
            one special character.
          </p>
          <form className="flex flex-col gap-[10px]">
            <label className="text-white/80 text-lg">Current Password</label>
            <div className="relative border border-[#3C3C3C] rounded-[8px]">
              <input
                type="text"
                placeholder="Current Password"
                className="border border-[#3C3C3C] bg-[#1E1E1E] text-white placeholder:text-white/70 p-2 rounded-[8px] w-full pl-[42px] font-normal"
              />
              <Lock className="absolute top-1/2 left-[14px] transform -translate-y-1/2 w-[20px] h-[20px] text-[#C4C4C4]" />
            </div>
          </form>
          <form className="flex flex-col gap-[10px]">
            <label className="text-white/80 text-lg">Current Password</label>
            <div className="relative border border-[#3C3C3C] rounded-[8px]">
              <input
                type="text"
                placeholder="Current Password"
                className="border border-[#3C3C3C] bg-[#1E1E1E] text-white placeholder:text-white/70 p-2 rounded-[8px] w-full pl-[42px] font-normal"
              />
              <Lock className="absolute top-1/2 left-[14px] transform -translate-y-1/2 w-[20px] h-[20px] text-[#C4C4C4]" />
            </div>
          </form>
          <form className="flex flex-col gap-[10px]">
            <label className="text-white/80 text-lg">Confirm Password</label>
            <div className="relative border border-[#3C3C3C] rounded-[8px]">
              <input
                type="text"
                placeholder="Confirm Password"
                className="border border-[#3C3C3C] bg-[#1E1E1E] text-white placeholder:text-white/70 p-2 rounded-[8px] w-full pl-[42px] font-normal"
              />
              <Lock className="absolute top-1/2 left-[14px] transform -translate-y-1/2 w-[20px] h-[20px] text-[#C4C4C4]" />
            </div>
          </form>
        </div>
        <Image
          src={"/profile/security.png"}
          height={500}
          width={500}
          className="absolute right-0 bottom-0"
          alt="Security Image"
        />
      </div>
    </div>
  );
};

export default UserSecurity;
