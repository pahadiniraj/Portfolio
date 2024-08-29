import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar/Navbar";
import RootLayoutClient from "@/Components/RootLayout/RootLayout";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen justify-center md:flex items-center flex-col gap-5 md:overflow-x-hidden bg-black md:bg-transparent">
      <RootLayoutClient>{children}</RootLayoutClient>
      <Navbar />
    </div>
  );
}
