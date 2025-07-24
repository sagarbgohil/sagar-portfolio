"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/lib/constants";

const Photo = () => {
  return (
    <div
      className="
          relative flex items-center justify-center 
          w-[160px] h-[160px]        /* Default: very small */
          md:w-[200px] md:h-[200px]  /* Medium size on tablets */
          lg:w-[298px] lg:h-[298px]  /* Large size on desktops */
        "
    >
      <Image
        src={siteData.cloudfront.photoUrl}
        alt="Sagar Gohil"
        priority
        fill
        quality={75}
        sizes="(max-width: 760px) 100vw, 298px"
        className="object-contain"
      />

      {/* Decorative SVG animation */}
      <motion.svg
        className="absolute top-0 left-0 pointer-events-none"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#66fef1"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
