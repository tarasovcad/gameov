"use client";
import {Laptop, Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";
import React, {useEffect, useState} from "react";

const themes = [
  {icon: <Sun size={18} />, name: "light"},
  {icon: <Moon size={18} />, name: "dark"},
  {icon: <Laptop size={18} />, name: "system"},
];

const DarkModeCheckbox = () => {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isChecked = theme === "dark";

  if (!mounted) return null;

  return (
    <div className="flex items-center bg-black  border border-[#2D2D2D] rounded-full text-white/70">
      {themes.map(({icon, name}) => (
        <button
          key={name}
          onClick={() => {
            setTheme(name);
          }}
          className={`hover:text-white px-[5px] py-[5px] rounded-full ${theme === name && "text-white outline outline-1 outline-[#2D2D2D] transition duration-300 ease-in-out"}`}>
          {icon}
        </button>
      ))}
    </div>
  );
};

export default DarkModeCheckbox;
