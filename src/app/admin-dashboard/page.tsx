import AdminSidebar from "@/components/admin/AdminSidebar";
import {SidebarProvider} from "@/components/ui/sidebar";
import React from "react";

const AdminPage = () => {
  return (
    <div className="mx-auto max-w-[1920px] bg-[#1A1A1C] ">
      <SidebarProvider className="">
        <AdminSidebar />
        <div className=" w-full   ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          soluta.
        </div>
      </SidebarProvider>
    </div>
  );
};

export default AdminPage;
