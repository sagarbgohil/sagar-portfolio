"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/constants";

function useCountUp(target, duration = 1400) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const run = () => {
      if (done.current) return;
      done.current = true;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(eased * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) run();
        });
      },
      { threshold: 0.5 }
    );
    io.observe(node);
    const t = setTimeout(() => {
      if (!done.current) {
        done.current = true;
        setVal(target);
      }
    }, 1600);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, [target, duration]);

  return [val, ref];
}

function StatCell({ num, suffix, label }) {
  const [val, ref] = useCountUp(num);
  return (
    <div className="stat-cell">
      <div className="num" ref={ref}>
        {val}
        <span className="suffix">{suffix}</span>
      </div>
      <div className="label">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <div className="stats-bar reveal">
      {STATS.map((s) => (
        <StatCell key={s.label} {...s} />
      ))}
    </div>
  );
}
