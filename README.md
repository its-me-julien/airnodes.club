# Airnodes Club

An independent, research-backed affiliate guide to World Mobile AirNodes. Built
with Astro and deployed as a Cloudflare Worker at
[airnodes.club](https://airnodes.club).

The identity, content voice, layout system and implementation rules are documented
in [`docs/BRAND_GUIDELINES.md`](docs/BRAND_GUIDELINES.md).

## Local development

```sh
npm install
npm run dev
```

The project falls back to World Mobile's official AirNodes page for commercial
links. To test the issued affiliate link locally, copy `.env.example` to `.env`
and replace the value.

## Validate

```sh
npm run check
npm run build
npx wrangler deploy --dry-run
```

## Deploy

Provide the issued referral URL at build time, then deploy:

```sh
PUBLIC_AIRNODE_AFFILIATE_URL="https://worldmobile.io/airnodes" npm run deploy
```

Replace the example URL with the exact tagged URL from the affiliate platform.
The Worker configuration binds the apex custom domain `airnodes.club`; `www`
is intentionally outside this Worker route.

## Content maintenance

- Current products, research sources and the central affiliate URL are in
  `src/config.ts`.
- Company-published figures are labelled as World Mobile reports.
- Recheck prices, reward terms, availability and affiliate terms before changing
  the review date.
- Community, reseller and legacy sources are context only and must not override
  current first-party terms.
