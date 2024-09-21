"use client";
import { updateContactSchema } from "@/Utils/YupSchema/ContactSchema";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import React, { CSSProperties, useEffect } from "react";
import { FaClipboard, FaEnvelope } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import ClipLoader from "react-spinners/ClipLoader";
import { MdDelete } from "react-icons/md";
import {
  useDeleteContactMutation,
  useUpdateContactMutation,
} from "@/Redux/Services/admin";
import { toast } from "react-toastify";
import { handleError } from "@/Redux/handleErrror";

interface ContactValues {
  fullName: string;
  email: string;
  message: string;
  subject: string;
  _id: string;
  status: string;
}

interface ContactUpdate {
  status: string;
  _id: string;
}

interface UpdateContactProps {
  userData: ContactValues;
  handleClose: () => void;
  onSuccess: () => void;
}

const UpdateContact: React.FC<UpdateContactProps> = ({
  userData,
  handleClose,
  onSuccess,
}) => {
  const [UpdateContact, { isLoading, isError, isSuccess, error }] =
    useUpdateContactMutation();

  const [
    DeleteContact,
    {
      isError: deleteIsError,
      isLoading: deleteIsLoading,
      isSuccess: deleteIsSuccess,
      error: deleteError,
    },
  ] = useDeleteContactMutation();

  const initialValues: ContactUpdate = {
    status: userData.status || "",
    _id: userData._id || "",
  };

  const handleSubmit = async (values: ContactUpdate) => {
    try {
      const response = await UpdateContact(values);
      if (response.data && response.data.success === true) {
        onSuccess();
        handleClose();
        toast.success(response.data?.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        const response = await DeleteContact({ _id: userData._id });
        if (response.data && response.data.success === true) {
          onSuccess();
          handleClose();
          toast.success(response.data?.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    if (isError) {
      handleError(error);
    }
    if (deleteIsError) {
      handleError(deleteError);
    }
  }, [isError, error, deleteIsError, deleteError]);

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <>
      <div className="inset-0 bg-white/2 fixed h-screen flex justify-center items-center backdrop-blur-sm">
        <div
          className="p-6 rounded-xl md:w-2/4 w-full md:border h-full bg-black md:h-[500px] border-slate-700 relative shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-2 right-2 text-gray-500"
            onClick={handleClose}
          >
            <IoClose className="text-2xl" />
          </button>

          <div className="font-semibold mb-4 text-white flex items-center gap-3">
            <p className="text-2xl">{userData.fullName}</p>
            <p
              className={`text-black p-1 text-xs rounded-lg font-medium
                ${
                  userData.status === "unseen"
                    ? "bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 text-white"
                    : userData.status === "inprogress"
                    ? "bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-700 text-black"
                    : userData.status === "completed"
                    ? "bg-gradient-to-r from-green-800 via-green-700 to-green-800 text-white"
                    : userData.status === "rejected"
                    ? "bg-gradient-to-r from-red-800 via-red-600 to-red-800 text-white"
                    : "bg-gray-500 text-white"
                }`}
            >
              {userData.status}
            </p>
            <button onClick={handleDelete}>
              <MdDelete className="text-2xl text-red-500 hover:text-red-600 duration-300" />
            </button>
          </div>

          <div className="text-white">
            <div className="flex gap-2 items-center">
              <FaEnvelope className="inline-block" />
              <strong className="text-sm md:text-base">Email:</strong>
              <p className="text-sm md:text-base">{userData.email}</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaClipboard className="inline-block" />
              <strong className="text-sm md:text-base">Subject:</strong>
              <p className="text-sm md:text-base">{userData.subject}</p>
            </div>
            <hr className="my-4" />
            <p className="mb-2">
              <strong>Message:</strong>
            </p>
            <div className="bg-gray-800 p-3 border border-gray-600 rounded-md shadow-inner h-[200px] overflow-y-auto">
              <div className="pb-2">
                <p>{userData.message}</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Formik
              initialValues={initialValues}
              validationSchema={updateContactSchema}
              onSubmit={handleSubmit}
              enableReinitialize={true}
            >
              {({ isValid }) => (
                <Form className="flex flex-col mt-8 md:mt-4 w-full">
                  <div className="space-y-2 w-full">
                    <div>
                      <label
                        htmlFor="status"
                        className="text-lg mr-2 font-semibold"
                      >
                        Change Status :
                      </label>
                      <Field
                        id="status"
                        as="select"
                        name="status"
                        className="p-1 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300 text-sm"
                      >
                        <option value="unseen">Unseen</option>
                        <option value="inprogress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="rejected">Rejected</option>
                      </Field>
                      <ErrorMessage
                        name="status"
                        component="div"
                        className="error text-xs text-red-500"
                      />
                    </div>

                    <div className="flex justify-end">
                      <button
                        className={`${
                          isValid
                            ? "text-white bg-green-600 hover:bg-green-700"
                            : "bg-gray-600 text-gray-400"
                        } rounded-md p-1 px-2 mt-4 duration-300`}
                        type="submit"
                        disabled={!isValid}
                      >
                        {isLoading ? (
                          <ClipLoader
                            color={"#000000999"}
                            loading={isLoading}
                            cssOverride={override}
                            size={25}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                          />
                        ) : (
                          "Update"
                        )}
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateContact;
