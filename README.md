# Ideas Tinder

A simple Tinder-like idea discovery app built with Next.js + T3 stack tooling.

Users can swipe through a pre-coded set of startup ideas with:

- Drag and swipe interactions (mouse + touch)
- Like / Dislike actions
- Card stack depth animation (z-direction)
- Restart deck flow when all ideas are consumed

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- tRPC
- Prisma
- better-auth

## Quick Start

1) Install dependencies:

```bash
npm install
```

2) Create your environment file (for example `.env`):

```env
DATABASE_URL="file:./db.sqlite"
BETTER_AUTH_SECRET="replace-with-a-random-secret"
BETTER_AUTH_GITHUB_CLIENT_ID="your-github-client-id"
BETTER_AUTH_GITHUB_CLIENT_SECRET="your-github-client-secret"
```

3) Run the app:

```bash
npm run dev
```

4) Open:

```text
http://localhost:3000
```

## Scripts

- `npm run dev` – Start local dev server
- `npm run build` – Production build
- `npm run start` – Run built app
- `npm run lint` – ESLint
- `npm run typecheck` – TypeScript check
- `npm run check` – Lint + type check
- `npm run db:generate` – Create/apply Prisma migration in dev
- `npm run db:push` – Push Prisma schema to database
- `npm run db:studio` – Open Prisma Studio

## Swipe Deck Location

Main swipe UI lives in:

- `src/app/_components/idea-tinder.tsx`

Home page renders the deck in:

- `src/app/page.tsx`

## Important Environment Note

`src/server/better-auth/config.ts` uses:

- `env.BETTER_AUTH_GITHUB_CLIENT_ID`
- `env.BETTER_AUTH_GITHUB_CLIENT_SECRET`

If type checks fail saying those properties do not exist, ensure the same keys are defined in `src/env.js` under both:

- `server`
- `runtimeEnv`

They are currently commented out in many fresh templates and must be enabled if GitHub auth is configured.

## Current Scope

This project is intentionally minimal: pre-defined ideas + Tinder-style swipe animation. No persistence or backend idea feed is required for the MVP UI.
