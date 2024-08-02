import React from "react";
import Image from "next/image";
import {ChevronDown} from "lucide-react";
const ProfileNavbar = () => {
  return (
    <div className="flex gap-3 items-center">
      <Image
        className="cursor-pointer"
        src="/navbar/avatar.png"
        alt="Arrow Down"
        width={30}
        height={30}
      />
      <div className="flex gap-[8px] items-center">
        <span className="text-[#C4C4C4] font-medium">tarasovcad</span>
        <ChevronDown size={20} color="#9B9B9B" />
      </div>
    </div>
  );
};

export default ProfileNavbar;
