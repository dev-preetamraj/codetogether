import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Language = "python" | "cpp" | "java" | "javascript" | "typescript";

export interface EditorSliceState {
  language: Language;
}

const initialState: EditorSliceState = {
  language: "cpp",
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLanguage } = editorSlice.actions;

export default editorSlice.reducer;
