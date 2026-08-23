---
title: "Pontryagin's Minimum Principle for Orbit Transfer"
description: "Steering a low-thrust spacecraft to the largest reachable orbit in a fixed time, using optimal control."
period: "Optimal Control Lab, École Centrale de Lyon · 2024/25"
image: "/Portfolio-CV-Blog/assets/images/projects/pontryagin-transfer-geometry.jpg"
slug: "pontryagin-orbit-transfer"
order: 2
tags: ["Optimal Control", "Pontryagin", "MATLAB", "TPBVP", "Astrodynamics"]
---

A lab project (TP Commande Optimale) at École Centrale de Lyon with V. Andrieu and B. Maschke, based on a problem formulated by D. Arzelier.

## The Problem

A spacecraft leaves Earth's orbit with a low but continuous thrust. It has a fixed budget of time — 193 days — and the goal is to end up in the largest possible orbit at the end of it. Mass at departure is about 4536 kg, thrust is constant at roughly 3.78 N, and fuel burns off at 5.84 kg per day.

The only thing you get to control is the direction the engine points: the thrust angle φ(t). Everything else follows from that one steering choice.

<img src="/Portfolio-CV-Blog/assets/images/projects/pontryagin-transfer-geometry.jpg" alt="Interplanetary transfer geometry showing Earth orbit, final orbit and the spacecraft trajectory" class="rounded-xl border border-neutral-200 dark:border-neutral-700" />

## Method

The dynamics in radius and the two velocity components (r, u, v) are first non-dimensionalized, and the objective written as J = −r(t_f), so that maximizing the final radius becomes a minimization.

From there the route is classical optimal control:

- Build the Hamiltonian and derive the adjoint (costate) equations
- Apply Pontryagin's minimum principle, which collapses the optimal steering law to **tan φ\* = λ₂/λ₃** — the thrust direction is fixed entirely by the ratio of two costates
- Verify the Legendre–Clebsch condition, the transversality conditions and the boundary conditions
- Solve the resulting two-point boundary value problem (TPBVP) numerically in MATLAB

The TPBVP is where the difficulty actually lives. The costates have no physical initial values to read off, so they have to be guessed and corrected until the terminal conditions are satisfied.

## Results

<img src="/Portfolio-CV-Blog/assets/images/projects/pontryagin-optimal-command.jpg" alt="Evolution of the optimal command alpha over time" class="rounded-xl border border-neutral-200 dark:border-neutral-700" />

The optimal command sweeps slowly for most of the transfer, then turns sharply near day 95 — the point where the craft stops building up speed and starts converting it into radius.

<img src="/Portfolio-CV-Blog/assets/images/projects/pontryagin-state-trajectories.jpg" alt="Normalized state trajectories for radius and velocity components" class="rounded-xl border border-neutral-200 dark:border-neutral-700" />

## Sensitivity

The final time was then varied from 188 to 198 days, and the thrust case F₀ = 0 examined as a reference.

<img src="/Portfolio-CV-Blog/assets/images/projects/pontryagin-orbit-transfer.png" alt="Comparison of optimal commands for final times between 188 and 198 days" class="rounded-xl border border-neutral-200 dark:border-neutral-700" />

<img src="/Portfolio-CV-Blog/assets/images/projects/pontryagin-states-vs-tf.jpg" alt="Normalized state trajectories for varying final times" class="rounded-xl border border-neutral-200 dark:border-neutral-700" />

The family of solutions stays tightly bunched and shifts smoothly with t_f, with the switching point moving along in step. The structure of the optimal solution is robust to the time budget; only its timing shifts.

<a
  href="/Portfolio-CV-Blog/assets/documents/pontryagin-orbit-transfer-report.pdf"
  target="_blank"
  class="inline-flex items-center gap-2 mt-4 px-4 py-2 text-sm font-medium text-neutral-900 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-600 dark:hover:bg-neutral-700 transition-colors no-underline"
>
  Read the full report with derivations (PDF) →
</a>
