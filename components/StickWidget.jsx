"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const StickyWidget = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="https://www.buymeacoffee.com/sagargohil"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Image
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          width={160}
          height={50}
          className="rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </Link>
    </div>
  );
};

export default StickyWidget;
