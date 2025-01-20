import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer";

const store = configureStore({
  reducer: counterReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
