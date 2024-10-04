import React, {useRef, useEffect, useState} from "react";
import {Search, X, ArrowUp, ArrowDown, Undo2} from "lucide-react";
import AnimatedArrow from "../ui/AnimatedArrow";
import {motion, AnimatePresence} from "framer-motion";
import BurgerMenuThemeToggle from "../burger-menu/BurgerMenuThemeToggle";
import DarkModeCheckbox from "../ui/DarkModeCheckbox";
import Image from "next/image";
const SearchInputModalMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const [search, setSearch] = useState("");

  const toggleBodyScroll = (disable: boolean) => {
    if (disable) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscapeKey);
      inputRef.current?.focus();
      toggleBodyScroll(true);
    } else {
      toggleBodyScroll(false);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
      toggleBodyScroll(false);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const gameInfo = [
    {
      title: "Skyrim",
      description: "lorem ipsum dolor sit amet",
      image: "/game1.jpg",
    },
    {
      title: "The Last Of Us",
      description: "lorem ipsum dolor sit amet",
      image: "/game2.jpg",
    },
    {
      title: "Genshin Impact",
      description: "lorem ipsum dolor sit amet",
      image: "/game3.jpeg",
    },
    {
      title: "Cyberpunk 2077",
      description: "lorem ipsum dolor sit amet",
      image: "/game4.jpg",
    },
    {
      title: "The Witcher 3",
      description: "lorem ipsum dolor sit amet",
      image: "/game5.jpg",
    },
    {
      title: "The Witcher 3: Wild Hunt",
      description: "lorem ipsum dolor sit amet",
      image: "/game6.jpg",
    },
  ];
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.15}}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
          <motion.div
            ref={modalRef}
            initial={{scale: 0.95, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            exit={{scale: 0.95, opacity: 0}}
            transition={{duration: 0.15}}
            className="bg-[#262626] rounded-xl w-full max-w-[700px] border border-[#3c3c3c] relative">
            {/* input */}
            <div className="relative">
              <input
                ref={inputRef}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search"
                className="w-full caret-white/50 border-b rounded-t-xl border-[#3c3c3c] pl-[40px] pr-3 bg-[#262626] placeholder:font-normal font-medium placeholder:text-white/70 text-white focus:outline-none py-3.5 placeholder:text-[#BEBEBE] placeholder:text-[16px] "
              />
              <div className="absolute top-1/2 left-3 -translate-y-1/2">
                <Search size={20} className="text-[#BEBEBE]" />
              </div>
              {search && (
                <button
                  onClick={onClose}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/50 hover:text-white">
                  <X size={20} />
                </button>
              )}
            </div>

            <div className="border-b border-[#3c3c3c] ">
              <div className=" grid grid-cols-[45%_55%]">
                {/* left column */}
                <div className="pr-5 p-3 mr-1 h-[300px] overflow-y-auto custom-scrollbar ">
                  <p className="text-sm">Results</p>
                  {/* list of items */}
                  <div className="flex flex-col gap-1 mt-3 ">
                    {gameInfo.map(({title, description, image}) => {
                      return (
                        <div className="" key={title}>
                          <div className="flex items-center justify-start gap-3 rounded-lg hover:bg-bg transition-all duration-300 ease-in-out cursor-pointer p-1.5">
                            <div className=" w-[50px] h-[50px] overflow-hidden">
                              <Image
                                src={image}
                                width={1}
                                height={1}
                                alt="Profile Image"
                                unoptimized
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-[15px]">{title}</p>
                              <p className="text-[14px] text-white/70">
                                {description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* right column */}
                <div className="border-l border-[#3c3c3c]">
                  <div className="w-full max-h-[150px] h-full overflow-hidden border-b border-[#3c3c3c]">
                    <Image
                      src={"/game1.jpg"}
                      width={1}
                      height={1}
                      alt="Profile Image"
                      unoptimized
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2></h2>
                    <p></p>
                    <button></button>
                    <button></button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 py-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="p-1 rounded-md bg-bg border border-border">
                        <ArrowUp size={17} />
                      </div>
                      <div className="p-1 rounded-md bg-bg border border-border">
                        <ArrowDown size={17} />
                      </div>
                    </div>
                    <p className="">to navigate</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="p-1 rounded-md bg-bg border border-border">
                        <Undo2 size={17} className="scale-y-[-1]" />
                      </div>
                    </div>
                    <p className="">to select</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="p-1 px-[7px] rounded-md bg-bg border border-border">
                        esc
                      </div>
                    </div>
                    <p className="">to close</p>
                  </div>
                </div>
                <DarkModeCheckbox />
              </div>
            </div>

            {/* <div className="p-3 mt-2">
              <p className="text-white/70">Recent:</p>
              <ul className="flex flex-col gap-1 mt-3">
                {resentInfo.map(({title}) => {
                  const isItemHovered = hoveredItem === title;
                  return (
                    <div
                      key={title}
                      className="flex items-center gap-2 text-white/85 cursor-pointer hover:text-black hover:bg-[#D8FF2E] py-3 rounded-md p-2 transition-all duration-300 ease-in-out w-full justify-between"
                      onMouseEnter={() => setHoveredItem(title)}
                      onMouseLeave={() => setHoveredItem(null)}>
                      <div className="flex items-center gap-3">
                        <span className="text-sm">
                          <Search size={20} className="" />
                        </span>
                        <li className="">{title}</li>
                      </div>
                      <AnimatedArrow
                        isHovered={isItemHovered}
                        useBlackColor={true}
                      />
                    </div>
                  );
                })}
              </ul>
            </div> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchInputModalMenu;
