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
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4">
        <SheetHeader className="hidden">
          <SheetTitle>Sagar Gohil</SheetTitle>
        </SheetHeader>

        <div className="mt-32 mb-40 text-center text-2xl">
          <Logo />
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <SheetClose asChild>
              <Link
                href={link.href}
                key={index}
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
