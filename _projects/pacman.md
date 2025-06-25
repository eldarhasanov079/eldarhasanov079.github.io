---
layout: page
title: Pacman AI Agents 
description: Developed and trained a suite of intelligent agents for playing Pac-Man, making use of search algorithms, probabilistic reasoning, adversarial planning, and reinforcement learning 
img: https://inst.eecs.berkeley.edu/~cs188/fa24/assets/projects/maze.png
importance: 5
category: academic
---

Implemented multiple AI agents as part of UC Berkeley’s CS 188 course. 

#### *Search Algorithms (Project 1)*

- Implemented **Depth‑First Search (DFS)**, **Breadth‑First Search (BFS)**, **Uniform‑Cost Search**, and **A\*** to enable Pac-Man to navigate mazes and complete tasks like traveling salesman–style food collection.
- Designed and evaluated admissible heuristics for multi-food/dot collection and “Corners Problem,” achieving efficient, optimal pathfinding under time constraints.

#### *Multi-Agent & Adversarial Planning (Project 2)*

- Engineered agents using **Minimax**, **Alpha‑Beta Pruning**, and **Expectimax** to model adversarial ghost behavior and stochastic game elements.
- Crafted custom evaluation functions to balance risk and reward in competitive, multi-agent Pac‑Man scenarios.

#### *Probabilistic Inference & Ghost Tracking (Project 4)*

- Employed **exact inference** via the forward algorithm on Bayes Nets and implemented **particle filtering** for Hidden Markov Models to accurately track multiple hidden ghosts, even with noisy distance observations.

#### *Reinforcement Learning & MDPs (Project 6)*

- Built a **Value Iteration**–based agent to compute optimal policies for stochastic gridworlds and Pac‑Man MDP settings.
- Developed **Q-Learning** and **Approximate Q-Learning** agents, first in the Gridworld domain and then extended to Pac‑Man and a simulated crawler robot using handcrafted feature extractors.
- Integrated **Deep Q-Networks (DQN)** using PyTorch to train Pac‑Man to win autonomously in at least 60% of test games after ≥1,000 training episodes, scoring full credit.

#### *Integrated Agent Architecture*

- Combined all implemented strategies into a cohesive framework, enabling visualization of agent decision-making and performance in real-time during gameplay.

