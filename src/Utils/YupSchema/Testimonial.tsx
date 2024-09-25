import * as Yup from "yup";

// Define the Yup schema
export const testimonialSchema = Yup.object().shape({
  message: Yup.string()
    .required("Message is required")
    .min(5, "Message must be at least 5 characters")
    .max(200, "Message can be up to 200 characters"),
  rating: Yup.number()
    .required("Rating is required")
    .min(1, "Rating must be at least 1")
    .max(5, "Rating can be up to 5"),
});
