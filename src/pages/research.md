---
layout: ../layouts/Page.astro
title: Research
description: Research on distributed training, fault tolerance, agent execution, and computer science education.
---

## Networks for training large models

For my MSc at Imperial’s [Large-Scale Data & Systems group](https://lsds.doc.ic.ac.uk/), I worked with [Marios Kogias](https://marioskogias.github.io/) and collaborators at [NVIDIA Research](https://research.nvidia.com/) on network planning for mixture-of-experts training. Each batch can send tokens to a different set of experts. I studied how to plan and schedule those transfers so accelerators spend less time waiting for one another.

A related question was how much training time goes into saving checkpoints. Our [CheckWork paper](https://doi.org/10.1145/3820441.3820476) presents a way to study that cost in simulation. We added checkpoint operations to training graphs and generated Chakra traces for tools such as ASTRA-sim and ns-3. That let us study how checkpoint traffic competes with training traffic without renting a cluster for every comparison. The [code is on GitHub](https://github.com/eldarhasanov079/checkwork).

<figure class="snapshot">
  <a href="/photos/apnet.webp"><img src="/photos/apnet.webp" width="1100" height="828" loading="lazy" alt="Presenting CheckWork in front of its title slide in Singapore" /></a>
  <figcaption>Presenting CheckWork at APNet 2026, Singapore.</figcaption>
</figure>

Compute should get cheaper in two ways. Engineers can build better chips, and the rest of us can get more useful work out of every chip they build. [Fluid](/clusy/#fluid) is our bet on the second.

## Execution environments for agents

At [Clusy](/clusy/) I work on distributed execution environments for agents. In a notebook, cells can run out of order and their state sticks around. If an agent wants to try five variants of an experiment, how much of the work can those variants share? That question led us to kernel snapshots and branching. I wrote about it in [Data Science As a Search Problem](https://www.clusy.io/blog/data-science-as-a-search-problem).

<h2 id="teaching">Tools for teaching computer science</h2>

At Berkeley I worked in [Dan Garcia](https://people.eecs.berkeley.edu/~ddgarcia/)’s CS Education R&D Group and [ACE Lab](https://acelab.berkeley.edu/). In a mastery-learning course, students can revisit an assignment and demonstrate understanding on their own schedule. Course staff need to see where students are getting stuck across all those attempts.

I led a team of six building the data pipelines, infrastructure, and [instructor dashboard](https://doi.org/10.1145/3770761.3777343) for [GradeView](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2025/EECS-2025-127.html). The dashboard shows grades, completion, and score trends. The system grew to serve more than 1,000 CS10 students across four terms.

<figure class="snapshot">
  <a href="/photos/gradeview-poster.webp"><img src="/photos/gradeview-poster.webp" width="1800" height="1350" loading="lazy" alt="GradeView poster showing the data pipeline, assignments view, and student dashboard" /></a>
  <figcaption>The instructor dashboard and its data pipeline, SIGCSE TS 2026.</figcaption>
</figure>

Graph problems presented a different teaching problem. A student might trace a breadth-first search or draw a counterexample, then wait for someone to grade the sketch. With [Dan Garcia](https://people.eecs.berkeley.edu/~ddgarcia/), [Armando Fox](https://www.armandofox.com/), and [Narges Norouzi](https://nargesnorouzi.me/), I helped build two open-source [PrairieLearn](https://prairielearn.readthedocs.io/en/latest/) elements in Python and JavaScript.

- [IGAT](https://github.com/eldarhasanov079/pl-interactive-graph-v2) generates randomized questions on graphs that students can manipulate and receive feedback on immediately. [SIGCSE TS 2025 paper](https://doi.org/10.1145/3641555.3705123).
- [GCUI](https://github.com/eldarhasanov079/pl-graph-constructor) lets students construct a graph directly and checks it automatically. [CompEd 2025 paper](https://doi.org/10.1145/3736251.3747306).

<figure class="snapshot">
  <a href="/photos/graph-constructor.webp"><img src="/photos/graph-constructor.webp" width="960" height="540" loading="lazy" alt="Graph constructor poster showing the editor and feedback from teaching assistants" /></a>
  <figcaption>The graph constructor, CompEd 2025, Gaborone.</figcaption>
</figure>

<figure class="snapshot">
  <a href="/photos/sigcse.webp"><img src="/photos/sigcse.webp" width="1200" height="900" loading="lazy" alt="Discussing the interactive graph assessment poster with an attendee" /></a>
  <figcaption>Talking through a graph assessment at SIGCSE TS 2025, Pittsburgh.</figcaption>
</figure>

## Earlier research

At USC’s [Information Sciences Institute](https://www.isi.edu/), I trained classifiers to check writing against style guides. I worked with logistic regression, BERT, and OpenAI models, using synthetic examples, parameter-efficient fine-tuning, and high-performance computing clusters.

My first research job was at Berkeley’s [Space Sciences Laboratory](https://www.ssl.berkeley.edu/) in 2021–22. On NASA’s [Stardust mission](https://science.nasa.gov/mission/stardust/), I trained TensorFlow classifiers to find candidates for interstellar dust in collector images and worked on an autograder for identifying particles from EDS data.

The [publications page](/publication/) has the full citations.
