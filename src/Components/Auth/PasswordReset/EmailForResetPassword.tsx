"use client";
import React from "react";
import { motion } from "framer-motion";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { TiArrowBack } from "react-icons/ti";
import { verifyEmailSchema } from "@/Utils/YupSchema/OtpSchema";

interface OtpFormValue {
  email: string;
}

const initialValues: OtpFormValue = {
  email: "",
};

const EmailForResetPassword = () => {
  const router = useRouter();

  const handleSubmit = (value: OtpFormValue) => {
    console.log(value);
  };

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
              Enter your email, and I’ll send you a link to reset your password.
              Click the 'Reset Password' button in the email to change your
              password.
            </p>
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={verifyEmailSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid }) => (
            <Form className="flex flex-col  w-full p-4">
              <div className="space-y-4 w-full">
                <div className="relative">
                  <Field
                    type="email"
                    name="email"
                    className="p-3 bg-black border border-gray-600 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                    placeholder="Enter your Authentic Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xxs ml-1"
                  />
                </div>
              </div>
              <button
                className={`${
                  isValid
                    ? "bg-gradient-to-r from-blue-500 to-green-500 font-bold text-white hover:shadow-lg"
                    : "bg-gray-600 text-gray-400 cursor-not-allowed"
                } rounded-2xl py-2 mt-4 transition-all duration-300 `}
                type="submit"
                // disabled={!isValid || isLoginLoading}
              >
                Reset Password
              </button>
            </Form>
          )}
        </Formik>
        <button
          className="absolute top-2 right-2 transition duration-300 ease-linear active:scale-90  "
          onClick={() => router.push("/register")}
        >
          <TiArrowBack className="text-2xl" />
        </button>
      </motion.div>
    </>
  );
};

export default EmailForResetPassword;