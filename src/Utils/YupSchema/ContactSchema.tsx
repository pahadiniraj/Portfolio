import * as Yup from "yup";

const contactFormSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/^[^0-9]*$/, "Numbers are not allowed")
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name can't be longer than 50 characters")
    .required("Full name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),

  subject: Yup.string()
    .min(10, "Subject must be at least 10 characters")
    .max(500, "Subject can't be longer than 50 characters")
    .required("Subject is required"),
});

const validStatuses = ["unseen", "inprogress", "completed", "rejected"];

const updateContactSchema = Yup.object().shape({
  _id: Yup.string().required("ID is required"), // _id should be required
  status: Yup.string()
    .oneOf(validStatuses, `Status must be one of: ${validStatuses.join(", ")}`)
    .required("Status is required"), // Remove .required() if status is not mandatory
});

export { contactFormSchema, updateContactSchema };
