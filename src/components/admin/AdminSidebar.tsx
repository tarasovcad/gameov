import React, {useState} from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import {adminDashboardData} from "@/data/adminDashboard";
import SidebarWebsite from "./sidebar/SidebarWebsite";
import SidebarInput from "./sidebar/SidebarInput";
import SidebarDropdownMenuFooter from "./sidebar/SidebarDropdownMenuFooter";
import Link from "next/link";

const AdminSidebar = async () => {
  return (
    <Sidebar
      collapsible="icon"
      className="bg-[#151517] border-l border-border/60">
      <SidebarWebsite />
      <SidebarContent>
        <SidebarGroup>
          <SidebarInput />
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarMenu>
            {adminDashboardData.navMain.map((item) => (
              <Link href={item.link} key={item.title}>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip={item.title}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </Link>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Team Managment</SidebarGroupLabel>
          <SidebarMenu>
            {adminDashboardData.teamManagement.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarDropdownMenuFooter />
      <SidebarRail />
    </Sidebar>
  );
};

export default AdminSidebar;
