"use client";
import React from "react";
import TotalInfo from "./TotalInfo/TotalInfo";
import { useRouter } from "next/navigation";
import AllUsers from "./Users/AllUsers";
import AdminProject from "./Projects/AdminProject";

const AdminDashboard = () => {
  const router = useRouter();
  return (
    <>
      <div className="px-4 py-4 relative">
        <TotalInfo />
        <div className="w-full flex justify-end my-4 ">
          <button
            className=" text-end  p-2 bg-blue-500 rounded-md hover:bg-blue-600 duration-300 active:scale-90 "
            onClick={() => router.push("/dashboard/client-messages")}
          >
            Client Message
          </button>
        </div>
        <div className="w-full flex gap-5 ">
          <div className="w-3/5 bg-slate-950 border-slate-700 p-4 h-[340px] rounded-2xl overflow-y-auto">
            <AllUsers />
          </div>
          <div className="w-2/5 bg-slate-950 rounded-2xl ">Latest Blogs</div>
        </div>
        <div className="w-full flex gap-10 mt-6 ">
          <div className=" w-full bg-slate-950 border-slate-700 p-4 h-[340px] rounded-2xl overflow-y-auto">
            <AdminProject />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
