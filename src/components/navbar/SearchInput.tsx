"use client";
import {Search, X} from "lucide-react";
import Image from "next/image";
import React, {useState} from "react";

const SearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="flex-grow mr-4">
      <form>
        <div className="relative">
          <input
            className="searchinput max-w-[710px] w-full caret-white/50 placeholder:text-white/50 font-medium text-white"
            placeholder="Search"
            type="text"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <button className="absolute inset-y-0 left-0 flex items-center pl-3 searchsvg">
            <Search size={20} color="#9B9B9B" />
          </button>
          {isFocused && (
            <button className="close absolute inset-y-0 right-0 flex items-center pr-3">
              <X size={20} color="#9B9B9B" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
