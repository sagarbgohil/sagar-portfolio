import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <header className="p-8 py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href="/contact">
              <Button> Contact me</Button>
            </Link>
          </div>

          {/* Mobile Nav */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
