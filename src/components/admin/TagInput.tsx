"use client";

import React, {useState, KeyboardEvent, useEffect, useRef} from "react";
import {X} from "lucide-react";
import {Input} from "@/components/ui/input";
import {AnimatePresence, motion} from "framer-motion";

interface TagInputProps {
  tags: string[];
  setTags: (tags: string[]) => void;
  suggestions: string[];
  placeholder?: string;
  className?: string;
}

export default function TagInput({
  tags,
  setTags,
  suggestions,
  placeholder = "Add tag",
  className,
}: TagInputProps) {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (inputValue.trim()) {
      const filteredSuggestions = suggestions.filter((suggestion) => {
        const suggestionLower = suggestion.toLowerCase();
        const inputLower = inputValue.toLowerCase();
        const tagsLower = tags.map((tag) => tag.toLowerCase());

        return (
          suggestionLower.includes(inputLower) &&
          !tagsLower.includes(suggestionLower)
        );
      });
      setFilteredSuggestions(filteredSuggestions);
      setShowSuggestions(true);

      if (filteredSuggestions.length === 1) {
        setSelectedSuggestionIndex(0);
      } else {
        setSelectedSuggestionIndex(-1);
      }
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  }, [inputValue, tags, suggestions]);

  const handleInvalidInput = () => {
    setIsInvalid(true);
    setInputValue("");

    setTimeout(() => {
      setIsInvalid(false);
    }, 2000);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const trimmedValue = inputValue.trim().toLowerCase();

      // Check for duplicate first
      if (tags.includes(trimmedValue)) {
        handleInvalidInput();
        return;
      }

      if (filteredSuggestions.length === 1) {
        addTag(filteredSuggestions[0]);
      } else if (
        selectedSuggestionIndex >= 0 &&
        filteredSuggestions[selectedSuggestionIndex]
      ) {
        addTag(filteredSuggestions[selectedSuggestionIndex]);
      } else if (trimmedValue !== "") {
        // Check if the input value exists in gameGenres
        const exists = suggestions.some(
          (suggestion) => suggestion.toLowerCase() === trimmedValue,
        );

        if (exists) {
          addTag(trimmedValue);
        } else {
          handleInvalidInput();
        }
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedSuggestionIndex((prev) =>
        prev < filteredSuggestions.length - 1 ? prev + 1 : prev,
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedSuggestionIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Backspace" && inputValue === "" && tags.length > 0) {
      e.preventDefault();
      removeTag(tags[tags.length - 1]);
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  const addTag = (value: string) => {
    const trimmedValue = value.trim().toLowerCase();
    if (tags.includes(trimmedValue)) {
      handleInvalidInput();
      return;
    }
    setTags([...tags, trimmedValue]);
    setInputValue("");
    setShowSuggestions(false);
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const getBorderColor = () => {
    if (!isInvalid) return "border-input";
    return "border-red-500";
  };

  return (
    <div className="w-full relative" ref={containerRef}>
      <div
        className={`flex items-center flex-wrap gap-1 py-1 bg-[#171718] rounded-sm border transition-colors duration-200 
          ${getBorderColor()} 
          ${tags.length === 0 ? "" : "px-2"}`}>
        <AnimatePresence>
          {tags.map((tag) => (
            <motion.button
              type="button"
              onClick={() => removeTag(tag)}
              key={tag}
              initial={{opacity: 0, scale: 0.8}}
              animate={{opacity: 1, scale: 1}}
              exit={{opacity: 0, scale: 0.8}}
              transition={{duration: 0.2}}
              className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm cursor-pointer">
              {tag}
              <span className="hover:text-blue-600">
                <X size={14} />
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowSuggestions(true)}
          placeholder={tags.length === 0 ? placeholder : ""}
          className={`rounded-sm bg-transparent flex-1 border-none  ${
            tags.length === 0
              ? "focus-visible:ring-2 focus-visible:ring-offset-2"
              : "focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none focus:border-transparent focus:shadow-none"
          } ${isInvalid ? "focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none focus:border-transparent focus:shadow-none" : ""}`}
        />
      </div>

      {showSuggestions && filteredSuggestions.length > 0 && (
        <motion.div
          initial={{opacity: 0, y: -10}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: -10}}
          className="absolute z-10 w-full mt-1 bg-white dark:bg-bg border border-border/40 rounded-md shadow-lg max-h-60 overflow-auto">
          {filteredSuggestions.map((suggestion, index) => (
            <div
              key={suggestion}
              onClick={() => addTag(suggestion)}
              onMouseEnter={() => setSelectedSuggestionIndex(index)}
              className={`px-3 py-2 cursor-pointer ${
                index === selectedSuggestionIndex ? "bg-white text-black" : ""
              }`}>
              {suggestion}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
