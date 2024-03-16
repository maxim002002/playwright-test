import { configureStore } from "@reduxjs/toolkit";
import ModalState from "./slices/ModalState";
import UserState from "./slices/UserState";

export const store = configureStore({
  reducer: { ModalState, UserState },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
