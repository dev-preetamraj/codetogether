import axios from "axios";

export const judgeQuery = axios.create({
  baseURL: process.env.NEXT_PUBLIC_JUDGE_URI,
  headers: {
    "content-type": "application/json",
    "Content-Type": "application/json",
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
  },
});

export const baseQuery = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URI,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
