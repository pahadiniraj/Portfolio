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
        console.log("redux delete", id);
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
  }),
});

export const {
  useGetContactQuery,
  useUpdateContactMutation,
  useDeleteContactMutation,
  useGetAllUsersQuery,
  useDeleteAllUsersMutation,
} = adminApi;
