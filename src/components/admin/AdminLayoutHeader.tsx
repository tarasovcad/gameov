"use client";
import React from "react";
import {SidebarTrigger} from "../ui/sidebar";
import {Separator} from "../ui/separator";
import {usePathname} from "next/navigation";

const AdminLayoutHeader = () => {
  const pathname = usePathname();
  const formatTitle = (path: string): string => {
    const segment = path
      .replace("/admin-dashboard", "")
      .split("/")
      .filter(Boolean)
      .pop();

    if (!segment) return "Dashboard";

    return segment.charAt(0).toUpperCase() + segment.slice(1);
  };
  return (
    <header className="flex h-14 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b border-border/60">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <h2 className="">{formatTitle(pathname)}</h2>
      </div>
    </header>
  );
};

export default AdminLayoutHeader;
