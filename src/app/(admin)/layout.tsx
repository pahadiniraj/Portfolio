"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import AdminLayoutClient from "@/Components/AdminRootLayout/AdminRootLayout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      {children}
    </div>
  );
}
