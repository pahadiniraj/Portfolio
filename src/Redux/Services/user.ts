import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Update UserData interface to match the user object
interface UserData {
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

interface passwordData {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

interface ApiResponse {
  user: UserData;
}

// Your API response will be of type UserData (not the `Response` type you previously used)
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/users/",
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
  }),
});

// Export hooks for usage in functional components
export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useChangeUserPasswordMutation,
} = userApi;
