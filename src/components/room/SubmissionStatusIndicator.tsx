"use client";

import { RootState } from "@/features/store";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";

const SubmissionStatusIndicator = () => {
  const submissionStatus = useSelector(
    (state: RootState) => state.editor.submissionStatus
  );

	if(!submissionStatus) return null;
  return <p className={cn('text-destructive', {
		"text-green-600": submissionStatus.id === 3
	})}>{submissionStatus.status}</p>
};

export default SubmissionStatusIndicator;
