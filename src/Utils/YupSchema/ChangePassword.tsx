import * as Yup from "yup";

const changePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Current password is required"),

  newPassword: Yup.string()
    .min(6, "New password must be at least 6 characters long")
    .notOneOf(
      [Yup.ref("currentPassword")],
      "New password must be different from current password"
    )
    .required("New password is required"),

  newConfirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Please confirm your new password"),
});

export { changePasswordSchema };
