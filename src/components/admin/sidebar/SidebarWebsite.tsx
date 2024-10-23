"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {adminDashboardData} from "@/data/adminDashboard";
import {ChevronsUpDown, Plus} from "lucide-react";
import Image from "next/image";
import React, {useState} from "react";

const SidebarWebsite = () => {
  const [activeTeam, setActiveTeam] = React.useState(
    adminDashboardData.websites[0],
  );
  return (
    <SidebarHeader className="">
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="">
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-[#151419] data-[state=open]:text-sidebar-accent-foreground">
                <div className="w-10 h-10 relative ">
                  <Image
                    fill
                    src={activeTeam.logo}
                    alt={`${activeTeam.name} logo`}
                  />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {activeTeam.name}
                  </span>
                </div>
                <ChevronsUpDown className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg bg-[#1A1A1C] "
              align="start"
              side="bottom"
              sideOffset={4}>
              <DropdownMenuLabel className="text-[13px] text-secondary_text">
                Websites
              </DropdownMenuLabel>
              {adminDashboardData.websites.map((team, index) => (
                <DropdownMenuItem
                  key={team.name}
                  onClick={() => setActiveTeam(team)}
                  className="gap-2 p-2">
                  <Image
                    height={32}
                    width={32}
                    src={team.logo}
                    alt={`${team.name} logo`}
                  />
                  {team.name}
                  <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
};

export default SidebarWebsite;
