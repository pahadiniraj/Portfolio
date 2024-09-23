"use client";
import React from "react";
import TotalInfo from "./TotalInfo/TotalInfo";
import { useRouter } from "next/navigation";
import AllUsers from "./Users/AllUsers";

const AdminDashboard = () => {
  const router = useRouter();
  return (
    <>
      <div className="px-4 py-4 relative">
        <TotalInfo />
        <div className="w-full flex justify-end my-4 ">
          <button
            className=" text-end  p-2 bg-blue-500 rounded-md"
            onClick={() => router.push("/dashboard/client-messages")}
          >
            Client Message
          </button>
        </div>
        <div className="w-full flex gap-10 ">
          <div className="w-3/5 bg-slate-950 border-slate-700 p-4 h-[340px] rounded-xl overflow-y-auto">
            <AllUsers />
          </div>
          <div className="w-2/5 bg-blue-200">Latest Blogs</div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
