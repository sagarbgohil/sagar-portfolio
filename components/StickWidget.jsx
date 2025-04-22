"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { siteData } from "@/lib/constants";

const StickyWidget = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 w-[50px] h-[50px]">
      <Link
        href={siteData.buyMeCoffeeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
      >
        <Image
          src="/assets/bmc-logo.svg"
          alt="Buy Me A Coffee"
          width={50}
          height={50}
          className="rounded-md shadow-lg p-2 bg-white hover:scale-105 transition-transform duration-300 object-cover"
          priority
        />
      </Link>
    </div>
  );
};

export default StickyWidget;
