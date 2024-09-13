import * as Yup from "yup";

const SettingPersonalSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name can be at most 50 characters"),

  lastName: Yup.string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name can be at most 50 characters"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  jobTitle: Yup.string()
    .required("Job title is required")
    .min(2, "Job title must be at least 2 characters")
    .max(100, "Job title can be at most 100 characters"),

  bio: Yup.string().max(500, "Bio can be at most 500 characters"), // Bio is optional but with a 500 character limit
});

export { SettingPersonalSchema };
