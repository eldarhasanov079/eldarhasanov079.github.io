---
layout: page
title: RISC-V Classifier
description: A RISC‑V assembly-based MNIST classifier that ingests image and weight files, executes a fully-connected neural net (matrix multiply → ReLU → matrix multiply → argmax), and outputs digit predictions
img: assets/img/digits.png
importance: 6
category: undergraduate
---

This project was fully written in RISC-V ASSEMLY language for CS61C - Computer Architecture course. It is a written number classifier machine learning model which is split across multiple file-functions such as ReLu, matrix multiplication, dot product, convolution and finally classification. 

• Implemented MNIST handwritten-digit classifier in RISC‑V assembly (CS 61C Project 2, UC Berkeley): built end-to-end inference pipeline on the Venus simulator.

• Authored core computation routines: dot-product, matrix multiplication, ReLU activation, and argmax—all abiding by calling conventions and performing manual memory management.

• Optimized register usage and stack frame management for callee/caller-saved registers, ensuring correctness under Venus-regulated calling-convention checks.

• Constructed thorough unit + integration tests using Venus’s automated framework, achieving 100 % code coverage on custom routines and robust testing across edge cases.

• Gained low-level systems experience: manual memory allocation on heap/stack, pointer arithmetic, function call mechanics, and debugging in assembly-level simulator—bridging machine architecture and software logic.

• Some of the concepts taken into account while developing this project are: calling convention, stack/heap memory layout, 32-bit architecture and CALL framework. 


{% raw %}

```assembly
inner_loop_start: 

    bleu s4 s8 inner_loop_end 
    mul s10 s1 s9 
    mul s10 s10 s6 
    add s10 s10 s7 
    mv a0 s10 
    mul t0 s8 s9 
    add t0 t0 s2 
    mv a1 t0 
    mv a2 s1 
    addi t6 x0 1
    mv a3 t6 
    mv a4 s4 
    jal ra, dot 
    mul s11 s4 s9 
    mul s11 s11 s6
    mul t2 s8 s9 
    add s11 s11 t2 
    add s11 s11 s5 
    sw a0 0(s11)
    addi s8 s8 1
    
    j inner_loop_start
```

{% endraw %} 
