"use client";
import {Laptop, Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";
import React, {useEffect, useState} from "react";

const themes = [
  {icon: <Sun size={19} />, name: "light"},
  {icon: <Moon size={19} />, name: "dark"},
  {icon: <Laptop size={19} />, name: "system"},
];

const DarkModeCheckbox = () => {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center bg-bg border border-border rounded-full text-white/70">
      {themes.map(({icon, name}) => (
        <button
          key={name}
          onClick={() => {
            setTheme(name);
          }}
          className={`hover:text-white px-[5px] py-[5px] rounded-full ${theme === name && "text-white outline outline-1 outline-border transition duration-300 ease-in-out"}`}>
          {icon}
        </button>
      ))}
    </div>
  );
};

export default DarkModeCheckbox;
