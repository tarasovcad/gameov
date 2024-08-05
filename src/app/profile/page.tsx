"use client";
import UserAccount from "@/components/userProfile/UserAccount";
import UserProfile from "@/components/userProfile/UserProfile";
import UserProfileTabs from "@/components/userProfile/UserProfileTabs";
import UserSecurity from "@/components/userProfile/UserSecurity";

import React, {useState} from "react";

const Profile = () => {
  const [tabs, setTabs] = useState<string>("Profile");
  console.log(tabs);
  return (
    <div className="pt-9 flex flex-col items-center">
      <UserProfileTabs setTabs={setTabs} />
      {tabs === "Profile" && <UserProfile />}
      {tabs === "Account" && <UserAccount />}
      {tabs === "Security" && <UserSecurity />}
    </div>
  );
};

export default Profile;
