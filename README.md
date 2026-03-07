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
# Local development uses SQLite automatically.
DATABASE_URL_SQLITE="file:./db.sqlite"

# Production uses Postgres automatically.
DATABASE_URL_POSTGRES="postgresql://user:password@host:5432/database?sslmode=require"

BETTER_AUTH_SECRET="replace-with-a-random-secret"
BETTER_AUTH_GITHUB_CLIENT_ID="your-github-client-id"
BETTER_AUTH_GITHUB_CLIENT_SECRET="your-github-client-secret"
```

3. Run database setup:

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

For local development, Prisma automatically composes a SQLite schema from `prisma/engines/sqlite/header.prisma` + `prisma/main/models.prisma`.

```bash
npm run db:generate
npm run db:push
```

### PostgreSQL flow

In production, Prisma automatically composes a Postgres schema before generating the client or running deployment commands.

```bash
npm run db:push:postgres
# or
npm run db:migrate:postgres
```

The runtime switch is environment-based:

- Development: SQLite via `DATABASE_URL_SQLITE`
- Production: Postgres via `DATABASE_URL_POSTGRES`

For backward compatibility, production commands also accept the legacy `DATABASE_URL` variable when it contains a Postgres URL.

## Useful Scripts

- `npm run dev` - Generate the SQLite client and start local dev server
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - ESLint
- `npm run typecheck` - TypeScript check
- `npm run check` - Lint + typecheck
- `npm run db:generate` - Run Prisma migrate dev (SQLite)
- `npm run db:push` - Push schema for the current environment
- `npm run db:push:sqlite` - Push schema to SQLite explicitly
- `npm run db:push:postgres` - Compose + push for PostgreSQL
- `npm run db:migrate` - Deploy migrations for the current environment
- `npm run db:migrate:sqlite` - Deploy SQLite migrations explicitly
- `npm run db:migrate:postgres` - Compose + deploy migrations for PostgreSQL
- `npm run db:studio` - Open Prisma Studio for the current environment

## Project Entry Points

- Main app page: `src/app/page.tsx`
- Swipe UI component: `src/app/_components/idea-tinder.tsx`
- Auth routes/pages: `src/app/auth/*`

## Notes

- If auth env keys are used in code, make sure they are also declared in `src/env.js`.
- Generated Prisma client output is configured to `generated/prisma`.
- Automatic Prisma composition writes the active schema to `prisma/schema.prisma`.
