// authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of your state
interface AuthState {
  user: string;
  token: string | null;
}

// Initial state with the correct type
const initialState: AuthState = {
  user: "",
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: string; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = "";
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

// Selector functions
export const selectCurrentUser = (state: { auth: AuthState }) =>
  state.auth.user;
export const selectCurrentToken = (state: { auth: AuthState }) =>
  state.auth.token;
