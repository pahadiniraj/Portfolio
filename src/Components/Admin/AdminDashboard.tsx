"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

const AdminDashboard = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  // Debugging: Check the token value
  console.log("Token in AdminDashboard:", token);

  return <div>AdminDashboard</div>;
};

export default AdminDashboard;
