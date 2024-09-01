import React from "react";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <div className="z-50">
      <Link href={"/"}>
        <Image
          src="/logo.svg"
          alt="logo"
          width={130}
          height={23}
          className="ml-[9px] mt-[5px] max-[1000px]:hidden cursor-pointer "
        />
      </Link>
    </div>
  );
};

export default Logo;
