"use client";
import { loginSchema } from "@/Utils/YupSchema/loginandRegister";
import { SettingPersonalSchema } from "@/Utils/YupSchema/SettingPersonal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { TbWorldWww } from "react-icons/tb";

import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/Assets/Svg/Svg";

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
                    className="text-red-500 text-xs ml-1"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="lastName" className="text-sm">
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
                    className="text-red-500 text-xs ml-1"
                  />
                </div>
              </div>
              <div className="relative">
                <label htmlFor="email" className="text-sm">
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
                  className="text-red-500 text-xs ml-1"
                />
              </div>
              <div className="relative">
                <label htmlFor="jobTitle" className="text-sm">
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
                  className="text-red-500 text-xs ml-1"
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
              <p className="text-lg py-2 border-b  ">Social Links</p>
              <div className="flex gap-5">
                <div className="relative">
                  <Field
                    type="url"
                    name="facebook"
                    className="p-3 bg-black border border-gray-600 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300 mt-4"
                    placeholder="Facebook URL"
                  />
                  <ErrorMessage
                    name="facebook"
                    component="div"
                    className="text-red-500 text-xs ml-1"
                  />
                  <span className="absolute top-6 right-2">
                    <FacebookIcon />
                  </span>
                </div>
                <div className="relative">
                  <Field
                    type="url"
                    name="instagram"
                    className="p-3 bg-black border border-gray-600 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300 mt-4"
                    placeholder="Instagram URL"
                  />
                  <ErrorMessage
                    name="instagram"
                    component="div"
                    className="text-red-500 text-xs ml-1"
                  />
                  <span className="absolute top-6 right-2">
                    <InstagramIcon />
                  </span>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="relative">
                  <Field
                    type="url"
                    name="twitter"
                    className="p-3 bg-black border border-gray-600 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300 mt-4"
                    placeholder="Twitter URL"
                  />
                  <ErrorMessage
                    name="twitter"
                    component="div"
                    className="text-red-500 text-xs ml-1"
                  />
                  <span className="absolute top-6 right-2">
                    <TwitterIcon />
                  </span>
                </div>
                <div className="relative">
                  <Field
                    type="url"
                    name="github"
                    className="p-3 bg-black border border-gray-600 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300 mt-4"
                    placeholder="Github URL"
                  />
                  <ErrorMessage
                    name="github"
                    component="div"
                    className="text-red-500 text-xs ml-1"
                  />
                  <span className="absolute top-6 right-2">
                    <GithubIcon />
                  </span>
                </div>{" "}
              </div>
              <div className="flex gap-6">
                <div className="relative">
                  <Field
                    type="url"
                    name="linkedin"
                    className="p-3 bg-black border border-gray-600 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300 mt-4"
                    placeholder="LinkedIn URL"
                  />
                  <ErrorMessage
                    name="linkedin"
                    component="div"
                    className="text-red-500 text-xs ml-1"
                  />
                  <span className="absolute top-6 right-2">
                    <LinkedInIcon />
                  </span>
                </div>
                <div className="relative">
                  <Field
                    type="url"
                    name="youtube"
                    className="p-3 bg-black border border-gray-600 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300 mt-4"
                    placeholder="Youtube URL"
                  />
                  <ErrorMessage
                    name="youtube"
                    component="div"
                    className="text-red-500 text-xs ml-1"
                  />
                  <span className="absolute top-6 right-2">
                    <YoutubeIcon />
                  </span>
                </div>
              </div>
              <div className="relative">
                <Field
                  type="url"
                  name="personal"
                  className="p-3 bg-black border border-gray-600 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300 mt-4"
                  placeholder="Personal Website URL"
                />
                <ErrorMessage
                  name="personal"
                  component="div"
                  className="text-red-500 text-xs ml-1"
                />
                <span className="absolute top-6 right-2">
                  <TbWorldWww className="text-4xl" />
                </span>
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
