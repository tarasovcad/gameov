import {noRoutes} from "@/data/WrapperRoutes";
import {headers} from "next/headers";
import React from "react";
import Sidebar from "./Sidebar";

const SidebarServerComponent = () => {
  const headersList = headers();
  const header = headersList.get("x-pathname");
  if (noRoutes.includes(header as string)) {
    return null;
  }
  return (
    <>
      <Sidebar />
    </>
  );
};

export default SidebarServerComponent;
