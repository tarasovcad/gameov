import React from "react";

const PostSidebarSection = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="bg-[#181818] text-sm flex flex-col border border-border/40 rounded-[8px]">
      <div className="w-full px-5 py-5">
        <h2 className="text-white text-[20px] font-semibold ">{title}</h2>
      </div>
      <div className="stroke"></div>
      <div className="px-5 py-5 ">{children}</div>
    </div>
  );
};

export default PostSidebarSection;
