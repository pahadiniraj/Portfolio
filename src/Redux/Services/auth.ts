import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegisterResponse {
  message: string;
  success: boolean;
}

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/auth/" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<RegisterResponse, User>({
      query: (user) => {
        console.log("Redux User data", user);
        return {
          url: "register",
          method: "POST",
          body: user,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterUserMutation } = authApi;
