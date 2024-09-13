import * as Yup from "yup";

const changePasswordSchema = Yup.object().shape({
  password: Yup.string().required("Current password is required"),

  newPassword: Yup.string()
    .min(6, "New password must be at least 6 characters long")
    .required("New password is required"),

  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Please confirm your new password"),
});

export { changePasswordSchema };
