"use client";
import React, { useEffect } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import { useCreateTestimonialMutation } from "@/Redux/Services/testimonial";
import StarRatingComponent from "@/Components/StarRating/StarRatingComp";
import { testimonialSchema } from "@/Utils/YupSchema/Testimonial";
import { handleError } from "@/Redux/handleErrror";
import ClipLoader from "react-spinners/ClipLoader";

interface TestimonialFormikValues {
  message: string;
  rating: number; // Updated field name
}

const CreateTestimonialFormik = () => {
  const [createTestimonial, { isError, isLoading, isSuccess, error, data }] =
    useCreateTestimonialMutation();

  console.log("data heer", data);

  const initialValues: TestimonialFormikValues = {
    message: "",
    rating: 5, // Initial rating
  };

  const handleSubmit = async (
    values: TestimonialFormikValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      const response = await createTestimonial(values);
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
    <div className="flex flex-col  h-[500px] justify-center items-center ">
      <div className="bg-black rounded-xl w-2/4 px-4 py-4">
        <p className="text-xl text-center font-semibold">Give your Ratings</p>
        <Formik
          initialValues={initialValues}
          validationSchema={testimonialSchema} // Use the schema here
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values, isValid }) => (
            <Form className="flex flex-col mt-4 md:mt-2 gap-2   py-4">
              <div className=" w-full flex gap-2 flex-col">
                <div className="flex  w-full ">
                  <div className="w-full flex gap-2 flex-col">
                    <label htmlFor="message" className="text-lg ml-1 ">
                      Give your message.
                    </label>
                    <Field
                      type="text"
                      name="message"
                      id="message"
                      as="textarea"
                      rows="4"
                      cols="50"
                      className="p-3 bg-black border rounded-lg border-gray-600  w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                      placeholder="Message"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500 text-xs ml-1"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <StarRatingComponent
                    name="rating"
                    value={values.rating}
                    starCount={5}
                    onStarClick={(value: number) =>
                      setFieldValue("rating", value)
                    } // Update Formik value
                    starColor="#ffd700"
                    emptyStarColor="#333"
                    starSize="text-3xl"
                  />
                  <ErrorMessage
                    name="rating"
                    component="div"
                    className="text-red-500 text-xs ml-1"
                  />
                </div>
              </div>
              <div className="flex justify-start w-full">
                <button
                  className={`px-4 ${
                    isValid
                      ? "transition duration-300 ease-linear active:scale-90 hover:bg-blue-700 bg-blue-600 text-white font-bold"
                      : "bg-gray-600 text-white cursor-not-allowed"
                  } py-2 mt-2 transition-all duration-300 rounded-xl w-full`}
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
    </div>
  );
};

export default CreateTestimonialFormik;
