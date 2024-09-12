"use client"; // Ensure this line is at the top for client-side rendering
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation"; // Import usePathname

const SidebarDashboard = () => {
  const link = [
    {
      href: "/dashboard",
      label: "Dashboard",
    },
    {
      href: "/admin-dashboard",
      label: "Admin Dashboard",
    },
    {
      href: "/admin-blog",
      label: "Admin Blogs",
    },
    {
      href: "/profile",
      label: "Profile",
    },
    {
      href: "/setting",
      label: "Settings",
    },
    {
      href: "/testimonial",
      label: "Testimonials",
    },
  ];

  const pathname = usePathname(); // Get the current route's pathname

  const isActive = (href: string) => pathname === href;

  return (
    <div className="bg-gradient-to-r from-slate-900  text-white h-screen px-4 py-4 shadow-lg shadow-gray-700 ">
      <div className="text-center font-bold text-2xl">
        <Link href="/">Niraj's Portfolio</Link>
      </div>
      <div className="flex flex-col gap-4 mt-5 text-lg">
        {link.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`flex justify-start p-2 rounded-md font-semibold duration-300 ${
              isActive(item.href)
                ? "bg-purple-400 text-black"
                : "hover:bg-purple-400 hover:text-black"
            }`}
          >
            {item.label}
          </Link>
        ))}
        <button className="flex justify-start p-2 rounded-md font-semibold duration-300 hover:bg-red-500 ">
          Logout
        </button>
      </div>
    </div>
  );
};

export default SidebarDashboard;
