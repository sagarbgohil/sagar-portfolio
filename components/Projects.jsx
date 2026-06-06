"use client";

import { useState } from "react";
import { PROJECTS, PROJECT_FILTERS as FILTERS } from "@/lib/constants";

function PlusIcon() {
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
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function ProjectRow({ p, open, onToggle }) {
  return (
    <div className={`proj-row ${open ? "open" : ""}`} onClick={onToggle}>
      <div className="proj-main">
        <span className="proj-idx">{p.index}</span>
        <div>
          <div className="proj-name">{p.title}</div>
          <div className="proj-meta-inline">
            <span>{p.year}</span>
            <span>·</span>
            <span>{p.stack.slice(0, 3).join(" / ")}</span>
          </div>
        </div>
        <span className="proj-toggle">
          <PlusIcon />
        </span>
      </div>
      <div className="proj-detail">
        <div className="proj-detail-inner">
          <div className="proj-detail-pad">
            <p className="proj-desc">{p.description}</p>
            <div className="proj-side">
              <div className="proj-stack">
                {p.stack.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              {p.link ? (
                <a
                  className="proj-link"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  visit live site <ArrowUpRightIcon />
                </a>
              ) : (
                <span className="proj-link disabled">
                  private / client work
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [openIdx, setOpenIdx] = useState("01");
  const [filter, setFilter] = useState("all");

  const list = PROJECTS.filter(
    (p) => filter === "all" || p.stack.includes(filter)
  );

  return (
    <section className="section-pad" id="projects">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="kicker reveal">$ ls ~/projects</div>
            <h2 className="section-title reveal" style={{ "--delay": "60ms" }}>
              Full-stack & backend-heavy projects
            </h2>
          </div>
          <p className="section-sub reveal" style={{ "--delay": "100ms" }}>
            A selection of products where I've designed APIs, data models, and
            infrastructure, and often built or integrated React / Next.js
            frontends across domains like sports, healthcare, IoT, and
            logistics.
          </p>
        </div>

        <div className="proj-toolbar reveal">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-chip ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="proj-list reveal">
          {list.map((p) => (
            <ProjectRow
              key={p.index}
              p={p}
              open={openIdx === p.index}
              onToggle={() =>
                setOpenIdx((o) => (o === p.index ? null : p.index))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
