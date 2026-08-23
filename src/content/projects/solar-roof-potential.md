---
title: "Solar Roof Potential"
description: "My Bachelor's thesis: how rooftop photovoltaic expansion affects Munich's urban distribution grid."
period: "B.Eng. Thesis, TH Augsburg · Submitted May 2024"
image: "/Portfolio-CV-Blog/assets/images/projects/solar-roof-potential.png"
slug: "solar-roof-potential"
order: 1
tags: ["Photovoltaics", "Grid Integration", "MATLAB", "GIS", "Energy Systems"]
---

*Auswirkungen des Photovoltaik-Ausbaus auf städtische Stromnetze: Untersuchung am Beispiel Münchens*

My Bachelor's thesis at TH Augsburg, written in cooperation with SWM Infrastruktur GmbH & Co. KG (Stadtwerke München) and supervised by Prof. Dr.-Ing. Michael Finkel, with Dominik Storch as company supervisor.

## The Question

Rooftop photovoltaics are being added to cities faster than the distribution grid was ever designed for. The thesis asks what that expansion actually does to Munich's low and medium voltage networks: how much generation the rooftops can realistically produce, and how much of it the existing grid can host.

## Approach

The work starts from PV fundamentals — cells, modules, cell technologies, solar irradiation models, grid integration and the IEC performance metrics — and then builds a generation model on top of them. A 1 kWp reference plant was simulated over an average year, using irradiation data for Munich from 2005 to 2021, at 30° tilt and facing south.

<img src="/Portfolio-CV-Blog/assets/images/projects/solar-roof-potential.png" alt="Simulated yearly power generation, irradiation and efficiency of a 1 kWp plant in Munich" class="rounded-xl border border-neutral-200 dark:border-neutral-700" />

Total irradiation, generated power and the resulting efficiency across an average year. Efficiency runs inversely to irradiation: the panel is least efficient exactly when the sun is strongest, because cell efficiency drops as module temperature rises.

<img src="/Portfolio-CV-Blog/assets/images/projects/bachelor-daily-power-curve.jpg" alt="Average daily power curve of a 1 kWp plant over 24 hours" class="rounded-xl border border-neutral-200 dark:border-neutral-700" />

The averaged 24-hour profile of the same plant — the shape that has to line up with demand, and largely doesn't.

## From One Roof to the Whole City

Scaling a single reference plant up to Munich meant classifying the city's actual rooftops. Each roof was sorted into suitability categories, from very well suited down to unsuitable, with listed historical buildings handled separately.

<img src="/Portfolio-CV-Blog/assets/images/projects/bachelor-roof-suitability-map.jpg" alt="GIS map of Munich rooftops classified by PV suitability" class="rounded-xl border border-neutral-200 dark:border-neutral-700" />

<img src="/Portfolio-CV-Blog/assets/images/projects/bachelor-specific-yield-map.jpg" alt="Specific yield per Munich city district in kWh per kWp per year" class="rounded-xl border border-neutral-200 dark:border-neutral-700" />

Specific yield per city district, roughly 497 to 532 kWh/(kWp·a) — close enough across districts that siting decisions come down to available roof area and grid capacity rather than to sunshine.

## Takeaway

The interesting limit is not how much sun Munich gets. It is that generation peaks are concentrated in the same hours across an entire district, so the constraint moves from the panel to the network — which is exactly why the load flow and hosting capacity analysis, not the yield calculation, is the substantial part of the thesis.

> **Note:** This thesis carries a non-disclosure clause (Sperrvermerk) agreed with TH Augsburg and SWM. The figures shown here are my own; the document itself is not published.
