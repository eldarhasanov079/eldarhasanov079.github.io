// Adds target="_blank" rel="noopener noreferrer" to every off-site link in the
// built HTML. Done at build time rather than with a runtime script so the site
// keeps shipping zero JavaScript.
//
// Internal links and mailto: are left alone — opening your own pages in new
// tabs is hostile, and mailto: hands off to the mail client anyway.

import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { site } from '../src/data/site.js';

const DIST = 'dist';
// Read from site.js rather than repeated here, so that changing your domain in
// one place cannot leave this check quietly treating your own links as
// off-site and opening them in new tabs.
const SITE_HOST = new URL(site.url).hostname.replace(/^www\./, '');

async function htmlFiles(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await htmlFiles(path)));
    else if (entry.name.endsWith('.html')) out.push(path);
  }
  return out;
}

const isExternal = (href) => {
  if (!/^https?:\/\//i.test(href)) return false;
  try {
    const { hostname } = new URL(href);
    return hostname !== SITE_HOST && hostname !== `www.${SITE_HOST}`;
  } catch {
    return false;
  }
};

let files = 0;
let links = 0;

for (const file of await htmlFiles(DIST)) {
  const html = await readFile(file, 'utf8');
  let changed = 0;

  const next = html.replace(/<a\s([^>]*?)>/gi, (tag, attrs) => {
    if (/\btarget\s*=/i.test(attrs)) return tag;
    const href = attrs.match(/href\s*=\s*["']([^"']+)["']/i)?.[1];
    if (!href || !isExternal(href)) return tag;
    changed++;
    return `<a ${attrs.trim()} target="_blank" rel="noopener noreferrer">`;
  });

  if (changed) {
    await writeFile(file, next);
    files++;
    links += changed;
  }
}

console.log(`external-links: ${links} link(s) across ${files} file(s)`);
