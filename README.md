# Matthias Hammelehle — Angular Portfolio

Modern, job-focused developer portfolio built with **Angular (Standalone)**, **Signals-first patterns**, and a small **UI Design System** (Card/Button/Badge/Section/Icon).  
Includes a filterable projects overview, project detail case studies, and SEO/OpenGraph meta tags.

Live: https://matthias-hammelehle.dev

---

## Features

- **Home**: Hero (personal), Highlights, Featured Projects, Skills Cards, Contact
- **Projects**: filter + search, data-driven from a single source
- **Project Details**: `/projects/:slug` with case study sections + screenshots fallback
- **SEO**: route-based titles + meta descriptions
- **OpenGraph/Twitter**: social preview tags + dynamic OG for project detail pages
- **Legal Pages**: Impressum + Datenschutz (DE)
- **Clean UI**: SCSS tokens + reusable UI components
- **CI**: format, lint, build checks on PRs

## Tech Stack

- Angular (Standalone)
- TypeScript
- SCSS
- ESLint + Prettier
- Husky + Commitlint (Conventional Commits)
- GitHub Actions (CI)

## Getting Started

### Requirements

- Node.js 20+
- npm 10+

### Install

```bash
npm ci
```

### Run locally

```bash
npm start
```

### Lint

```bash
npm run lint
```

### Format

```bash
npm run format
```

## Project Structure:

- src/app/core — layout (AppShell, header/footer), services (SEO), models, utilities
- src/app/shared — reusable UI components (ui-card, ui-button, ui-badge, ui-section, ui-icon)
- src/app/features — pages/sections (home, projects, legal)
- src/app/features/projects/data — PROJECTS data (single source of truth)
- src/assets — images (projects, profile), OpenGraph images

## Content / Data

Projects are maintained in:

- src/app/features/projects/data/projects.data.ts
  This keeps the UI clean and allows adding/updating projects without touching multiple components.

## SEO / OpenGraph

SEO metadata is handled route-based:

- Titles via TitleStrategy
- Descriptions & OpenGraph/Twitter meta tags via SeoService
- Project details (/projects/:slug) generate OG tags dynamically from project data

## Git Workflow:

- Branching: main (release), develop (integration), feat/_, fix/_, chore/\*
- Conventional Commits enforced via commitlint
- CI checks required on PRs (format, lint, build)
- Keep PRs small and focused (one feature per PR)

## Contact

- Email: mahammelehle@outlook.de
- Website: https://matthias-hammelehle.dev
