# Matthias Hammelehle — Angular Portfolio

Modern developer portfolio built with Angular (Standalone, TypeScript, SCSS).  
Live: <DEIN-LIVE-LINK>

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

- src/app/core — layout, services, models
- src/app/shared — reusable UI components
- src/app/features — pages/sections (home, projects, legal)
- src/app/features/projects/data — project data (single source of truth)

## Git Workflow:

- Branching: main (release), develop (integration), feat/_, fix/_, chore/\*
- Conventional Commits enforced via commitlint
- CI checks required on PRs (format, lint, build)
