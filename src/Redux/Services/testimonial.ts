import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Testimonial {
  message: string;
}

interface Response {
  data: Testimonial[];
  message: string;
  success: boolean;
}

// Define a service using a base URL and expected endpoints
export const testimonialApi = createApi({
  reducerPath: "testimonialApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/testimonial/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    createTestimonial: builder.mutation<Response, Testimonial>({
      query: (data) => {
        return {
          url: "update-testimonial",
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
    
  }),
});

export const { useCreateTestimonialMutation } = testimonialApi;
