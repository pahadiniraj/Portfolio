"use client"; // Ensure this line is at the top for client-side rendering
import Link from "next/link";
import React, { CSSProperties } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import { useLogoutUserMutation } from "@/Redux/Services/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

const SidebarDashboard = () => {
  const link = [
    {
      href: "/dashboard/admin-dashboard",
      label: "Admin Dashboard",
    },
    {
      href: "/dashboard/admin-blog",
      label: "Admin Blogs",
    },
    {
      href: "/dashboard/profile",
      label: "Profile",
    },
    {
      href: "/dashboard/setting",
      label: "Settings",
    },
    {
      href: "/dashboard/testimonial",
      label: "Testimonials",
    },
  ];

  const pathname = usePathname(); // Get the current route's pathname

  const isActive = (href: string) => pathname === href;
  const router = useRouter(); // Import useRouter

  const [logoutUser, { isLoading, isError, isSuccess, error }] =
    useLogoutUserMutation();

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
  };

  const handleLogout = async () => {
    try {
      const response = await logoutUser().unwrap();
      toast.success(response.data);
      router.push("/login");
    } catch (error) {
      console.error("Failed to logout user", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-slate-900 h-full text-white   px-4 py-4 shadow-lg shadow-gray-700 ">
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
        <button
          className="flex justify-start p-2 rounded-md font-semibold duration-300 hover:bg-red-500 "
          onClick={handleLogout}
        >
          {isLoading ? (
            <>
              <ClipLoader
                color={"#000000999"}
                loading={isLoading}
                cssOverride={override}
                size={25}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </>
          ) : (
            "Logout"
          )}
        </button>
      </div>
    </div>
  );
};

export default SidebarDashboard;
