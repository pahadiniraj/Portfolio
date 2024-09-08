"use client";
import React from "react";
import { motion } from "framer-motion";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { TiArrowBack } from "react-icons/ti";
import { verifyEmailSchema } from "@/Utils/YupSchema/OtpSchema";

interface verifyEmailValue {
  email: string;
}

const initialValues: verifyEmailValue = {
  email: "",
};

const handleSubmit = (value: verifyEmailValue) => {
  console.log(value);
};

const VerifyEmail = () => {
  const route = useRouter();

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
        className=" inset-0 md:w-2/6  rounded-2xl w-4/5 bg-gray-800  z-10 bg-opacity-30 backdrop-blur-sm  relative "
      >
        <div className="flex justify-center mt-4 flex-col items-center text-center px-2">
          <p className="font-bold">Verify Email</p>
          <p className="text-xs">
            Enter you authentic email otherwise code will not be generated
          </p>
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
                    placeholder="Emali"
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
                Verify OTP
              </button>
            </Form>
          )}
        </Formik>
        <button
          className="absolute top-2 right-2 transition duration-300 ease-linear active:scale-90  "
          onClick={() => route.push("/register")}
        >
          <TiArrowBack className="text-2xl" />
        </button>
      </motion.div>
    </>
  );
};

export default VerifyEmail;
