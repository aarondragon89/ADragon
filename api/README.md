# samples/api

Sample NestJS API app that consumes `@adragon/api-core` from Azure Artifacts feed.

This sample now includes a lightweight BookCar-style scaffold:

- root config files: `.env*`, `.prettierrc`, `eslint.config.mjs`, `ormconfig.json`, `server.js`
- static asset folder: `public/swagger`
- script placeholder folder: `scripts`
- short alias import style from `@adragon-api/...` (backed by `@adragon/api-core/dist`)

## 1) Authenticate to Azure Artifacts

Before install, ensure your token is configured for the feed URL used in `.npmrc`.

Example:

```bash
export AZURE_ARTIFACTS_TOKEN=<YOUR_AZURE_ARTIFACTS_PAT>
```

## 2) Install dependencies

```bash
pnpm install
```

## 3) Run

```bash
pnpm start:dev
```

## 4) Verify

- `GET /` -> health response
- `GET /core-demo` -> demonstrates utility imported from `@adragon-api/common/...`
