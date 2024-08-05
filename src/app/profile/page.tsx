"use client";
import UserAccount from "@/components/userProfile/UserAccount";
import UserProfile from "@/components/userProfile/UserProfile";
import UserProfileTabs from "@/components/userProfile/UserProfileTabs";
import UserSecurity from "@/components/userProfile/UserSecurity";
import {useRouter, useSearchParams} from "next/navigation";

import React from "react";

const Profile = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "profile";
  const setTab = (newTab: string) => {
    router.push(`/profile?tab=${newTab.toLowerCase()}`);
  };

  return (
    <div className="pt-9 flex flex-col items-center">
      <UserProfileTabs setTabs={setTab} />
      {tab === "profile" && <UserProfile />}
      {tab === "account" && <UserAccount />}
      {tab === "security" && <UserSecurity />}
    </div>
  );
};

export default Profile;
