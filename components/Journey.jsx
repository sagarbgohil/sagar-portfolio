import { experience, education } from "@/lib/constants";

const Journey = () => {
  return (
    <section id="journey" className="mx-auto max-w-6xl px-4 py-14">
      {/* Section Header */}
      <div className="mb-10 flex flex-col gap-3 text-center md:text-left">
        <div className="inline-flex items-center justify-center md:justify-start">
          <span className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            #Journey
          </span>
        </div>
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Journey so far
          </h2>
          <p className="mt-2 max-w-2xl text-sm sm:text-base text-muted-foreground">
            A brief look at my professional experience and education shaping how
            I design and build software.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left: Education Cards */}
        <div className="grid grid-cols-1 gap-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Education
          </h3>
          {education.items.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-border/80 bg-card/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="absolute -top-5 -left-5 rounded-full bg-accent p-3 text-primary shadow-md">
                {item.icon}
              </div>

              {/* Time Period */}
              <div className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {item.top}
              </div>

              {/* Degree Title */}
              <h3 className="mb-1 text-lg font-semibold tracking-tight">
                {item.title}
              </h3>

              {/* Institute */}
              <div className="mb-2 text-sm italic text-muted-foreground">
                {item.bottom}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Experience Timeline */}
        <div className="relative flex items-center pl-6">
          {/* Vertical Line */}
          <div className="absolute left-5.5 top-0 h-full w-1 bg-accent/40" />

          <div className="space-y-10">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground ms-6">
              Experience
            </h3>
            {experience.items.map((item, index) => (
              <div key={index} className="relative group">
                {/* Dot */}
                <div className="absolute left-0 top-1 h-4 w-4 -translate-x-1/2 transform rounded-full border-4 border-accent bg-background shadow-md transition-transform duration-200 group-hover:scale-125" />

                {/* Content */}
                <div className="pl-10">
                  <div className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {item.top}
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <div className="mb-2 text-sm italic text-muted-foreground">
                    {item.bottom}
                  </div>
                  {item.description && (
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  )}
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
