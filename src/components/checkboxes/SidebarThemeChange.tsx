"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";
const SidebarThemeChange = () => {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme, resolvedTheme} = useTheme();
  useEffect(() => setMounted(true), []);
  console.log(theme);
  // if (!mounted) return "sdfsadfas";

  return (
    <div className="theme-toggle flex align-middle justify-center mt-12 max-md:hidden">
      <input
        type="checkbox"
        id="theme-switch"
        className="theme-switch__input"
        checked={theme === "dark"}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <label htmlFor="theme-switch" className="theme-switch__label ">
        <div className="theme-switch__option light gap-[5px]">
          <Sun width={18} height={18} />
          <span>Light</span>
        </div>
        <div className="theme-switch__option dark gap-[5px]">
          <Moon width={18} height={18} />
          <span>Dark</span>
        </div>
      </label>
    </div>
  );
};

export default SidebarThemeChange;
