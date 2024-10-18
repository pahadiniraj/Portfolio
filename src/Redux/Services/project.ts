import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface formData {
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

interface Response {
  data: formData[];
  message: string;
  success: boolean;
}

interface CreatedBy {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
}

interface Data {
  category: string;
  createdAt: string; // You may consider using Date type if you parse it
  createdBy: CreatedBy;
  description: string;
  features: string[]; // Array of strings
  githubLink: string;
  image: string;
  liveDemoLink: string;
  technologies: string[]; // Array of strings
  thumbnail: string;
  title: string;
  updatedAt: string; // You may consider using Date type if you parse it
  __v: number; // Assuming this is a version number
  _id: string; // Unique identifier for the project
}

// Define GetResponse interface where data is an array of Data
export interface GetResponse {
  data: Data[]; // Change this to Data[] instead of TestimonialData[]
  message: string;
  success: boolean;
  statusCode: number;
}

export interface GetProjectResponse {
  data: Data;
  message: string;
  success: boolean;
  statusCode: number;
}

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/projects/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    createProject: builder.mutation<Response, FormData>({
      query: (project) => {
        return {
          url: "create-project",
          method: "POST",
          body: project,
        };
      },
    }),
    getAllProject: builder.query<GetResponse, void>({
      query: () => ({
        url: "get-all-projects",
        method: "GET",
        credentials: "include",
      }),
    }),
    getProjectById: builder.query<GetProjectResponse, string>({
      query: (id) => ({
        url: `get-project/${id}`,
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useCreateProjectMutation,
  useGetAllProjectQuery,
  useGetProjectByIdQuery,
} = projectApi;
