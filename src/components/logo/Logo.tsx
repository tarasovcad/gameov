"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Logo = ({showatNavbar = false}: {showatNavbar?: boolean}) => {
  return (
    <>
      {showatNavbar ? (
        <div className="min-[701px]:hidden cursor-pointer ">
          <Link
            href={"/"}
            className="flex w-fit items-center justify-start dark:hidden ">
            <Image
              src="/logo-dark.svg"
              alt="logo"
              width={130}
              height={23}
              className="cursor-pointer"
            />
          </Link>
          <Link
            href={"/"}
            className=" w-fit items-center justify-start hidden dark:block">
            <Image
              src="/logo.svg"
              alt="logo"
              width={130}
              height={23}
              className="cursor-pointer"
            />
          </Link>
        </div>
      ) : (
        <>
          <div className="mt-[5px] ml-[9px] max-[1100px]:mt-[13px] max-[1000px]:hidden cursor-pointer">
            <Link
              href={"/"}
              className="flex w-fit items-center justify-start dark:hidden ">
              <Image
                src="/logo-dark.svg"
                alt="logo"
                width={130}
                height={23}
                className="cursor-pointer"
              />
            </Link>
            <Link
              href={"/"}
              className=" w-fit items-center justify-start hidden dark:block">
              <Image
                src="/logo.svg"
                alt="logo"
                width={130}
                height={23}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div
            className={`w-[40px] h-[40px] bg-[#262626] rounded-full flex items-center justify-center p-1 min-[1000px]:hidden cursor-pointer `}>
            <Link href={"/"}>
              <Image src="/mdLogo.svg" alt="avatar" width={50} height={50} />
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Logo;
