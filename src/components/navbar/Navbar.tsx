import React from "react";
import SearchInput from "./SearchInput";
import LanguageChoice from "./LanguageChoice";
import DropdownMenu from "./DropdownProfile";
import {NavbarProfileItems} from "@/data/NavbarItems";
import {NavbarLanuages} from "@/data/NavbarItems";
import DropdownLanguage from "./DropdownLanguage";

const Navbar = () => {
  return (
    <div className="z-20 w-full h-[65px] ">
      <div className="wrapper py-[12px] flex justify-between items-center">
        <SearchInput />
        <div className="flex gap-5 items-center">
          {/* <LanguageChoice /> */}
          <DropdownLanguage items={NavbarLanuages} />
          <span className="text-[#2E2E2E]">|</span>
          <DropdownMenu items={NavbarProfileItems} />
        </div>
      </div>

      <div className="stroke"></div>
    </div>
  );
};

export default Navbar;
