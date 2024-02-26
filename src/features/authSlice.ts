import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface BaseUser {
  id: number;
  username: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  avatar_url: string;
  bio: string | null;
  blog_url: string | null;
  location: string | null;
}

export interface AuthSliceState {
  isAuthenticated: boolean;
  authLoading: boolean;
  user: BaseUser | null;
}

const initialState: AuthSliceState = {
  isAuthenticated: false,
  authLoading: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.authLoading = action.payload;
    },
    login: (state, action: PayloadAction<BaseUser>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, setAuthLoading, logout } = authSlice.actions;

export default authSlice.reducer;
