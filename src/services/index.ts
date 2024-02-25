import axios from "axios";

export const judgeQuery = axios.create({
  baseURL: "https://judge0-ce.p.rapidapi.com",
  headers: {
    "content-type": "application/json",
    "Content-Type": "application/json",
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
  },
});
