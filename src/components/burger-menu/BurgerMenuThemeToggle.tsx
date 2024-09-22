import React from "react";
import DarkModeCheckbox from "../ui/DarkModeCheckbox";

const BurgerMenuThemeToggle = () => {
  return (
    <div
      className={`text-white/70 item transition ease-in-out duration-200 py-2 rounded-md px-2  hover:text-[#ffffff] cursor-default `}>
      <div className="flex items-center justify-between gap-2 ">
        <span className=" leading-normal text-nowrap text-sm">Theme</span>
        <DarkModeCheckbox />
      </div>
    </div>
  );
};

export default BurgerMenuThemeToggle;
