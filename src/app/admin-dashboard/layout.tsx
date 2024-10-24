import AdminMainMenu from "@/components/admin/AdminMainMenu";
import AdminSidebar from "@/components/admin/AdminSidebar";
import React from "react";
import {headers} from "next/headers";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../components/ui/sidebar";
import {Separator} from "@/components/ui/separator";
import AdminLayoutHeader from "@/components/admin/AdminLayoutHeader";

const layout = ({children}: {children: React.ReactNode}) => {
  const headersList = headers();
  return (
    <div className="bg">
      <SidebarProvider>
        <AdminSidebar />
        <SidebarInset>
          <AdminLayoutHeader />
          <div>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-5 ">
              {children}
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default layout;
