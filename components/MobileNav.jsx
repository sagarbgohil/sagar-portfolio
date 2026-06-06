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

  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <div aria-label="Menu">
          <CiMenuFries className="text-accent text-[32px]" />
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4">
        <SheetHeader className="hidden">
          <SheetTitle>Sagar Gohil</SheetTitle>
        </SheetHeader>

        <div className="mt-32 mb-8 flex items-center justify-center">
          <Logo />
        </div>

        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className={`${
                  link.href === pathName &&
                  "text-accent border-accent border-b-2"
                } hover:text-accent text-xl capitalize transition-all`}
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
