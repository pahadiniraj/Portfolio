import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchBaseQueryError,
  FetchArgs,
  BaseQueryApi,
} from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "@/Components/Redux/Slice/authSlice";
import { RootState } from "@/Components/Redux/store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8000",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error && result.error.status === 403) {
    console.log("Sending Refresh Token");

    const refreshResult = await baseQuery("/refresh", api, extraOptions);
    console.log(refreshResult);

    if (refreshResult.data) {
      const { user, token } = refreshResult.data as {
        user: string;
        token: string;
      };
      api.dispatch(setCredentials({ user, token }));

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
