import * as Yup from "yup";

const contactFormSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name can't be longer than 50 characters")
    .required("Full name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message can't be longer than 500 characters")
    .required("Message is required"),

  subject: Yup.string()
    .min(10, "Subject must be at least 10 characters")
    .max(500, "Subject can't be longer than 50 characters")
    .required("Subject is required"),
});

export default contactFormSchema;
