import { configureStore } from "@reduxjs/toolkit";
import popupSlice from "./Slice/popupSlice";
import { api } from "@/Services/apiSlice";

const store = configureStore({
  reducer: {
    popup: popupSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
