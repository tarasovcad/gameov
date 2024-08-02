import React from "react";
import SearchInput from "./SearchInput";
import LanguageChoice from "./LanguageChoice";
import ProfileNavbar from "./ProfileNavbar";
import DropdownMenu from "./DropdownMenu";
import NavbarItems from "@/data/NavbarItems";

const Navbar = () => {
  return (
    <div className="z-20 w-full h-[65px]">
      <div className="wrapper py-[12px] flex justify-between items-center">
        <SearchInput />
        <div className="flex gap-5 items-center">
          <LanguageChoice />
          <span className="text-[#2E2E2E]">|</span>
          {/* <ProfileNavbar /> */}
          <DropdownMenu items={NavbarItems} />
        </div>
      </div>

      <div className="stroke"></div>
    </div>
  );
};

export default Navbar;
