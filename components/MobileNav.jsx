"use client";

import { usePathname } from "next/navigation";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import Logo from "./Logo";
import { links } from "@/lib/constants";

const MobileNav = () => {
  const pathName = usePathname();

  const navLinks = [
    ...links,
    {
      name: "Contact me",
      href: "/contact",
    },
  ];

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <div aria-label="Menu">
          <CiMenuFries className="text-[32px] text-accent" />
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4">
        <SheetHeader className="hidden">
          <SheetTitle>Sagar Gohil</SheetTitle>
        </SheetHeader>

        <div className="mt-32 mb-8 text-center text-2xl">
          <Logo />
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className={`${
                  link.href === pathName &&
                  "text-accent border-b-2 border-accent"
                }
                  text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
