import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";
import { useLoginUserMutation } from "@/Redux/Services/auth";
import { handleError } from "@/Redux/handleErrror";
import contactFormSchema from "@/Utils/YupSchema/ContactSchema";
import { useCreateContactMutation } from "@/Redux/Services/contact";
import { toast } from "react-toastify";

interface contactFormikValues {
  fullName: string;
  email: string;
  message: string;
  subject: string;
}

const initialValues: contactFormikValues = {
  email: "",
  message: "",
  fullName: "",
  subject: "",
};
const ContactFormik = () => {
  const [CreateContact, { isError, isLoading, error }] =
    useCreateContactMutation();

  const handleSubmit = async (
    values: contactFormikValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      const response = await CreateContact(values);
      console.log(response);
      if (response.data && response.data.success === true) {
        toast.success(response.data?.message);
        resetForm();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (error) {
      handleError(error);
    }
  }, [error, isError]);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={contactFormSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form className="flex flex-col mt-4 md:mt-2 w-full px-2">
            <div className="space-y-4 w-full">
              <div className="flex gap-5 w-full ">
                <div className="w-1/2">
                  <Field
                    type="text"
                    name="fullName"
                    className="p-3 bg-black border rounded-lg border-gray-600  w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300 "
                    placeholder="Full Name"
                    autoComplete="name"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-red-500 text-xs ml-1"
                  />
                </div>

                <div className="w-1/2">
                  <Field
                    type="email"
                    name="email"
                    className="p-3 bg-black border rounded-lg border-gray-600  w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                    placeholder="Email"
                    autoComplete="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs ml-1"
                  />
                </div>
              </div>
              <div className="flex flex-col text-white">
                <div className="flex gap-2 items-center ">
                  <Field
                    type="text"
                    name="subject"
                    className="p-3 bg-black border rounded-lg border-gray-600  w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                    placeholder="Subject"
                  />
                </div>
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="text-red-500 text-xs ml-1"
                />
              </div>
              <div className="relative">
                <Field
                  as="textarea"
                  name="message"
                  className="p-3 bg-black border rounded-lg border-gray-600  w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                  placeholder="Type your message here..."
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-xs ml-1"
                />
              </div>
            </div>
            <div className="flex  justify-start">
              <button
                className={` px-4 ${
                  isValid
                    ? "border  transition duration-300 ease-linear active:scale-90  hover:shadow-custom-white "
                    : "bg-gray-600 text-white cursor-not-allowed"
                }  py-2 mt-2 transition-all duration-300 rounded-xl `}
                type="submit"
                disabled={!isValid || isLoading}
              >
                {isLoading ? <ClipLoader size={25} color="#fff" /> : "Submit"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactFormik;
