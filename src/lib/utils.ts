import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const languageCode = {
  cpp: 54,
  java: 91,
  python: 92,
  javascript: 93,
  typescript: 94,
};

export const getSubmissionStatus = (statusCode: any) => {
  switch (statusCode) {
    case 1:
      return "In Queue";
    case 2:
      return "Processing";
    case 3:
      return "Accepted";
    case 4:
      return "Wrong Answer";
    case 5:
      return "Time Limit Exceeded";
    case 6:
      return "Compilation Error";
    case 7:
      return "Runtime Error (SIGSEGV)";
    case 8:
      return "Runtime Error (SIGXFSZ)";
    case 9:
      return "Runtime Error (SIGFPE)";
    case 10:
      return "Runtime Error (SIGABRT)";
    case 11:
      return "Runtime Error (NZEC)";
    case 12:
      return "Runtime Error (Other)";
    case 13:
      return "Internal Error";
    case 14:
      return "Exec Format Error";
    default:
      return "Invalid status code";
  }
};
