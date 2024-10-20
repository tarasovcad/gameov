import {Instagram} from "iconsax-react";
import {Github} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {IconType} from "react-icons";
import {FaGithub, FaTelegramPlane, FaInstagram} from "react-icons/fa";
import {FaTiktok} from "react-icons/fa";
import DarkModeCheckbox from "../ui/DarkModeCheckbox";
const Footer = () => {
  const linkList = [
    {
      title: "Instagram",
      link: "/",
      icon: "Instagram",
    },
    {
      title: "Telegram",
      link: "/",
      icon: "FaTelegramPlane",
    },
    {
      title: "TikTok",
      link: "/",
      icon: "FaTiktok",
    },
    {
      title: "GitHub",
      link: "/",
      icon: "FaGithub",
    },
  ];
  const listOfFooterLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/",
    },
    {
      title: "Contact",
      link: "/",
    },
    {
      title: "Blog",
      link: "/",
    },
    {
      title: "Privacy",
      link: "/privacy",
    },
    {
      title: "Terms",
      link: "/terms",
    },
    {
      title: "Cookies",
      link: "/cookies",
    },
    {
      title: "Careers",
      link: "/careers",
    },
  ];
  const iconComponents: {[key: string]: IconType} = {
    Instagram: FaInstagram,
    FaTelegramPlane: FaTelegramPlane,
    FaTiktok: FaTiktok,
    FaGithub: FaGithub,
  };
  return (
    <div className="bg-bg p-[30px] border border-border rounded-t-lg text-white/80 text-[15px] mt-[60px]">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-5 max-w-[400px]">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" width={135} height={135} alt="logo" />
            <span className="text-[15px]">© 2024</span>
          </div>
        </div>
        <div className="flex gap-8 ">
          <div className="flex gap-2 items-center max-[800px]:hidden">
            <p> Search Bar</p>
            <div className="flex gap-[2px]">
              <p className="text-right text-[10px] dark:bg-[#2c2c2c] bg-[#797979] text-white/70 px-2 py-[2px] rounded-md">
                ⌘
              </p>
              <p className="text-right text-[10px] dark:bg-[#2c2c2c] bg-[#797979] text-white/70 px-2 py-[2px] rounded-md">
                T
              </p>
            </div>
          </div>
          <DarkModeCheckbox />
        </div>
      </div>

      <div className="flex flex-col mt-8">
        <div className="flex justify-between items-center max-[800px]:flex-col max-[800px]:items-start">
          <ul className="flex gap-10 max-[925px]:gap-5 max-[800px]:grid grid-cols-3 max-[800px]:gap-x-10 max-[800px]:w-full max-[800px]:mb-5 order-2 max-[800px]:order-1">
            {listOfFooterLinks.map((link, index) => {
              return (
                <Link key={index} href={link.link}>
                  <li className="hover:text-white transition-all duration-300 ease-in-out">
                    {link.title}
                  </li>
                </Link>
              );
            })}
          </ul>
          <div className="flex gap-5 order-1 max-[800px]:order-2 max-[800px]:mt-5">
            {linkList.map((item, index) => {
              const IconComponent = iconComponents[item.icon];
              return (
                <Link key={index} href={item.link}>
                  <div className="rounded-xl w-fit hover:text-white transition-colors duration-300 ease-in-out">
                    <IconComponent size={22} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
