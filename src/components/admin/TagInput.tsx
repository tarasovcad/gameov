"use client";

import {X} from "lucide-react";
import {useState, KeyboardEvent} from "react";
import {Input} from "../ui/input";
import {AnimatePresence, motion} from "framer-motion";

interface TagInputProps {
  tags: string[];
  setTags: (tags: string[]) => void;
}

export default function TagInput({tags, setTags}: TagInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      const trimmedValue = inputValue.trim().toLowerCase();

      if (!tags.includes(trimmedValue)) {
        setTags([...tags, trimmedValue]);
      }
      setInputValue("");
    }

    if (e.key === "Backspace" && inputValue === "" && tags.length > 0) {
      e.preventDefault();
      removeTag(tags[tags.length - 1]);
    }
  };

  const handleBlur = () => {
    if (inputValue.trim() !== "") {
      const trimmedValue = inputValue.trim().toLowerCase();
      if (!tags.includes(trimmedValue)) {
        setTags([...tags, trimmedValue]);
      }
      setInputValue("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="w-full">
      <div
        className={`flex items-center flex-wrap gap-1 py-1  bg-[#171718] rounded-sm border border-input ${tags.length === 0 ? "" : "px-2"}`}>
        <AnimatePresence>
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{opacity: 0, scale: 0.8}}
              animate={{opacity: 1, scale: 1}}
              exit={{opacity: 0, scale: 0.8}}
              transition={{
                duration: 0.2,
              }}
              className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {tag}
              <button
                type="button"
                onClick={() => removeTag(tag)}
                className="hover:text-blue-600">
                <X size={14} />
              </button>
            </motion.span>
          ))}
        </AnimatePresence>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          placeholder={tags.length === 0 ? "Add genre" : ""}
          className={`rounded-sm bg-transparent flex-1 border-none  ${
            tags.length === 0
              ? "focus-visible:ring-2 focus-visible:ring-offset-2"
              : "focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none focus:border-transparent focus:shadow-none"
          }`}
        />
      </div>
    </div>
  );
}
