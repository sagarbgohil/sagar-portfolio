import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { projects } from "@/lib/constants";

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-14">
      {/* Section Header */}
      <div className="mb-10 flex flex-col gap-3 text-center md:text-left">
        <div className="inline-flex items-center justify-center md:justify-start">
          <span className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            #Projects
          </span>
        </div>
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Full-stack & backend-heavy projects
          </h2>
          <p className="mt-2 max-w-2xl text-sm sm:text-base text-muted-foreground">
            A selection of products where I&apos;ve designed APIs, data models,
            and infrastructure, and often built or integrated React / Next.js
            frontends across domains like sports, healthcare, IoT, and
            logistics.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.items.map((project, index) => (
          <div
            key={index}
            className="group relative flex h-full flex-col rounded-2xl border border-border/80 bg-card/70 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {String(project.index).padStart(2, "0")}
                </p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} project`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-accent text-accent transition-all duration-300 hover:bg-accent hover:text-primary group-hover:-rotate-45"
                >
                  <BsArrowRight className="text-xl" />
                </Link>
              )}
            </div>

            <p className="mb-4 text-sm text-muted-foreground">
              {project.description}
            </p>

            {project.techStack?.length > 0 && (
              <div className="mb-2 flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-medium text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* <div className="mt-auto pt-3 text-xs text-muted-foreground/80">
              {project.link
                ? "View live product or client site."
                : "Internal or client project — details available on request."}
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
