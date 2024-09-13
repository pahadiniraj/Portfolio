"use client";
import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import Link from "next/link";
import { changePasswordSchema } from "@/Utils/YupSchema/ChangePassword";

const ChangePassword = () => {
  interface ChangePasswordFormValues {
    password: string;
    newPassword: string;
    confirmNewPassword: string;
  }

  const initialValues: ChangePasswordFormValues = {
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(true);
  const [showNewConfirmPassword, setShowNewConfirmPassword] = useState(true);
  const [showNewPassword, setShowNewPassword] = useState(true);

  const handleSubmit = async (values: ChangePasswordFormValues) => {
    console.log(values);
  };

  return (
    <div className="flex justify-center items-center mt-10 ">
      <Formik
        initialValues={initialValues}
        validationSchema={changePasswordSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form className="flex flex-col mt-8 md:mt-4 w-2/5  p-5 rounded-lg bg-black shadow-lg  border-slate-700  shadow-slate-500 border">
            <div className="space-y-4 w-full">
              <div className=" relative">
                <p className="text-center text-xl font-bold">Change Password</p>
                <button
                  className="absolute top-0 right-0"
                  onClick={() => router.push("/setting")}
                >
                  close
                </button>
              </div>
              <div className="relative">
                <Field
                  type={showPassword ? "password" : "text"}
                  name="password"
                  className="p-3 bg-black border border-gray-600 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-xxs ml-1"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-4 text-xl transition duration-300 ease-linear active:scale-90"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              <div className="relative">
                <Field
                  type={showNewPassword ? "password" : "text"}
                  name="newPassword"
                  className="p-3 bg-black border border-gray-600 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                  placeholder="New Password"
                />
                <ErrorMessage
                  name="newPassword"
                  component="div"
                  className="text-red-500 text-xxs ml-1"
                />
                <button
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-2 top-4 text-xl transition duration-300 ease-linear active:scale-90"
                >
                  {showNewPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>{" "}
              <div className="relative">
                <Field
                  type={showNewConfirmPassword ? "password" : "text"}
                  name="confirmNewPassword"
                  className="p-3 bg-black border border-gray-600 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                  placeholder="New Confirm Password"
                />
                <ErrorMessage
                  name="confirmNewPassword"
                  component="div"
                  className="text-red-500 text-xxs ml-1"
                />
                <button
                  onClick={() =>
                    setShowNewConfirmPassword(!showNewConfirmPassword)
                  }
                  className="absolute right-2 top-4 text-xl transition duration-300 ease-linear active:scale-90"
                >
                  {showNewConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>
            <button
              className={`${
                isValid
                  ? "bg-gradient-to-r from-blue-500 to-green-500 font-bold text-white hover:shadow-lg"
                  : "bg-gray-600 text-gray-400 cursor-not-allowed"
              } rounded-2xl py-2 mt-4 transition-all duration-300`}
              type="submit"
              disabled={!isValid}
            >
              Change Password
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePassword;
