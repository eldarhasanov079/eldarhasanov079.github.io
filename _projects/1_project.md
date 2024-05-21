---
layout: page
title: Build Your Own World
description: 2D Random World Generating Game in Java
img: assets/img/world.png
importance: 1
category: academic
related_publications: false
---
Skills: Java, Data Structures, Graph Theory, Algorithms, Testing

This project was created as a final class project for CS61B - Data Structures and Algorithms course together with my project partner - Sanzhar Abatov.

The project itself is a 2D random world generating engine with a game written for it. Each world is random for a unique seed and contains variety of resources, the avatar (controllable character) and enemies some of which move randomly and one is using an optimized search algorithm to pursue the avatar. The goal is to collect as many resources as possible without encountering the enemies. It is also possible to save the game and come back later thanks to save file system. 

The entire code was written from scratch in Java and we have used JUnit testing to comprehensively test our implementation. Throughout the project we have implemented and used such data structures as graphs, hash tables, PQs and deques. We have also implemented a modified version of A* algorithm for the "smart" enemy, version of Kruskal's algorithm to create corridors and other algorithms. 

Here is a [project demo](https://www.youtube.com/watch?v=WIVovfbQCf4&t=31s&ab_channel=EldarHasanov) we recorded in Fall 2022.

