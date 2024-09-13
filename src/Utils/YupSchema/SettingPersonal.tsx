import * as Yup from "yup";

const SettingPersonalSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters long")
    .max(50, "First name can be up to 50 characters long")
    .required("First name is required"),

  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters long")
    .max(50, "Last name can be up to 50 characters long")
    .required("Last name is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  bio: Yup.string()
    .max(300, "Bio can be up to 300 characters long") // Limit bio length
    .optional(), // Bio can be optional
});

export { SettingPersonalSchema };
