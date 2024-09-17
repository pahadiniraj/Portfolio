"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdNotifications } from "react-icons/md";
import profile from "../../../Assets/ProfileImg/profile.jpg";
import { useGetUserQuery } from "@/Redux/Services/user";

interface UserData {
  firstName: string | null;
  lastName: string | null;
  jobTitle?: string | null;
}

const DashboardHead = () => {
  const { data, isSuccess, isError, isLoading } = useGetUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const [user, setUser] = useState<UserData | null>(null);
  console.log("User dashboard data", user);
  useEffect(() => {
    if (data && isSuccess) {
      setUser(data.user);
    }
  }, [data, isSuccess]);
  return (
    <>
      <div className="w-full   p-4 ">
        <div className="flex justify-end items-center gap-6">
          <div>
            <p className="text-base">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-xs text-end  text-slate-100">{user?.jobTitle}</p>
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
