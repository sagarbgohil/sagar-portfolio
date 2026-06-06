import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="relative h-[70px] w-[70px]">
      <Link href="/">
        <h1 className="hidden">
          Sagar Gohil | Software Engineer and Tech Enthusiast
        </h1>
        {/* Light theme logo */}
        <Image
          src="/assets/logo-dark.png"
          alt="Sagar Gohil Logo"
          width={70}
          height={70}
          sizes="70px"
          priority
          className="block h-full w-full object-contain dark:hidden"
        />

        {/* Dark theme logo */}
        <Image
          src="/assets/logo.png"
          alt="Sagar Gohil Logo"
          width={70}
          height={70}
          sizes="70px"
          priority
          className="hidden h-full w-full object-contain dark:block"
        />
      </Link>
    </div>
  );
};

export default Logo;
