---
title: "VTOLs in Flight Transition"
description: "Trajectory tracking control for a hybrid UAV moving between hover and forward flight."
period: "Master's Thesis, Institute of Flight Dynamics and Control, TU Darmstadt · May – Nov 2026"
image: "/Portfolio-CV-Blog/assets/images/projects/vtol-flight-transition.jpg"
slug: "vtol-flight-transition"
order: 5
status: "In progress"
tags: ["PX4", "ROS 2", "C++", "Python", "Flight Control"]
---

My Master's thesis at the Institute of Flight Dynamics and Control at TU Darmstadt: trajectory tracking control for a hybrid UAV, focused on the transition between hover and forward flight.

## Why the Transition Is Hard

A hybrid UAV takes off like a multirotor and cruises like a fixed-wing aircraft. In between, it has to pass through a regime where both the aerodynamics and the actuator authority change fundamentally — the rotors lose their grip as the wings start carrying, and the controller has to remain stable across the whole handover rather than being tuned for either end of it.

## Approach

The controller is implemented in the PX4 flight stack, with ROS 2 nodes in Python and C++, and taken through a full verification and validation cycle: simulation, experiment design, flight tests, and statistical analysis of the resulting flight logs.

No validated model of the transition phase was available at the start, so the work proceeds iteratively: build a simplified simulation model from the literature, then extend the flight envelope in small increments, using the logs from each flight to update the model and the tuning before the next one.

*A full write-up will follow as the thesis progresses.*
