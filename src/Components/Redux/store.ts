import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "@/Services/AuthApi";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import authReducer from "@/Components/Redux/Slice/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

export default store;
