"use client";

import { RootState } from "@/features/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useAuth = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const authLoading = useSelector((state: RootState) => state.auth.authLoading);
  const user = useSelector((state: RootState) => state.auth.user);

  return {
    isAuthenticated,
    authLoading,
    user,
  };
};

export default useAuth;
