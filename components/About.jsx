import { about } from "@/lib/constants";

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-14">
      {/* Section Header */}
      <div className="mb-8 flex flex-col gap-3 text-center md:text-left">
        <div className="inline-flex items-center justify-center md:justify-start">
          <span className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            #About
          </span>
        </div>
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            A bit about me
          </h2>
          <p className="mt-2 max-w-2xl text-sm sm:text-base text-muted-foreground">
            I&apos;m a backend-leaning full-stack developer who enjoys turning
            product ideas into reliable, production-ready systems, from data
            models and APIs to React and Next.js frontends.
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        {/* Narrative */}
        <div className="rounded-2xl border border-border/80 bg-card/70 p-6 text-sm sm:text-base text-muted-foreground shadow-sm leading-relaxed">
          {about.description}
        </div>

        {/* Quick facts */}
        <div className="rounded-2xl border border-border/80 bg-card/70 p-6 shadow-sm">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Quick facts
          </h3>
          <dl className="space-y-3 text-sm">
            {about.items.map((item) => (
              <div
                key={item.name}
                className="flex items-baseline justify-between gap-4 border-b border-border/40 pb-2 last:border-b-0 last:pb-0"
              >
                <dt className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {item.name}
                </dt>
                <dd className="text-right text-foreground/90">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;

