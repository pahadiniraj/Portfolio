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
import LoaderComponent from "../Loader/LoaderComponent";

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
  const { data, isSuccess, isLoading, refetch } = useGetUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const [user, setUser] = useState<UserData | null>(null);
  useEffect(() => {
    if (data && isSuccess) {
      setUser(data.user);
      refetch();
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
      icon: <TbWorldWww className="md:text-4xl text-2xl " />,
    },
  ];

  return (
    <div className="md:px-8 px-4">
      <p className="text-2xl font-bold mt-4 ">Profile</p>
      {isLoading ? (
        <Skeleton
          className="w-full md:h-[370px] h-[200px] mt-4 "
          borderRadius={20}
        />
      ) : (
        <div className="md:h-[370px] h-full py-5 w-full bg-gradient-to-r from-slate-950 to-slate-900 shadow-md border-slate-500 border shadow-slate-700 mt-4 rounded-2xl flex justify-center items-center flex-col overflow-y-auto  relative  ">
          <div className="md:w-[110px] md:h-[110px] h-[70px] w-[70px] rounded-full flex justify-center items-center overflow-hidden relative border border-slate-800 ml-3 md:ml-0">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800 to-gray-600 rounded-full shadow-xl"></div>
            <div className="relative md:w-[100px] md:h-[100px] h-[80px] w-[80px] rounded-full overflow-hidden flex justify-center items-center">
              <Image
                src={user?.avatar || profile}
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
          <p className="md:px-8 px-4 text-xs text-center">{user?.bio}</p>
          <div className="mt-3 absolute top-2 right-5 flex">
            <div className="grid grid-cols-2  ">
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
