"use client";
import React, { CSSProperties } from "react";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";
import { useCreateProjectMutation } from "@/Redux/Services/project";
import { ProjectSchema } from "@/Utils/YupSchema/ProjectSchema";
import { MdDelete, MdLibraryAdd } from "react-icons/md";

interface UserData {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  githubLink?: string;
  liveDemoLink?: string;
  category: string;
  image?: File | string;
  thumbnail?: File | string;
}

const CreateProject = () => {
  const router = useRouter();
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
  };

  const [createProject, { isLoading }] = useCreateProjectMutation();

  const initialValues: UserData = {
    title: "",
    description: "",
    features: [""],
    technologies: [""],
    githubLink: "",
    liveDemoLink: "",
    category: "",
    image: "",
    thumbnail: "",
  };

  const handleSubmit = async (values: UserData, { resetForm }: any) => {
    try {
      const formData = new FormData();
      formData.append("title", values.title),
        formData.append("description", values.description),
        values.features.forEach((feature) => {
          formData.append("features", feature);
        });
      values.technologies.forEach((tech) => {
        formData.append("technologies", tech);
      });

      formData.append("githubLink", values.githubLink as string);
      formData.append("liveDemoLink", values.liveDemoLink as string);
      formData.append("category", values.category);
      if (values.image) {
        formData.append("image", values.image as File);
      }
      if (values.thumbnail) {
        formData.append("thumbnail", values.thumbnail as File);
      }

      const response = await createProject(formData).unwrap();
      toast.success(response.message);
      resetForm();
    } catch (error: any) {
      toast.error(error.message || "Failed to create project");
    }
  };

  return (
    <div className=" ">
      <div className="relative p-7 bg-black rounded-xl">
        <div className="w-full border-b border-gray-300 text-xl font-semibold pb-3">
          Create Project
        </div>
        <button
          onClick={() => router.push("/dashboard/admin-dashboard")}
          className="absolute right-4 top-2 text-xl"
        >
          x
        </button>
        <Formik
          initialValues={initialValues}
          validationSchema={ProjectSchema} // Validation schema from Yup
          onSubmit={handleSubmit}
        >
          {({ values, isValid, setFieldValue }) => (
            <Form
              encType="multipart/form-data"
              className="flex flex-col mt-8 md:mt-4 w-full"
            >
              <div className="space-y-4 w-full">
                {/* Title */}
                <div className="relative">
                  <label htmlFor="title" className="text-sm">
                    Title
                  </label>
                  <Field
                    id="title"
                    type="text"
                    name="title"
                    className="p-3 bg-slate-900 border border-gray-600 rounded-lg w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-red-500 text-xs ml-1"
                  />
                </div>

                {/* Description */}
                <div className="relative">
                  <label htmlFor="description" className="text-sm">
                    Description
                  </label>
                  <Field
                    as="textarea"
                    id="description"
                    name="description"
                    rows="4"
                    cols="50"
                    className="p-3 bg-slate-900 border border-gray-600 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-500 text-xs ml-1"
                  />
                </div>

                {/* Features FieldArray */}
                <div className="relative">
                  <p className="text-sm">Features</p>
                  <FieldArray name="features">
                    {({ push, remove }) => (
                      <div>
                        {values.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-center mb-2"
                          >
                            <label
                              htmlFor={`feature-${index}`}
                              className="sr-only"
                            >
                              Features
                            </label>
                            <Field
                              name={`features[${index}]`}
                              id={`feature-${index}`} // Unique id for features
                              className="p-3 bg-slate-900 border border-gray-600 rounded-lg w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                              placeholder="Enter a feature"
                            />
                            <button
                              type="button"
                              className="ml-4"
                              onClick={() => push("")}
                            >
                              <MdLibraryAdd className="text-2xl hover:text-green-500 duration-200" />
                            </button>
                            <button
                              type="button"
                              className="ml-2"
                              onClick={() => remove(index)}
                            >
                              <MdDelete className="text-2xl hover:text-red-500 duration-200" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </FieldArray>
                  <ErrorMessage
                    name="features"
                    component="div"
                    className="text-red-500 text-xs ml-1"
                  />
                </div>

                {/* Technologies FieldArray */}
                <div className="relative">
                  <p className="text-sm">Technologies</p>
                  <FieldArray name="technologies">
                    {({ push, remove }) => (
                      <div>
                        {values.technologies.map((tech, index) => (
                          <div key={index} className="flex items-center mb-2">
                            <label
                              htmlFor={`technology-${index}`}
                              className="sr-only"
                            >
                              Technology {index + 1}
                            </label>
                            <Field
                              name={`technologies[${index}]`}
                              id={`technology-${index}`} // Unique id for technologies
                              className="p-3 bg-slate-900 border border-gray-600 rounded-lg w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                              placeholder="Enter a technology"
                            />
                            <button
                              type="button"
                              className="ml-4"
                              onClick={() => push("")}
                            >
                              <MdLibraryAdd className="text-2xl hover:text-green-500 duration-200" />
                            </button>
                            <button
                              type="button"
                              className="ml-2"
                              onClick={() => remove(index)}
                            >
                              <MdDelete className="text-2xl hover:text-red-500 duration-200" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </FieldArray>
                  <ErrorMessage
                    name="technologies"
                    component="div"
                    className="text-red-500 text-xs ml-1"
                  />
                </div>

                {/* GitHub Link */}
                <div className="relative">
                  <label htmlFor="githubLink" className="text-sm">
                    GitHub Link
                  </label>
                  <Field
                    id="githubLink"
                    type="url"
                    name="githubLink"
                    className="p-3 bg-slate-900 border border-gray-600 rounded-lg w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                    placeholder="GitHub URL (optional)"
                  />
                  <ErrorMessage
                    name="githubLink"
                    component="div"
                    className="text-red-500 text-xs ml-1"
                  />
                </div>

                {/* Live Demo Link */}
                <div className="relative">
                  <label htmlFor="liveDemoLink" className="text-sm">
                    Live Demo Link
                  </label>
                  <Field
                    id="liveDemoLink"
                    type="url"
                    name="liveDemoLink"
                    className="p-3 bg-slate-900 border border-gray-600 rounded-lg w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                    placeholder="Live Demo URL (optional)"
                  />
                  <ErrorMessage
                    name="liveDemoLink"
                    component="div"
                    className="text-red-500 text-xs ml-1"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="category" className="text-sm">
                    Category
                  </label>
                  <Field
                    as="select"
                    id="category"
                    name="category"
                    className="p-3 bg-slate-900 border border-gray-600 rounded-lg w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option value="webdevelopment">Web Development</option>
                    <option value="appdevelopment">Graphic Design</option>
                    <option value="music">Music</option>
                  </Field>
                  <ErrorMessage
                    name="category"
                    component="div"
                    className="text-red-500 text-xs ml-1"
                  />
                </div>

                {/* Image Upload */}
                <div className="relative">
                  <label htmlFor="image" className="text-sm">
                    Upload Image
                  </label>
                  <input
                    id="image"
                    type="file"
                    name="image"
                    accept="image/*"
                    className="p-3 bg-slate-900 border border-gray-600 rounded-lg w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                    onChange={(event: any) =>
                      setFieldValue("image", event.currentTarget.files[0]!)
                    }
                  />
                  <ErrorMessage
                    name="image"
                    component="div"
                    className="text-red-500 text-xs ml-1"
                  />
                </div>

                {/* Thumbnail Upload */}
                <div className="relative">
                  <label htmlFor="thumbnail" className="text-sm">
                    Upload Thumbnail
                  </label>
                  <input
                    id="thumbnail"
                    type="file"
                    name="thumbnail"
                    accept="image/*"
                    className="p-3 bg-slate-900 border border-gray-600 rounded-lg w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                    onChange={(event: any) =>
                      setFieldValue("thumbnail", event.currentTarget.files[0]!)
                    }
                  />
                  <ErrorMessage
                    name="thumbnail"
                    component="div"
                    className="text-red-500 text-xs ml-1"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading || !isValid}
                  className="mt-4 p-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition duration-200"
                >
                  {isLoading ? (
                    <ClipLoader
                      color="#ffffff"
                      loading={isLoading}
                      cssOverride={override}
                      size={20}
                    />
                  ) : (
                    "Create Project"
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateProject;
