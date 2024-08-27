"use client";

import { useGetUsersQuery } from "@/Services/apiSlice";
import React from "react";

const AdminDashboard = () => {
  const a = useGetUsersQuery();
  console.log(a);
  return <div>AdminDashboard</div>;
};

export default AdminDashboard;
