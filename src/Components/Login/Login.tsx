"use client";
import Button from "../Button/Button";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import FormikLogin from "./FormikLogin";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "@/Services/googleApi";

const Login: React.FC = () => {
  const responeGoogle = async (authresult: any) => {
    try {
      if (authresult["code"]) {
        const result = await googleAuth(authresult["code"]);
        console.log(result);
      }
      console.log(authresult);
    } catch (error) {
      console.log(authresult);
    }
  };

  const googleLogin = useGoogleLogin({
    onError: responeGoogle,
    onSuccess: responeGoogle,
    flow: "auth-code",
  });
  return (
    <>
      <div className="md:w-2/6 w-full h-full md:h-[450px] mx-auto  px-4 bg-gray-800 md:rounded-lg shadow-lg flex justify-center py-4 items-center flex-col  md:overflow-x-hidden md:overflow-y-auto scrollbar-hide ">
        <div className="flex justify-center w-full  ">
          <div className="flex justify-center flex-col items-center w-full mb-4 gap-1  ">
            <h1 className="text-xl font-bold mb-1">Niraj's Portfolio</h1>
            <p className="text-center text-xs ">
              Welcome to Niraj's Portfolio Sign up to stay updated with my
              latest projects. Fill in your details and join the creative
              journey!
            </p>
          </div>
        </div>
        <div className="w-full">
          <FormikLogin />
        </div>
        <Button
          className="w-full flex justify-center items-center gap-4 bg-white mt-4 rounded-3xl p-2"
          onClick={googleLogin}
        >
          <FcGoogle className="text-3xl" />
          <p className="text-black font-semibold">Login With Google</p>
        </Button>
      </div>
    </>
  );
};

export default Login;
