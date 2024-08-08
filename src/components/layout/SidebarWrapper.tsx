"use client";

import {usePathname} from "next/navigation";
import Siderbar from "../sidebar/Sidebar";
import {noRoutes} from "@/data/WrapperRoutes";

export default function SidebarWrapper() {
  const pathname = usePathname();
  const shouldShowNavbar = !noRoutes.includes(pathname);

  return shouldShowNavbar ? <Siderbar /> : null;
}
