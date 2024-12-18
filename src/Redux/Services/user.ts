import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Update UserData interface to match the user object
export interface UserData {
  _id: string;
  jobTitle?: string | null;
  firstName: string;
  lastName: string;
  email: string;
  isVerified: boolean;
  role: string;
  createdAt: string;
  updatedAt: string;
  avatar?: string | null;
  bio?: string | null;
  github?: string | null;
  linkedin?: string | null;
  twitter?: string | null;
  facebook?: string | null;
  instagram?: string | null;
  personalWebsite?: string | null;
  youtube?: string | null;
}

interface ApiResponse {
  user: UserData;
}

interface socialLinks {
  github?: string | null;
  linkedin?: string | null;
  twitter?: string | null;
  facebook?: string | null;
  instagram?: string | null;
  personalWebsite?: string | null;
  youtube?: string | null;
}

interface data {
  _id: string;
  jobTitle?: string | null;
  firstName: string;
  lastName: string;
  email: string;
  isVerified: boolean;
  role: string;
  createdAt: string;
  updatedAt: string;
  avatar?: string | null;
  bio?: string | null;
  socialLinks?: socialLinks;
}

interface ApiRes {
  data: data;
}

// Your API response will be of type UserData (not the `Response` type you previously used)
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_HOST}/users/`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    // No argument for getUser since you're fetching user data directly
    getUser: builder.query<ApiResponse, void>({
      query: () => ({
        url: "get-profile",
        method: "GET",
        credentials: "include",
      }),
    }),
    updateUser: builder.mutation({
      query: (user) => {
        return {
          url: `update-user-profile`,
          method: "POST",
          body: user,
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        };
      },
    }),
    changeUserPassword: builder.mutation({
      query: (password) => {
        return {
          url: `change-password`,
          method: "POST",
          body: password,
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        };
      },
    }),
    deleteUser: builder.mutation({
      query: (data) => {
        const { _id, email, currentPassword } = data;
        return {
          url: `delete-account/${_id}`,
          method: "POST",
          body: { email, currentPassword },
          credentials: "include",
          headers: {
            "Content-Type": "application/json", // Set content type to JSON
          },
        };
      },
    }),
    updateAvatar: builder.mutation({
      query: (avatar) => {
        return {
          url: `update-user-avatar`,
          method: "POST",
          body: avatar,
          credentials: "include",
        };
      },
    }),
    getUserById: builder.mutation<ApiRes, string>({
      query: (id) => {
        return {
          url: `get-user/${id}`,
          method: "GET",
          credentials: "include",
        };
      },
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useChangeUserPasswordMutation,
  useDeleteUserMutation,
  useUpdateAvatarMutation,
  useGetUserByIdMutation,
} = userApi;
