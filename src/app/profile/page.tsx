import UserMainProfile from "@/components/userProfile/userMainProfile";
import UserProfileTabs from "@/components/userProfile/userProfileTabs";
import React from "react";

const page = () => {
  return (
    <div className="pt-9 flex flex-col items-center">
      <UserProfileTabs />
      <UserMainProfile />
    </div>
  );
};

export default page;
