"use client";
import React from "react";
import { useRouter } from "next/navigation";
import AllUsers from "./Users/AllUsers";
import AdminProject from "./Projects/AdminProject";
import DeleteTestimonial from "./Testimonial/DeleteTestimonial";

const AdminDashboard = () => {
  const router = useRouter();
  return (
    <>
      <div className="md:px-4 px-3 py-4 relative">
        <div className="w-full flex justify-end my-4 ">
          <button
            className=" text-end  p-2 bg-blue-500 rounded-md hover:bg-blue-600 duration-300 active:scale-90 "
            onClick={() => router.push("/dashboard/client-messages")}
          >
            Client Message
          </button>
        </div>
        <div className="w-full flex gap-5 flex-col lg:flex-row   ">
          <div className="lg:w-3/5  bg-slate-950 border-slate-700 md:p-4 p-3  h-[340px] rounded-2xl overflow-y-auto">
            <AllUsers />
          </div>
          <div className="md:w-2/5 bg-slate-950 rounded-2xl h-[340px]  ">
            <DeleteTestimonial />
          </div>
        </div>
        <div className="w-full flex gap-10 mt-6 ">
          <div className=" w-full bg-slate-950 border-slate-700 p-4 h-[340px] rounded-2xl ">
            <AdminProject />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
