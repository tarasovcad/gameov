import UserAccount from "@/components/userProfile/UserAccount";
import UserProfileTabs from "@/components/userProfile/UserProfileTabs";

import UserSecurity from "@/components/userProfile/UserSecurity";
import {authOptions} from "@/lib/auth";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";

import React from "react";

const Profile = async ({searchParams}: {searchParams: {tab?: string}}) => {
  const tab = searchParams.tab || "account";

  const setTab = async (newTab: string) => {
    "use server";
    redirect(`/profile?tab=${newTab.toLowerCase()}`);
  };

  const data = await getServerSession(authOptions);

  return (
    <div className="pt-9 flex flex-col items-center">
      <UserProfileTabs setTabs={setTab} />
      {tab === "account" && <UserAccount data={data} />}
      {tab === "security" && <UserSecurity />}
    </div>
  );
};

export default Profile;
