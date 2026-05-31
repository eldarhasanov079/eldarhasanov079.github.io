---
layout: page
permalink: /teaching/
title: teaching
description: Teaching, mentoring, and tutoring roles at UC Berkeley
nav: true
nav_order: 6
---

I have supported students across computer science, engineering ethics, data structures, and security through course staff, mentorship, and department tutoring roles at UC Berkeley.

<div class="teaching-list">
  <section class="teaching-card">
    <div class="teaching-card-header">
      <h2>Course Staff</h2>
      <span class="teaching-term">Spring 2024</span>
    </div>
    <p>
      <strong>Teaching Assistant</strong>, ENGIN 125 - Ethics, Engineering and Society
      <span class="teaching-org">UC Berkeley</span>
    </p>
  </section>

  <section class="teaching-card">
    <div class="teaching-card-header">
      <h2><a href="https://csmentors.studentorg.berkeley.edu/#/">Computer Science Mentors</a></h2>
      <span class="teaching-term">Fall 2023 - Fall 2024</span>
    </div>
    <ul>
      <li><strong>Senior Mentor</strong>, CSM 61B - Data Structures and Algorithms <span>Fall 2024</span></li>
      <li><strong>Senior Mentor</strong>, CSM 61B - Data Structures and Algorithms <span>Spring 2024</span></li>
      <li><strong>Junior Mentor</strong>, CSM 61B - Data Structures and Algorithms <span>Fall 2023</span></li>
    </ul>
  </section>

  <section class="teaching-card">
    <div class="teaching-card-header">
      <h2>Tutoring</h2>
      <span class="teaching-term">Spring 2024 - Summer 2025</span>
    </div>
    <ul>
      <li><strong>EECS Department Private Tutor</strong>, CS 161 - Computer Security <span>Summer 2025</span></li>
      <li><strong>SEED Scholars Excellence Tutor</strong>, CS 161 - Computer Security <span>Spring 2025</span></li>
      <li><strong>EECS Department Private Tutor</strong>, CS 61B - Data Structures and Algorithms <span>Fall 2024</span></li>
      <li><strong>EECS Department Private Tutor</strong>, CS 61B - Data Structures and Algorithms <span>Spring 2024</span></li>
    </ul>
  </section>
</div>

<style>
  .teaching-list {
    display: grid;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .teaching-card {
    border: 1px solid var(--global-divider-color);
    border-radius: 0.75rem;
    padding: 1.25rem;
    background: var(--global-card-bg-color);
  }

  .teaching-card-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.75rem;
  }

  .teaching-card h2 {
    font-size: 1.15rem;
    margin: 0;
  }

  .teaching-card p,
  .teaching-card ul {
    margin-bottom: 0;
  }

  .teaching-card ul {
    padding-left: 1.1rem;
  }

  .teaching-card li {
    margin-bottom: 0.45rem;
  }

  .teaching-card li:last-child {
    margin-bottom: 0;
  }

  .teaching-term,
  .teaching-card li span,
  .teaching-org {
    color: var(--global-text-color-light);
    font-size: 0.9rem;
    white-space: nowrap;
  }

  .teaching-org::before {
    content: " - ";
  }

  @media (max-width: 576px) {
    .teaching-card-header {
      display: block;
    }

    .teaching-term,
    .teaching-card li span,
    .teaching-org {
      display: block;
      margin-top: 0.15rem;
      white-space: normal;
    }

    .teaching-org::before {
      content: "";
    }
  }
</style>
