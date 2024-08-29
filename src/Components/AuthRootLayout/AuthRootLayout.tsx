"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "../Redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthLayoutClient = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>{children}</Provider>
    </>
  );
};

export default AuthLayoutClient;
