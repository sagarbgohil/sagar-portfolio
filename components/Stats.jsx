"use client";

import { stats } from "@/lib/constants";
import React from "react";

const Stats = () => {
  return (
    <section className="px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-6 text-center xl:text-left">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center xl:items-start"
            >
              <h3 className="text-4xl font-extrabold text-white mb-2">
                {stat.num}
                <span className="text-accent">+</span>
              </h3>
              <p className="text-white/80 text-sm sm:text-base max-w-[140px] leading-snug">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
