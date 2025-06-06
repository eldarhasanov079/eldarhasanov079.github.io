---
layout: page
title: Digit Classification (RISC-V)
description: Machine Learning Model built in RISC-V ASSEMBLY language
img: assets/img/digits.png
importance: 6
category: academic
---

This project was fully written in RISC-V ASSEMLY language for CS61C - Computer Architecture course. It is a written number classifier machine learning model which is split across multiple file-functions such as ReLu, matrix multiplication, dot product, convolution and finally classification. 

Some of the concepts taken into account while developing this project are: calling convention, stack/heap memory layout, 32-bit architecture and CALL framework. 


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
