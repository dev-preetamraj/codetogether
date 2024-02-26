import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/authSlice";
import roomNavReducer from "@/features/roomNavSlice";
import editorReducer from "@/features/editorSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    roomNav: roomNavReducer,
    editor: editorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
