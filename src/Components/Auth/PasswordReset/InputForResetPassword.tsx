"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter, useParams } from "next/navigation";
import { TiArrowBack } from "react-icons/ti";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import resetPassword from "@/Utils/YupSchema/ResetPassword";
import { useResetUserPasswordMutation } from "@/Redux/Services/auth";
import { toast } from "react-toastify";
import { handleError } from "@/Redux/handleErrror";
import ClipLoader from "react-spinners/ClipLoader";

interface ResetPasswordValue {
  password: string;
  confirmPassword: string;
}

const initialValues: ResetPasswordValue = {
  password: "",
  confirmPassword: "",
};

const InputForResetPassword = () => {
  const router = useRouter();
  const { id, token } = useParams();
  const [resetUserPassword, { isError, isLoading, isSuccess, error }] =
    useResetUserPasswordMutation();
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const handleSubmit = async (value: ResetPasswordValue) => {
    try {
      const data = { ...value, id, token };
      const response = await resetUserPassword(data);
      console.log(response);
      if (response.data && response.data.success === true) {
        router.push("/login");
        toast.success(response.data?.data);
      }
    } catch (error) {
      console.error("Error while resetting password", error);
    }
  };

  useEffect(() => {
    if (error) {
      handleError(error);
    }
  }, [error, isError]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.1 }}
        transition={{
          duration: 0.1,
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="inset-0 md:w-2/6  md:bg-gray-900 rounded-2xl   z-10 bg-opacity-30 backdrop-blur-sm   "
      >
        <div className="flex justify-center items-center">
          <div className="flex justify-center mt-4 flex-col items-center md:w-full w-3/5 text-center">
            <p className="font-bold">Reset Password</p>
            <p className="text-xs px-2">
              Enter Your new password. This Link will be expired in 15 min.
            </p>
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={resetPassword}
          onSubmit={handleSubmit}
        >
          {({ isValid }) => (
            <Form className="flex flex-col  w-full p-4">
              <div className="space-y-4 w-full">
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
                    type={showConfirmPassword ? "password" : "text"}
                    name="confirmPassword"
                    className="p-3 bg-black border border-gray-600 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                    placeholder="Confirm Password"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-xs ml-1"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-2 top-4 text-xl transition duration-300 ease-linear active:scale-90"
                  >
                    {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
              </div>
              <button
                className={`${
                  isValid
                    ? "bg-gradient-to-r from-blue-500 to-green-500 font-bold text-white hover:shadow-lg"
                    : "bg-gray-600 text-gray-400 cursor-not-allowed"
                } rounded-2xl py-2 mt-4 transition-all duration-300 `}
                type="submit"
                disabled={!isValid || isLoading}
              >
                {isLoading ? <ClipLoader size={20} /> : "Reset Password"}
              </button>
            </Form>
          )}
        </Formik>
        <button
          className="absolute top-2 right-2 transition duration-300 ease-linear active:scale-90  "
          onClick={() => router.push("/reset-password-link")}
        >
          <TiArrowBack className="text-2xl" />
        </button>
      </motion.div>
    </>
  );
};

export default InputForResetPassword;
