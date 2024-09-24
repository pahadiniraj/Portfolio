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
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={testimonialSchema} // Use the schema here
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, isValid }) => (
          <Form className="flex flex-col mt-4 md:mt-2 w-full px-2">
            <div className="space-y-4 w-full">
              <div className="flex gap-5 w-full ">
                <div className="w-1/2">
                  <Field
                    type="text"
                    name="message"
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

              <div>
                <StarRatingComponent
                  name="rating"
                  value={values.rating}
                  starCount={5}
                  onStarClick={(value: number) =>
                    setFieldValue("rating", value)
                  } // Update Formik value
                  starColor="#ffd700"
                  emptyStarColor="#333"
                  starSize="text-4xl"
                />
                <ErrorMessage
                  name="rating"
                  component="div"
                  className="text-red-500 text-xs ml-1"
                />
              </div>
            </div>
            <div className="flex justify-start">
              <button
                className={`px-4 ${
                  isValid
                    ? "border transition duration-300 ease-linear active:scale-90 hover:shadow-custom-white"
                    : "bg-gray-600 text-white cursor-not-allowed"
                } py-2 mt-2 transition-all duration-300 rounded-xl`}
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

export default CreateTestimonialFormik;
