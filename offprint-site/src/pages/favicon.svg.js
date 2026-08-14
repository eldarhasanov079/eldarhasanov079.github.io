import { person } from '../data/site.js';

// Your initials, set on the accent colour. Generated so there is no stale
// monogram left behind when you fork this — a favicon with someone else's
// letters on it is the last thing anyone thinks to check.
//
// Want a real mark instead? Delete this file and drop your own
// public/favicon.svg in its place. The <link> in Base.astro needs no change.

const ACCENT = '#1b4d5c';
const PAPER = '#fbf9f5';

// First letter of the first and last word: "Ada Lovelace" → AL, "Plato" → P.
const initials = (name) => {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return '?';
  const first = words[0][0];
  const last = words.length > 1 ? words[words.length - 1][0] : '';
  return (first + last).toUpperCase();
};

export function GET() {
  const mark = initials(person.name);
  // One letter can afford to be larger than two without touching the edges.
  const size = mark.length > 1 ? 19 : 22;

  return new Response(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="3" fill="${ACCENT}"/>
  <text x="16" y="${mark.length > 1 ? 23 : 24}" font-family="Georgia,serif" font-size="${size}" font-weight="600"
        fill="${PAPER}" text-anchor="middle">${mark}</text>
</svg>
`,
    { headers: { 'Content-Type': 'image/svg+xml' } },
  );
}
