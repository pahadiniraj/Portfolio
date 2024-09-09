import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar/Navbar";
import "../globals.css";
import MainLayout from "@/Components/RootLayout/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="h-screen w-full justify-center  items-center flex-col md:overflow-x-hidden  md:flex md:justify-center md:items-center gap-2  relative  ">
        <MainLayout>{children}</MainLayout>
        <Navbar />
        <button className="bg-green-600 font-bold p-2 absolute top-2 rounded-sm text-white right-0">
          Login
        </button>
      </div>
    </>
  );
}
