"use client";

import { useEffect } from "react";

function getHeaderOffset() {
  const header = document.querySelector("header");
  if (!header) return 0;
  const rect = header.getBoundingClientRect();
  return Math.ceil(rect.height);
}

function scrollToHash(hash) {
  if (!hash) return;

  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  if (!id) return;

  const el = document.getElementById(id);
  if (!el) return;

  const prefersReducedMotion =
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

  const top =
    window.scrollY + el.getBoundingClientRect().top - getHeaderOffset() - 12; // small breathing space

  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}

const ScrollToHash = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Handle hard refresh with #hash (after hydration)
    const initialHash = window.location.hash;
    if (initialHash) {
      // Let layout paint first (avoids jank)
      requestAnimationFrame(() => {
        scrollToHash(initialHash);
      });
    }

    const onHashChange = () => scrollToHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
};

export default ScrollToHash;
