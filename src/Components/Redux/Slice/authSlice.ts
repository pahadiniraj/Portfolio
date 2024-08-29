// // authSlice.ts
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../store";

// // Define the shape of your state
// export interface AuthState {
//   user: string | null;
//   token: string | null;
// }

// // Initial state with the correct type
// const initialState: AuthState = {
//   user: null,
//   token: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setUser: (
//       state,
//       action: PayloadAction<{ user: string; token: string }>
//     ) => {
//       localStorage.setItem(
//         "user",
//         JSON.stringify({
//           user: action.payload.user,
//           token: action.payload.token,
//         })
//       );
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//     },
//   },
// });

// export const selectAuth = (state: RootState) => state.auth;
// export const { setUser } = authSlice.actions;
// export default authSlice.reducer;

// authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define the shape of your state
export interface AuthState {
  user: string | null;
  accessToken: string | null;
  refreshToken: string | null;
}

// Initial state with the correct type
const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        user: string;
        accessToken: string;
        refreshToken: string;
      }>
    ) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          user: action.payload.user,
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
        })
      );
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const { setUser } = authSlice.actions;
export default authSlice.reducer;
