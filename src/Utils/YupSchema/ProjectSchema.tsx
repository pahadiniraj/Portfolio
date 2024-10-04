import * as Yup from "yup";

export const ProjectSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title can be a maximum of 100 characters")
    .required("Title is required"),

  description: Yup.string()
    .min(10, "Description must be at least 10 characters")
    .max(1000, "Description can be a maximum of 1000 characters")
    .required("Description is required"),

  features: Yup.array()
    .of(Yup.string().required("Feature cannot be empty"))
    .min(1, "At least one feature is required"),

  technologies: Yup.array()
    .of(Yup.string().required("Technology cannot be empty"))
    .min(1, "At least one technology is required"),

  githubLink: Yup.string().url("Invalid GitHub URL format").optional(),

  liveDemoLink: Yup.string().url("Invalid Live Demo URL format").optional(),

  category: Yup.string().required("Category is required"),
});
