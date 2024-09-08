import * as Yup from "yup";

const otpSchema = Yup.object().shape({
  otp: Yup.number()
    .typeError("OTP must be a number")
    .integer("OTP must be an integer")
    .min(1000, "OTP must be a 4-digit number")
    .max(9999, "OTP must be a 4-digit number")
    .required("OTP is required"),
});

const verifyEmailSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export { otpSchema, verifyEmailSchema };
