"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import profile from "../../Assets/ProfileImg/profile.jpg";
import { useGetUserQuery } from "@/Redux/Services/user";
import Link from "next/link";
import { TbWorldWww } from "react-icons/tb";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/Assets/Svg/Svg";

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
  instagram?: string | null;
  twitter?: string | null;
  linkedin?: string | null;
  github?: string | null;
  personalWebsite?: string | null;
  facebook?: string | null;
  youtube?: string | null;
}

const Profile = () => {
  const { data, isSuccess, isLoading } = useGetUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const [user, setUser] = useState<UserData | null>(null);
  useEffect(() => {
    if (data && isSuccess) {
      setUser(data.user);
    }
  }, [data, isSuccess]);

  const userData = [
    {
      href: user?.linkedin,
      icon: <LinkedInIcon />,
    },
    {
      href: user?.facebook,
      icon: <FacebookIcon />,
    },
    {
      href: user?.instagram,
      icon: <InstagramIcon />,
    },
    {
      href: user?.twitter,
      icon: <TwitterIcon />,
    },
    {
      href: user?.github,
      icon: <GithubIcon />,
    },
    {
      href: user?.youtube,
      icon: <YoutubeIcon />,
    },
    {
      href: user?.personalWebsite,
      icon: <TbWorldWww className="text-4xl" />,
    },
  ];

  return (
    <div className="px-8 py-2">
      <p className="text-2xl font-bold mt-2 ">Profile</p>
      {isLoading ? (
        <Skeleton className="w-full h-[370px] mt-4" borderRadius={20} />
      ) : (
        <div className="h-[370px] w-full bg-gradient-to-r from-black to-black shadow-md border-slate-500 border shadow-slate-700 mt-4 rounded-2xl flex justify-center items-center flex-col overflow-y-auto py-2 relative">
          <div className="w-[110px] h-[110px] rounded-full flex justify-center items-center overflow-hidden relative border border-slate-800">
            {/* Blurred background */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800 to-gray-600 rounded-full shadow-xl"></div>

            {/* Container for the image */}
            <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden flex justify-center items-center">
              <Image
                src={profile}
                alt="profile"
                width={300}
                height={300}
                style={{ objectFit: "cover" }}
                className="rounded-full"
                priority
              />
            </div>
          </div>
          <p className="text-xl font-semibold mt-2">
            {user?.firstName} {user?.lastName}
          </p>
          <p className="text-[12px] text-slate-300">{user?.jobTitle}</p>
          <p className="mt-4 font-semibold">About Me</p>
          <p className="px-8 text-xs text-center">{user?.bio}</p>
          <div className="mt-3 absolute top-2 right-5 flex">
            <div className="flex">
              {userData.map(
                (value, index) =>
                  value.href && (
                    <Link
                      href={value.href}
                      passHref
                      key={index}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div>{value.icon}</div>
                    </Link>
                  )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
