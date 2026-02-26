"use client";

import { links } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Nav = () => {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateHash = () => {
      setActiveHash(window.location.hash || "");
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  return (
    <nav className="flex gap-6">
      {links
        .filter((link) => link.href !== "#hire-us")
        .map((link) => (
          <Link
            key={link.href}
            href={link.href}
            scroll={true}
            className={`capitalize font-medium hover:text-accent transition-all ${
              pathname === "/" && activeHash === link.href
                ? "text-accent border-b-2 border-accent"
                : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
    </nav>
  );
};

export default Nav;
