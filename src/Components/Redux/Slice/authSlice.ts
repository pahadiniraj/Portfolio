import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AuthState {
  accessToken: string | null;
}

const initialState: AuthState = {
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        accessToken: string;
      }>
    ) => {
      // Store user and access token separately
      localStorage.setItem("accessToken", action.payload.accessToken);

      // Update the state
      state.accessToken = action.payload.accessToken;
    },
    logout: (state) => {
      // Remove both user and access token from localStorage
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");

      // Reset the state
      state.accessToken = null;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
