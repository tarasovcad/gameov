"use client";
import {Search} from "lucide-react";
import React, {useState} from "react";
import SearchInputModalMenu from "./SearchInputModalMenu";

const SearchInput = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div className="flex-grow mr-6 max-[700px]:hidden ">
        <div className="relative max-w-[710px] w-full" onClick={openModal}>
          <button className="max-w-[710px] w-full border dark:border-[#3c3c3c] rounded-[8px] py-[7px] pl-[42px] pr-3 placeholder:font-normal font-medium cursor-pointer transition-all duration-300 ease-in-out dark:hover:border-white/80  dark:hover:text-white dark:bg-[#262626] dark:text-white/50 bg-[#E8E8E8] text-[#797979] hover:text-black/80 border-black/10 hover:border-black/40">
            <div className="flex items-center justify-between w-full">
              <span className="text-left">Search...</span>
              <p className="text-right text-[12px] dark:bg-[#3c3c3c] bg-[#797979] text-white/70 px-2 py-[1px] rounded-md">
                ⌘+T
              </p>
            </div>
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 searchsvg">
              <Search size={20} />
            </span>
          </button>
        </div>
      </div>

      <Search
        size={22}
        className="min-[700px]:hidden cursor-pointer transition-all duration-200 ease-in-out"
        onClick={openModal}
      />

      <SearchInputModalMenu isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default SearchInput;
