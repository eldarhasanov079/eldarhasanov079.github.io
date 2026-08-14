// ─────────────────────────────────────────────────────────────────────────────
// Everything editable lives here. Change a name, add a paper, rebuild.
//
// Nothing at the top of this file is decorative: `site` and `person` feed the
// <head>, the JSON-LD, the sitemap, and robots.txt on every page. Work down
// from the top and the rest of the site follows.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  // The canonical URL. Canonical tags, the sitemap, robots.txt, and the
  // off-site link check all read it, so it has to be right before you deploy.
  url: 'https://eldarhasanov079.github.io',
  lang: 'en',
  // Used as the <meta name="description"> wherever a page doesn't set its own.
  description:
    'Personal site of Eldar Hasanov — software systems engineer, postgraduate researcher at Imperial College London, and co-founder of Clusy. Working on networking for distributed ML training and tools for computer science education.',
  // For twitter:creator, with the @. Set to null to leave the tag off.
  twitter: '@eldar_hsnv',
};

export const person = {
  name: 'Eldar Hasanov',
  tagline:
    'I build distributed systems and explore the world of large-scale computing',
  location: 'London & San Francisco',
  email: 'eldarh079@clusy.io',
  orcid: '0009-0008-2157-3867',
  cv: { href: '/cv.pdf', updated: 'October 2025' },
  photo: {
    src: '/img/profile.jpeg',
    alt: 'Graduation-day photograph outdoors, holding a paper-wrapped donut in front of food stalls',
    caption: 'KingPin Donuts, Berkeley.',
  },

  // ── Structured data ───────────────────────────────────────────────────────
  // Emitted as schema.org JSON-LD in <head>: this is what search engines and
  // reference managers read. Empty an array and it is left out of the markup.
  jobTitle: 'Software Systems Engineer',
  affiliation: [
    {
      name: 'Imperial College London',
      url: 'https://www.imperial.ac.uk/',
      type: 'CollegeOrUniversity',
    },
    { name: 'Clusy Inc.', url: 'https://www.clusy.io/' },
  ],
  alumniOf: [
    { name: 'University of California, Berkeley', type: 'CollegeOrUniversity' },
  ],
  knowsAbout: [
    'Distributed systems',
    'Networking for machine learning training',
    'Computer science education',
    'Computer security',
    'Fault tolerance',
  ],
};

// The colophon at the foot of every page — the printer's note saying what the
// book was set in and who made it. Set this to null and the line disappears.
// Keeping it is appreciated, never required.
export const template = {
  name: 'offprint',
  href: 'https://github.com/ada-jl4025/offprint',
};

// The running head. Drop an entry and the page stops being linked; delete the
// matching file in src/pages/ to remove it altogether. `note` is the gloss the
// 404 page shows beside each link, and is never shown in the head itself.
export const nav = [
  { label: 'Research', href: '/research/', note: 'The questions and what came of them' },
  { label: 'Publications', href: '/publication/', note: 'Papers and posters' },
  { label: 'CV', href: '/curriculum-vitae/', note: 'The long version' },
  { label: 'Clusy', href: '/clusy/', note: 'The agent-native research notebook' },
  { label: 'Beyond', href: '/beyond/', note: 'Teaching, hackathons, and everything else' },
];

// Shown under the tagline on the front page, and used for `sameAs` in the
// structured data — which is how a search engine works out that all these
// profiles belong to one person.
export const links = [
  { label: 'Email', href: 'mailto:eldar@clusy.io' },
  { label: 'GitHub', href: 'https://github.com/eldarhasanov079' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/eldar-hasanov' },
  { label: 'X', href: 'https://x.com/eldar_hsnv' },
  { label: 'Scholar', href: 'https://scholar.google.com/citations?user=hHGun0IAAAAJ' },
];

// ── Now ─────────────────────────────────────────────────────────────────────
// Dated, present-tense, 3–4 items. This is the single most effective
// proof-of-life element on the page — it is how a reader tells a site that is
// maintained from one abandoned in 2019. Prune it when it goes stale.
export const now = [
  {
    date: '2026',
    body: 'Building <a href="/clusy/">Clusy</a>, an agent-native computational notebook for parallel experiments and large-space exploration, as part of <a href="https://f.inc/">Founders, Inc.</a>',
  },
  {
    date: '2026',
    body: 'Completing my MSc thesis at <a href="https://www.imperial.ac.uk/">Imperial College</a> on LLM training systems under <a href="https://marioskogias.github.io/">Prof. Marios Kogias</a>, in collaboration with NVIDIA Research.',
  },
];

// ── Selected work ───────────────────────────────────────────────────────────
// The things that aren't papers: tools, software, side projects. `note` is for
// a prize, a venue, or a funder — leave it off and nothing is rendered.
export const work = [
  {
    title: 'Clusy',
    href: '/clusy/',
    what: 'An agent-native notebook for ML and data science. You describe the experiment; the agent finds the data, writes the cells, and runs the compute. Most of the work is in the runtime: kernel management, state persistence, and re-running only the cells a change actually affects.',
    stack: 'React · TypeScript · CodeMirror · FastAPI · AWS · Modal',
    note: 'Founders, Inc. Off Season II',
    linkset: [
      { label: 'Site', href: 'https://www.clusy.io/' },
      { label: 'Docs', href: 'https://docs.clusy.io/docs' },
    ],
  },
  {
    id: 'moe-networks',
    title: 'Network Planning for Mixture-of-Experts Training',
    what: 'Mixture-of-Experts models move expert traffic in sparse, dynamic patterns that fit poorly onto fabrics designed for dense collectives. This MSc thesis work, at Imperial\u2019s <a href="https://lsds.doc.ic.ac.uk/">Large-Scale Data & Systems (LSDS)</a> lab, studies how to plan and schedule that network so accelerators spend less time waiting on communication.',
    stack: 'Distributed ML · Networking · Simulation',
    note: 'MSc thesis, Imperial College London',
    linkset: [],
  },
  {
    title: 'CheckWork — checkpoint-aware ML training simulation',
    what: 'Checkpointing is how large-scale training survives failures, but measuring its true cost requires extremely expensive hardware. CheckWork is a framework to synthesize checkpoint-aware Chakra traces that enable simulation-based analyses',
    stack: 'Python · ASTRA-sim · ns-3 · Chakra',
    note: 'APNet 2026',
    linkset: [
      { label: 'DOI', href: 'https://doi.org/10.1145/3820441.3820476' },
      { label: 'Code', href: 'https://github.com/eldarhasanov079/checkwork' },
    ],
  },
  {
    title: 'GradeView — instructor analytics dashboard',
    what: 'At Berkeley, we designed and built the first Learning Management System (LMS) for mastery-learning grading policies. I led a team of six to develop the data pipelines, infrastructure, and core interfaces of the platform. It is still deployed in CS10 at UC Berkeley across four terms for 1K+ students.',
    stack: 'React · Flask · Node.js · Redis · GCP',
    note: 'Poster at SIGCSE TS 2026',
    linkset: [
      { label: 'Site', href: 'https://gradeview.eecs.berkeley.edu/' },
      { label: 'Paper', href: 'https://doi.org/10.1145/3770761.3777343' },
    ],
  },
  {
    title: 'Interactive graph assessments for PrairieLearn',
    what: 'Graph-based assessments are hard to autograde on paper. Our two open-source PrairieLearn elements address this: IGAT for randomized interactive graph questions, and GCUI for constructing graphs by direct manipulation, both with automated instant grading and feedback.',
    stack: 'Python · JavaScript · PrairieLearn',
    note: 'Papers at SIGCSE TS 2025 and CompEd 2025',
    linkset: [
      { label: 'IGAT', href: 'https://github.com/eldarhasanov079/pl-interactive-graph-v2' },
      { label: 'GCUI', href: 'https://github.com/eldarhasanov079/pl-graph-constructor' },
    ],
  },
];

// ── Publications ────────────────────────────────────────────────────────────
// `me: true` bolds the author — set it on yourself. Keep `status` honest:
// "under review" is not a publication, and a reader who checks will know.
// Order is preserved as written; newest first is the convention.
export const publications = [
  {
    status: 'published',
    authors: [
      { name: 'E. Hasanov', me: true },
      { name: 'A. Sefiane' },
      { name: 'A. Farshin' },
      { name: 'M. Kogias' },
    ],
    title:
      'CheckWork: Enabling Trace-Driven Analysis of Checkpointing Overhead in Distributed ML Training',
    venue: 'Proceedings of the 10th Asia-Pacific Workshop on Networking (APNet 2026)',
    detail: 'Singapore',
    year: 2026,
    linkset: [
      { label: 'DOI', href: 'https://doi.org/10.1145/3820441.3820476' },
      { label: 'Code', href: 'https://github.com/eldarhasanov079/checkwork' },
    ],
  },
  {
    status: 'published',
    authors: [
      { name: 'S. Mantripragada' },
      { name: 'E. Hasanov', me: true },
      { name: 'A. Hacker' },
      { name: 'W. Zhang' },
      { name: 'S. Hilkey' },
      { name: 'J. Ponce de Leon' },
      { name: 'D. Garcia' },
    ],
    title: 'An Instructor Dashboard to Support Mastery Learning',
    venue:
      'Proceedings of the 57th ACM Technical Symposium on Computer Science Education V.2 (SIGCSE TS 2026)',
    detail: 'pp. 1443–1444',
    year: 2026,
    linkset: [{ label: 'DOI', href: 'https://doi.org/10.1145/3770761.3777343' }],
  },
  {
    status: 'published',
    authors: [
      { name: 'C. Rau' },
      { name: 'E. Hasanov', me: true },
      { name: 'N. Norouzi' },
      { name: 'D. Garcia' },
      { name: 'A. Fox' },
    ],
    title: 'A Direct Manipulation User Interface for Constructing Autogradable Graphs',
    venue:
      'Proceedings of the ACM Global Computing Education Conference V.2 (CompEd 2025)',
    detail: 'Gaborone, Botswana, pp. 390–391',
    year: 2025,
    linkset: [{ label: 'DOI', href: 'https://doi.org/10.1145/3736251.3747306' }],
  },
  {
    status: 'published',
    authors: [
      { name: 'E. Hasanov', me: true },
      { name: 'D. Ahluwalia' },
      { name: 'D. Garcia' },
      { name: 'N. Norouzi' },
      { name: 'A. Fox' },
    ],
    title: 'An Interactive Tool for Randomized Autogradable Graph Assessments',
    venue:
      'Proceedings of the 56th ACM Technical Symposium on Computer Science Education V.2 (SIGCSE TS 2025)',
    detail: 'Pittsburgh, PA, pp. 1471–1472',
    year: 2025,
    linkset: [{ label: 'DOI', href: 'https://doi.org/10.1145/3641555.3705123' }],
  },
];

// Rendered as HTML so the separators can't pick up JSX whitespace — otherwise
// you get "Name , A. Colleague" with a space before the comma.
export function authorsHtml(authors) {
  return authors
    .map((a) => (a.me ? `<span class="pub__me">${a.name}</span>` : a.name))
    .join(', ');
}

// `full` adds volume/page detail — used on the publications and CV pages, left
// off the homepage where the list is a summary.
export function venueLine(p, { full = true } = {}) {
  return [p.venue, full ? p.detail : null, p.year].filter(Boolean).join(', ');
}

// ── Experience ──────────────────────────────────────────────────────────────
// `note` is rendered as HTML, so you can link a supervisor or a lab.
export const experience = [
  {
    when: '2025 —',
    role: 'Co-Founder and CTO',
    org: 'Clusy Inc.',
    where: 'San Francisco, CA',
    note: '<a href="/clusy/">Learn more</a>',
  },
  {
    when: '2025 —',
    role: 'Postgraduate Researcher',
    org: 'Imperial College London',
    where: 'London, UK',
    note: 'Working on distributed systems for LLM training.<br /><a href="/research/">Learn more</a>',
  },
  {
    when: '2024 – 2025',
    role: 'Research and Development Lead',
    org: 'CS Education R&D Group, UC Berkeley EECS',
    where: 'Berkeley, CA',
    note: 'Led a team of six in <a href="https://people.eecs.berkeley.edu/~ddgarcia/">Prof. Dan Garcia</a>\u2019s group building GradeView, a cloud-native six-microservice platform (Flask, React, Node.js, Redis) on GCP, with CI/CD and a custom ETL analytics pipeline, deployed in CS10 across three terms for 750+ students.',
  },
  {
    when: '2023 – 2025',
    role: 'Undergraduate Researcher',
    org: 'ACE Lab, UC Berkeley EECS',
    where: 'Berkeley, CA',
    note: 'Built GCUI and IGAT — open-source PrairieLearn tools for constructing and assessing graphs. GCUI grades submissions in under 100ms and improved grading efficiency 15\u00d7; IGAT user studies with 100+ students reached 86% satisfaction. Papers at SIGCSE TS 2025 and CompEd 2025.',
  },
  {
    when: '2024',
    role: 'Research Assistant (LLM / ML)',
    org: 'University of Southern California',
    where: 'Los Angeles, CA',
    note: 'Built style-guide compliance classifiers with logistic regression, BERT, Hugging Face, and OpenAI, raising accuracy from 53% to 88%; applied PEFT and a 100,000+ synthetic dataset; trained and deployed models on HPC clusters.',
  },
  {
    when: '2023 – 2024',
    role: 'Software Engineering Intern',
    org: '1PR',
    where: 'New York, NY',
    // note: 'Shipped two full-stack MVPs (React with FastAPI/Flask on Azure and AWS) for a music-analytics platform covering 30,000+ artists, integrating six external APIs and PostgreSQL schemas for efficient retrieval.',
  },
  {
    when: '2023',
    role: 'Software Engineering Intern',
    org: 'Anthems Music Sharing',
    where: 'San Francisco, CA',
    // note: 'Benchmarked Ethereum, Flow, and Polygon; developed Solidity and Cadence smart contracts, including dynamic NFTs, cutting average transaction fees by 30% and improving execution speed by 50%.',
  },
  {
    when: '2021 – 2022',
    role: 'Undergraduate Research Assistant (ML)',
    org: 'Space Sciences Laboratory, UC Berkeley',
    where: 'Berkeley, CA',
    note: 'Analysed interstellar dust from NASA\u2019s Stardust Mission with computer vision and TensorFlow classifiers; refined EDS training data for a convolutional neural network autograder.',
  },
];

export const education = [
  {
    when: '2025 – 2026',
    org: 'Imperial College London',
    where: 'London, UK',
    what: 'MSc Computing (Security & Reliability)',
    note: '',
  },
  {
    when: '2021 – 2025',
    org: 'University of California, Berkeley',
    where: 'Berkeley, CA',
    what: 'B.A., Computer Science',
    note: 'GPA: 3.7/4.0',
  },
];

export const awards = [
  {
    year: '2026',
    what: 'IC Trust and OCT awards for outstanding postgraduate publication',
  },
  {
    year: '2025',
    what: '1st place (55 finalist teams), IDDA Hackathon 2 — team StarLabs, Loanify.ai (Tenity & IDDA)',
  },
  {
    year: '2025',
    what: 'Top 5 of 500+ participants, UK Agentic AI Hackathon — clusy.io (Google, Claude, DEG, Cambridge, Imperial, et al.)',
  },
  {
    year: '2025',
    what: 'Best Technical Execution, Imperial Learning Analytics Hackathon — Imperium (Imperial & NUS)',
  },
  {
    year: '2025',
    what: '3rd place, Netcraft Security Challenge (Netcoin), London',
  },
  {
    year: '2025',
    what: '1st place, CulTech 2025 Hackathon — SnapBite (SUP VC, Baku)',
  },
];

// Shown at the foot of the CV page. Empty the array to drop the section.
export const languages = [
];
