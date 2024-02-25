"use client";

import { PlayIcon } from "@radix-ui/react-icons";
import React from "react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/features/store";
import {
  setOutputText,
  setOutputType,
  setSubmissionStatus,
  setSubmitLoading,
} from "@/features/editorSlice";
import { judgeQuery } from "@/services";
import { getSubmissionStatus, languageCode } from "@/lib/utils";

const RunButton = () => {
  const dispatch: AppDispatch = useDispatch();
  const sourceCode = useSelector((state: RootState) => state.editor.sourceCode);
  const inputText = useSelector((state: RootState) => state.editor.inputText);
  const language = useSelector((state: RootState) => state.editor.language);
  const submitLoading = useSelector(
    (state: RootState) => state.editor.submitLoading
  );

  const handleRun = async () => {
    try {
      dispatch(setSubmitLoading(true));

      const body = {
        language_id: languageCode[language ?? "cpp"],
        source_code: btoa(sourceCode),
        stdin: btoa(inputText),
      };

      const submission = await judgeQuery.post(
        "/submissions/?base64_encoded=true&wait=true",
        body
      );
      const token = submission.data.token;

      try {
        const res = await judgeQuery.get(
          `/submissions/${token}?base64_encoded=true&fields=stdout,stderr,status_id,language_id`
        );
        const data = res.data;
        data.stdout = atob(data.stdout);

        dispatch(
          setSubmissionStatus({
            id: data.status_id,
            status: getSubmissionStatus(data.status_id),
          })
        );

        if (data.status_id === 3) dispatch(setOutputType("stdout"));
        else dispatch(setOutputType("stderr"));

        if (data.stdout) dispatch(setOutputText(data.stdout));
        else if (!data.stdout && data.stderr)
          dispatch(setOutputText(data.stderr));
      } catch (err: any) {
        console.log("GET", err);
      }
    } catch (err: any) {
      console.log(err);
    } finally {
      dispatch(setSubmitLoading(false));
    }
  };

  return (
    <Button
      variant="secondary"
      className="flex items-center space-x-2"
      onClick={handleRun}
    >
      <PlayIcon className="h-6 w-6" />
      <p>{submitLoading ? "Submitting..." : "Run"}</p>
    </Button>
  );
};

export default RunButton;
