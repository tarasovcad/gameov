import Link from "next/link";
import React from "react";

const UnderlineLink = ({
  link,
  title,
  className,
}: {
  link: string;
  title: string;
  className?: string;
}) => {
  return (
    <Link
      href={link}
      className={`relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-100 after:bg-white/50 after:transition-transform after:duration-150 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-0 ${className || ""}`}>
      {title}
    </Link>
  );
};

export default UnderlineLink;
