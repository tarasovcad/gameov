"use client";
import React from "react";
import SearchInput from "./SearchInput";
import DropdownMenu from "./DropdownProfile";
import {NavbarProfileItems} from "@/data/NavbarItems";
import {noRoutes} from "@/data/WrapperRoutes";
import ThemeDropdown from "./ThemeDropdown";
import Logo from "../logo/Logo";
import BurgerMenu from "../burger-menu/BurgerMenu";
import Link from "next/link";
import {usePathname} from "next/navigation";
const Navbar = ({username, image, email}: any) => {
  const pathname = usePathname();
  if (noRoutes.includes(pathname as string)) {
    return null;
  }

  return (
    <div className="relative">
      <div className="w-full h-[65px] relative mb-5 z-50 dark:bg-backgound bg-[#f0f0f0] ">
        <div className="py-[12px] flex justify-between px-4 items-center max-[701px]:px-6 pr-4 h-full">
          <Logo showatNavbar={true} />
          <div className="flex gap-2 items-center min-[701px]:w-full pr-6">
            <SearchInput />
          </div>

          <div className="flex gap-2 items-center max-[700px]:hidden">
            <ThemeDropdown />
            <span className=" dark:text-[#2b2b2b] text-black/70 mr-2 ">|</span>
            {email ? (
              <DropdownMenu
                items={NavbarProfileItems}
                username={username}
                image={image}
                email={email}
              />
            ) : (
              <>
                <Link
                  href="/signup"
                  className="bg-white py-2 px-3 rounded-md border border-[#3a3a3a]  text-center text-black transition-all duration-300 ease-in-out hover:bg-white/80 hover:border-[#3a3a3a]  hover:shadow-lg active:transform active:scale-95 min-w-[110px] text-[14px]">
                  Get Started
                </Link>
                <Link
                  href="/signin"
                  className="bg-[#262626] py-2 px-3 rounded-md border border-white/10 text-center text-white transition-all duration-300 ease-in-out hover:bg-[#3a3a3a] hover:border-white/20 hover:shadow-lg active:transform active:scale-95 min-w-[110px] text-[14px]">
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="stroke"></div>
      </div>
      <div className="absolute right-[10px] top-[21.5px] ">
        <BurgerMenu username={username} image={image} email={email} />
      </div>
    </div>
  );
};

export default Navbar;
