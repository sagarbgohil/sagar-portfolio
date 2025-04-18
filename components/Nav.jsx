"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About me", href: "/about-me" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
];

const Nav = () => {
  const pathName = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`${
            pathName === link.href && "text-accent border-b-2 border-accent"
          } capitalize font-medium hove:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
