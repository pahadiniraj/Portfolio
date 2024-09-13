"use client";
import { loginSchema } from "@/Utils/YupSchema/loginandRegister";
import { SettingPersonalSchema } from "@/Utils/YupSchema/SettingPersonal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface SettingsPersonalValues {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  bio: string | undefined;
}

const initialValues: SettingsPersonalValues = {
  firstName: "",
  lastName: "",
  email: "",
  jobTitle: "",
  bio: "",
};

const PersonalFormik = () => {
  const router = useRouter();
  const handleSubmit = (value: SettingsPersonalValues) => {
    console.log(value);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={SettingPersonalSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form className="flex flex-col mt-8 md:mt-4 w-full">
            <div className="space-y-4 w-full">
              <div className="flex gap-4">
                <div className="relative">
                  <label htmlFor="firstName" className="text-sm">
                    First Name
                  </label>
                  <Field
                    type="text"
                    name="firstName"
                    className="p-3 bg-black border border-gray-600 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                    placeholder="First Name"
                    autoComplete="firstName"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 text-xxs ml-1"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="acceptTermAndCondition" className="text-sm">
                    Last Name
                  </label>
                  <Field
                    type="lastName"
                    name="text"
                    className="p-3 bg-black border border-gray-600 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                    placeholder="Last Name"
                    autoComplete="lastName"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500 text-xxs ml-1"
                  />
                </div>
              </div>
              <div className="relative">
                <label htmlFor="acceptTermAndCondition" className="text-sm">
                  Email
                </label>
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
                <label htmlFor="acceptTermAndCondition" className="text-sm">
                  Job Title
                </label>
                <Field
                  type="text"
                  name="jobTitle"
                  className="p-3 bg-black border border-gray-600 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                  placeholder="Job Title"
                />
                <ErrorMessage
                  name="jobTitle"
                  component="div"
                  className="text-red-500 text-xxs ml-1"
                />
              </div>
              <div className="relative">
                <label htmlFor="bio" className="text-sm">
                  Bio
                </label>
                <Field
                  as="textarea"
                  name="bio"
                  rows="4"
                  cols="50"
                  placeholder="Write something about yourself..."
                  className="p-3 bg-black border border-gray-600 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                />
                <ErrorMessage name="bio" component="div" className="error" />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className={`${
                  isValid
                    ? "bg-gradient-to-r from-blue-500 to-green-500 font-bold text-white hover:shadow-lg"
                    : "bg-gray-600 text-gray-400 cursor-not-allowed"
                } rounded-2xl  mt-4 px-4 py-2 transition-all duration-300`}
                type="submit"
                disabled={!isValid}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PersonalFormik;
