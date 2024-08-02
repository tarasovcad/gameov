import React from "react";
import {Settings, LogOut} from "lucide-react";
import Image from "next/image";

export const NavbarProfileItems = [
  {icon: <Settings size={16} />, name: "Manage account"},
  {icon: <LogOut size={16} />, name: "Sign out"},
];
export const NavbarLanuages = [
  {
    icon: (
      <Image
        src={"/flags/england.png"}
        width={18}
        height={18}
        className="rounded-full"
        alt="Flag"
      />
    ),
    name: "English",
  },
  {
    icon: (
      <Image
        src={"/flags/french.png"}
        width={18}
        height={18}
        className="object-contain rounded-full"
        style={{height: "18px"}}
        alt="Flag"
      />
    ),
    name: "French",
  },
  {
    icon: (
      <Image
        src={"/flags/spanish.png"}
        width={18}
        height={18}
        className="rounded-full"
        style={{height: "18px"}}
        alt="Flag"
      />
    ),
    name: "Spanish",
  },
  {
    icon: (
      <Image
        src={"/flags/arabic.png"}
        width={18}
        height={18}
        className="rounded-full"
        style={{height: "18px"}}
        alt="Flag"
      />
    ),
    name: "Arabic",
  },
  {
    icon: (
      <Image
        src={"/flags/italian.jpg"}
        width={18}
        height={18}
        className="rounded-full"
        style={{height: "18px"}}
        alt="Flag"
      />
    ),
    name: "Italian",
  },
];
