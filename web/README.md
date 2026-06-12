# samples/web

Sample Next.js app that consumes `@adragon/web-core` from the Azure Artifacts feed.

## Features

- App Router starter under `src/app`
- Azure feed `.npmrc` matching the API sample
- TypeScript alias from `@adragon-web/*` to `node_modules/@adragon/web-core/dist/*`
- BookCar-style encrypted API client for the sample API
- Admin login route at `/admin/auth/login`
- Admin CRUD via `Listing` from `@adragon/web-core` (for `user-role-claim` and other admin resources)
- Minimal ESLint setup aligned with the main web project

## Install

Before install, ensure `AZURE_ARTIFACTS_TOKEN` is set for the feed in `.npmrc`.

Copy `.env.example` to `.env.local` and keep these values aligned with `samples/api`:

- `NEXT_PUBLIC_API_URL=http://localhost:4001`
- `NEXT_PUBLIC_ENCRYPTION_KEY` and `NEXT_PUBLIC_ENCRYPTION_IV` matching the API env
- `samples/api` should allow `CORS_ORIGIN=http://localhost:3000`

```bash
pnpm install
```

## Run

```bash
pnpm dev
```

The sample runs on `http://localhost:3000`.

- `http://localhost:3000` redirects to the admin dashboard
- `http://localhost:3000/admin` redirects to login when no session cookie is present
- `http://localhost:3000/admin/auth/login` is the admin sign-in page
- `http://localhost:3000/admin/user-role-claim` opens the CRUD listing page

## Verify

- Open `http://localhost:3000/admin/auth/login` and sign in
- Confirm `http://localhost:3000/admin/user-role-claim` renders CRUD listing UI
- Install will require `AZURE_ARTIFACTS_TOKEN` so `@adragon/web-core` can be fetched from Azure Artifacts