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

Commercial links use the issued World Mobile affiliate URL. Copy `.env.example`
to `.env` only when testing a different campaign URL locally.

## Validate

```sh
npm run check
npm run build
npx wrangler deploy --dry-run
```

## Deploy

Provide the issued referral URL at build time, then deploy:

```sh
PUBLIC_AIRNODE_AFFILIATE_URL="https://airnode.worldmobile.net/r/JWBMLA" npm run deploy
```

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
