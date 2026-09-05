# coderware.co.uk

This repository contains the source for my personal CV website, [coderware.co.uk](https://coderware.co.uk/).

Previously it was a Bootstrap template but now it uses [Astro](https://astro.build/) to generate a small static site with no client-side application framework and no browser JavaScript.

## Project structure

Content is kept in its own directory, separately from its presentation:

```text
.github/workflows/       Deployment file
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

## Deployment

Changes to the `main` branch will trigger the deployment to GitHub Pages. This action is defined in `deploy.yml`, found in the `.github/workflows` path.

## Production build

Generate the static production site:

```sh
npm run build
```

Or, to also include a generated PDF of the static site saved as `dan-ware-cv.pdf`:

```sh
npm run cv:pdf
```

The generated files are written to `dist/`.

## Content changes

Most CV updates should only require editing files under `src/content/`. Presentation belongs in the Astro components and global stylesheet rather than in the Markdown content.

Before publishing a change, run:

```sh
npm run build
```

This validates the content collections as well as producing the deployable static files.
