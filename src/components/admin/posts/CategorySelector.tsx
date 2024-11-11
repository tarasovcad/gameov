import {PostCategory} from "@/data/postData";
import {cn} from "@/lib/utils";
import {motion} from "framer-motion";
import {AppleIcon, BoxIcon, LaptopIcon, PaletteIcon} from "lucide-react";
import React from "react";
import {FieldError} from "react-hook-form";

interface CategoryOption {
  value: PostCategory;
  label: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
}

const CategorySelector = ({
  selectedCategory,
  setSelectedCategory,
  error,
}: {
  selectedCategory: PostCategory | string;
  setSelectedCategory: (category: PostCategory) => void;
  error?: FieldError;
}) => {
  const categories: CategoryOption[] = [
    {
      value: "PC_GAMES",
      label: "PC Games",
      icon: <LaptopIcon className="w-4 h-4" />,
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-400",
    },
    {
      value: "SOFTWARE",
      label: "Software",
      icon: <BoxIcon className="w-4 h-4" />,
      bgColor: "bg-green-500/10",
      textColor: "text-green-400",
    },
    {
      value: "MAC_OS_SOFTWARE",
      label: "Mac Software",
      icon: <AppleIcon className="w-4 h-4" />,
      bgColor: "bg-gray-500/10",
      textColor: "text-gray-400",
    },
    {
      value: "GRAPHICS_AND_DESIGN",
      label: "Graphics",
      icon: <PaletteIcon className="w-4 h-4" />,
      bgColor: "bg-purple-500/10",
      textColor: "text-purple-400",
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {categories.map((category) => (
        <motion.button
          whileTap={{scale: 0.96}}
          whileHover={{scale: 0.99}}
          key={category.value}
          onClick={(e) => {
            e.preventDefault();
            setSelectedCategory(category.value);
          }}
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-md transition-colors",
            category.bgColor,
            category.textColor,
            "hover:bg-opacity-20",
            selectedCategory === category.value
              ? "ring-2 ring-blue-500"
              : "ring-1 ring-zinc-700",
            error &&
              "border border-[#F31260] focus-visible:ring-0 focus-visible:ring-offset-0",
          )}>
          {category.icon}
          <span className="text-sm font-medium line-clamp-1 line">
            {category.label}
          </span>
        </motion.button>
      ))}
    </div>
  );
};

export default CategorySelector;
