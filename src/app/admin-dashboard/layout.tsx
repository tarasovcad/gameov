import AdminMainMenu from "@/components/admin/AdminMainMenu";
import AdminSidebar from "@/components/admin/AdminSidebar";
import React from "react";
import {SidebarInset, SidebarProvider} from "../../components/ui/sidebar";
import AdminLayoutHeader from "@/components/admin/AdminLayoutHeader";

const layout = ({children}: {children: React.ReactNode}) => {
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
