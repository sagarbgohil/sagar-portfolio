import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <h1 className="hidden">
          Sagar Gohil | Software Engineer and Tech Enthusiast
        </h1>
        <h2 className="h1 text-4xl font-semibold">
          SG<span className="text-accent">.</span>
        </h2>
      </Link>
    </div>
  );
};

export default Logo;
