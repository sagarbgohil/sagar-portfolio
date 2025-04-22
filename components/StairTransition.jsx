"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathName = usePathname();

  return (
    <>
      <AnimatePresence>
        <div key={pathName}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>

          <motion.div
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
            initial={{
              y: "100%",
              opacity: 1,
            }}
            animate={{
              y: 0,
              opacity: 0,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            layout={false}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
