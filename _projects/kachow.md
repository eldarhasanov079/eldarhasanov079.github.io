---
layout: page
title: Optimized Parallel Convolution 
description: Implementing Parallelization for Convolve functions
img: assets/img/image.png
importance: 3
category: academic
---

This project was fully written in C, specifically mostly using OpenMP and OpenMPI frameworks for CS61C - Computer Architecture course in partnership with Nurzhan Abdrassilov. The project consisted of speeding up and optimizing convolution through such techniques as SIMD, multithreading, multitasking, algorithmic optimization.

Note: Convolution is a special way of multiplying two vectors or two matrices together in order to determine how well they overlap.

As a result, we were able to achieve a 7.98x speedup for random cases using optimization without Open MPI and 5.19x speedup while optimizing through Open MPI. ![alt text](image.png)

Here is a little snipped of an optimized loop:
{% raw %}

```c

    #pragma omp parallel for 
    for (uint32_t i = 0; i < rows; i++) {
        #pragma omp parallel for
        for (uint32_t j = 0; j < cols; j++) {
            __m256i sum = _mm256_setzero_si256();
            for (uint32_t k = 0; k < bRows; k++) {
                int32_t* a_row = &a_matrix->data[(i + k) * aCols + j];
                int32_t* b_row = &b_matrix->data[k * bCols];
                for (uint32_t l = 0; l < (bCols / 8) * 8; l += 8) {
                    __m256i aValues = _mm256_loadu_si256((__m256i *)(a_row + l));
                    __m256i bValues = _mm256_loadu_si256((__m256i *)(b_row + l));
                    __m256i mult = _mm256_mullo_epi32(aValues, bValues);
                    sum = _mm256_add_epi32(sum, mult);
                }
              
                for (uint32_t l = (bCols / 8) * 8; l < bCols; l++) {
                    (*output_matrix)->data[i * cols + j] += a_row[l] * b_row[l];
                }
            }

            int32_t temp[8];
            _mm256_storeu_si256((__m256i*)temp, sum);
            for (int idx = 0; idx < 8; ++idx) {
                (*output_matrix)->data[i * cols + j] += temp[idx];
            }
        }
    }
```

{% endraw %}
