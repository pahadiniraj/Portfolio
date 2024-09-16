"use client";

import Image from "next/image";
import React from "react";
import { MdNotifications } from "react-icons/md";
import profile from "../../../Assets/ProfileImg/profile.jpg";
import { useGetUserQuery } from "@/Redux/Services/user";

const DashboardHead = () => {
  const { data, isSuccess, isError, isLoading } = useGetUserQuery();
  console.log("fetch data", data?.user);
  return (
    <>
      <div className="w-full   p-4 ">
        <div className="flex justify-end items-center gap-6">
          <div className="w-8 h-8 bg-gray-500 rounded-full flex justify-center items-center">
            <MdNotifications className="text-xl" />
          </div>
          <div>
            <p className="text-base">
              {data?.user?.firstName} {data?.user?.lastName}
            </p>
            <p className="text-xs text-end  text-slate-100">
              {data?.user?.jobTitle}
            </p>
          </div>
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <Image
              src={profile}
              alt="profile"
              width={60}
              height={50}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHead;
