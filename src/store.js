import { configureStore } from "@reduxjs/toolkit";
import UserReduser from "./app/userslice";

export const store = configureStore({
  reducer: {
    user: UserReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["user/login"],
        ignoredPaths: ["user.user"],
      },
    }),
});
