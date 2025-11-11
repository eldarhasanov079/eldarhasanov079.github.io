---
layout: page
title: Symbolic Execution Engine Extension and Analysis with KLEE
description: Symbolic-execution workflow around KLEE with containerized runs, live Grafana telemetry, introducing a custom SymLoadSearcher heuristic that delivered higher instruction coverage with controlled memory growth.
img: assets/img/klee.png
importance: 5
category: masters
related_publications: false
---

# Symbolic Execution – KLEE Engineering

**Type:** Systems Tooling / Program Analysis  
**Stack:** KLEE · LLVM IR · Singularity/Docker · Grafana · QCachegrind · ASan  
**Focus:** Reproducible sym-exec, bug discovery, custom search heuristic

## Overview
Engineered a robust, repeatable workflow for **dynamic symbolic execution** with KLEE: clean containerisation, scripted builds, real-time telemetry, and post-hoc visualisation. Extended KLEE with a **new global statistic** (symbolic loads) and a **custom searcher** that prioritises paths with fewer symbolic-loads to push deeper, faster. Result: concrete crashing inputs, strong coverage, and clear performance trade-offs across search strategies. :contentReference[oaicite:1]{index=1}

## What we built
- **Containerised KLEE toolchain** (Singularity/Docker) with host-mapped workspaces and one-liner `kd` invocations for compilation, runs, and result harvesting. :contentReference[oaicite:2]{index=2}
- **Telemetry & insight loop:** `klee-stats` + **Grafana** for time-series (states, memory, paths) and **QCachegrind** for instruction-level hotspots and forking sites. :contentReference[oaicite:3]{index=3}
- **Bug-to-input pipeline:** Take KLEE-generated tests, replay on ASan-instrumented binaries, and capture minimal crashing inputs for direct reproduction. :contentReference[oaicite:4]{index=4}
- **KLEE core extensions:**  
  - New **statistic** counting symbolic-loads across all paths.  
  - **SymLoadSearcher**: a custom search heuristic that always schedules the path with the fewest symbolic-loads, trading breadth for depth to accelerate useful exploration. :contentReference[oaicite:5]{index=5}

## Highlights & Results
- **Concrete bug reproduction:** Identified and confirmed a **stack-buffer-overflow** in the `Regexp.c` example via ASan; captured the exact failing testcases and addresses in the trace. :contentReference[oaicite:6]{index=6}
- **Crashing inputs on tap:** Extracted **hex** representations of bug triggers to simplify cross-checking and regression tests. :contentReference[oaicite:7]{index=7}
- **Quick wins with KLEE basics:** First pass completed **33 instructions** and yielded **3 tests** on the tutorial target—sanity-checking the toolchain and dashboards. :contentReference[oaicite:8]{index=8}
- **Coreutils analysis (cat/expr):**  
  - Demonstrated how **symbolic CLI/STDIN shape** dictates path explosion and test counts (1 → 21 → **380** generated tests across three `cat` configs). :contentReference[oaicite:9]{index=9}  
  - Time-boxed experiments on `expr` comparing DFS/BFS/Random-Path(+covnew) at scale:
    - **DFS:** ~**7,597** tests, ~**7,559** completed paths, low memory and small active frontier. :contentReference[oaicite:10]{index=10}  
    - **BFS:** ~**8,936** tests, ~**5.4k** partial paths, higher memory due to wide frontier. :contentReference[oaicite:11]{index=11}  
    - **Random+covnew:** ~**17,144** tests, frontier balloons to ~**14k** states; **highest memory** but broad exploration. :contentReference[oaicite:12]{index=12}
- **New global metric:** Counted **36,283** symbolic-loads on a 10-minute `expr` run (DFS), giving a solid signal to steer exploration depth. :contentReference[oaicite:13]{index=13}
- **Custom searcher impact:**  
  - **Memory:** grows slower than random-path and closer to DFS; peaked around **~300M** MallocUsage units in our window. :contentReference[oaicite:14]{index=14}  
  - **Coverage:** reached **~16k** distinct instructions—**best coverage** in our comparison set within fixed time, with less overhead than breadth-first approaches. :contentReference[oaicite:15]{index=15}

## Why it matters
This setup converts symbolic execution from a research demo into a **repeatable engineering workflow**: container-first builds, live metrics, deterministic artefacts, and actionable crashing inputs. The **SymLoadSearcher** shows how a targeted heuristic can unlock **deeper coverage** without runaway memory, making sym-exec a practical lever for real systems code. :contentReference[oaicite:16]{index=16}
