import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import AuthLayoutClient from "@/Components/AuthRootLayout/AuthRootLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Niraj's Portfolio ",
  description: "Niraj Pahadi Authentication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <AuthLayoutClient>
          <main className="bg-black h-screen flex justify-center items-center">
            {children}
          </main>
        </AuthLayoutClient>
      </body>
    </html>
  );
}