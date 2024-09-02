import React from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";
import { AnimatePresence } from "framer-motion";

const Auth = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Login />
        <Register />
      </div>
    </>
  );
};

export default Auth;
