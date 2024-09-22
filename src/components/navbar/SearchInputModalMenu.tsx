import React, {useRef, useEffect, useState} from "react";
import {Search, X} from "lucide-react";
import AnimatedArrow from "../ui/AnimatedArrow";
import {motion, AnimatePresence} from "framer-motion";
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

  const resentInfo = [
    {
      title: "Battlefield 1",
    },
    {
      title: "Arma 3",
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
            className="bg-[#262626] rounded-xl w-full max-w-[600px] border border-[#3c3c3c] relative">
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                className="w-full caret-white/50 border-b rounded-t-xl border-[#3c3c3c] pl-[42px] pr-3 bg-[#262626] placeholder:font-normal font-medium placeholder:text-white/70 text-white focus:outline-none py-3"
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search size={20} className="text-white/50" />
              </span>
              <button
                onClick={onClose}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/50 hover:text-white">
                <X size={20} />
              </button>
            </div>
            <div className="p-3 mt-2">
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
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchInputModalMenu;
