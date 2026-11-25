---
layout: ../layouts/Page.astro
title: Clusy Inc.
description: How a hackathon notebook grew into Clusy, and why we built Fluid to move running Python jobs between clouds.
---

I co-founded [Clusy Inc.](https://www.clusy.io/) with [Ju Lin](https://julin.org/) and [Fouzil Ali](https://www.linkedin.com/in/fouzilali) as CTO. We met during our master's degrees at [Imperial College](https://www.imperial.ac.uk/), and have been building together ever since. We started in London and eventually moved to San Francisco after getting invited by [Founders, Inc.](https://f.inc/).

We are building around an idea of [workload portability](https://www.clusy.io/blog/towards-fluid-compute) - how do we decouple the idea of a runtime from the underlying hardware?

Throughout our experience in research and industry, as well as building our first product together, we have always been accustomed to the idea of a workload being attached to the environment it has started in.

Code and environment distribution as a problem has been solved ages ago through [Git](https://git-scm.com/) and [Docker](https://docs.docker.com/). However, with the rise of LLMs and tremendous breakthroughs in their capabilities to produce code, we believe that code itself has become a commodity. Given that, we believe that as code becomes easier to generate, the value of a program increasingly shifts to the state it accumulates during its run. Let's call it state weight. This is most apparent in computationally heavy, stateful workloads such as model training, fine-tuning and simulations. We can make another copy of a training script almost for free. Reproducing the weights and optimizer state it took a week of training to arrive at could cost us another week on the same GPUs.

Therefore, there exists a growing need to accurately represent this state, such that it can be migrated, replicated and forked - just like code. It is also essential for this mechanism to remain hardware and provider agnostic, just like git or Docker, so the state can be moved theoretically anywhere (within reasonable bounds). Therefore, relying on lower-level techniques such as process-level snapshots (see [CRIU](https://criu.org/) or [DMTCP](https://dmtcp.sourceforge.io/)) or VM snapshots would not work, as these techniques introduce dependence on native state and hardware underneath.

The [demand for compute to train AI models](https://epoch.ai/publications/training-compute-of-frontier-ai-models-grows-by-4-5x-per-year) keeps growing. When GPUs are scarce in one cloud, a company can end up paying a premium to start a training run there while GPUs it already pays for sit idle overnight in another. Even [within a single cluster](https://www.usenix.org/conference/osdi26/presentation/li-suyi), free GPUs can be spread across machines in ways that leave jobs waiting. How much more training could we do with the hardware we already have if a run could move to where the capacity is? That is the question we want to answer with Fluid.

## Fluid

[Fluid](https://fluid.clusy.io/) is the training platform we are building around that idea. We chose a bring-your-own-cloud (BYOC) model because most companies already have cloud accounts, credits and machines of their own. A team [connects the cloud accounts it wants to use](https://portal.clusy.io/docs/connect-compute) and submits its Python training script. Fluid compares machines that can run it, whether it needs a single GPU or several GPUs on one machine for a [distributed PyTorch run](https://docs.pytorch.org/docs/stable/elastic/run.html). The team chooses where to start and pays its provider directly at its existing rates.

Say we have been training a model for six hours when a cheaper GPU becomes available on another cloud. Fluid captures the state of the running program at the application level, down to our place in the training loop. We can take that state to a compatible GPU and use it for the next six hours. We wrote up [one job we moved from AWS to Lambda and back](https://fluid.clusy.io/cases#tour), with its arrays and its place in the loop intact. The choice of where to run the program becomes something we can revisit while it is running. Over time, we want companies to be able to grow the amount of training they do faster than they grow their infrastructure budgets or their demand for power.

## SOMA

Fluid is based on our Session-Oriented Migration Abstraction (SOMA), a system we built to move live Python sessions between runtimes. As far as we know, it is the first system that can move a session across operating systems, CPU architectures and GPU models.

Our paper on SOMA was accepted to the [industry track at ACM Middleware 2026](https://middleware-conf.github.io/2026/program/full-program/). The [code and experiments](https://github.com/clusy-io/soma) are public.

## The notebook

[Clusy Notebook](https://www.clusy.io/notebook) was the first product we built together and the one that brought us to San Francisco. It started at a hackathon in London. We spent the next six months building a notebook we wanted to use ourselves, where we could give an agent access to a live [Jupyter kernel](https://docs.jupyter.org/en/latest/projects/kernels.html) and [branch an experiment](https://www.clusy.io/blog/introducing-branched-experiments) from any cell. That was the product we took to Founders, Inc. for [Off-Season II](https://f.inc/offseason/2/teams/clusy).

The migration problem first came up when we wanted to move a running notebook from [E2B](https://e2b.dev/) to [AWS](https://aws.amazon.com/). Even within one experiment, we wanted to prepare the data on a CPU, switch to a GPU for training and go back to a CPU for analysis. We also wanted to move from a smaller GPU to a bigger one when a model ran out of memory, then back to the smaller GPU when we could do with less. The user still had the same notebook open. Why should they have to rerun the cells? What if the cells take 10 hours to rerun? We first built the first version of SOMA as a way for a live Jupyter kernel to make those moves. Our current infrastructure and Fluid grew out of that work.

## Company History

I met Ju at a hackathon award ceremony at Imperial, his team won the first place, while I got some sort of a category prize. I convinced him to team up for UK's largest AI hackathon where we built a pre-historic version of Clusy. We were 1 point away from winning and believed that we were horribly underjudged, which pushed us to work on the project more and even apply to YC for the first time (we got rejected).

Fouzil was Ju's coursemate, we became good friends while spending time at the [Abdus Salam Library](https://www.imperial.ac.uk/admin-services/library/use-the-library/our-libraries/abdus-salam-library/) and eventually convinced him to join the team. Together, we first came up with the idea for the notebook, as we were having hard times with Jupyter Notebooks ourselves and shared the pain. Over several months of intense building, we got to a point where we realised that our internal project to help us do our thesis work has slowly become a product.

We submitted an application to Founders, Inc. and a couple days later got an invitation for a chat with [Hubert Thieblot](https://f.inc/team) who invited us to the campus to participate in Off Season II and urged us to move to SF. During the 6 weeks of Off Season, we launched our product and got our first 5K users which resulted in our [first investment from Founders, Inc.](https://f.inc/portfolio/clusy/)

After graduating the same month, we moved to SF and since then are building out of our workspace on the [Founders, Inc. campus at Fort Mason](https://f.inc/campus) along with all the amazing companies around us.

Our notebook product has reached 15K+ users and we have recently shifted focus towards the infrastructure we built for it, in order to solve a bigger and more ambitious problem - compute underutilization. We approach it from workload portability perspective with Fluid.

<figure class="snapshot">
  <a href="/photos/founders.webp"><img src="/photos/founders.webp" width="1100" height="704" alt="Three instant-film portraits of the Clusy founders connected by red beads on a wooden table" /></a>
  <figcaption>Fouzil (CPO), Ju (CEO), and me (CTO).</figcaption>
</figure>

## Internal Tools

A few things we built for Clusy are now open source.

- **[Clusy Meet](https://github.com/clusy-io/meet)** — Runs [our booking page](https://www.clusy.io/meet/eldar) and checks our Google and Microsoft calendars to find a time when everyone needed for a call is free. We hate Calendly and Cal.com is just not cool (no disrespect).
- **[Status Page](https://github.com/clusy-io/status-page)** — Powers [our public status page](https://status.clusy.io/), showing which services are up and when each incident started and ended. You can host your own.
- **[Clusy Crawler](https://github.com/clusy-io/clusy-crawler)** — Turns web pages and PDFs into Markdown on our own machines without sending the document to a model. On the [181-page Article Extraction Benchmark](https://github.com/clusy-io/clusy-crawler/blob/main/bench/NEUTRAL_BENCHMARK.md), it scored 0.972 F1 against Trafilatura 2.1.0’s 0.958.

We also built these for our own team.

- **Nailong** — Our personal Slack assistant agent, and sort of an in-house SRE.
- **Contract editor** — Our own in-house DocuSign that's just more flexible, looks cooler and works more efficiently. If you have a luck of being our customer, you will encounter it.
- **Clusy Sentinel** — Our internal telemetry and analytics system, which also alerts us when a Clusy service goes down. As a CTO, I am often on call and this is probably my least favorite internal tool.
- **Fluid test bench** — Runs the same job twice, once uninterrupted and once with a move from AWS to Modal. We compare the results to check that the job picked up where it left off.
- **Notebook regression suite** — Runs a cell, forks a notebook or restores a sandbox against the live stack, then checks the saved state and the trace across services.
- **Social CLI** — Tool that lets us manage and post same content across different social media platforms.
- **Agent evals** — Gives our notebook agent tasks like exploring a dataset or comparing two training runs. It grades the notebook the agent leaves behind against a rubric for that task.


## Shoulders of Giants

As we build Clusy, we try to learn from the companies we admire.

We look to [Stripe](https://stripe.com/careers/compatibility) for its customer obsession and craftsmanship. This website takes its design inspiration from the personal site of Stripe co-founder [Patrick Collison](https://patrickcollison.com/about). We admire the care Google puts into [its internal tools](https://research.google/pubs/why-google-stores-billions-of-lines-of-code-in-a-single-repository/) and try to bring the same care to [our own](#internal-tools). We also learn from [NVIDIA](https://www.nvidia.com/en-us/data-center/) and its approach to building infrastructure from first principles.

We also draw inspiration from the startups we meet in Silicon Valley. They have crazy ideas and an unwavering belief that anything is possible. The speed at which they turn those ideas into something real pushes us to move faster.
