"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import NavLogo from "./NavLogo";
import { CreateRoomDialog } from "./CreateRoomDialog";
import useAuth from "@/hooks/useAuth";
import LogoutButton from "./LogoutButton";
import ProfileMenu from "./ProfileMenu";

const Navbar = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <nav className="flex items-center justify-between px-10 py-4 sticky top-0 backdrop-blur-md shadow-sm">
      <div className="flex items-center space-x-10">
        <NavLogo />
        <ul className="flex items-center space-x-4 text-lg">
          <li>
            <Link href="/">Home</Link>
          </li>
          {isAuthenticated ? (
            <li>
              <CreateRoomDialog />
            </li>
          ) : null}
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        {isAuthenticated && (
          <>
            <div className="flex items-center space-x-2">
              <p>Welcome,</p>
              <span className="text-primary font-semibold text-xl">
                {user?.first_name}
              </span>
            </div>
            <ProfileMenu />
          </>
        )}
        {!isAuthenticated && (
          <Link href="/auth/login">
            <Button>Login/Register</Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
