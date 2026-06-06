import Stats from "@/components/Stats";
import { siteData, SOCIALS } from "@/lib/constants";
import Image from "next/image";

function HeroTerminal() {
  return (
    <div className="terminal reveal" style={{ "--delay": "120ms" }}>
      <div className="terminal-bar">
        <span className="tdot r" />
        <span className="tdot y" />
        <span className="tdot g" />
        <span className="tname">sagar@gohil — zsh</span>
      </div>
      <div className="terminal-body">
        <div className="t-line">
          <span className="t-prompt">➜</span> <span className="t-path">~</span>{" "}
          whoami --verbose
        </div>
        <div className="t-line">
          <span className="t-key">role</span> <span className="t-val">= </span>
          <span className="t-str">&quot;backend-leaning full-stack&quot;</span>
        </div>
        <div className="t-line">
          <span className="t-key">stack</span> <span className="t-val">= </span>
          <span className="t-str">[nodejs, nestjs, nextjs, reactjs]</span>
        </div>
        <div className="t-line">
          <span className="t-key">cloud</span> <span className="t-val">= </span>
          <span className="t-str">[aws, gcp, docker, kafka]</span>
        </div>
        <div className="t-line">
          <span className="t-key">based</span> <span className="t-val">= </span>
          <span className="t-str">&quot;Gujarat, India&quot;</span>
        </div>
        <div className="t-line">
          <span className="t-prompt">➜</span> <span className="cursor" />
        </div>
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="arrow"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function ProfileCard() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        {/* Copy */}
        <div className="hero-copy">
          <div className="kicker reveal">
            {"// Backend-leaning Full-Stack Engineer"}
          </div>
          <h1 className="reveal" style={{ "--delay": "60ms" }}>
            Reliable <span className="accent">backends</span>,<br />
            built to <span className="stroke">last</span>.
          </h1>
          <p className="hero-sub reveal" style={{ "--delay": "140ms" }}>
            Hi, I&apos;m Sagar. I design and ship scalable backend systems and
            full-stack web apps with Node.js, NestJS, PostgreSQL and AWS. I care
            about clean architecture, clear APIs, and software that holds up
            under real load.
          </p>
          <div className="hero-cta reveal" style={{ "--delay": "200ms" }}>
            <a href="#projects" className="btn btn-primary">
              view the work <ArrowIcon />
            </a>
            <a href="#hire" className="btn btn-ghost">
              let&apos;s talk
            </a>
          </div>
          <div className="hero-socials reveal" style={{ "--delay": "260ms" }}>
            <span className="lbl">find me →</span>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                className="tag"
                href={s.href}
                target="_blank"
                rel="noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="hero-visual">
          <HeroTerminal />
          <div
            className="photo-frame reveal"
            style={{ "--delay": "220ms", height: "320px" }}
          >
            <Image
              src={siteData.cloudfront.photoUrl}
              alt="Sagar Gohil"
              fill
              style={{ objectFit: "contain", objectPosition: "center bottom" }}
              priority
            />
            <span className="photo-cap">~/sagar.png</span>
          </div>
        </div>
      </div>

      <div className="wrap">
        <Stats />
      </div>
    </section>
  );
}
