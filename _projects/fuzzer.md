---
layout: page
title: Mutation-based Grammar Aware Fuzzer for SAT Solvers
description: A high-performance SAT fuzzer built to uncover bugs and stability issues in C-based SAT solvers. The tool generates and mutates Boolean formulas in DIMACS CNF format, aggressively probing solvers for undefined behavior, logic inconsistencies, and sanitizer violations.
img: assets/img/fuzzing.JPG
importance: 4
category: masters
related_publications: false
---

## ⚡ SAT Fuzzer

**Type:** Systems Software / Fuzzing Tool  
**Tech Stack:** Python · Bash · C · gcov · ASan · UBSan  
**Focus:** Mutation-Based, Grammar-Aware Fuzzing  

### Overview
A high-performance **SAT fuzzer** built to uncover bugs and stability issues in C-based SAT solvers.  
The tool generates and mutates Boolean formulas in **DIMACS CNF format**, aggressively probing solvers for undefined behavior, logic inconsistencies, and sanitizer violations.

### Core Design
The fuzzer combines **mutation-based** and **grammar-aware** strategies, ensuring every generated input respects CNF structure while still pushing edge cases. It continuously monitors execution feedback from instrumented solvers to refine test generation and maximize coverage.

Each fuzzing cycle:
1. **Mutates valid CNF seeds** — flipping literals, duplicating or removing clauses, altering variable counts.  
2. **Executes the solver** in an instrumented environment (ASan + UBSan + gcov).  
3. **Captures sanitizer outputs and coverage data**, logging crashes and undefined behaviors.  
4. **Maintains a rolling corpus** of the 20 most diverse bug-triggering inputs using an adaptive eviction policy.

### Key Features
- **Grammar-aware mutations:** Fully respects DIMACS syntax while allowing deep structural perturbations.  
- **Coverage-guided execution:** Integrates with `gcov` to drive exploration toward uncovered solver logic.  
- **High-throughput fuzzing loop:** Optimized process management with smart timeout handling (SIGTERM-based).  
- **Crash corpus management:** Automatically filters and prioritizes unique bugs based on sanitizer signatures and coverage metrics.  
- **Portable build system:** Single `build.sh` script compiles and deploys on any standard Unix environment.

### Results
- Achieved **up to 15 unique bugs per minute** on broken or vulnerable solvers.  
- Reached **100% code coverage** on most tested SAT solvers within minutes.  
- Consistently uncovered deep logic and memory handling flaws across multiple implementations.  

### Impact
The fuzzer demonstrates how **structured mutation, lightweight instrumentation, and feedback loops** can deliver industrial-grade bug discovery rates.  









