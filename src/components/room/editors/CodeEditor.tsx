"use client";

import { RootState } from "@/features/store";
import Editor, { Monaco, useMonaco } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const CodeEditor = () => {
  const language = useSelector((state: RootState) => state.editor.language);

  const { theme } = useTheme();
  const editorRef = useRef<any>(null);
  const monaco = useMonaco();

  useEffect(() => {
    if (editorRef.current && monaco) {
      const editor = editorRef.current;

      const model = editor.getModel();
      if (model) {
        monaco.editor.setModelLanguage(model, language);
      }
    }
  }, [monaco, language]);

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
      height="98%"
      width="100%"
      theme={theme === "light" ? "light" : "vs-dark"}
      defaultLanguage={language}
      onMount={handleEditorDidMount}
      onChange={handleEditorChange}
      options={{
        wordWrap: "on",
        minimap: {
          enabled: false,
        },
        padding: {
          top: 5
        }
      }}
    />
  );
};

export default CodeEditor;
