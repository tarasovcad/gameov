"use client";
import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";
import React, {useEffect, useState} from "react";

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
    <div
      className={
        "group cursor-default flex items-center gap-2 rounded-md border border-transparent text-neutral-400 focus-visible:text-neutral-300 focus-visible:border-neutral-800 focus-visible:outline-none"
      }>
      {isChecked ? (
        <Moon width={16} height={16} />
      ) : (
        <Sun width={16} height={16} />
      )}
      <span className="flex justify-between items-center gap-1 text-sm font-medium w-full">
        Dark mode
        <button
          className={`relative w-9 h-5 rounded-full transition-colors duration-300 mr-3 ${
            isChecked ? "bg-[#D8FF2E]" : "bg-gray-300"
          }`}
          onClick={handleToggle}>
          <span
            className={`absolute left-1 top-1 w-3 h-3 rounded-full bg-white transition-transform duration-300 ${
              isChecked ? "transform translate-x-4" : ""
            }`}
          />
        </button>
      </span>
    </div>
  );
};

export default DarkModeCheckbox;
