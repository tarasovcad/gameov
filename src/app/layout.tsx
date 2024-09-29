import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import "./../styles/main.css";
import AuthProvider from "@/lib/AuthProvider";
import {Toaster} from "react-hot-toast";
import {CustomThemeProvider} from "@/providers/ThemeProvider";
import Sidebar from "@/components/sidebar/Sidebar";
import {GeistSans} from "geist/font/sans";
import ThemeKeyboardShortcuts from "@/lib/ThemeKeyboardShortcuts";
import NavbarServerComponent from "@/components/navbar/NavbarServerComponent";
import {SpeedInsights} from "@vercel/speed-insights/next";
import {Analytics} from "@vercel/analytics/react";
import {noRoutes} from "@/data/WrapperRoutes";
import LayoutWrapper from "@/providers/LayoutWrapper";
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="bg-white selection:bg-[#d8ff2e] selection:text-black dark:bg-backgound">
        <CustomThemeProvider>
          <AuthProvider>
            <Toaster position="bottom-right" />
            <ThemeKeyboardShortcuts />
            <LayoutWrapper>
              <Sidebar />
              <div className="flex-1 flex flex-col">
                <NavbarServerComponent />
                <main>{children}</main>
              </div>
            </LayoutWrapper>
          </AuthProvider>
        </CustomThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
