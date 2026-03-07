# Ideas Tinder

Ideas Tinder is a swipe-style idea discovery app built with Next.js, tRPC, Prisma, and better-auth.

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- tRPC
- Prisma ORM
- better-auth

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Create `.env` in the project root:

```env
# SQLite (default local setup)
DATABASE_URL="file:./db.sqlite"

BETTER_AUTH_SECRET="replace-with-a-random-secret"
BETTER_AUTH_GITHUB_CLIENT_ID="your-github-client-id"
BETTER_AUTH_GITHUB_CLIENT_SECRET="your-github-client-secret"
```

3. Run database setup (SQLite):

```bash
npm run db:generate
```

4. Start dev server:

```bash
npm run dev
```

5. Open `http://localhost:3000`

## Prisma Schema Organization

This repo keeps Prisma models in modular files and supports multiple database engines.

- Main data models/enums: `prisma/main/models.prisma`
- SQLite header (generator + datasource): `prisma/engines/sqlite/header.prisma`
- PostgreSQL header: `prisma/engines/postgres/header.prisma`
- Compose script: `scripts/compose-prisma-schema.mjs`

### SQLite flow

For local development, a composed sqlite schema is generated from `prisma/engines/sqlite/header.prisma` + `prisma/main/models.prisma`, then used for Prisma commands.

```bash
npm run db:generate
npm run db:push
```

### PostgreSQL flow

Postgres uses a composed schema generated at `prisma/schema.postgres.prisma`.

```bash
npm run prisma:compose:postgres
npm run db:push:postgres
# or
npm run db:migrate:postgres
```

For Postgres, `DATABASE_URL` must start with `postgresql://` (or `postgres://`).

## Useful Scripts

- `npm run dev` - Start local dev server
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - ESLint
- `npm run typecheck` - TypeScript check
- `npm run check` - Lint + typecheck
- `npm run db:generate` - Run Prisma migrate dev (SQLite)
- `npm run db:push` - Push schema to DB (SQLite)
- `npm run db:push:postgres` - Compose + push for PostgreSQL
- `npm run db:migrate:postgres` - Compose + deploy migrations for PostgreSQL
- `npm run db:studio` - Open Prisma Studio

## Project Entry Points

- Main app page: `src/app/page.tsx`
- Swipe UI component: `src/app/_components/idea-tinder.tsx`
- Auth routes/pages: `src/app/auth/*`

## Notes

- If auth env keys are used in code, make sure they are also declared in `src/env.js`.
- Generated Prisma client output is configured to `generated/prisma`.
