import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserData } from "./user";

interface Contact {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  _id: string;
}

interface ContactUpdate {
  status: string;
  _id: string;
}

interface ContactDelete {
  _id: string;
}

interface DeleteUser {
  _id: string;
}

interface Response {
  data: Contact[];
  message: string;
  success: boolean;
}

interface UpdateResponse {
  data: string;
  message: string;
  success: boolean;
}

interface GetUserResponse {
  data: UserData[];
}

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

interface ResponseProject {
  data: formData;
  message: string;
  success: boolean;
}
interface ResponseTestimonial {
  data: string;
  message: string;
  success: boolean;
}

// Define a service using a base URL and expected endpoints
export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/admin/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getContact: builder.query<Response, void>({
      query: () => ({
        url: "get-contact",
        method: "GET",
        credentials: "include",
      }),
    }),
    updateContact: builder.mutation<UpdateResponse, ContactUpdate>({
      query: (user) => {
        return {
          url: `/update-contact`,
          method: "PUT",
          body: user,
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        };
      },
    }),
    deleteContact: builder.mutation<UpdateResponse, ContactDelete>({
      query: (user) => {
        return {
          url: `/delete-contact`,
          method: "DELETE",
          body: user,
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        };
      },
    }),
    getAllUsers: builder.query<GetUserResponse, void>({
      query: () => ({
        url: "get-users",
        method: "GET",
        credentials: "include",
      }),
    }),
    deleteAllUsers: builder.mutation<UpdateResponse, DeleteUser>({
      query: (id) => {
        return {
          url: "delete-all-users",
          method: "DELETE",
          body: id,
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        };
      },
    }),
    updateProject: builder.mutation<ResponseProject, FormData>({
      query: (data) => {
        return {
          url: `update-project`,
          method: "POST",
          body: data,
          credentials: "include",
        };
      },
    }),
    deleteProject: builder.mutation<ResponseProject, string>({
      query: (_id) => {
        return {
          url: `delete-project`,
          method: "POST",
          body: { _id },
          credentials: "include",
        };
      },
    }),
    deleteTestimonial: builder.mutation<ResponseTestimonial, string>({
      query: (_id) => {
        return {
          url: `delete-testimonial`,
          method: "DELETE",
          body: { _id },
          credentials: "include",
        };
      },
    }),
  }),
});

export const {
  useGetContactQuery,
  useUpdateContactMutation,
  useDeleteContactMutation,
  useGetAllUsersQuery,
  useDeleteAllUsersMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
  useDeleteTestimonialMutation,
} = adminApi;
