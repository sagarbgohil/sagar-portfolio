# sagargohil.dev

Personal portfolio site for Sagar Gohil — backend-leaning full-stack engineer.

**Live:** [sagargohil.dev](https://www.sagargohil.dev)

## Stack

- **Next.js 15** — App Router
- **Tailwind CSS v4** — class-based dark mode (`html.dark`)
- **Fonts** — Space Grotesk · Hanken Grotesk · JetBrains Mono (via `next/font/google`)

## Getting Started

```bash
git clone https://github.com/sagarbgohil/sagar-portfolio.git
cd sagar-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.jsx        # root layout — fonts, dark class, RevealObserver
  page.jsx          # page composition only
  globals.css       # full design system (CSS vars + all component classes)
components/         # UI components (server by default, "use client" where needed)
lib/
  constants.js      # all site data — single source of truth
  utils.js          # cn() helper only
public/             # static assets
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run format` | Format with Prettier |
| `npm run format:check` | Check formatting |

## Conventions

See [CLAUDE.md](CLAUDE.md) for full coding and data conventions.

## Contact

[connect@sagargohil.dev](mailto:connect@sagargohil.dev)
