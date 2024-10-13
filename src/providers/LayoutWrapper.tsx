"use client";

import {usePathname} from "next/navigation";

const noWrapperRoutes = ["/signin", "/signup"];

export default function LayoutWrapper({children}: {children: React.ReactNode}) {
  const pathname = usePathname();
  const shouldUseWrapper = !noWrapperRoutes.includes(pathname);

  return (
    <div
      className={`${shouldUseWrapper ? "bodywrapper" : ""} bg-white dark:bg-backgound`}>
      {children}
    </div>
  );
}
