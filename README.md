# Eldar Hasanov’s personal site

The Astro source for [eldarhasanov.org](https://eldarhasanov.org/).

## Local preview

From this folder, use Node 22 and run:

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 4321
```

Open the local address printed in the terminal. Edits show up on refresh, and most changes update the open page automatically. Use `npm run build` to generate the static site in `dist/`.

## Deployment

GitHub Actions builds pull requests and deploys successful builds from `main` to GitHub Pages. The [deployment workflow](.github/workflows/deploy.yml) installs the locked dependencies, builds the site from the repository root, and publishes `dist/`. The custom domain is configured in the repository’s Pages settings.

## Where to edit

| Content | File |
| --- | --- |
| Homepage introduction, photo, interests, and featured essay | `src/pages/index.astro` |
| Navigation, contact email, and profile links | `src/data/site.js` |
| Writing list | `src/data/writing.js` |
| Clusy, research, biography, and favorites | `src/pages/clusy.md`, `research.md`, `beyond.md`, `beyond-beyond.md` |
| Education, jobs, and awards | `src/data/cv.js` |
| Publication details shared by the CV and Publications | `src/data/publications.js` |
| Photos | `public/photos/` |
| Type, color, spacing, and mobile layout | `src/styles/site.css` |
| Shared page structure and metadata | `src/layouts/Page.astro` |

To add an article, copy one object in `src/data/writing.js`. Set its title, original publication date (`YYYY-MM-DD`), and primary link (`href`). The summary (`note`) and second reading link (`clusy`) are optional. The writing page sorts entries by date.

To add a text page, copy a Markdown page in `src/pages/`, change its title and description, and add its URL to `navigation` in `src/data/site.js`. The filename becomes the URL. The existing Offprint page URLs are retained so old bookmarks still work.

The photos are optimized copies of the originals from Offprint. Click a photograph on the site to open the larger image.
