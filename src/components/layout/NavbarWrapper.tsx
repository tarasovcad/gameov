"use client";

import {usePathname} from "next/navigation";
import Navbar from "../navbar/Navbar";
import {noRoutes} from "@/data/WrapperRoutes";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const shouldShowNavbar = !noRoutes.includes(pathname);

  return shouldShowNavbar ? <Navbar /> : null;
}
