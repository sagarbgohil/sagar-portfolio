import { skills } from "@/lib/constants";

const Skills = () => {
  const languageAndCore = skills.items.filter((skill) =>
    ["JavaScript", "TypeScript", "Python", "Go", "Java"].includes(skill.name),
  );
  const backendAndInfra = skills.items.filter((skill) =>
    [
      "Node.js",
      "NestJS",
      "Express.js",
      "AWS",
      "Docker",
      "Kubernetes",
      "Redis",
      "Kafka",
      "Socket.io",
    ].includes(skill.name),
  );
  const databasesAndApis = skills.items.filter((skill) =>
    [
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "TypeORM",
      "GraphQL",
      "RESTful APIs",
      "Swagger",
    ].includes(skill.name),
  );

  const frontendAndUi = skills.items.filter((skill) =>
    ["React.js", "Next.js", "HTML5", "CSS", "Bootstrap", "MUI"].includes(
      skill.name,
    ),
  );

  const groups = [
    { title: "Languages & Core", items: languageAndCore },
    { title: "Backend & Infrastructure", items: backendAndInfra },
    { title: "Databases & APIs", items: databasesAndApis },
    { title: "Frontend & UI", items: frontendAndUi },
  ];

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-14">
      {/* Section Header */}
      <div className="mb-8 flex flex-col gap-3 text-center md:text-left">
        <div className="inline-flex items-center justify-center md:justify-start">
          <span className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            #Skills
          </span>
        </div>
      </div>

      {/* Skills Groups */}
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {groups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-border/80 bg-card/70 p-5 shadow-sm"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {group.title}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {group.items.map((skill, index) => (
                <div
                  key={`${group.title}-${index}`}
                  className="flex flex-col items-center justify-center rounded-xl border border-border/60 bg-background/40 px-3 py-3 text-center text-sm transition-all duration-300 hover:border-accent/60 hover:bg-accent/5"
                >
                  <div className="mb-1 text-accent text-2xl">{skill.icon}</div>
                  <p className="font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
