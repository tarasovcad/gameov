import UserAccount from "@/components/userProfile/UserAccount";
import UserProfile from "@/components/userProfile/UserProfile";
import UserProfileTabs from "@/components/userProfile/UserProfileTabs";
import UserSecurity from "@/components/userProfile/UserSecurity";
import {authOptions} from "@/lib/auth";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";

import React from "react";
import {getUserDescription} from "../actions/profile/getUserDescription";

const Profile = async ({searchParams}: {searchParams: {tab?: string}}) => {
  const tab = searchParams.tab || "profile";
  const setTab = async (newTab: string) => {
    "use server";
    redirect(`/profile?tab=${newTab.toLowerCase()}`);
  };

  const data = await getServerSession(authOptions);
  const userDescription = await getUserDescription(data?.user?.email);

  return (
    <div className="pt-9 flex flex-col items-center">
      <UserProfileTabs setTabs={setTab} />
      {tab === "profile" && <UserProfile />}
      {tab === "account" && (
        <UserAccount data={data} userDescription={userDescription} />
      )}
      {tab === "security" && <UserSecurity />}
    </div>
  );
};

export default Profile;
