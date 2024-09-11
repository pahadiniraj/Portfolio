"use client"; // Ensure this line is at the top for client-side rendering

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation"; // Import usePathname

const SidebarDashboard = () => {
  const pathname = usePathname(); // Get the current route's pathname

  const isActive = (href: string) => pathname === href;

  return (
    <div className="bg-gradient-to-r from-indigo-800 to-purple-500 dark:from-indigo-500 dark:to-purple-600 text-white h-screen px-4 py-4">
      <div className="text-center font-bold text-2xl">
        <Link href="/">Niraj's Portfolio</Link>
      </div>
      <div className="flex flex-col gap-4 mt-5 text-lg">
        <Link
          href="/dashboard/profile"
          className={`flex justify-start p-2 rounded-md font-semibold duration-300 ${
            isActive("/dashboard/profile")
              ? "bg-purple-400 text-black"
              : "hover:bg-purple-400 hover:text-black"
          }`}
        >
          Profile
        </Link>
        <Link
          href="/dashboard/setting"
          className={`flex justify-start p-2 rounded-md font-semibold duration-300 ${
            isActive("/dashboard/setting")
              ? "bg-purple-400 text-black"
              : "hover:bg-purple-400 hover:text-black"
          }`}
        >
          Settings
        </Link>
        <button className="flex justify-start p-2 rounded-md font-semibold duration-300 hover:bg-red-500 ">
          Logout
        </button>
      </div>
    </div>
  );
};

export default SidebarDashboard;
