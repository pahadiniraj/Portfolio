import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import AdminLayoutClient from "@/Components/AdminRootLayout/AdminRootLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Niraj's Portfolio",
  description: "Niraj Pahadi as admin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <AdminLayoutClient>
          <main className="bg-black h-screen flex justify-center items-center">
            {children}
          </main>
        </AdminLayoutClient>
      </body>
    </html>
  );
}
