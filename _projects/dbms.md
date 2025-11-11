---
layout: page
title: RookieDBMS
description: A lightweight, Java-based DBMS built throughout UC Berkeley’s CS 186 curriculum, implementing core systems concepts across projects 2–5—from B+ tree indexing and joins to concurrency control and ARIES-style crash recovery. It supports efficient query processing, ACID-compliant multi-transaction execution, and fast restart after failures.
img: https://cs186.gitbook.io/~gitbook/image?url=https%3A%2F%2F678656433-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fassets%252F-MFVQnrLlCBowpNWJo1E%252F-MGv2sBScKfZ0PuPbu2f%252F-MGv2xZpFxxZXBGetCxm%252Fb_tree.jpg%3Falt%3Dmedia%26token%3Dec3fb0c7-14ac-4da6-acbb-35c3e8bb550b&width=768&dpr=2&quality=100&sign=386fd245&sv=2
importance: 4
category: undergraduate
giscus_comments: false
---

Skills: Java 8, disk-based storage, B+ trees, buffer management, join algorithms, query planning, locking, ACID semantics, WAL & ARIES recovery, CLI development.

• Designed and implemented a B+ tree index to support efficient key-based lookup, insertion, deletion, and range scans—achieving logarithmic time complexity and reducing query execution time by up to 50% on synthetic workloads.

• Developed join operators (nested–loop, sort–merge, and Grace hash join) and integrated a simple Selinger-style optimizer, resulting in 2–5× speedups over naive execution plans when processing multi-table queries.

• Built multigranularity locking (shared/exclusive locks with intent modes) to enable ACID-compliant concurrent transactions, validating with TPC-B style benchmarks to support 10× concurrent throughput without conflicts.

• Implemented ARIES-style write-ahead logging (WAL) and recovery protocols, including log truncation, checkpointing, and both REDO/UNDO phases—achieving <2 s restart recovery on 1 M record crash-scenarios.

• Integrated buffer and disk management layers: buffer-pool with LRU/Clock eviction and disk-space subsystem; authored ~3,000 lines of Java, passing 100% of autograder tests and supporting full-stack CLI functionality.