import React, { useState, CSSProperties, useEffect } from "react";
import { registrationSchema } from "@/Utils/YupSchema/loginandRegister";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRegisterUserMutation } from "@/Redux/Services/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { handleError } from "@/Redux/handleErrror";
import ClipLoader from "react-spinners/ClipLoader";

interface RegistrationFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTermAndCondition: boolean;
}

const initialValues: RegistrationFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptTermAndCondition: false,
};
const FormikRegister = () => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
  };
  let [color, setColor] = useState("#ffffff");
  const router = useRouter();
  const [RegisterUser, { isLoading, isError, isSuccess, error }] =
    useRegisterUserMutation();

  useEffect(() => {
    if (error) {
      handleError(error);
    }
  }, [error, isError]);

  const handleSubmit = async (values: RegistrationFormValues) => {
    try {
      const response = await RegisterUser(values);
      if (response.data && response.data.success === true) {
        toast.success(response.data?.message);
        router.push("/otp");
      }
    } catch (err) {
      console.error("Error while registration", err);
    }
  };

  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={registrationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form className="flex flex-col ">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="relative flex-1">
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
                <div className="relative flex-1">
                  <Field
                    type="text"
                    name="lastName"
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
                  type={showPassword ? "password" : "text"}
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
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-4 transition duration-300 ease-linear active:scale-90"
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
                  autoComplete="confirmPassword"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-xxs ml-1"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2 top-4  transition duration-300 ease-linear active:scale-90"
                >
                  {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
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
              disabled={!isValid || isLoading}
            >
              {isLoading ? (
                <>
                  <ClipLoader
                    color={color}
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
    </>
  );
};

export default FormikRegister;
