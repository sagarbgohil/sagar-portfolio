import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="w-[70px] h-[70px] relative">
      <Link href="/">
        <h1 className="hidden">
          Sagar Gohil | Software Engineer and Tech Enthusiast
        </h1>
        <Image
          src="/assets/logo.png"
          alt="Sagar Gohil Logo"
          width={70}
          height={70}
          priority
          className="h1 object-contain"
        />
        {/* <h2 className="h1 text-4xl font-semibold">
          SG<span className="text-accent">.</span>
        </h2> */}
      </Link>
    </div>
  );
};

export default Logo;
