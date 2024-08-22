import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import RootLayoutClient from "@/Components/RootLayout/RootLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Niraj's Portfolio",
  description:
    "Explore Niraj Pahadi's web development projects, blogs, and more. Specializing in React, Node.js, and full-stack development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <main className="h-screen justify-center md:flex items-center flex-col gap-5 md:overflow-x-hidden ">
          <RootLayoutClient>{children}</RootLayoutClient>
          <Navbar />
        </main>
      </body>
    </html>
  );
}
