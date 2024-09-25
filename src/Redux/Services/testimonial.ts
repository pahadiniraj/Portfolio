import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Testimonial {
  message: string;
}

interface Response {
  data: Testimonial[];
  message: string;
  success: boolean;
}

// Define User interface
interface User {
  firstName: string;
  lastName: string;
  jobTitle: string;
  _id: string;
  avatar:string;
}

// Define Data interface
interface Data {
  message: string;
  rating: number;
  user: User;
  _id: string;
}

// Define GetResponse interface where data is an array of Data
export interface GetResponse {
  data: Data[]; // Change this to Data[] instead of TestimonialData[]
  message: string;
  success: boolean;
  statusCode: number;
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
    getAllTestimonials: builder.query<GetResponse, void>({
      query: () => ({
        url: "get-testimonial",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useCreateTestimonialMutation, useGetAllTestimonialsQuery } =
  testimonialApi;
