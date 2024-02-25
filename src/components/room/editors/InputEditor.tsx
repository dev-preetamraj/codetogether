"use client";

import { setInputText } from "@/features/editorSlice";
import { AppDispatch } from "@/features/store";
import { Editor, Monaco } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { useTheme } from "next-themes";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const InputEditor = () => {
  const dispatch: AppDispatch = useDispatch();

  const { theme } = useTheme();
  const editorRef = useRef<any>(null);
  function handleEditorDidMount(
    editor: editor.IStandaloneCodeEditor,
    monaco: Monaco
  ) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current.getValue());
  }

  function handleEditorChange(
    value: string | undefined,
    event: editor.IModelContentChangedEvent
  ) {
    dispatch(setInputText(value ?? ""));
  }

  return (
    <Editor
      className="border rounded-md"
      height="87%"
      width="100%"
      theme={theme === "light" ? "light" : "vs-dark"}
      defaultLanguage="txt"
      onMount={handleEditorDidMount}
      onChange={handleEditorChange}
      options={{
        wordWrap: "on",
        minimap: {
          enabled: false,
        },
        padding: {
          top: 5,
        },
      }}
    />
  );
};

export default InputEditor;
