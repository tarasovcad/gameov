import React, {useRef, useEffect, useState} from "react";
import {Search, X} from "lucide-react";
import AnimatedArrow from "../ui/AnimatedArrow";
import {motion, AnimatePresence} from "framer-motion";

const SignOutModalMenu = ({
  isOpen,
  onClose,
  onConfirm,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.15}}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] text-left">
          <motion.div
            ref={modalRef}
            initial={{scale: 0.95, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            exit={{scale: 0.95, opacity: 0}}
            transition={{duration: 0.15}}
            className="bg-[#262626] rounded-xl w-full max-w-[400px] border border-[#3c3c3c] relative p-6">
            <h2 className="text-white text-lg font-semibold mb-2">
              Are you sure you want to sign out?
            </h2>
            <p className="text-white/70 mb-6 text-sm">
              You will be logged out of your account and redirected to the login
              page.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-[#3c3c3c] text-white rounded-md hover:bg-[#4a4a4a] transition-colors">
                Close
              </button>
              <button
                onClick={onConfirm}
                className="px-4 py-2 bg-[#D8FF2E] text-black rounded-md hover:bg-[#c2e629] transition-colors">
                Sign Out
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignOutModalMenu;
