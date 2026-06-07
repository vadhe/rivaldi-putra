# Project overview

This repository is an Eleventy (11ty) + Tailwind CSS static site.

## Scripts (from package.json)

- build: npx @tailwindcss/cli -i ./input.css -o ./index.css && npx @11ty/eleventy
- serve: npx @tailwindcss/cli -i ./input.css -o ./index.css && npx @11ty/eleventy --serve --port 8081

Run these from the project root. The Tailwind CLI builds index.css from input.css, then Eleventy builds the site.

## Eleventy config (from .eleventy.js)

- Input directory: project root
- Output directory: _site
- Passthrough copies configured for: index.css and images

## Important directories & conventions

- posts/: blog posts / collection content (markdown)
- _includes/: Eleventy templates and partials
- _data/: site/data files (JSON, JS, YAML) available to templates
- index.css: generated output of Tailwind CLI (passthrough to output)
- images/: static images are passed through to the output

## Build & Serve

- Build (production/static):
  npx @tailwindcss/cli -i ./input.css -o ./index.css && npx @11ty/eleventy

- Serve (local dev):
  npx @tailwindcss/cli -i ./input.css -o ./index.css && npx @11ty/eleventy --serve --port 8081

Eleventy writes the final site to _site. Serve uses Eleventy --serve on port 8081.

## Tests & linters

- There are no test or linter scripts configured in package.json.

## Lockfile

- pnpm-lock.yaml is present (pnpm used or lockfile retained). Install dependencies with pnpm if you want to use the lockfile: pnpm install

## Notes / conventions

- Keep content files (posts) under posts/ as markdown files with frontmatter.
- Templates live in _includes/ and are referenced by Eleventy layouts/shortcodes.
- Global data lives in _data/ and is available to templates automatically.
- Static assets (images, generated index.css) are passthrough-copied to the output; do not expect Eleventy to process them.

