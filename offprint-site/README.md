# offprint

An academic homepage that looks like a sheet of paper on a desk. Astro, static
output, no client-side JavaScript bundles, one typeface, and a light and dark
theme that are both warm.

An *offprint* is the separately-bound copy of your own article that a publisher
gave you to post to whoever wrote in asking for one. That is what this template
is for: the tidy copy of your work you hand to someone who asked.

![The front page scrolling from the running head down to the footer, switching from the light theme to the dark one part-way](docs/scroll.gif)

## Start

Press **Use this template** at the top of this page, or deploy it first and
clone what Vercel makes for you:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fada-jl4025%2Foffprint&project-name=offprint&repository-name=offprint)

Either way, then:

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
```

Set `site.url` in `src/data/site.js` to whatever domain you land on — Vercel
gives you one immediately, and the canonical tags and sitemap need to agree
with it.

## Filling it in with an agent

Every placeholder in this template is written to be found and replaced. If you
use Claude Code, Cursor, Codex, or anything similar, drop your CV in the repo
and paste this:

```text
This repo is built from "offprint", an academic homepage template:
https://github.com/ada-jl4025/offprint — read its README first, it documents
where every piece of content lives. Everything currently in this repo is
placeholder content, and your job is to replace it with mine.

My CV is at ./my-cv.pdf — read it first and take the facts from there rather
than inventing any. Where the CV is ambiguous or silent, ask me instead of
guessing. Never invent a publication, a date, an affiliation, or an award.

Work through these in order:

1. src/data/site.js is the whole content layer — rewrite it end to end.
   - site.url is the domain the site will live at. Ask me for it.
   - person: name, tagline, location, email, ORCID, and the structured-data
     fields (jobTitle, affiliation, alumniOf, knowsAbout). Set `type:
     'CollegeOrUniversity'` on universities.
   - nav, links, now, work, publications, experience, education, awards,
     languages. Set `me: true` on my own name in every publication's author
     list. Keep `status` honest: only use 'published' where it really is.
   - The tagline is the most-read line on the site. Draft three options in
     my voice and let me pick, rather than settling on one yourself.

2. src/pages/research.astro and src/pages/beyond.astro are hand-written prose,
   not generated from data. Replace the placeholder text with real prose about
   my work, keeping the existing heading structure and figure markup. Aim for
   problem-first paragraphs, not lists of achievements. If you don't know
   enough about a project to write it honestly, ask me before writing it.
   Delete beyond.astro entirely if I say I don't want it, and drop its `nav`
   entry too.

3. Replace public/cv.pdf with my real CV, and tell me which images in
   public/img/ still need real files — portrait.jpg and the figure-*.jpg
   placeholders. Update the `alt` text and `figcaption` for each one you
   replace; describe what is in the frame, not who is in it.

4. Leave the design alone: src/styles/global.css, the layout, and the theme
   toggle are the point of the template. Don't restyle, don't add libraries,
   don't add client-side JavaScript.

When you're done, run `npm run build` and confirm it passes, then grep the repo
for "example.com", "Your Name", "yourhandle", "0000-0000" and anything else
obviously placeholder, and show me what's left.
```

The prompt is deliberately strict about invention. A homepage with a
hallucinated publication on it is worse than no homepage.

## Making it yours

Open **`src/data/site.js`**. Nearly everything is in there, and the top of the
file is the part that matters:

```js
export const site = {
  url: 'https://example.com',   // ← set this before you deploy
  ...
};

export const person = {
  name: 'Your Name',
  ...
};
```

`site.url` is read by the canonical tags, the sitemap, `robots.txt`, and the
build step that decides which links are off-site. Change it in that one place
and they all follow. `person` feeds the page titles, the running head, the
structured data, and the favicon.

Then work down the file: `now`, `work`, `publications`, `experience`,
`education`, `awards`. Add a paper by adding an object to `publications` and it
appears on the homepage, the publications page, and the CV — set `me: true` on
yourself and your name comes out bold.

The two prose pages, `src/pages/research.astro` and `src/pages/beyond.astro`,
are written by hand rather than generated. They ship full of placeholder text
that explains what belongs in them. Delete either one and remove its entry from
`nav` in `site.js`; nothing else refers to them.

### Things to replace

| Path | What |
|---|---|
| `src/data/site.js` | All content. Start here. |
| `public/cv.pdf` | A placeholder. Replace it, or point `person.cv.href` elsewhere. |
| `public/img/portrait.jpg` | The photograph on the front page. |
| `public/img/figure-*.jpg` | Placeholder figures used by the two prose pages. |
| `public/img/paper-texture.jpg` | The paper grain. Swap in your own scan if you like. |

The favicon is generated from your initials by `src/pages/favicon.svg.js`. For a
real mark instead, delete that file and put your own `public/favicon.svg` there.

## Layout of the rest

| Path | What |
|---|---|
| `src/styles/global.css` | Design tokens — colour, type scale, measure — at the top. |
| `src/layouts/Base.astro` | `<head>`, JSON-LD, footer, theme toggle. |
| `src/components/Header.astro` | The running head and its nav. |
| `src/pages/*.astro` | One file per page. |
| `src/pages/robots.txt.js` | Generated so the sitemap URL can't go stale. |
| `scripts/external-links.mjs` | Adds `target="_blank"` to off-site links after the build. |
| `vercel.json` | Cache and security headers. Put your own redirects in `redirects`. |

## Design

One typeface (Newsreader variable, self-hosted, Latin subset) at two optical
sizes — body at `opsz` 12, headings large — plus a system monospace for
metadata. One accent hue (teal `#1b4d5c` light, `#8fc2d4` dark). A warm paper
background, never pure white; a warm near-black in dark mode, never pure black.

Measure is 43rem. The type scale is a 1.200 minor third off a 19px base.

Body text uses old-style figures; headings, tables, and dates use lining
figures. That is deliberate — don't "fix" it.

The theme toggle is the half-filled circle in the running head, a printer's
tint mark. It cross-fades through a view transition where the browser has one,
and swaps instantly where it doesn't or where the reader has asked for reduced
motion.

## Deploying

Static output, so anywhere will do.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fada-jl4025%2Foffprint&project-name=offprint&repository-name=offprint)

The button clones this repo into your own account and deploys it — no
configuration, since Astro is detected and `vercel.json` only carries cache and
security headers. Put your own redirects in its empty `redirects` array.

For Netlify, Cloudflare Pages, or GitHub Pages, build with `npm run build` and
serve `dist/`. Set `site.url` first, whatever the host — a wrong one gives you
canonical tags pointing at somebody else's domain.

## Licence

MIT — see [LICENSE](LICENSE). Use it, change it, no need to ask or credit.

The colophon in the footer is set in `site.js`; delete the `template` export
and the line disappears. Keeping it is appreciated, never required.

The Newsreader typeface in `public/fonts/` is not mine and is not MIT. It is
licensed separately under the SIL Open Font License 1.1 — see
[NOTICE](NOTICE) and [`public/fonts/OFL.txt`](public/fonts/OFL.txt). You can
ship it with your site; you just can't sell the font on its own.
