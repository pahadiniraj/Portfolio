"use client";
import Button from "../Button/Button";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import FormikRegister from "./FormikRegister";

const Register: React.FC = () => {
  const loginGoogle = () => {
    window.open("http://localhost:8000/auth/google/callback", "_self");
  };

  return (
    <>
      <div className="md:w-2/6 w-full h-full md:h-[520px] mx-auto pt-2 px-4 bg-gray-800 md:rounded-lg shadow-lg flex justify-start items-center flex-col  md:overflow-x-hidden md:overflow-y-auto scrollbar-hide ">
        <div className="flex justify-center flex-col items-center w-full mb-4  ">
          <h1 className="text-xl font-bold mb-1">Niraj's Portfolio</h1>
          <p className="text-center text-xxs ">
            Welcome to Niraj's Portfolio Sign up to stay updated with my latest
            projects. Fill in your details and join the creative journey!
          </p>
        </div>
        <FormikRegister />
        <Button
          type="button"
          className="w-full flex justify-center items-center gap-4 bg-white mt-4 rounded-3xl p-2"
          onClick={loginGoogle}
        >
          <FcGoogle className="text-3xl" />
          <p className="text-black font-semibold">Login With Google</p>
        </Button>
      </div>
    </>
  );
};

export default Register;
