"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import AdminLayoutClient from "@/Components/AdminRootLayout/AdminRootLayout";
import PrivateRoute from "@/Services/RequireTokenAuth";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black h-screen w-full flex justify-center items-center">
      <PrivateRoute>{children}</PrivateRoute>
    </div>
  );
}
