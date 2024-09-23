"use client";
import React, { useState, useEffect } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useParams, useRouter } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useDeleteUserMutation } from "@/Redux/Services/user";
import { handleError } from "@/Redux/handleErrror";
import DeleteAccountSchema from "@/Utils/YupSchema/DeleteAccount";
import { useLogoutUserMutation } from "@/Redux/Services/auth";

const DeleteAccount = () => {
  interface ChangePasswordFormValues {
    currentPassword: string;
    email: string;
    _id: string; // Add _id to form values
  }

  const router = useRouter();
  const { id } = useParams();

  // Ensure id is a string
  const userId = Array.isArray(id) ? id[0] : id || "";

  const initialValues: ChangePasswordFormValues = {
    currentPassword: "",
    email: "",
    _id: userId, // Include id in initial values
  };

  const [showPassword, setShowPassword] = useState(true);

  const [DeleteUser, { isLoading, isError, isSuccess, error }] =
    useDeleteUserMutation();

  const [logoutUser] = useLogoutUserMutation();

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
      // Include the id in the payload
      const response = await DeleteUser(values);
      if (response.data && response.data.success === true) {
        resetForm();
        toast.success(response.data?.message);
        router.push("/");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center mt-10 ">
      <Formik
        initialValues={initialValues}
        validationSchema={DeleteAccountSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form className="flex flex-col mt-8 md:mt-4 w-2/5 relative  rounded-xl bg-black border-slate-700 p-6 border">
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
                <Field
                  type={showPassword ? "password" : "text"}
                  name="currentPassword"
                  className="p-3 bg-black border border-gray-600 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                  placeholder="Current Password"
                  autoComplete="current-password"
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

export default DeleteAccount;
