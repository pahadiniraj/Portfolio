"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { logout, selectAuth } from "../Redux/Slice/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const { user } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  if (!user) {
    return <div>Loading...</div>; // Handle case where user data is not yet available
  }

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
    toast.success("I'm gonna miss you. See ya");
  };

  return (
    <div className="dashboard-container p-4">
      <div className="welcome-section mb-6">
        <h1 className="text-3xl font-bold">
          Welcome, {user.firstName} {user.lastName}!
        </h1>
        <p className="text-xl mt-2">Here are your account details:</p>
      </div>

      <div className="user-details grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="user-info  shadow-md p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
          <p>
            <strong>Name:</strong> {user.firstName} {user.lastName}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          {user.avatar && (
            <div className="avatar mt-4">
              <img
                src={user.avatar}
                alt="User Avatar"
                className="w-32 h-32 rounded-full"
              />
            </div>
          )}
        </div>

        <div className="user-role  shadow-md p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Account Details</h2>
          <p>
            <strong>Role:</strong> {user.role}
          </p>
          <p>
            <strong>Account Created:</strong>{" "}
            {new Date(user.createdAt).toLocaleDateString()}
          </p>
          <p>
            <strong>Last Updated:</strong>{" "}
            {new Date(user.updatedAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="other-details mt-6">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
