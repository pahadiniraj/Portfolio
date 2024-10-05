"use client"; // Ensure this line is at the top for client-side rendering
import Link from "next/link";
import React, { CSSProperties, useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import { useLogoutUserMutation } from "@/Redux/Services/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import Cookies from "js-cookie";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SidebarDashboard = () => {
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const role = Cookies.get("role");
    setUserRole(role ?? null);
  }, []);
  const link = [
    {
      href: "/dashboard/admin-dashboard",
      label: "Admin Dashboard",
    },
    {
      href: "/dashboard/dashboard",
      label: "Dashboard",
    },
    {
      href: "/dashboard/profile",
      label: "Profile",
    },
    {
      href: "/dashboard/blog",
      label: "Blogs",
    },
    {
      href: "/dashboard/setting",
      label: "Settings",
    },
  ].filter((item) => {
    if (
      userRole === "user" &&
      (item.href === "/dashboard/admin-dashboard" ||
        item.href === "/dashboard/admin-blog")
    ) {
      return false;
    }
    return true;
  });

  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  const router = useRouter();

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

  if (userRole === null) {
    return <Skeleton className="w-full h-screen mt-0" borderRadius="0" />;
  }

  return (
    <div className="bg-gradient-to-r from-slate-900 h-full text-white   px-4 py-4 shadow-lg shadow-gray-700 ">
      <div className="text-center font-bold text-2xl relative group">
        <Link href="/" className="relative inline-block">
          Niraj's Portfolio
          <span className="absolute block w-full h-[2px] bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 bottom-0 left-0" />
        </Link>
      </div>
      <div className="flex  flex-col gap-4 mt-5 text-lg">
        {link.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`flex justify-start p-2 rounded-md font-semibold duration-300 ${
              isActive(item.href)
                ? "bg-gradient-to-r from-indigo-800 to-indigo-800  "
                : "hover:bg-gradient-to-r from-indigo-800 to-indigo-800 hover:text-white"
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
