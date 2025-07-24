import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { projects } from "@/lib/constants";

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-3xl font-bold text-white">#{projects.title}</h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.items.map((project, index) => (
          <div
            key={index}
            className="group relative bg-white/5 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>

              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Project"
                  className="w-11 h-11 rounded-full border border-accent text-accent hover:bg-accent hover:text-primary flex items-center justify-center transition-all duration-300 transform group-hover:-rotate-45"
                >
                  <BsArrowRight className="text-xl" />
                </Link>
              )}
            </div>

            <p className="text-white/80 mb-4">{project.description}</p>

            {project.techStack?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
