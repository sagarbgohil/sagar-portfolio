"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const settle = (el) => el.classList.add("done");
    const reveal = (el) => {
      el.classList.add("in");
      el.addEventListener("animationend", () => settle(el), { once: true });
      setTimeout(() => settle(el), 1000);
    };
    const inView = (el) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 0.92 && r.bottom > 0;
    };
    const sweep = () => {
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
        if (inView(el)) reveal(el);
      });
    };

    sweep();

    let io;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              reveal(en.target);
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
      );
      document
        .querySelectorAll(".reveal:not(.in)")
        .forEach((el) => io.observe(el));
    }

    window.addEventListener("scroll", sweep, { passive: true });
    window.addEventListener("resize", sweep, { passive: true });
    const t1 = setTimeout(sweep, 200);
    const t2 = setTimeout(sweep, 600);

    return () => {
      io?.disconnect();
      window.removeEventListener("scroll", sweep);
      window.removeEventListener("resize", sweep);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return null;
}
