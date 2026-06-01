# gabotachak.dev

Personal portfolio site. Built with Astro + Tailwind CSS v4.

## Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- Last.fm API — now playing widget (client-side, read-only)

## Local development

```bash
cp .env.example .env
# fill in your Last.fm API key in .env

npm install
npm run dev
# → http://localhost:4321
```

## Environment variables

| Variable | Description |
|----------|-------------|
| `PUBLIC_LASTFM_API_KEY` | Last.fm API key — get one at [last.fm/api](https://www.last.fm/api/account/create) |
| `PUBLIC_LASTFM_USER` | Last.fm username |

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview build locally |

## Deploy

Build outputs to `dist/` — deploy to any static host (Netlify, Vercel, GitHub Pages).

> The Last.fm API key is embedded in the built HTML as a `data-*` attribute.
> This is intentional — the key is read-only. Rotate it at last.fm/api if needed.
