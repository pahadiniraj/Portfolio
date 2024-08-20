import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Niraj's Portfolio",
  description:
    "Explore Niraj Pahadi's web development projects, blogs, and more. Specializing in React, Node.js, and full-stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta />
        <title>Niraj's Portfolio</title>
      </head>
      <body
        className={`${inter.className} md:container md:px-10  md:mx-auto md:bg-white flex flex-col gap-4 justify-center items-center h-screen relative `}
      >
        <main
          className="bg-black md:rounded-2xl  w-full h-full md:w-[900px] md:h-[420px] 
         "
        >
          {children}
        </main>
        <header className="absolute bottom-4 md:static">
          <Navbar />
        </header>
      </body>
    </html>
  );
}
// h-[370px] w-[1000px]
