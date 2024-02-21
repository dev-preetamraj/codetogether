'use client';

import { Editor, Monaco } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { useTheme } from "next-themes";
import React, { useRef } from "react";

const OutputEditor = () => {
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
    // console.log(value);
  }

  return (
    <Editor
      className="border rounded-md"
      height="90%"
      width="100%"
      theme={theme === "light" ? "light" : "vs-dark"}
      defaultLanguage='txt'
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

export default OutputEditor;
