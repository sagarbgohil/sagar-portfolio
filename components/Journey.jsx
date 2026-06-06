"use client";

import { useState } from "react";
import { EXPERIENCE, EDUCATION } from "@/lib/constants";

export default function Journey() {
  const [tab, setTab] = useState("experience");
  const items = tab === "experience" ? EXPERIENCE : EDUCATION;

  return (
    <section className="section-pad bg-2" id="journey">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="kicker reveal">$ git log --oneline</div>
            <h2 className="section-title reveal" style={{ "--delay": "60ms" }}>
              The journey
            </h2>
          </div>
          <p className="section-sub reveal" style={{ "--delay": "100ms" }}>
            How I got here, the roles that shaped how I build, and the schooling
            underneath it.
          </p>
        </div>

        <div className="journey-tabs reveal">
          <button
            className={`jtab ${tab === "experience" ? "active" : ""}`}
            onClick={() => setTab("experience")}
          >
            experience
          </button>
          <button
            className={`jtab ${tab === "education" ? "active" : ""}`}
            onClick={() => setTab("education")}
          >
            education
          </button>
        </div>

        <div className="timeline" key={tab}>
          {items.map((it, i) => (
            <div
              className="tl-item reveal"
              key={it.when}
              style={{ "--delay": `${i * 70}ms` }}
            >
              <div className="tl-when">{it.when}</div>
              <div className="tl-title">{it.title}</div>
              <div className="tl-where">{it.where}</div>
              <p className="tl-desc">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
