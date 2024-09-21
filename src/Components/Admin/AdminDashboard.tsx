"use client";
import React from "react";
import TotalInfo from "./TotalInfo/TotalInfo";
import { useRouter } from "next/navigation";

const AdminDashboard = () => {
  const router = useRouter();
  return (
    <>
      <div className="px-4 py-4 relative">
        <TotalInfo />
        <div className="w-full flex justify-end my-4">
          <button
            className=" text-end  p-2 bg-blue-500 rounded-md"
            onClick={() => router.push("/dashboard/client-messages")}
          >
            Client Message
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
