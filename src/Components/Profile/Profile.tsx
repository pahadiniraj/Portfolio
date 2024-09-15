"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import profile from "../../Assets/ProfileImg/profile.jpg";
import { useGetUserQuery } from "@/Redux/Services/user";
interface UserData {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  isVerified: boolean;
  role: string;
  createdAt: string;
  updatedAt: string;
  avatar?: string | null;
  bio?: string | null;
  jobTitle?: string | null;
}


const Profile = () => {
  const { data, isSuccess } = useGetUserQuery();

  const [user, setUser] = useState<UserData | null>(null);
  console.log("User data", user);
  useEffect(() => {
    if (data && isSuccess) {
      setUser(data.user);
    }
  }, [data, isSuccess]);

  return (
    <>
      <div className="px-8 py-2">
        <p className="text-2xl font-bold mt-2 ">Profile</p>
        <div className="h-[370px] w-full bg-gradient-to-r from-black to-black   shadow-md border-slate-500 border shadow-slate-700  mt-4 rounded-2xl flex justify-center items-center flex-col overflow-y-auto py-2">
          <div className="w-[170px] h-[170px] rounded-full flex justify-center items-center oveyrflow-hidden relative">
            {/* Blurred background */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-indigo-500 blur-xl"></div>

            {/* Container for the image */}
            <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden flex justify-center items-center">
              <Image
                src={profile}
                alt="profile"
                width={300}
                height={300}
                style={{ objectFit: "cover" }}
                className="rounded-full"
              />
            </div>
          </div>
          <p className="text-xl font-semibold mt-2">
            {user?.firstName} {user?.lastName}
          </p>
          <p className="text-xs text-slate-300">{user?.jobTitle}</p>
          <p className="mt-4 font-semibold">About Me</p>
          <p className="px-8 text-xs text-center">{user?.bio}</p>
          <p className="mt-3">logos</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
