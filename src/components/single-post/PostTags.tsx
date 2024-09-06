import React from "react";

const tags = ["Games 2024", "Horror", "Adventure", "Action", "RPG", "Indie"];

const PostTags = () => {
  return (
    <div className="flex items-center gap-2 flex-wrap mt-4">
      {tags.map((tag, index) => {
        return (
          <span
            className="border border-white rounded-full px-2 font-medium py-[2px] text-[13px]"
            key={index}>
            {tag}
          </span>
        );
      })}
    </div>
  );
};

export default PostTags;
