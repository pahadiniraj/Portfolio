"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { logout, selectAuth } from "../Redux/Slice/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { jwtDecode } from "jwt-decode";
const Dashboard = () => {
  return (
    <div className="dashboard-container p-4">
      <div className="welcome-section mb-6">
        <h1 className="text-3xl font-bold">Welcome, !</h1>
        <p className="text-xl mt-2">Here are your account details:</p>
      </div>

      <div className="user-details grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="user-info  shadow-md p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
          <p>
            <strong>Name:</strong>
          </p>
          <p>
            <strong>Email:</strong>
          </p>
        </div>

        <div className="user-role  shadow-md p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Account Details</h2>
          <p>
            <strong>Role:</strong>
          </p>
          <p>
            <strong>Account Created:</strong>{" "}
          </p>
          <p>
            <strong>Last Updated:</strong>{" "}
          </p>
        </div>
      </div>

      <div className="other-details mt-6">
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
