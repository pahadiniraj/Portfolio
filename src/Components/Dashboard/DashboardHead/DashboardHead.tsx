import Image from "next/image";
import React from "react";
import { MdNotifications } from "react-icons/md";
import profile from "../../../Assets/ProfileImg/profile.jpg";

const DashboardHead = () => {
  return (
    <>
      <div className="w-full border-b border-gray-400 p-4 shadow-[0_4px_10px_rgba(255,255,255,0.7)]">
        <div className="flex justify-end items-center gap-6">
          <div className="w-8 h-8 bg-gray-500 rounded-full flex justify-center items-center">
            <MdNotifications className="text-xl" />
          </div>
          <div>
            <p className="text-base">Niraj Pahadi</p>
            <p className="text-xs">Software Developer</p>
          </div>
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <Image
              src={profile}
              alt="profile"
              width={50}
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
