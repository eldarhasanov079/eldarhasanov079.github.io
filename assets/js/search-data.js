// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A collection of my highlighted software projects. Code and demos for most projects are available upon request.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "a hopefully growing list of my conference publications!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-participated-in-sf-hacks-2025-we-built-an-ai-powered-web-accessibility-complience-platform",
          title: 'Participated in SF Hacks 2025 - We built an AI-powered web accessibility complience...',
          description: "",
          section: "News",},{id: "news-just-graduated-from-uc-berkeley-with-a-b-a-in-computer-science",
          title: 'Just graduated from UC Berkeley with a B.A. in Computer Science!',
          description: "",
          section: "News",},{id: "news-our-publication-a-direct-manipulation-user-interface-for-constructing-autogradable-graphs-has-just-been-accepted-to-the-acm-comped25",
          title: 'Our publication “A Direct Manipulation User Interface for Constructing Autogradable Graphs” has just...',
          description: "",
          section: "News",},{id: "news-our-project-snapbite-got-the-1st-place-at-cultech-2025-hackathon",
          title: 'Our project SnapBite, got the 1st place at CulTech 2025 hackathon',
          description: "",
          section: "News",},{id: "news-just-launched-bearrank-a-student-powered-class-reviews-platform",
          title: 'Just launched BearRank - a student-powered class reviews platform',
          description: "",
          section: "News",},{id: "news-started-my-msc-at-imperial-college-today",
          title: 'Started my MSc at Imperial College today!',
          description: "",
          section: "News",},{id: "news-our-project-imperium-just-won-best-technical-implementation-at-imperial-s-learning-analytics-hackathon-2025",
          title: 'Our project Imperium just won “Best Technical Implementation” at Imperial’s Learning Analytics Hackathon...',
          description: "",
          section: "News",},{id: "news-an-instructor-dashboard-to-support-mastery-learning-was-accepted-for-publication-at-sigcse-2026",
          title: '“An Instructor Dashboard to Support Mastery Learning” was accepted for publication at SIGCSE...',
          description: "",
          section: "News",},{id: "news-we-just-placed-5th-out-of-150-teams-at-uk-ai-agents-hackathon-by-building-clusy-io",
          title: 'We just placed 5th out of 150+ teams at UK AI Agents Hackathon...',
          description: "",
          section: "News",},{id: "projects-aina-ai-powered-web-accessibility-platform",
          title: 'AIna - AI-powered Web Accessibility Platform',
          description: "Built at SFHacks 2025, AIna is an AI-powered web accessibility platform that scans websites, analyzes HTML/CSS using Gemini Flash 2.0, and provides a 7-point WCAG-based accessibility grade with actionable feedback. Developed with React, TypeScript, Express, AWS and MongoDB Atlas, it features a public rankings dashboard, an accessible UI with high-contrast mode, and plans for blockchain-based compliance certificates.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aina/";
            },},{id: "projects-risc-v-classifier",
          title: 'RISC-V Classifier',
          description: "A RISC‑V assembly-based MNIST classifier that ingests image and weight files, executes a fully-connected neural net (matrix multiply → ReLU → matrix multiply → argmax), and outputs digit predictions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/assembly_project/";
            },},{id: "projects-bearrank-course-reviews-and-ranking-platform",
          title: 'BearRank - course reviews and ranking platform',
          description: "Launched in 2025, this platform allows students at Berkeley to share their experiences about different classes. This was built in Python Fast API, React.js, Typescript and PostrgeSQL. The app is deployed on GCP through Cloud Run, featuring paginated REST APIs and CORS-safe architecture.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bearrank/";
            },},{id: "projects-build-your-own-world",
          title: 'Build Your Own World',
          description: "2D Random World Generating Game in Java",
          section: "Projects",handler: () => {
              window.location.href = "/projects/byow/";
            },},{id: "projects-clubhub-student-clubs-social-network",
          title: 'ClubHub - Student Clubs Social Network',
          description: "Developed and presented at CalHacks 10.0, ClubHub is a full-stack web application engineered using React and Node.js, with Firebase Authentication for secure user management and Supabase as a scalable PostgreSQL-based backend-as-a-service. Codebase features custom RESTful APIs to handle club data operations, integrated real-time updates for event listings, and built dynamic filtering and search capabilities across 2000+ university clubs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/clubhub/";
            },},{id: "projects-clusy-io-skyscanner-for-ai-compute",
          title: 'clusy.io - Skyscanner for AI Compute',
          description: "Placed 5th out of 150+ teams at the UK AI Agents 2025 Hackathon sponsored by Google and Antropic. clusy.io is an AI-agent orchestration platform that routes and schedules ML/AI workloads across compute providers to minimize cost, duration and carbon footprint of AI workloads.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/clusyio/";
            },},{id: "projects-pipelined-cpu-in-logisim-circuits",
          title: 'Pipelined CPU in Logisim (Circuits)',
          description: "Pipelined version of logic circuit of a 1 clock cycle CPU",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cpu/";
            },},{id: "projects-rookiedbms",
          title: 'RookieDBMS',
          description: "A lightweight, Java-based DBMS built throughout UC Berkeley’s CS 186 curriculum, implementing core systems concepts across projects 2–5—from B+ tree indexing and joins to concurrency control and ARIES-style crash recovery. It supports efficient query processing, ACID-compliant multi-transaction execution, and fast restart after failures.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dbms/";
            },},{id: "projects-mutation-based-grammar-aware-fuzzer-for-sat-solvers",
          title: 'Mutation-based Grammar Aware Fuzzer for SAT Solvers',
          description: "A high-performance SAT fuzzer built to uncover bugs and stability issues in C-based SAT solvers. The tool generates and mutates Boolean formulas in DIMACS CNF format, aggressively probing solvers for undefined behavior, logic inconsistencies, and sanitizer violations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fuzzer/";
            },},{id: "projects-imperium-study-consistency-tracker",
          title: 'Imperium - Study Consistency Tracker',
          description: "Achieved 1st place in the &quot;Technical Implementation&quot; category at Imperial College&#39;s Learning Analytics Hackathon. Full stack application built in Python Fast API, React.js, Streamlit and Neon DB that integrates custom ML pipelines for analyzing learning habbits of students.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/imperium/";
            },},{id: "projects-gradeview-instructor-grade-analytics-dashboard",
          title: 'GradeView Instructor Grade Analytics Dashboard',
          description: "GCP-hosted instructor dashboard built with React, Node.js, Flask, and Redis to analyze grades and student trends. Deployed in UC Berkeley&#39;s CS10 for 3 semesters, serving 750+ students and 40+ staff with 94% satisfaction. Led development as research lead in CS Ed R&amp;D group at Berkeley.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/instructordash/";
            },},{id: "projects-symbolic-execution-engine-extension-and-analysis-with-klee",
          title: 'Symbolic Execution Engine Extension and Analysis with KLEE',
          description: "Symbolic-execution workflow around KLEE with containerized runs, live Grafana telemetry, introducing a custom SymLoadSearcher heuristic that delivered higher instruction coverage with controlled memory growth.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/klee/";
            },},{id: "projects-pacman-ai-agents",
          title: 'Pacman AI Agents',
          description: "Developed and trained a suite of intelligent agents for playing Pac-Man, making use of search algorithms, probabilistic reasoning, adversarial planning, and reinforcement learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pacman/";
            },},{id: "projects-pintos-operating-system",
          title: 'PintOS Operating System',
          description: "A fully functional single-coreoperating system in C for the x86 architecture. It supports multithreading, loading and running user programs, dynamic stack alloction, buffer cache and an inode-based FFS file system.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pintos/";
            },},{id: "projects-pl-graph-constructor",
          title: 'pl-graph-constructor',
          description: "A custom tool enabling students to build graphs in a simple interface and converts them into a DOT-language form for autograding. Open-source contribution to PrairieLearn. Developed within UC Berkeley ACE Lab, published at ACM CompEd 2025 Conference to be presented in San Francisco, USA and Gaborone, Botswana.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pl-graph-constructor/";
            },},{id: "projects-pl-interactive-graph",
          title: 'pl-interactive-graph',
          description: "An Interactive Tool for Randomized Autogradable Graph Assessments + Open-source contribution to PrairieLearn. Developed within UC Berkeley ACE Lab and published by ACM at SIGCSE 2025 Technical Symposium in Pittsburgh, PA.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pl-interactive-graph/";
            },},{id: "projects-data-de-identification-for-public-health-analytics",
          title: 'Data De-Identification for Public Health Analytics',
          description: "A privacy-preserving data release applying k-anonymity, ℓ-diversity, and statistical disclosure control to a 150k-record health dataset, mitigating re-identification and inference attacks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/privacy/";
            },},{id: "projects-qalam-ai-intelligent-writing-assistant",
          title: 'Qalam AI - Intelligent Writing Assistant',
          description: "BBuilt and presented at CalHacks 11.0, Qalam AI is a full-stack writing assistant developed using Python, Reflex, and SingleStore, with a custom pipeline featuring three Groq-hosted LLMs for entity detection, story summarization, and prompt generation with voice integration via Cortesia.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/qalamai/";
            },},{id: "projects-scheme-interpreter",
          title: 'Scheme Interpreter',
          description: "A Python-based interpreter for a Scheme functional language, implementing a full read‑eval‑print loop and core language features (special forms, user-defined procedures, tokenization, and parsing).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/scheme/";
            },},{id: "projects-secure-file-sharing-system",
          title: 'Secure File Sharing System',
          description: "Fully secure end-to-end encrypted system for creating and sharing files through an insecure database",
          section: "Projects",handler: () => {
              window.location.href = "/projects/secure-file-sharing/";
            },},{id: "projects-snapbite-web-app-for-cuisine-exploration",
          title: 'SnapBite - Web App for Cuisine Exploration',
          description: "Achieved 1st place on the CulTech 2025 hackathon among ~100 participants. This is a full-stack application, built using Python Flask and React.js with a MySQL database. The application allows users to explore local dishes by encouraging tourists to &quot;collect&quot; them through QR code scanning at partner restaurants.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/snapbite/";
            },},{id: "projects-hybrid-detection-of-vulnerabilities-in-smart-contracts",
          title: 'Hybrid Detection of Vulnerabilities in Smart Contracts',
          description: "A hybrid tool for auditing smart contracts using signature-based detection and machine learning, achieving highest score at UC Berkeley&#39;s Decentralized Finance Research Seminar.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/soterio/";
            },},{id: "projects-reliable-tcp-socket",
          title: 'Reliable TCP Socket',
          description: "A Python‑based transport-layer socket built atop the POX network simulator to implement a TCP-like protocol (3‑way handshake, byte-stream transfer, FIN teardown, retransmission strategy with RTT/RTO estimation, and flow-control)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tcp/";
            },},{
        id: 'social-acm',
        title: 'ACM DL',
        section: 'Socials',
        handler: () => {
          window.open("https://dl.acm.org/profile/99661520022/", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%65%6C%64%61%72%68%30%37%39@%62%65%72%6B%65%6C%65%79.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/eldarhasanov079", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/eldar-hasanov", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@eldarh079", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0008-2157-3867", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=hHGun0IAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
