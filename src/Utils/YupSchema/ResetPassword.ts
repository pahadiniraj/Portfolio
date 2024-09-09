import * as Yup from "yup";

const resetPassword = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match") // Use undefined instead of null
    .required("Confirm password is required"),
});

export default resetPassword;
