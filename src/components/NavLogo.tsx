"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavLogo = () => {
  const { theme } = useTheme();
  return (
    <Link href="/">
      {theme === "light" ? (
        <Image
          src="/logo_light.png"
          height={150}
          width={370}
          alt="codeTogether"
          className="object-cover h-10 w-36"
        />
      ) : (
        <Image
          src="/logo_dark.png"
          height={150}
          width={370}
          alt="codeTogether"
          className="object-cover h-10 w-36"
        />
      )}
    </Link>
  );
};

export default NavLogo;
