"use client";
import { registrationSchema } from "@/Utils/YupSchema/loginAndRegister";
import Button from "../Button/Button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

const Register: React.FC = () => {
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

  const handleSubmit = (values: RegistrationFormValues) => {
    console.log(values);
  };

  return (
    <>
      <div className="md:w-2/5">
        <Formik
          initialValues={initialValues}
          validationSchema={registrationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid }) => (
            <Form className="px-5 py-5 flex flex-col gap-7">
              <p className="text-center text-2xl font-extrabold">Register</p>
              <div className="flex flex-col gap-4">
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <Field
                    type="text"
                    name="firstName"
                    className="p-3 bg-black border border-gray-300 rounded-md w-full text-white"
                    placeholder="First Name"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="lastName">Last Name</label>
                  <Field
                    type="text"
                    name="lastName"
                    className="p-3 bg-black border border-gray-300 rounded-md w-full text-white"
                    placeholder="Last Name"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    name="email"
                    className="p-3 bg-black border border-gray-300 rounded-md w-full text-white"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    name="password"
                    className="p-3 bg-black border border-gray-300 rounded-md w-full text-white"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    className="p-3 bg-black border border-gray-300 rounded-md w-full text-white"
                    placeholder="Confirm Password"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <label>
                    <Field type="checkbox" name="acceptTermAndCondition" />I
                    accept the terms and conditions
                  </label>
                  <ErrorMessage
                    name="acceptTermAndCondition"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              <Button
                className={`${
                  isValid
                    ? "bg-btn-gradient font-bold text-black text-lg"
                    : "bg-gray-600 text-gray-400 cursor-not-allowed"
                } rounded-2xl py-2 mt-4`}
                type="submit"
                disabled={!isValid}
              >
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Register;
