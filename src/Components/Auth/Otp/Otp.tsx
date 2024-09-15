"use client";
import React, { CSSProperties, useEffect } from "react";
import { motion } from "framer-motion";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { TiArrowBack } from "react-icons/ti";
import { otpSchema } from "@/Utils/YupSchema/OtpSchema";
import { useVerifyOtpMutation } from "@/Redux/Services/auth";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";
import { handleError } from "@/Redux/handleErrror";

interface OtpFormValue {
  otp: number | string;
}

const initialValues: OtpFormValue = {
  otp: "",
};

const OtpComp = () => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
  };

  const router = useRouter();
  const [verifyOtp, { isError, isLoading, error, status }] =
    useVerifyOtpMutation();

  useEffect(() => {
    if (error) {
      handleError(error);
    }
  }, [isError, error]);

  const handleSubmit = async (value: OtpFormValue) => {
    try {
      const response = await verifyOtp(value);
      console.log(response);
      if (response.data && response.data.success === true) {
        toast.success(response.data.message);
        router.push("/login");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className=" w-full flex justify-center items-center bg-gray-900 md:bg-transparent h-full ">
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
          className="inset-0 md:w-2/6  md:bg-gray-900 rounded-2xl   z-10 bg-opacity-30 backdrop-blur-sm  "
        >
          <div className="flex justify-center items-center">
            <div className="flex justify-center mt-4 flex-col items-center md:w-full text-center">
              <p className="font-bold">OTP Code</p>
              <p className="text-xs px-4  ">
                Enter OTP code that i have sent you in your email to verify your
                account
              </p>
            </div>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={otpSchema}
            onSubmit={handleSubmit}
          >
            {({ isValid }) => (
              <Form className="flex flex-col  w-full p-4">
                <div className="space-y-4 w-full">
                  <div className="relative">
                    <Field
                      type="Number"
                      name="otp"
                      className="p-3 bg-black border border-gray-600 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                      placeholder="Code"
                    />
                    <ErrorMessage
                      name="otp"
                      component="div"
                      className="text-red-500 text-xs ml-1"
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
                  disabled={!isValid || isLoading}
                >
                  {isLoading ? (
                    <>
                      <ClipLoader
                        color={`#ffffff`}
                        loading={isLoading}
                        cssOverride={override}
                        size={25}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />
                    </>
                  ) : (
                    "Register"
                  )}
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
          <div>
            <p className="text-xs text-center mb-2">
              Having problem ? Go back and check Email Address
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default OtpComp;
