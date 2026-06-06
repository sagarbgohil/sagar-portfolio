# CLAUDE.md — sagargohil.dev conventions

## Stack

- **Next.js 15** (App Router, `app/` directory)
- **Tailwind CSS v4** — class-based dark mode via `html.dark`; never use `data-theme`
- **Fonts**: Space Grotesk (display), Hanken Grotesk (body), JetBrains Mono (mono) — loaded via `next/font/google` in `app/layout.jsx`

## Folder structure

```
app/
  layout.jsx        # root layout — font vars, dark class, RevealObserver
  page.jsx          # page composition only, no logic
  globals.css       # entire design system (CSS vars, all component classes)
components/
  Header.jsx        # nav + theme toggle — "use client"
  ProfileCard.jsx   # hero section + Stats — server component
  Stats.jsx         # count-up stats — "use client"
  Projects.jsx      # accordion project list — "use client"
  Skills.jsx        # skill groups — server component
  About.jsx         # whoami panel — server component
  Journey.jsx       # experience/education tabs — "use client"
  HireUs.jsx        # hire CTA — server component
  Footer.jsx        # footer links — server component
  RevealObserver.jsx # scroll-reveal IntersectionObserver — "use client"
  StickWidget.jsx   # status pill (commented out in layout) — server component
lib/
  constants.js      # ALL site data — single source of truth (see below)
  utils.js          # cn() helper only
public/             # static assets
```

## Data: lib/constants.js

**All site data lives here. Components must not have inline data arrays.**

Exports:

- `YEARS_EXP` — dynamic years since 2023 (`new Date().getFullYear() - 2023`)
- `siteData` — name, email, resumeLink, baseUrl, cloudfront URLs
- `NAV` — navigation links
- `SOCIALS` — social/email links
- `STATS` — stats bar numbers and labels
- `PROJECTS` — full project list with `{ index, title, year, description, link, stack }`
- `PROJECT_FILTERS` — filter chip values for the projects toolbar
- `SKILL_GROUPS` — skill groups with `{ name, items[] }`
- `ABOUT` — `{ leadStart, leadAmber, body, meta[] }` for the About section
- `EXPERIENCE` — timeline entries with `{ when, title, where, desc }`
- `EDUCATION` — timeline entries with `{ when, title, where, desc }`

## Utilities: lib/utils.js

Only `cn(...inputs)` — Tailwind class merge helper (`clsx` + `tailwind-merge`). No other utilities.

## Component conventions

- **Server component by default** — add `"use client"` only when the component uses hooks or browser APIs
- **No inline data** — import from `lib/constants.js`
- **CSS classes** — defined in `app/globals.css`, not Tailwind utility soup in JSX
- **Dark mode** — `html.dark` class toggled by Header; stored in `localStorage("amber-theme")`; default is dark
- **Reveal animations** — add `className="reveal"` and optional `style={{ "--delay": "Xms" }}`; `RevealObserver` handles the IntersectionObserver

## CSS / styling

- All component styles live in `app/globals.css` — prefer adding a new class there over inline styles
- Color tokens: `var(--amber)`, `var(--bg)`, `var(--fg)`, `var(--muted)`, `var(--border)`, `var(--card-bg)`, `var(--card-border)`
- Tailwind utilities are mapped to CSS vars via `@theme inline` — use `text-amber`, `bg-card`, etc. where needed

## Formatting

- **Prettier** config in `.prettierrc` with `prettier-plugin-tailwindcss`
- Run: `npm run format` to format, `npm run format:check` to check
- Use `{/* prettier-ignore */}` before JSX lines where whitespace is meaningful (e.g. brand text in Header)

## Dynamic values

- Years of experience: always use `YEARS_EXP` from `lib/constants.js` — never hardcode a number
- Current year in footer: `new Date().getFullYear()` inline is fine (it's not site data)
