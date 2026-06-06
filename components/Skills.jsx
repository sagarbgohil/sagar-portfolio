import { SKILL_GROUPS } from "@/lib/constants";

export default function Skills() {
  return (
    <section className="section-pad bg-2" id="skills">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="kicker reveal">$ cat skills.json</div>
            <h2 className="section-title reveal" style={{ "--delay": "60ms" }}>
              The toolkit
            </h2>
          </div>
          <p className="section-sub reveal" style={{ "--delay": "100ms" }}>
            Backend-first, but comfortable across the stack, from API design and
            data modeling to deploy pipelines and the occasional React frontend.
          </p>
        </div>

        <div className="skill-grid">
          {SKILL_GROUPS.map((g, i) => (
            <div
              key={g.name}
              className="skill-group reveal"
              style={{ "--delay": `${i * 60}ms` }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <h4>{g.name}</h4>
                <span className="gcount">
                  {String(g.items.length).padStart(2, "0")}
                </span>
              </div>
              <div className="skill-tags">
                {g.items.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
