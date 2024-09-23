import * as Yup from "yup";

const DeleteAccountSchema = Yup.object().shape({
  _id: Yup.string().required("ID is required"), // _id should be required

  email: Yup.string()
    .email("Invalid email address") // Ensures the email format is valid
    .required("Email is required"), // Email field is mandatory

  currentPassword: Yup.string()
    .min(6, "Password must be at least 6 characters") // Minimum of 6 characters for the password
    .required("Password is required"), // Password field is mandatory
});

export default DeleteAccountSchema;
