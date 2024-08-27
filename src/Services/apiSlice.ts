import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  endpoints: (builder) => ({
    getUsers: builder.query<any, void>({
      // Adjust the type as needed
      query: () => "/api/users/get-users",
    }),
  }),
});

export const { useGetUsersQuery } = api;
