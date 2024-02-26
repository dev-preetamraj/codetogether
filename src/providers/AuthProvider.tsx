"use client";

import PageSpinner from "@/components/PageSpinner";
import { login, logout } from "@/features/authSlice";
import { AppDispatch } from "@/features/store";
import { fetchUser } from "@/services/fetchUser";
import { refreshAccessToken, verifyAccessToken } from "@/services/tokens";
import { PropsWithChildren, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const AuthProvider = ({ children }: PropsWithChildren) => {
  const dispatch: AppDispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const accessToken = localStorage.access_token;
    const refreshToken = localStorage.refresh_token;

    const handleLogout = () => {
      dispatch(logout());
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      setLoading(false);
      return;
    };

    if (!refreshToken) {
      dispatch(logout());
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    }

    const percistAuth = async () => {
      if (!accessToken && refreshToken) {
        const newAccessToken = await refreshAccessToken(refreshToken);
        if (!newAccessToken) handleLogout();

        localStorage.access_token = newAccessToken;
        const user = await fetchUser(newAccessToken);
        dispatch(login(user));
      }

      if (accessToken) {
        const isAccessTokenValid = await verifyAccessToken(accessToken);
        if (!isAccessTokenValid) handleLogout();

        const user = await fetchUser(accessToken);
        dispatch(login(user));
      }

      if (isMounted) {
        setLoading(false);
      }
    };

    percistAuth();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <PageSpinner />
      </div>
    );

  return <div>{children}</div>;
};

export default AuthProvider;
