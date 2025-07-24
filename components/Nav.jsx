"use client";

import { links } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          scroll={true}
          className={`capitalize font-medium hover:text-accent transition-all ${
            pathname === "/" &&
            typeof window !== "undefined" &&
            window.location.hash === link.href
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
