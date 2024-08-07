"use client";

import {usePathname} from "next/navigation";
import Siderbar from "../sidebar/Sidebar";

export default function SidebarWrapper() {
  const pathname = usePathname();
  const noNavbarRoutes = ["/signin", "/signup", "/dashboard"];
  const shouldShowNavbar = !noNavbarRoutes.includes(pathname);

  return shouldShowNavbar ? <Siderbar /> : null;
}
