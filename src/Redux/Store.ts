import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./Services/auth";
import { userApi } from "./Services/user";
import { contactApi } from "./Services/contact";
import { adminApi } from "./Services/admin";
import { testimonialApi } from "./Services/testimonial";
import { projectApi } from "./Services/project";
export const store = configureStore({
  reducer: {
    [testimonialApi.reducerPath]: testimonialApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [projectApi.reducerPath]: projectApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      contactApi.middleware,
      adminApi.middleware,
      testimonialApi.middleware,
      projectApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
