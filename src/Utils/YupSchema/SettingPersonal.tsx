import * as Yup from "yup";

const SettingPersonalSchema = Yup.object().shape({
  jobTitle: Yup.string()
    .min(3, "Job title must be at least 3 characters")
    .max(50, "Job title can be at most 50 characters"),

  bio: Yup.string().max(500, "Bio can be at most 500 characters"),

  facebook: Yup.string()
    .nullable()
    .notRequired()
    .url("Must be a valid URL for Facebook"),

  instagram: Yup.string()
    .nullable()
    .notRequired()
    .url("Must be a valid URL for Instagram"),

  github: Yup.string()
    .nullable()
    .notRequired()
    .url("Must be a valid URL for GitHub"),

  linkedin: Yup.string()
    .nullable()
    .notRequired()
    .url("Must be a valid URL for LinkedIn"),

  twitter: Yup.string()
    .nullable()
    .notRequired()
    .url("Must be a valid URL for Twitter"),

  youtube: Yup.string()
    .nullable()
    .notRequired()
    .url("Must be a valid URL for YouTube"),

  personalWebsite: Yup.string()
    .nullable()
    .notRequired()
    .url("Must be a valid URL for personal website"),
});

export { SettingPersonalSchema };
