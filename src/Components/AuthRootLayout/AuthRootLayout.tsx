"use client";
import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthLayoutClient = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ToastContainer />
    </>
  );
};

export default AuthLayoutClient;
