import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Language = "python" | "cpp" | "java" | "javascript" | "typescript";
export type OutputType = "stdout" | "stderr";
export type SubmissionStatus = {
  id: number;
  status: string;
};

export interface EditorSliceState {
  language: Language;
  sourceCode: string;
  inputText: string;
  outputText: string;
  outputType: OutputType;
  submissionStatus: SubmissionStatus | null;
  submitLoading: boolean;
}

const initialState: EditorSliceState = {
  language: "cpp",
  sourceCode: "",
  inputText: "",
  outputText: "",
  outputType: "stdout",
  submissionStatus: null,
  submitLoading: false,
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
    setSouceCode: (state, action: PayloadAction<string>) => {
      state.sourceCode = action.payload;
    },
    setInputText: (state, action: PayloadAction<string>) => {
      state.inputText = action.payload;
    },
    setOutputText: (state, action: PayloadAction<string>) => {
      state.outputText = action.payload;
    },
    setOutputType: (state, action: PayloadAction<OutputType>) => {
      state.outputType = action.payload;
    },
    setSubmitLoading: (state, action: PayloadAction<boolean>) => {
      state.submitLoading = action.payload;
    },
    setSubmissionStatus: (state, action: PayloadAction<SubmissionStatus>) => {
      state.submissionStatus = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLanguage,
  setSouceCode,
  setInputText,
  setOutputText,
  setOutputType,
  setSubmitLoading,
  setSubmissionStatus
} = editorSlice.actions;

export default editorSlice.reducer;
