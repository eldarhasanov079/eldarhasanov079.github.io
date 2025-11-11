---
layout: page
title: Data De-Identification for Public Health Analytics
description: A privacy-preserving data release applying k-anonymity, ℓ-diversity, and statistical disclosure control to a 150k-record health dataset, mitigating re-identification and inference attacks.
img: assets/img/privacy.png
importance: 6
category: masters
related_publications: false
---

# Privacy-Preserving Data Release via Structured De-Identification

**Type:** Data Security & Privacy Engineering  
**Stack:** Python · NumPy · Pandas · Scikit-learn · SHA-256 · Statistical Disclosure Control  
**Focus:** K-Anonymity · ℓ-Diversity · Attribute Generalization · Re-identification Risk Modelling  

## Overview
Designed and implemented a **systematic de-identification framework** to enable the **secure public release** of a 150,000-record dataset containing sensitive demographic and health attributes.  
The system enforces **quantifiable privacy guarantees** (k-anonymity, ℓ-diversity), integrates **statistical disclosure control (SDC)** techniques, and performs **adversarial attack simulations** to empirically validate resistance to identity, linkage, and inference attacks. 

## Threat Model and Risk Analysis
- **Adversary model:** Assumes access to auxiliary quasi-identifiers (e.g., DOB, region, occupation) and external public registries.  
- **Attack surface:** Re-identification via linkage, attribute inference (skewness attacks), and semantic correlation leakage.  
- **Mitigation:** Structural generalization, suppression of high-risk equivalence classes, and controlled granularity reduction of sensitive attributes. 

## De-Identification Pipeline
1. **Direct Identifier Sanitization**
   - `name` replaced with **salted SHA-256 pseudonyms** (non-reversible, salt discarded).  
   - High-risk, non-essential attributes (`num_children`, `home_ownership`) removed to reduce dimensional uniqueness.  

2. **Attribute Generalization**
   - **DOB → 5-year bands** to increase k-equivalence.  
   - **Income → logarithmic binning** (1k–50k tiers) to counter sparsity at upper quantiles.  
   - **Postcode → two-character prefix** (county-level) to remove fine-grained location traceability.  
   - **Malnutrition score → rounding to nearest 10**, lowering record uniqueness.  

3. **Formal Privacy Guarantees**
   - **k-Anonymity (k=3):** Ensures every quasi-identifier tuple maps to ≥3 records.  
   - **ℓ-Diversity (ℓ=3):** Guarantees at least three distinct sensitive-attribute values per equivalence class.  
   - **t-Closeness (σ≈0.03):** Empirically verified but excluded to maintain analytical utility.  
   - Overall **privacy risk reduction >99.9%** relative to baseline linkage model. 

## Statistical Utility Preservation
- **Ethnicity ↔ Disease:** Δ Cramér’s V < 0.01 (correlation preserved).  
- **Income ↔ Benefits:** Predictive association intact (Cramér’s V = 0.27 → 0.27).  
- **Education ↔ Malnutrition:** Aggregated geographic signal retained; spatial coherence maintained despite regional coarsening.  
- Macro-level distributions remained within **±5%** deviation of original marginals. 

## Adversarial Simulation
- **Record Linkage Attack:** Precision@1 = 0 under auxiliary QI exposure — no deterministic re-identifications.  
- **Skewness Attack:** Residual micro-group lift < 3.0; inference risk limited to statistical, not identity-level, leakage.  
- **Semantic Attack:** High entropy (≈ 0.9) and low category purity (≈ 0.2) demonstrate semantic robustness. 

## Security–Utility Trade-Off
| Metric | Pre-Anonymization | Post-Anonymization | Δ Utility |  
|:--|:--:|:--:|:--:|  
| Records Retained | 150 000 | **118 654** | –20.9 % (suppression + diversity enforcement) |  
| k | — | **3** | — |  
| ℓ | — | **3** | — |  
| Mean Uniqueness | 0.83 | **0.004** | ↓ 99.5 % |  
| Re-ID Precision@1 | 0.42 | **0.00** | ↓ 100 % |  

The final dataset maintains **information-theoretic privacy** under equivalence-class modelling while preserving **statistical validity** across all three analytical tasks. 

## Outcome
Delivered a **privacy-engineered, publicly releasable dataset** compliant with statistical disclosure control principles.  
By integrating **cryptographic pseudonymization**, **structured generalization**, and **quantitative privacy–utility analysis**, the solution establishes a reproducible framework for secure data publishing in health and fairness research. 
