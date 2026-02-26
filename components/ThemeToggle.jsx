"use client";

import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)"
    )?.matches;

    const shouldUseDark = stored
      ? stored === "dark"
      : typeof prefersDark === "boolean"
      ? prefersDark
      : true;

    const root = document.documentElement;
    if (shouldUseDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    setIsDark(shouldUseDark);
  }, []);

  const handleToggle = () => {
    if (typeof window === "undefined") return;

    const nextIsDark = !isDark;
    const root = document.documentElement;

    if (nextIsDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label="Toggle theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/70 text-sm text-muted-foreground shadow-sm backdrop-blur hover:border-accent hover:text-accent transition-colors"
    >
      {isDark ? <BsSun className="h-4 w-4" /> : <BsMoon className="h-4 w-4" />}
    </button>
  );
};

export default ThemeToggle;

