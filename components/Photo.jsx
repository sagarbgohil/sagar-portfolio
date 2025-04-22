"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/lib/constants";

const Photo = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]">
        <Image
          src={siteData.cloudfront.photoUrl}
          alt="Sagar Gohil"
          priority
          fill
          quality={75}
          sizes="(max-width: 768px) 298px, 498px"
          className="object-contain"
        />
      </div>

      {/* Decorative SVG animation */}
      <motion.svg
        className="absolute top-0 left-0 w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] pointer-events-none"
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
