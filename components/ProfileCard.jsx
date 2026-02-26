import Link from "next/link";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";

const ProfileCard = () => {
  return (
    <section
      id="top"
      className="mx-auto max-w-6xl px-4 pt-10 pb-4 sm:pt-14 sm:pb-6"
    >
      <div className="grid items-center gap-10 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        {/* Hero copy */}
        <div className="order-2 space-y-6 text-center xl:order-1 xl:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Backend-Focused Full-Stack Engineer
          </div>

          <div className="space-y-3">
            <h1 className="h2">
              Building reliable backends
              <br className="hidden sm:block" /> and full-stack web apps.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto xl:mx-0">
              I design and ship scalable backend systems and full-stack
              applications using Node.js, NestJS, PostgreSQL, MongoDB, AWS, and
              modern React / Next.js frontends.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row xl:items-start xl:justify-start sm:gap-5">
            <Link
              href="#projects"
              className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-primary shadow-lg shadow-accent/30 transition-transform hover:-translate-y-0.5 hover:shadow-xl"
            >
              View Projects
            </Link>
            <Link
              href="#hire-us"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border px-6 text-sm font-medium text-foreground/80 transition-colors hover:border-accent hover:text-accent"
            >
              Let&apos;s work together
            </Link>
          </div>

          <div className="pt-2 flex items-center justify-center xl:justify-start gap-4">
            <Socials
              containerStyles="flex flex-wrap justify-center gap-4 sm:gap-5"
              iconStyles="w-9 h-9 border border-accent/60 rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-colors duration-300"
            />
          </div>
        </div>

        {/* Hero visual */}
        <div className="order-1 flex justify-center xl:order-2">
          <div className="relative inline-flex items-center justify-center rounded-2xl border border-accent/20 bg-gradient-to-b from-background/60 to-background/20 p-4 shadow-[0_0_60px_rgba(102,254,241,0.12)]">
            <Photo />
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="mt-4 sm:mt-6">
        <Stats />
      </div>
    </section>
  );
};

export default ProfileCard;
