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
import { useGetUserQuery } from "@/Redux/Services/user";
import LoaderComponent from "@/Components/Loader/LoaderComponent";
import ProgressLoader from "@/Components/Loader/ProgressLoader";
import { IoClose } from "react-icons/io5";

interface SidebarProps {
  close?: () => void;
}

const SidebarDashboard: React.FC<SidebarProps> = ({ close }) => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const { data, isLoading: getUserLoading } = useGetUserQuery();

  const link = [
    {
      href: "/dashboard/admin-dashboard",
      label: "Admin Dashboard",
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
      data?.user?.role === "user" &&
      item.href === "/dashboard/admin-dashboard"
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
      window.location.href = "/dashboard/setting";
    } catch (error) {
      console.error("Failed to logout user", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-slate-900 h-full text-white   px-4 py-4 shadow-lg shadow-gray-700  md:block ">
      <button className="md:hidden flex justify-end w-full" onClick={close}>
        <IoClose className="text-2xl" />
      </button>
      <div className="text-center  font-bold text-2xl relative group">
        <Link href="/" className="relative inline-block">
          Niraj's Portfolio
          <span className="absolute block w-full h-[2px] bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 bottom-0 left-0" />
        </Link>
      </div>
      {getUserLoading ? (
        <div className="md:flex justify-center items-start w-full h-full hidden   overflow-hidden">
          <ProgressLoader />
        </div>
      ) : (
        <div className="flex  flex-col  gap-4 mt-5 text-lg">
          {link.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => {
                if (close) close();
              }}
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
      )}
    </div>
  );
};

export default SidebarDashboard;
