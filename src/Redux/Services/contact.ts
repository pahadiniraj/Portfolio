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
export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl:  `${process.env.NEXT_PUBLIC_BACKEND_HOST}/contact/`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    createContact: builder.mutation<Response, Contact>({
      query: (user) => {
        return {
          url: "contact-me",
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
export const { useCreateContactMutation } = contactApi;
