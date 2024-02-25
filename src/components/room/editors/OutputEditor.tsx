"use client";

import { RootState } from "@/features/store";
import { Editor, Monaco } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { useTheme } from "next-themes";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const OutputEditor = () => {
  const { theme } = useTheme();
  const outputText = useSelector((state: RootState) => state.editor.outputText);
  const editorRef = useRef<any>(null);

  function handleEditorDidMount(
    editor: editor.IStandaloneCodeEditor,
    monaco: Monaco
  ) {
    editorRef.current = editor;
  }

  useEffect(() => {
    if (editorRef.current) editorRef.current.setValue(outputText);
  }, [outputText]);

  return (
    <Editor
      className="border rounded-md"
      height="87%"
      width="100%"
      theme={theme === "light" ? "light" : "vs-dark"}
      defaultLanguage="txt"
      onMount={handleEditorDidMount}
      options={{
        wordWrap: "on",
        minimap: {
          enabled: false,
        },
        padding: {
          top: 5,
        },
        readOnly: true,
      }}
    />
  );
};

export default OutputEditor;
