import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { loginSchema } from "@/Utils/YupSchema/loginAndRegister";
import { useLoginMutation } from "@/Services/authApiSlice";
import { UseSelector } from "react-redux";
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

  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (values: LoginFormValues) => {
    const { acceptTermAndCondition, ...loginValues } = values;
    try {
      await login(loginValues).unwrap();
      console.log("Success");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
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
              {isLoading ? "Logging in " : "Login"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikLogin;
