"use client";

import PageSpinner from "@/components/PageSpinner";
import { login } from "@/features/authSlice";
import { AppDispatch } from "@/features/store";
import { baseQuery } from "@/services";
import { fetchUser } from "@/services/fetchUser";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const GithubCallbackPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const params = useSearchParams();
  const code = params.get("code");

  useEffect(() => {
    const fetchToServer = async () => {
      try {
        const res = await baseQuery.post("/auth/login", { code });
        const tokens = res.data.data;
        localStorage.access_token = tokens.access_token;
        localStorage.refresh_token = tokens.refresh_token;

        try {
          const user = await fetchUser(localStorage.access_token);
          dispatch(login(user));
        } catch (err) {
          console.log("User fetching", err);
        }

        router.push("/");
      } catch (err) {
        console.log(err);
      }
    };

    fetchToServer();
  }, [code]);

  return (
    <div className="flex w-full h-screen items-center justify-center">
      <PageSpinner />
    </div>
  );
};

export default GithubCallbackPage;
