# Airnodes

A modern Astro site deployed as a Cloudflare Worker.

## Local development

```sh
npm install
npm run dev
```

## Validate

```sh
npm run check
npm run build
```

## Deploy

Authenticate with Cloudflare once, then deploy:

```sh
npx wrangler login
npm run deploy
```

The Worker configuration lives in `wrangler.jsonc`.
