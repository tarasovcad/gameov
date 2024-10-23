"use client";

import {usePathname} from "next/navigation";

const noWrapperRoutes = ["/signin", "/signup", "/admin-dashboard"];

export default function LayoutWrapper({children}: {children: React.ReactNode}) {
  const pathname = usePathname();
  const shouldUseWrapper = !noWrapperRoutes.includes(pathname);

  return (
    <div
      className={`${shouldUseWrapper ? "bodywrapper pr-12 max-[1100px]:pr-5 max-[700px]:p-0" : ""} bg-[#f0f0f0]  dark:bg-backgound`}>
      {children}
    </div>
  );
}
