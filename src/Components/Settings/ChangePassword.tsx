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
import { IoClose } from "react-icons/io5";
import { changePasswordSchema } from "@/Utils/YupSchema/ChangePassword";
import { useChangeUserPasswordMutation } from "@/Redux/Services/user";
import { handleError } from "@/Redux/handleErrror";

const ChangePassword = () => {
  interface ChangePasswordFormValues {
    currentPassword: string;
    newPassword: string;
    newConfirmPassword: string;
  }

  const initialValues: ChangePasswordFormValues = {
    currentPassword: "",
    newPassword: "",
    newConfirmPassword: "",
  };

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(true);
  const [showNewConfirmPassword, setShowNewConfirmPassword] = useState(true);
  const [showNewPassword, setShowNewPassword] = useState(true);

  const [changeUserPassword, { isLoading, isError, isSuccess, error }] =
    useChangeUserPasswordMutation();

  useEffect(() => {
    if (error) {
      handleError(error);
    }
  }, [isError, error]);

  const handleSubmit = async (
    values: ChangePasswordFormValues,
    { resetForm }: any
  ) => {
    try {
      const response = await changeUserPassword(values);
      console.log(response);
      if (response.data && response.data.success === true) {
        toast.success(response.data?.data);
        resetForm();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center mt-10 ">
      <Formik
        initialValues={initialValues}
        validationSchema={changePasswordSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form className="flex flex-col mt-8 md:mt-4 w-2/5 relative  rounded-xl bg-black   border-slate-700 p-6  border">
            <div className="space-y-4 w-full">
              <div className=" ">
                <p className="text-center text-xl font-bold">Change Password</p>
                <button
                  type="button"
                  className="absolute top-2 right-1 transition duration-300 ease-linear active:scale-90"
                  onClick={() => router.push("/dashboard/setting")}
                >
                  <IoClose className="text-2xl" />
                </button>
              </div>
              <div className="relative">
                <Field
                  type={showPassword ? "password" : "text"}
                  name="currentPassword"
                  className="p-3 bg-black border border-gray-600 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                  placeholder="Current Password"
                />
                <ErrorMessage
                  name="currentPassword"
                  component="div"
                  className="text-red-500 text-xs ml-1"
                />
                <button
                  type="button"
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
                  className="text-red-500 text-xs ml-1"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-2 top-4 text-xl transition duration-300 ease-linear active:scale-90"
                >
                  {showNewPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>{" "}
              <div className="relative">
                <Field
                  type={showNewConfirmPassword ? "password" : "text"}
                  name="newConfirmPassword"
                  className="p-3 bg-black border border-gray-600 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                  placeholder="New Confirm Password"
                />
                <ErrorMessage
                  name="newConfirmPassword"
                  component="div"
                  className="text-red-500 text-xs ml-1"
                />
                <button
                  type="button"
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
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 font-bold text-white hover:shadow-lg"
                  : "bg-gray-600 text-gray-400 cursor-not-allowed"
              } rounded-2xl py-2 mt-4 transition-all duration-300`}
              type="submit"
              disabled={!isValid || isLoading}
            >
              {isLoading ? (
                <ClipLoader color="#fcfcfc" size={25} />
              ) : (
                "Change Password"
              )}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePassword;
