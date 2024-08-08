import Link from "next/link";
import React from "react";

const UnderlineLinkTerms = ({link, title}: {link: string; title: string}) => {
  return (
    <Link
      href={link}
      className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white/50 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100">
      {title}
    </Link>
  );
};

export default UnderlineLinkTerms;
