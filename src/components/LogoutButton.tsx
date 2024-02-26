"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { AppDispatch } from "@/features/store";
import { useDispatch } from "react-redux";
import { logout } from "@/features/authSlice";

const LogoutButton = () => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    dispatch(logout());
    // router.push("/auth/login");
  };
  return (
    <Button variant="secondary" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
