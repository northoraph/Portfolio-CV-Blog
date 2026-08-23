---
title: "Chili Farm — Automated Hydroponic Growing System"
description: "A Simulink model of a fully automated indoor chili farm on an ebb-and-flow hydroponic setup."
period: "MATLAB/Simulink project"
image: "/Portfolio-CV-Blog/assets/images/projects/chili-farm.png"
slug: "chili-farm"
order: 4
tags: ["MATLAB/Simulink", "Arduino", "Hydroponics", "Process Control", "Sensors"]
---

A Simulink project modelling a fully automated indoor chili farm, built around an ebb-and-flow hydroponic setup and controlled by several Arduinos.

<img src="/Portfolio-CV-Blog/assets/images/projects/chili-farm.png" alt="Top-level Simulink model view showing grow lamp, plant tray, tank, pumps and sensors" class="rounded-xl border border-neutral-200 dark:border-neutral-700" />

## What It Controls

Growing plants hydroponically means the nutrient solution *is* the soil, so its condition has to be actively held in range rather than assumed.

**Sensing:** pH probe, EC probe for nutrient conductivity, water level, water temperature, and energy metering.

**Actuation:** the flood and drain pump that drives the ebb-and-flow cycle, a stirrer, dosing of mineral solution and pH+, tank refill, and the grow lamps.

**Model physics:** an evaporation subsystem and the tank dynamics — the parts that make the system drift on its own, and therefore the reason it needs control in the first place.

A dashboard of gauges and lamps sits on top for live monitoring.

## Why It's Interesting

Each loop is individually simple, but they interact through the same body of water. Topping up the tank dilutes the nutrient concentration, which the EC loop then wants to correct; dosing pH+ moves a quantity the pH loop is simultaneously trying to hold. Evaporation slowly concentrates everything without anything actuating at all.

Modelling it before building it is what makes those couplings visible.
