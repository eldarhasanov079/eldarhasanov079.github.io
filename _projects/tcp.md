---
layout: page
title: Reliable TCP Socket
description: A Python‑based transport-layer socket built atop the POX network simulator to implement a TCP-like protocol (3‑way handshake, byte-stream transfer, FIN teardown, retransmission strategy with RTT/RTO estimation, and flow-control)
img: https://textbook.cs168.io/assets/transport/3-045-state-diagram.png
importance: 4
category: undergraduate
related_publications: false
---

• Implemented a TCP transport-layer socket in Python (CS 168 Project 3, UC Berkeley): developed a custom StudentUSocket on the POX controller to manage reliable byte streams.

• Completed key TCP mechanisms: three-way handshake (SYN, SYN–ACK, ACK), FIN teardown, sequence/ack tracking across all states (SYN‑SENT → ESTABLISHED → FIN_WAIT → CLOSED).

• Engineered retransmission logic with timeout queue and RTO estimation per RFC 6298 (RTT estimation, SRTT, RTTVAR, RTO) to guarantee reliability without congestion control.

• Enforced sliding-window flow control honoring peer’s advertised window, ensuring ordered, in-sequence delivery and proper window regulation.

• Built robust unit testing harness across 9 progressive stages (handshake, data transfer, teardown, retransmission, timeout updates), passing all automated tests with high coverage.

• Deepened systems-level understanding of TCP internals: socket state machine, packet parsing/generation, timer management, and POX-based network simulation in Python.









