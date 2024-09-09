import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { loginSchema } from "@/Utils/YupSchema/loginAndRegister";
import { useLoginUserMutation } from "@/Services/AuthApi";
import { useRouter } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useAppDispatch } from "../../Redux/hooks";
import { setUser } from "../../Redux/Slice/authSlice";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const FormikLogin = () => {
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

  interface FetchBaseQueryError {
    status: number;
    data?: {
      message?: string;
    };
  }
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isFetchBaseQueryError = (error: any): error is FetchBaseQueryError => {
    return error && (error as FetchBaseQueryError).status !== undefined;
  };
  const [
    loginUser,
    {
      data: loginData,
      isSuccess: isLoginSucess,
      isError: isLoginError,
      error: loginError,
      isLoading: isLoginLoading,
    },
  ] = useLoginUserMutation();

  const [color] = useState("#000000");

  const override = {
    display: "block",
    margin: "0 auto",
  };

  const handleSubmit = async (values: LoginFormValues) => {
    const { acceptTermAndCondition, ...loginValues } = values;
    const { email, password } = loginValues;
    try {
      const response = await loginUser({ email, password });
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (loginData) {
      toast.success(loginData.message);
      dispatch(
        setUser({
          accessToken: loginData.data.accessToken,
          user: loginData.data.user,
        })
      );
      router.push("/dashboard");
    }
    if (isLoginError && loginError) {
      if (isFetchBaseQueryError(loginError)) {
        toast.error(loginError.data?.message);
      } else {
        console.log("Error:", loginError);
      }
    }
  }, [loginData, loginError]);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form className="flex flex-col mt-8 md:mt-4 w-full">
            <div className="space-y-4 w-full">
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
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-4 text-xl transition duration-300 ease-linear active:scale-90"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>

              <div className="flex flex-col text-white">
                <div className="flex gap-2 items-center ml-1">
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
              <div className=" w-full flex  justify-end items-end">
                <button className="text-xs hover:text-purple-500 font-bold transition-colors duration-300">
                  Forget Password?
                </button>
              </div>
            </div>
            <button
              className={`${
                isValid
                  ? "bg-gradient-to-r from-blue-500 to-green-500 font-bold text-white hover:shadow-lg"
                  : "bg-gray-600 text-gray-400 cursor-not-allowed"
              } rounded-2xl py-2 mt-4 transition-all duration-300`}
              type="submit"
              disabled={!isValid || isLoginLoading}
            >
              {isLoginLoading ? (
                <ClipLoader
                  color={color}
                  loading={isLoginLoading}
                  cssOverride={override}
                  size={25}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                "Login"
              )}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikLogin;
