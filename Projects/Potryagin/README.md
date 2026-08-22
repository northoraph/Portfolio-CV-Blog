# Pontryagin's Minimum Principle — Interplanetary Orbit Transfer (Optimal Control TP)

- Lab project (TP Commande Optimale), École Centrale de Lyon / Lyon 1, teachers V. Andrieu & B. Maschke (based on a problem by D. Arzelier), 2024/25

## Essence
Maximize the final orbit radius of a low-thrust spacecraft leaving Earth's orbit within a fixed time (tf = 193 days). The spacecraft (m0 ≈ 4536 kg, constant thrust T ≈ 3.78 N, fuel burn 5.84 kg/day) is steered only through the thrust angle φ(t). The work:
- Non-dimensionalizes the dynamics (r, u, v) and formulates the optimal control problem J = −r(tf)
- Derives the Hamiltonian and adjoint equations; Pontryagin's condition gives tan φ* = λ2/λ3
- Checks Legendre–Clebsch, transversality and boundary conditions
- Solves the resulting two-point boundary value problem (TPBVP) numerically in MATLAB
- Studies sensitivity: variation of tf (188–198 days) and thrust F0 = 0

## Files
- `TP 2024.pdf` — assignment / problem statement (with transfer geometry figure)
- `Rapport___Control_Optimale_1__TP.pdf` — LaTeX report with full derivation and results
- `Figure_5.png` — optimal control α(t) for varying tf (used as project image on the website)
- `Figure_6.png` — normalized state trajectories r, u, v for varying tf
- `transfer-geometry.png` — interplanetary transfer geometry (Figure 1 of the assignment)
- `optimal-command-alpha.png` — evolution of the optimal command α(t) (report, Fig. 1)
- `state-trajectories.png` — normalized state trajectories r/r0, u/v0, v/v0 (report, Fig. 2)

## Website
- Report PDF published at `public/assets/documents/pontryagin-orbit-transfer-report.pdf`, linked from the project card.
