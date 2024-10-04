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

// Define a service using a base URL and expected endpoints
export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/projects/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    createProject: builder.mutation<Response, FormData>({
      query: (project) => {
        console.log("redux data", project);
        return {
          url: "create-project",
          method: "POST",
          body: project,
        };
      },
    }),
  }),
});

export const { useCreateProjectMutation } = projectApi;
