// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./UserSlice";

// ストアの設定
export const store = configureStore({
  reducer: {
    usersReducer: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
