import React from "react";
import Image from "next/image";
import {Moon, Sun} from "lucide-react";
const SidebarThemeChange = () => {
  return (
    <div className="theme-toggle flex align-middle justify-center mt-12">
      <input
        type="checkbox"
        id="theme-switch"
        className="theme-switch__input"
      />
      <label htmlFor="theme-switch" className="theme-switch__label ">
        <div className="theme-switch__option light gap-[5px]">
          <Sun width={18} height={18} />
          <span>Light</span>
        </div>
        <span className="theme-switch__option dark gap-[5px]">
          <Moon width={18} height={18} />
          <span>Dark</span>
        </span>
      </label>
    </div>
  );
};

export default SidebarThemeChange;
