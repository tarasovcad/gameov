import React from "react";
import SearchInput from "./SearchInput";
import LanguageChoice from "./LanguageChoice";
import DropdownMenu from "./DropdownProfile";
import {NavbarProfileItems} from "@/data/NavbarItems";
import {NavbarLanuages} from "@/data/NavbarItems";
import DropdownLanguage from "./DropdownLanguage";
import Link from "next/link";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {userSession} from "@/types/userSession";
const Navbar = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  const {name, email, image, role, username}: userSession = session?.user || {};
  return (
    <div className="z-20 w-full h-[65px] ">
      <div className="wrapper py-[12px] flex justify-between items-center">
        <SearchInput />
        <div className="flex gap-5 items-center">
          {/* <LanguageChoice /> */}
          <DropdownLanguage items={NavbarLanuages} />
          <span className="text-[#2E2E2E]">|</span>
          {session && session?.user?.email ? (
            <DropdownMenu
              items={NavbarProfileItems}
              username={username}
              image={image}
              email={email}
            />
          ) : (
            <Link
              href={"/signin"}
              className="bg-white p-[5px] px-[20px] rounded-md flex items-center gap-2 font-bold text-sm border border-[#999aa0] hover:bg-white/90 transition-colors duration-300">
              Sign In
            </Link>
          )}
        </div>
      </div>

      <div className="stroke"></div>
    </div>
  );
};

export default Navbar;
