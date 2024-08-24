import React from "react";

const roleBadgeConfig = {
  Admin: ["bg-[#D8FF2E]", "border-[#A0C111]", "text-[#4D5B0F]"],
  User: ["bg-[#EEF2FF]", "border-white", "text-black"],
  Moderator: ["bg-[#EEF2FF]", "border-[#A5B4FC]", "text-[#4F46E5]"],
};

const UserBadge = ({role}: {role: string | undefined}) => {
  const [bg, border, text] =
    roleBadgeConfig[(role as keyof typeof roleBadgeConfig) ?? "User"];
  return (
    <span
      className={`${bg} border ${border} rounded-full ${text} px-[14px] py-[5px] font-semibold text-sm cursor-default`}>
      {role}
    </span>
  );
};

export default UserBadge;
