import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "@/Services/AuthApi";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import authReducer from "@/Components/Redux/Slice/authSlice";
import popupReducer from "@/Components/Redux/Slice/popupSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    popup: popupReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

export default store;
