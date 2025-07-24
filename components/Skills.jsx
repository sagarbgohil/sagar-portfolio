import { skills } from "@/lib/constants";

const Skills = () => {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="mb-6 text-center md:text-left">
        <h2 className="text-3xl font-bold text-white">#{skills.title}</h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
        {skills.items.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl hover:shadow-lg transition-all duration-300 group"
          >
            <div className="text-accent text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            <p className="text-white text-sm text-center font-medium">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
