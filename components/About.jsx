import { ABOUT } from "@/lib/constants";

export default function About() {
  return (
    <section className="section-pad" id="about">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="kicker reveal">$ whoami</div>
            <h2 className="section-title reveal" style={{ "--delay": "60ms" }}>
              A bit about me
            </h2>
          </div>
        </div>

        <div className="about-grid">
          <div>
            <p className="about-lead reveal">
              {ABOUT.leadStart} <span className="amber">{ABOUT.leadAmber}</span>
            </p>
            <p className="about-body reveal" style={{ "--delay": "80ms" }}>
              {ABOUT.body}
            </p>
          </div>

          <div className="whoami reveal" style={{ "--delay": "120ms" }}>
            {ABOUT.meta.map((m) => (
              <div className="whoami-row" key={m.k}>
                <span className="k">{m.k}</span>
                <span className={`v ${m.amber ? "amber" : ""}`}>{m.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
