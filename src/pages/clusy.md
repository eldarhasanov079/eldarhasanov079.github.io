---
layout: ../layouts/Page.astro
title: Clusy
description: How a hackathon notebook grew into Clusy, and why we built Portal to move running Python jobs between clouds.
---

I co-founded [Clusy](https://www.clusy.io/) with [Ju Lin](https://julin.org/) and [Fouzil Ali](https://www.linkedin.com/in/fouzilali). We started with a notebook we wanted for our own research. These days we build two products in San Francisco, [Portal](https://portal.clusy.io/) and [Clusy Notebook](https://www.clusy.io/notebook).

<figure class="snapshot">
  <a href="/photos/founders.webp"><img src="/photos/founders.webp" width="1100" height="704" alt="Three instant-film portraits of the Clusy founders connected by red beads on a wooden table" /></a>
  <figcaption>Fouzil (CPO), Ju (CEO), and me (CTO).</figcaption>
</figure>

## Portal

Someone can have a GPU sitting idle overnight while someone else has an experiment waiting a week for compute. We want those two facts to add up to a training run.

A long Python job can outlive the machine you started it on. A spot instance gets reclaimed, a model needs a bigger GPU, or a cheaper machine opens up elsewhere. [Portal](https://portal.clusy.io/) saves the program’s state so you can resume it on another machine. A loop can continue from the same iteration even when the new machine uses a different chip or belongs to a different cloud.

In one test we parsed six months of ship positions and moved the running job from AWS to Lambda and back. We also ran a climate analysis that needed 728 GB of memory. The [case studies](https://portal.clusy.io/cases) include the measurements and bills. The [Portal docs](https://portal.clusy.io/docs) explain what gets saved, what can move, and how to run your own job.

## The notebook

The three of us had used computational tools in astrophysics, finance, signal processing, security, and robotics. We kept hitting the same problem. An experiment would suggest several directions, but our notebook gave us one sequence of cells. Giving a coding agent the notebook file only got it halfway there. Variables could still exist from code we’d already deleted.

We built [Clusy Notebook](https://www.clusy.io/notebook) around a live Jupyter kernel. You describe an experiment in chat. The agent can find data, write cells, install dependencies, attach a GPU, and inspect the output. You can edit any cell or take over while it works. Three pieces of the runtime make this possible.

- **Kernel snapshots.** We save the state of the session so a researcher can restore it, share it, or return to an earlier experiment.
- **Cell branching.** Fork a cell and try several architectures or parameter settings in parallel. Each branch inherits the computation up to that point.
- **An agent that can inspect the kernel.** It can see the variables and outputs produced by earlier runs, configure its sandbox, and use that evidence to choose the next step.

The interface uses React, TypeScript, and CodeMirror, with FastAPI, AWS, and Modal underneath. The [notebook documentation](https://docs.clusy.io/docs) covers the workspace.

## How it started

Our first notebook was a hackathon project. We spent the next six months building a version we could use ourselves, then other researchers started using it. We joined [Founders, Inc.](https://f.inc/) for Off-Season II, launched the notebook, and kept shipping every week as the user base grew into the thousands. I write about the engineering behind both products on the [writing page](/writing/).
