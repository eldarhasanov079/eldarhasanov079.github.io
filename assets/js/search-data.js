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
          description: "Collection of my software projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-resume",
          title: "resume",
          description: "Resume Link https://drive.google.com/file/d/1Y0u5EiR-c0DRxJmdhEAQAE0D5BHGvIQt/view?usp=sharing",
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
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-participated-in-sf-hacks-2025-we-built-an-ai-powered-web-accessibility-complience-platform",
          title: 'Participated in SF Hacks 2025 - We built an AI-powered web accessibility complience...',
          description: "",
          section: "News",},{id: "news-accepted-an-offer-to-study-advanced-computing-at-imperial-college-london",
          title: 'Accepted an offer to study Advanced Computing at Imperial College London',
          description: "",
          section: "News",},{id: "news-just-graduated-from-uc-berkeley-with-a-b-a-in-computer-science",
          title: 'Just graduated from UC Berkeley with a B.A. in Computer Science!',
          description: "",
          section: "News",},{id: "projects-aina-ai-powered-web-accessibility-platform",
          title: 'AIna - AI-powered Web Accessibility Platform',
          description: "Built at SFHacks 2025, AIna is an AI-powered web accessibility platform that scans websites, analyzes HTML/CSS using Gemini Flash 2.0, and provides a 7-point WCAG-based accessibility grade with actionable feedback. Developed with React, TypeScript, Express, AWS and MongoDB Atlas, it features a public rankings dashboard, an accessible UI with high-contrast mode, and plans for blockchain-based compliance certificates.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aina/";
            },},{id: "projects-digit-classification-risc-v",
          title: 'Digit Classification (RISC-V)',
          description: "Machine Learning Model built in RISC-V ASSEMBLY language",
          section: "Projects",handler: () => {
              window.location.href = "/projects/assembly_project/";
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
            },},{id: "projects-pipelined-cpu-in-logisim-circuits",
          title: 'Pipelined CPU in Logisim (Circuits)',
          description: "Pipelined version of logic circuit of a 1 clock cycle CPU",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cpu/";
            },},{id: "projects-gradeview-instructor-grade-analytics-dashboard",
          title: 'GradeView Instructor Grade Analytics Dashboard',
          description: "GCP hosted web platform for instructors of 4 microservices, built using React, Node.js, Python Flask, and Redis for analyzing grades, assignment completion rates, and student performance trends of the class. Currently deployed at UC Berkeley&#39;s CS10 course across 3 semesters, supporting 750+ students and 40+ instructors with 94% satisfaction. Completed within CS Ed R&amp;D group, where I was the research lead of the Instructor Dashboard project.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/instructordash/";
            },},{id: "projects-pintos-operating-system",
          title: 'PintOS Operating System',
          description: "A fully functional single-coreoperating system in C for the x86 architecture. It supports multithreading, loading and running user programs, dynamic stack alloction, buffer cache and an inode-based FFS file system.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pintos/";
            },},{id: "projects-pl-graph-constructor",
          title: 'pl-graph-constructor',
          description: "A custom interactive element for PrairieLearn which enables students to construct graphs in a drag-and-drop interface and converts the student-entered graph into a DOT-language form to facilitate autograding. Open-source contribution to PrairieLearn, developed within UC Berkeley ACE Lab.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pl-graph-constructor/";
            },},{id: "projects-pl-interactive-graph",
          title: 'pl-interactive-graph',
          description: "An Interactive Tool for Randomized Autogradable Graph Assessments + Open-source contribution to PrairieLearn. Developed within UC Berkeley ACE Lab and published by ACM at SIGCSE 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pl-interactive-graph/";
            },},{id: "projects-qalam-ai-intelligent-writing-assistant",
          title: 'Qalam AI - Intelligent Writing Assistant',
          description: "BBuilt and presented at CalHacks 11.0, Qalam AI is a full-stack writing assistant developed using Python, Reflex, and SingleStore, with a custom pipeline featuring three Groq-hosted LLMs for entity detection, story summarization, and prompt generation with voice integration via Cortesia.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/qalamai/";
            },},{id: "projects-scheme-interpreter",
          title: 'Scheme Interpreter',
          description: "Designed an interpriter for Scheme functional language in Python",
          section: "Projects",handler: () => {
              window.location.href = "/projects/scheme/";
            },},{id: "projects-secure-file-sharing-system",
          title: 'Secure File Sharing System',
          description: "Fully secure end-to-end encrypted system for creating and sharing files through an insecure database",
          section: "Projects",handler: () => {
              window.location.href = "/projects/secure-file-sharing/";
            },},{id: "projects-snek-in-c",
          title: 'Snek in C',
          description: "Modified Snake Game written in C with optimized memory",
          section: "Projects",handler: () => {
              window.location.href = "/projects/snek/";
            },},{id: "projects-hybrid-detection-of-vulnerabilities-in-smart-contracts",
          title: 'Hybrid Detection of Vulnerabilities in Smart Contracts',
          description: "An Interactive Tool for Randomized Autogradable Graph Assessments + Open-source contribution to PrairieLearn. Developed within UC Berkeley ACE Lab and published by ACM at SIGCSE 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/soterio/";
            },},{
        id: 'social-acm',
        title: 'ACM DL',
        section: 'Socials',
        handler: () => {
          window.open("https://dl.acm.org/profile/https://dl.acm.org/profile/99661520022/", "_blank");
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
