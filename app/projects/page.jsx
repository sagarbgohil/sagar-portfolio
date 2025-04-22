"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

import { projects } from "@/lib/constants";

const Projects = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              // delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          layout={false}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {project.index}
                </div>
                {project.link && (
                  <Link
                    href={project.link}
                    className="w-[70px] h-[70px] rounded-full group-hover:text-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-3xl" />
                  </Link>
                )}
              </div>
              <h2 className="h3">{project.title}</h2>
              <p className="text-white/80">{project.description}</p>
              <div className="border-b border-white/20 w-full xl:w-1/2" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
