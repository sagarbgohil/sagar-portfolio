import { experience, education } from "@/lib/constants";

const Journey = () => {
  return (
    <section id="journey" className="max-w-6xl mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-3xl font-bold text-white">#Journey So Far</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Education Cards */}
        <div className="grid grid-cols-1 gap-8">
          {education.items.map((item, index) => (
            <div
              key={index}
              className="relative bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="absolute -top-5 -left-5 bg-accent text-primary p-3 rounded-full shadow-md">
                {item.icon}
              </div>

              {/* Time Period */}
              <div className="text-sm text-muted-foreground mb-1">
                {item.top}
              </div>

              {/* Degree Title */}
              <h3 className="text-xl font-semibold text-white mb-1">
                {item.title}
              </h3>

              {/* Institute */}
              <div className="text-sm italic text-muted-foreground mb-2">
                {item.bottom}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Experience Timeline */}
        <div className="relative pl-6 flex items-center">
          {/* Vertical Line */}
          <div className="absolute top-0 left-5.5 w-1 bg-accent h-full" />

          <div className="space-y-10">
            {experience.items.map((item, index) => (
              <div key={index} className="relative group">
                {/* Dot */}
                <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-background border-4 border-accent shadow-md transform -translate-x-1/2 transition-transform duration-200 group-hover:scale-125" />

                {/* Content */}
                <div className="pl-10">
                  <div className="mb-1 text-sm text-muted-foreground">
                    {item.top}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <div className="text-sm italic text-muted-foreground mb-2">
                    {item.bottom}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
