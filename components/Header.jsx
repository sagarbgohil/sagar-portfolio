import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav + Actions */}
        <div className="hidden items-center gap-6 xl:flex">
          <Nav />
          <ThemeToggle />
          <Link
            href="#hire-us"
            className="inline-flex items-center rounded-full border border-accent bg-transparent px-4 py-2 text-sm font-medium text-accent shadow-sm transition-colors hover:bg-accent hover:text-white"
          >
            Hire Us
          </Link>
        </div>

        {/* Mobile Nav + Theme */}
        <div className="flex items-center gap-3 xl:hidden">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
