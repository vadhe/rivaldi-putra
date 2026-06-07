# Rivaldi Putra Portfolio

Personal portfolio and blog for **Rivaldi Putra**, a frontend and product engineer. The site showcases professional experience, selected projects, open source contributions, technical skills, and engineering articles.

Built as a static site with [Eleventy](https://www.11ty.dev/) and [Tailwind CSS](https://tailwindcss.com/).

## Features

- Static portfolio pages for home, about, projects, and blog
- Markdown-powered blog posts under `posts/`
- Shared Eleventy layouts and partials under `_includes/`
- Global content/data modules under `_data/`
- Tailwind CSS 4 styling with custom design tokens
- Syntax highlighting for blog/code content
- Responsive portrait images served from `images/`
- SEO metadata managed through `_data/site.js`

## Tech Stack

- **Static site generator:** Eleventy
- **Styling:** Tailwind CSS 4
- **Animation utilities:** `tw-animate-css`
- **Syntax highlighting:** `@11ty/eleventy-plugin-syntaxhighlight`
- **Package manager:** pnpm lockfile is included

## Getting Started

### Prerequisites

- Node.js
- pnpm, npm, or another Node package manager

Using pnpm is recommended because `pnpm-lock.yaml` is included.

### Install dependencies

```bash
pnpm install
```

If you prefer npm:

```bash
npm install
```

### Build the site

```bash
npm run build
```

This command:

1. Builds Tailwind CSS from `input.css` into `index.css`
2. Runs Eleventy
3. Outputs the static site to `_site/`

### Run locally

```bash
npm run serve
```

The local Eleventy server runs on:

```text
http://localhost:8081
```

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run build` | Builds Tailwind CSS and generates the Eleventy site into `_site/`. |
| `npm run serve` | Builds Tailwind CSS and starts Eleventy dev server on port `8081`. |
| `npm test` | Placeholder script only; no tests are currently configured. |

## Project Structure

```text
.
├── _data/                  # Global Eleventy data files
│   ├── experience.js
│   ├── projects.js
│   ├── site.js
│   └── skills.js
├── _includes/              # Eleventy layouts and templates
│   ├── layout.html
│   └── post.html
├── images/                 # Static images passed through to output
├── posts/                  # Markdown blog posts
├── about.html              # About page
├── blog.html               # Blog listing page
├── index.html              # Home page
├── input.css               # Tailwind source CSS
├── index.css               # Generated CSS copied to output
├── projects.html           # Projects page
├── .eleventy.js            # Eleventy configuration
└── package.json
```

## Content Editing Guide

### Site metadata

Edit global site information in:

```text
_data/site.js
```

This includes the site name, URL, author, description, keywords, analytics ID, and social profile metadata.

### Experience

Edit work experience in:

```text
_data/experience.js
```

The About page reads this data automatically.

### Projects

Edit selected projects in:

```text
_data/projects.js
```

Each project supports a title, description, tags, and URL.

### Skills

Edit grouped technical skills in:

```text
_data/skills.js
```

### Blog posts

Add markdown files to:

```text
posts/
```

Blog posts should include Eleventy frontmatter. Example:

```md
---
layout: post.html
title: Example Post
excerpt: A short description of the post.
date: 2026-01-01
category: Frontend
---

Write the post content here.
```

## Styling

Tailwind source styles live in:

```text
input.css
```

The generated stylesheet is:

```text
index.css
```

Eleventy passthrough-copies `index.css` and `images/` into the generated `_site/` directory.

## Deployment

This project outputs a fully static site in `_site/`, so it can be deployed to static hosting platforms such as Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any web server that can serve static files.

Use this build command:

```bash
npm run build
```

Use this output directory:

```text
_site
```

## Notes

- There are currently no configured linters or automated tests.
- `index.css` is generated from `input.css`; avoid hand-editing generated CSS unless intentionally overriding the build output.
- Blog and portfolio content are managed through Eleventy templates and `_data` modules rather than a CMS.
