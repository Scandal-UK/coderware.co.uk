# coderware.co.uk

This repository contains the source for my personal CV website, [coderware.co.uk](https://coderware.co.uk/).

Previously it was a Bootstrap template but now it uses [Astro](https://astro.build/) to generate a small static site with no client-side application framework and no browser JavaScript.

## Project structure

Career information is kept separately from its presentation:

```text
src/
├── components/          Astro components for individual CV sections
├── content/             Profile, highlights, skills and experience content
│   └── experience/      One Markdown file per role
├── layouts/             Shared document layout and metadata
├── pages/               Page composition
├── styles/              Screen, responsive and print styles
├── content.config.ts    Content collection schemas
└── site.config.ts       Site-wide configuration
```

Experience entries use structured front matter for employers, roles, dates and technologies. Their Markdown bodies contain the role summaries and achievements. Entries are ordered from their dates rather than by a manually maintained display order.

## Running locally

The project requires a current Node.js release and npm.

Install the exact dependencies recorded in `package-lock.json`:

```sh
npm ci
```

Start the local development server:

```sh
npm run dev
```

Astro will print the local address when the server starts. Changes to components, content and styles are reflected while it is running.

## Production build

Generate the static production site:

```sh
npm run build
```

The generated files are written to `dist/`.

## Content changes

Most CV updates should only require editing files under `src/content/`. Presentation belongs in the Astro components and global stylesheet rather than in the Markdown content.

Before publishing a change, run:

```sh
npm run build
```

This validates the content collections as well as producing the deployable static files.

## Design principles

The site deliberately favours:

- semantic HTML and accessible navigation;
- static output with minimal dependencies;
- responsive and print-friendly presentation;
- structured, reusable career content;
- useful search metadata without keyword stuffing; and
- simple code over speculative abstractions.

The aim is not to be a demonstration of every tool I know. It is to present my work clearly and let the content do most of the talking.
