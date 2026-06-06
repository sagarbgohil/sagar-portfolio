import Image from "next/image";
import React from "react";
import { siteData } from "@/lib/constants";

const Photo = () => {
  return (
    <div className="relative flex h-[160px] w-[160px] items-center justify-center md:h-[200px] md:w-[200px] lg:h-[298px] lg:w-[298px]">
      <Image
        src={siteData.cloudfront.photoUrl}
        alt="Sagar Gohil"
        priority
        fill
        quality={75}
        sizes="(max-width: 767px) 160px, (max-width: 1023px) 200px, 298px"
        className="object-contain"
      />

      <svg
        className="pointer-events-none absolute top-0 left-0"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="253"
          cy="253"
          r="250"
          stroke="#66fef1"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="photo-ring-circle"
        />
      </svg>
    </div>
  );
};

export default Photo;
