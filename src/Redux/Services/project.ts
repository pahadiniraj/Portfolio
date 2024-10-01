import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Contact {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

interface Response {
  data: Contact[];
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
    createProject: builder.mutation<Response, Contact>({
      query: (project) => {
        return {
          url: "create-project",
          method: "POST",
          body: project,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
  }),
});

export const { useCreateProjectMutation } = projectApi;
