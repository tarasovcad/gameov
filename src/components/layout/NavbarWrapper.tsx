"use client";

import {usePathname} from "next/navigation";
import Navbar from "../navbar/Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const noNavbarRoutes = ["/signin", "/signup", "/dashboard"];
  const shouldShowNavbar = !noNavbarRoutes.includes(pathname);

  return shouldShowNavbar ? <Navbar /> : null;
}
