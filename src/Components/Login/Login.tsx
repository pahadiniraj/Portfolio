"use client";
import { loginSchema } from "@/Utils/YupSchema/loginAndRegister";
import Button from "../Button/Button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login: React.FC = () => {
  interface LoginFormValues {
    email: string;
    password: string;
    acceptTermAndCondition: boolean;
  }

  const initialValues: LoginFormValues = {
    email: "",
    password: "",
    acceptTermAndCondition: false,
  };

  const handleSubmit = (values: LoginFormValues) => {
    console.log(values);
  };

  const loginGoogle = () => {
    window.open("http://localhost:8000/auth/google/callback", "_self");
  };

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
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid }) => (
            <Form className="flex flex-col mt-8 md:mt-4 w-full">
              <div className="space-y-4 w-full ">
                <div className="relative">
                  <Field
                    type="email"
                    name="email"
                    className="p-3 bg-black border border-gray-600 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                    placeholder="Email"
                    autoComplete="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xxs ml-1"
                  />
                </div>
                <div className="relative">
                  <Field
                    type="password"
                    name="password"
                    className="p-3 bg-black border border-gray-600 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                    placeholder="Password"
                    autoComplete="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-xxs ml-1"
                  />
                </div>

                <div className="flex flex-col   text-white">
                  <div className="flex  gap-2 items-center ml-1">
                    <Field
                      type="checkbox"
                      name="acceptTermAndCondition"
                      className="w-3 h-3 text-blue-500 focus:ring-blue-500 border-gray-600 rounded"
                      id="acceptTermAndCondition"
                    />
                    <label htmlFor="acceptTermAndCondition" className="text-sm">
                      I accept the terms and conditions
                    </label>
                  </div>
                  <ErrorMessage
                    name="acceptTermAndCondition"
                    component="div"
                    className="text-red-500 text-xxs ml-6"
                  />
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
                Register
              </button>
            </Form>
          )}
        </Formik>
        <Button
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

export default Login;
