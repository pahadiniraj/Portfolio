"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import profile from "../../../Assets/ProfileImg/DefaultProfile.jpg";
import { useGetUserQuery } from "@/Redux/Services/user";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useRouter } from "next/navigation";
import SidebarDashboard from "../DashboardSidebar/DashboardSidebar";
import { IoMenu } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

interface UserData {
  firstName: string | null;
  lastName: string | null;
  jobTitle?: string | null;
  avatar?: string | null;
}

const DashboardHead = () => {
  const { data, isSuccess, isError, isLoading, refetch } = useGetUserQuery(
    undefined,
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const [openNav, setOpenNav] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState<UserData | null>(null);
  useEffect(() => {
    if (data && isSuccess) {
      setUser(data.user);
      refetch();
    }
  }, [data, isSuccess]);
  return (
    <>
      <div>
        <div className="w-full flex justify-between md:block items-center  p-4 ">
          <button className="md:hidden" onClick={() => setOpenNav(!openNav)}>
            <IoMenu className="text-3xl hover:text-purple-600 duration-200" />
          </button>
          <div className="flex justify-end items-center md:gap-6 gap-2">
            <div>
              <p className="md:text-base text-sm  w-full">
                {user?.firstName} {user?.lastName}
                {isLoading && <Skeleton width={100} className="w-full" />}
              </p>
              <p className="text-xs text-end w-full  text-slate-100">
                {user?.jobTitle}
                {isLoading && <Skeleton width={100} />}
              </p>
            </div>
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <Image
                src={user?.avatar || profile}
                alt="profile"
                width={60}
                height={50}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        </div>
        <AnimatePresence>
          {openNav && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="  fixed inset-0 bg-black z-30 sm:w-3/5 "
            >
              <SidebarDashboard close={() => setOpenNav(!openNav)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default DashboardHead;
