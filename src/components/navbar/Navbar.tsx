import React from "react";
import SearchInput from "./SearchInput";
import DropdownMenu from "./DropdownProfile";
import {NavbarProfileItems} from "@/data/NavbarItems";

import Link from "next/link";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";

import {headers} from "next/headers";
import {noRoutes} from "@/data/WrapperRoutes";
import {userSession} from "@/types/userTypes";
import ThemeDropdown from "./ThemeDropdown";
import Logo from "../logo/Logo";
import BurgerMenu from "../burger-menu/BurgerMenu";
const Navbar = async () => {
  const headersList = headers();
  const header = headersList.get("x-pathname");
  if (noRoutes.includes(header as string)) {
    return null;
  }

  const data = await getServerSession(authOptions);
  const {email, image, username} = (data?.user as userSession) || {};

  return (
    <div className="z-20 w-full h-[65px] mb-5">
      <div className="py-[12px] flex justify-between px-4 items-center max-[701px]:px-6 pr-4">
        <Logo showatNavbar={true} />
        <div className="flex gap-2 items-center  min-[701px]:w-full">
          <SearchInput />
          <BurgerMenu username={username} image={image} email={email} />
        </div>

        <div className="flex gap-2 items-center max-[700px]:hidden">
          <ThemeDropdown />
          <span className="text-[#2E2E2E] mr-2 ">|</span>
          {data && email ? (
            <DropdownMenu
              items={NavbarProfileItems}
              username={username}
              image={image}
              email={email}
            />
          ) : (
            <Link
              href={"/signin"}
              className="bg-black p-[5px] px-[20px] rounded-md flex items-center gap-2 font-bold text-sm border border-[#999aa0] min-w-[90px]  hover:bg-white/90 transition-colors duration-300">
              Sign In
            </Link>
          )}
        </div>
      </div>

      <div className="stroke z-50"></div>
    </div>
  );
};

export default Navbar;
