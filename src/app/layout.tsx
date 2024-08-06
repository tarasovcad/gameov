import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Siderbar from "@/components/sidebar/Siderbar";
import "./../styles/main.css";
import Navbar from "@/components/navbar/Navbar";
import AuthProvider from "@/lib/AuthProvider";
const inter = Inter({subsets: ["latin"], display: "swap"});

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
    <html lang="en" className={inter.className}>
      <body>
        <AuthProvider>
          <div className="bodywrapper relative flex">
            <Siderbar />
            <div className="flex-1 flex flex-col">
              <Navbar />
              <main>{children}</main>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
