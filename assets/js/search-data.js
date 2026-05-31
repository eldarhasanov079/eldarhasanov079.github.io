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
          description: "Teaching, mentoring, and tutoring roles at UC Berkeley",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-bio",
          title: "bio",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/_pages/bio/";
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
          section: "News",},{id: "news-our-team-starlabs-achieved-1st-place-out-of-150-teams-at-idda-hackathon-2",
          title: 'Our team StarLabs achieved 1st place out of 150+ teams at IDDA Hackathon...',
          description: "",
          section: "News",},{id: "news-our-paper-with-nvidia-research-on-distributed-training-just-got-into-apnet-26",
          title: 'Our paper with Nvidia Research on distributed training just got into APNet’26!',
          description: "",
          section: "News",},{id: "projects-aina-ai-web-accessibility-platform",
          title: 'AIna - AI Web Accessibility Platform',
          description: "Built at SFHacks 2025, AIna scans websites and uses Gemini Flash 2.0 to grade accessibility against WCAG-style criteria. The React, TypeScript, Express, and MongoDB Atlas app includes actionable feedback, public rankings, and a high-contrast accessible UI.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aina/";
            },},{id: "projects-risc-v-assembly-inference-engine",
          title: 'RISC-V Assembly Inference Engine',
          description: "Built an end-to-end neural-network inference pipeline in RISC-V assembly. Implemented matrix I/O, dot product, matmul, ReLU, argmax, and classification routines with manual memory management and automated tests.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/assembly_project/";
            },},{id: "projects-bearrank-berkeley-course-reviews",
          title: 'BearRank - Berkeley Course Reviews',
          description: "Launched a course review and ranking platform for UC Berkeley students to share class experiences and compare courses. Built with FastAPI, React, TypeScript, PostgreSQL, and GCP Cloud Run, with paginated REST APIs and a CORS-safe deployment architecture.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bearrank/";
            },},{id: "projects-",
          title: '',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/byow/";
            },},{id: "projects-checkwork-checkpoint-aware-ml-simulation",
          title: 'CheckWork - Checkpoint-Aware ML Simulation',
          description: "First-author paper accepted to APNet 2026. CheckWork is an open-source framework for generating checkpoint-aware execution traces in distributed ML training, enabling reproducible simulation of AI training checkpointing strategies without large GPU clusters.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/checkwork/";
            },},{id: "projects-clubhub-student-clubs-social-network",
          title: 'ClubHub - Student Clubs Social Network',
          description: "Built and presented at CalHacks 10.0, ClubHub helps UC Berkeley students discover clubs, events, and communities through search and filtering across 2,000+ organizations. Developed with React, Node.js, Firebase Auth, Supabase, and custom REST APIs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/clubhub/";
            },},{id: "projects-clusy-io-ai-compute-marketplace",
          title: 'clusy.io - AI Compute Marketplace',
          description: "Placed 5th out of 150+ teams at the UK AI Agents 2025 Hackathon sponsored by Google and Anthropic. Built an AI-agent orchestration platform that routes ML workloads across compute providers to reduce cost, runtime, and carbon impact.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/clusyio/";
            },},{id: "projects-risc-v-cpu-in-logisim",
          title: 'RISC-V CPU in Logisim',
          description: "Designed and tested a RISC-V-style CPU in Logisim, integrating ALU, register file, immediate generator, branch comparator, load/store logic, and program counter circuits. The processor runs RISC-V assembly programs through unit and integration harnesses.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cpu/";
            },},{id: "projects-rookiedb-java-database-system",
          title: 'RookieDB - Java Database System',
          description: "Built core components of a Java DBMS, including B+ tree indexing, join algorithms, query planning, multigranularity locking, and ARIES-style recovery. The system supports disk-backed storage, ACID transactions, and crash restart logic.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dbms/";
            },},{id: "projects-dimacs-sat-solver-fuzzer",
          title: 'DIMACS SAT Solver Fuzzer',
          description: "Built a mutation-based, grammar-aware Python fuzzer for C SAT solvers that generates DIMACS CNF inputs, tracks gcov coverage, and buckets ASan/UBSan crashes. The engine saves unique bug-triggering cases and uses coverage-guided corpus management to explore solver behavior.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fuzzer/";
            },},{id: "projects-imperium-study-consistency-tracker",
          title: 'Imperium - Study Consistency Tracker',
          description: "Won 1st place for Best Technical Execution at Imperial College&#39;s Learning Analytics Hackathon. Built a FastAPI, React, Streamlit, and SQL analytics platform that turns student activity traces into engagement insights and personalized study nudges.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/imperium/";
            },},{id: "projects-gradeview-instructor-analytics-dashboard",
          title: 'GradeView - Instructor Analytics Dashboard',
          description: "Co-authored a SIGCSE 2026 paper and led development of a GCP-hosted grade analytics dashboard for UC Berkeley CS10, built with React, Node.js, Flask, and Redis. Deployed for 3 semesters to 750+ students and 40+ staff, earning 94% satisfaction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/instructordash/";
            },},{id: "projects-symbolic-load-guided-klee",
          title: 'Symbolic-Load Guided KLEE',
          description: "Extended KLEE with symbolic-load instrumentation, a new global statistic, and a custom SymLoadSearcher scheduling heuristic. Built a reproducible symbolic-execution workflow with containerized runs, telemetry, and crash reproduction for evaluating coverage and memory tradeoffs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/klee/";
            },},{id: "projects-loanify-ai-ml-credit-scoring",
          title: 'Loanify.ai - ML Credit Scoring',
          description: "Won 1st place out of 150+ teams at IDDA Hackathon 2 by Tenity and IDDA. Built a transaction-behavior credit scoring platform that tested 10-12% more accurate than incumbent bank risk models in Azerbaijan and Turkey.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/loanify/";
            },},{id: "projects-pacman-ai-agents",
          title: 'Pacman AI Agents',
          description: "Implemented a portfolio of AI agents for Pacman, covering graph search, adversarial planning, probabilistic ghost tracking, logic planning, and reinforcement learning. Included DFS/BFS/UCS/A*, minimax, alpha-beta, expectimax, particle filters, value iteration, Q-learning, and DQN models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pacman/";
            },},{id: "projects-pintos-operating-system",
          title: 'PintOS Operating System',
          description: "Implemented major PintOS components in C for x86, including priority scheduling, synchronization primitives, 25 system calls, user program loading, and dynamic stack growth. Extended the file system with inode-based storage and an LRU-style buffer cache.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pintos/";
            },},{id: "projects-prairielearn-graph-constructor",
          title: 'PrairieLearn Graph Constructor',
          description: "Co-authored an ACM CompEd 2025 paper on a direct-manipulation PrairieLearn tool for constructing autogradable graphs. The open-source element lets students build graphs visually and exports DOT/Python representations for instant grading and feedback.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pl-graph-constructor/";
            },},{id: "projects-prairielearn-interactive-graph",
          title: 'PrairieLearn Interactive Graph',
          description: "Co-authored an ACM SIGCSE 2025 paper on an interactive PrairieLearn element for randomized, autogradable graph assessments. The tool supports graph algorithms from BFS/DFS to Dijkstra and Kruskal with visual interaction and automatic grading.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pl-interactive-graph/";
            },},{id: "projects-privacy-preserving-health-data-release",
          title: 'Privacy-Preserving Health Data Release',
          description: "Designed a de-identification workflow for a 150k-record health analytics dataset using direct identifier removal, quasi-identifier generalization, suppression, and diversity checks. Balanced k-anonymity-style privacy protections with utility for disease, fairness, and regional risk analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/privacy/";
            },},{id: "projects-qalam-ai-intelligent-writing-assistant",
          title: 'Qalam AI - Intelligent Writing Assistant',
          description: "Built and presented at CalHacks 11.0, Qalam AI helps writers overcome blocks with context-aware questions instead of generated prose. The Python, Reflex, SingleStore, Groq, and Cartesia app uses three LLM pipelines for entity detection, story summarization, and creative prompt generation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/qalamai/";
            },},{id: "projects-secure-file-sharing-system",
          title: 'Secure File Sharing System',
          description: "Built an end-to-end encrypted file sharing system in Go with secure storage, append, invitation sharing, delegated access, and revocation over an untrusted datastore. Used symmetric crypto, public-key encryption, signatures, MACs, and adversarial tests to protect confidentiality and integrity.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/secure-file-sharing/";
            },},{id: "projects-snapbite-cuisine-discovery-app",
          title: 'SnapBite - Cuisine Discovery App',
          description: "Won 1st place at the CulTech 2025 Hackathon among roughly 100 participants. Built a Flask, React, and MySQL app that helps tourists discover local dishes by collecting them through QR scans at partner restaurants.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/snapbite/";
            },},{id: "projects-soterio-smart-contract-vulnerability-detection",
          title: 'Soterio - Smart Contract Vulnerability Detection',
          description: "Earned the highest score at UC Berkeley&#39;s Decentralized Finance Research Seminar for a hybrid smart-contract auditor. Combined signature-based detection with logistic regression and a fine-tuned BERT classifier over 36,670 contracts to flag vulnerabilities such as reentrancy and integer overflows.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/soterio/";
            },},{id: "projects-moe-training-networks-msc-thesis",
          title: 'MoE Training Networks - MSc Thesis',
          description: "MSc thesis on making Mixture-of-Experts training communication more predictable and network-efficient. I’m exploring how MoE traffic patterns can inform better planning, routing, and resource allocation for large-scale AI training.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/thesis/";
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
