import React from "react";
import {Settings, LogOut} from "lucide-react";
import Image from "next/image";

export const NavbarProfileItems = [
  {icon: <Settings size={16} />, name: "Manage account"},
  {icon: <LogOut size={16} />, name: "Sign out"},
];
