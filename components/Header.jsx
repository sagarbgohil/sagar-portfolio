import React from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="p-2 text-white top-0 left-0 right-0 w-full z-50 max-w-6xl mx-auto">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
