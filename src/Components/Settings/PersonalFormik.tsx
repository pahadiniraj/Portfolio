"use client";
import { loginSchema } from "@/Utils/YupSchema/loginandRegister";
import { SettingPersonalSchema } from "@/Utils/YupSchema/SettingPersonal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import React, { CSSProperties, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { TbWorldWww } from "react-icons/tb";
import { useGetUserQuery, useUpdateUserMutation } from "@/Redux/Services/user";

import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/Assets/Svg/Svg";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

interface UserData {
  bio?: string | null;
  jobTitle?: string | null;
  instagram?: string | null;
  twitter?: string | null;
  linkedin?: string | null;
  github?: string | null;
  personalWebsite?: string | null;
  facebook?: string | null;
  youtube?: string | null;
}

const PersonalFormik = () => {
  const router = useRouter();
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
  };
  const { data: fetchedData, isSuccess: userFetchSuccess } = useGetUserQuery();
  const [userData, setUserData] = useState<UserData | null | undefined>(null);
  const user = fetchedData?.user;
  console.log("settings user", user);

  const [UpdateUser, { isLoading, isError, error }] = useUpdateUserMutation();

  useEffect(() => {
    if (userFetchSuccess) {
      setUserData(user);
    }
  });

  const initialValues: UserData = {
    jobTitle: user?.jobTitle || "",
    bio: user?.bio || "",
    facebook: user?.facebook || "",
    twitter: user?.twitter || "",
    linkedin: user?.linkedin || "",
    instagram: user?.instagram || "",
    youtube: user?.youtube || "",
    github: user?.github || "",
    personalWebsite: user?.personalWebsite || "",
  };

  const handleSubmit = async (value: UserData) => {
    try {
      console.log(value);
      const response = await UpdateUser(value);
      console.log("response data", response);
      if (response.data && response.data.success === true) {
        console.log("success", response.data?.message);
        toast.success(response.data?.message);
        router.push("/dashboard/profile");
      }
      console.log(response);
    } catch (error) {
      console.error("somthing went wrong", error);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={SettingPersonalSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {({ isValid }) => (
          <Form className="flex flex-col mt-8 md:mt-4 w-full">
            <div className="space-y-4 w-full">
              <div className="relative">
                <label htmlFor="jobTitle" className="text-sm">
                  Job Title
                </label>
                <Field
                  id="jobTitle"
                  type="text"
                  name="jobTitle"
                  className="p-3 bg-black border border-gray-600 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
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
                  id="bio"
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
                  <span className="absolute top-6 right-1">
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
                  <span className="absolute top-6 right-1">
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
                  <span className="absolute top-6 right-1">
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
                  <span className="absolute top-6 right-1">
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
                  <span className="absolute top-6 right-1">
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
                  <span className="absolute top-6 right-1">
                    <YoutubeIcon />
                  </span>
                </div>
              </div>
              <div className="relative">
                <Field
                  type="url"
                  name="personalWebsite"
                  className="p-3 bg-black border border-gray-600 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300 mt-4"
                  placeholder="Personal Website URL"
                />
                <ErrorMessage
                  name="personalWebsite"
                  component="div"
                  className="text-red-500 text-xs ml-1"
                />
                <span className="absolute top-6 right-1">
                  <TbWorldWww className="text-4xl" />
                </span>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className={`${
                  isValid
                    ? "bg-gradient-to-r from-blue-500 to-slate-500 font-bold text-white hover:shadow-lg"
                    : "bg-gray-600 text-gray-400 cursor-not-allowed"
                } rounded-2xl  mt-4 px-4 py-2 transition-all duration-300`}
                type="submit"
                disabled={!isValid}
              >
                {isLoading ? (
                  <>
                    <ClipLoader
                      color={"#000000999"}
                      loading={isLoading}
                      cssOverride={override}
                      size={25}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PersonalFormik;
