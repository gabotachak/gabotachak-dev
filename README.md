# gabotachak.dev

Personal portfolio of Gabriel Anzola Tachak, Senior Backend Engineer. Static site, English and Spanish.

## Stack

- [Astro](https://astro.build) 6, static output, with `@astrojs/sitemap`
- [Tailwind CSS](https://tailwindcss.com) v4 plus shared tokens and primitives in `src/styles/global.css`
- Fonts self-hosted through Fontsource: Fraunces for headings, the tagline and key figures, IBM Plex Sans for text, JetBrains Mono for tech lists and small labels
- No UI framework. JavaScript only enhances (theme toggle, mobile menu, active nav link, copy email, Last.fm); the content works without it and prints cleanly.

## Pages

| Path                  | Content                                                                             |
| --------------------- | ----------------------------------------------------------------------------------- |
| `/`, `/es/`           | Home: hero, proof, selected work, experience, stack, how I work, education, contact |
| `/uses/`, `/es/uses/` | Machines, tools, interests and a small "last listened" block from Last.fm           |
| `/404.html`           | Bilingual not-found page, `noindex`                                                 |

Copy lives in `src/i18n/translations.ts` (sections) and `src/i18n/chrome.ts` (nav, footer, metadata). `public/` holds the CV, vCard, `llms.txt`, favicons and the Open Graph images (`og-en.png`, `og-es.png`, 1200×630).

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in ./dist
npm run preview   # serve ./dist
```

## Checks and hooks

Node >=22.23.4 (Astro 7). `npm run format:check`, `npm run lint` (oxlint) and `npm run typecheck` (`astro check`) are the same checks CI runs.

Install the local hooks once, with [pre-commit](https://pre-commit.com):

```bash
pre-commit install --hook-type pre-commit --hook-type pre-push
```

| When          | What runs                                                                                                                                                   |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| commit        | whitespace, merge-conflict, large-file, YAML/JSON and private-key checks; gitleaks; actionlint; prettier (rewrites staged files) and oxlint                 |
| push          | `astro check` and `npm audit --audit-level=high`                                                                                                            |
| CI (`ci.yml`) | the checks above plus the build on every PR and push to `master`; pre-commit on all files and a gitleaks scan of the full history; dependency review on PRs |

Commit messages and PR titles follow Conventional Commits (`commitlint` and `pr-title-lint` workflows).

## Environment variables

Optional. Only the `/uses` page reads them; without the key the Last.fm block is not rendered.

| Variable                | Description                                                            |
| ----------------------- | ---------------------------------------------------------------------- |
| `PUBLIC_LASTFM_API_KEY` | Last.fm API key ([create one](https://www.last.fm/api/account/create)) |
| `PUBLIC_LASTFM_USER`    | Last.fm username                                                       |

Copy `.env.example` to `.env` to set them locally. The key is read-only and ends up in the built HTML, so rotate it at last.fm/api if needed.

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.
