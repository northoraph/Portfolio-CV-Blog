---
title: "Sensor Modelling at Schneider Electric"
description: "Modelling a wireless power sensor's operating modes to trade measurement accuracy against battery life."
period: "Internship, Schneider Electric SE, Grenoble · Apr – Aug 2024"
image: "/Portfolio-CV-Blog/assets/images/projects/sensor-modelling.png"
slug: "sensor-modelling"
order: 3
tags: ["MATLAB/Simulink", "Stateflow", "IEC 61557-12", "Embedded", "R&D"]
---

My internship in the R&D department of Schneider Electric's Digital Power line of business, at the Electropole site in Grenoble.

## Context

The work was part of Project Bluebird, a new wireless power-measurement sensor in the PowerTag family. It measures current with Rogowski coils and voltage capacitively, and reports into the EcoStruxure ecosystem alongside panel servers and circuit breakers.

A wireless sensor has a problem a wired one does not: every measurement costs battery. Measure often and accurately and the device is precise but short-lived. Measure rarely and it lasts, but stops being trustworthy. That trade-off is the engineering problem.

## Lab Work

The first half was uncertainty testing in the lab, checking sensor performance against **IEC 61557-12**, the standard that defines measurement performance classes for active power and energy. This is the kind of testing that decides whether a device may be sold as a given accuracy class at all.

## Modelling the Switch Algorithm

The second half was the more interesting one: building a MATLAB/Simulink/Stateflow model of the sensor MCU's operating modes, so the accuracy-versus-energy trade-off could be reasoned about before it was committed to firmware.

<img src="/Portfolio-CV-Blog/assets/images/projects/sensor-modelling.png" alt="Stateflow model of the sensor MCU operating modes and their transitions" class="rounded-xl border border-neutral-200 dark:border-neutral-700" />

The states cover startup and stop, acquisition with the radio on and off, high and low accuracy modes, saving data, and sleep. The transitions between them are the actual algorithm: when the device is allowed to drop to low accuracy, when it must wake to full precision, when it may sleep, and when accumulated data has to be written out before anything else happens.

Modelling it as an explicit state machine made the edge cases visible — the paths where a device could end up sleeping through a measurement it owed, or burning radio time it did not need.

## Takeaway

The lesson that stuck was how much of a "measurement" problem turns out to be an energy scheduling problem. The physics of a Rogowski coil is settled; deciding *when* to look is where the design effort goes.

> **Note:** Project material is the property of Schneider Electric. Only my own model captures are shown here.
