import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Register {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Login {
  email: string;
  password: string;
}

interface Otp {
  otp: number | string;
}

interface Response {
  message: string;
  success: boolean;
}

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/auth/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<Response, Register>({
      query: (user) => {
        console.log("Redux User data", user);
        return {
          url: "register",
          method: "POST",
          body: user,
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        };
      },
    }),
    verifyOtp: builder.mutation<Response, Otp>({
      query: (user) => {
        return {
          url: `verify-otp`,
          method: "POST",
          body: user,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
    loginUser: builder.mutation<Response, Login>({
      query: (user) => {
        return {
          url: `login`,
          method: "POST",
          body: user,
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        };
      },
    }),
    logoutUser: builder.mutation<{ data: string }, void>({
      query: (user) => {
        return {
          url: `logout`,
          body: user,
          method: "POST",
          credentials: "include",
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useRegisterUserMutation,
  useVerifyOtpMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = authApi;