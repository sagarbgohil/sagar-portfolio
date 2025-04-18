import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <h1 className="ml-8 text-4xl font-semibold">
          SG<span className="text-accent">.</span>
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
