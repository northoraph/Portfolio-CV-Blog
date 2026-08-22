# Chili Farm — Automated Indoor Hydroponic Growing System

- MATLAB/Simulink project (`Indoor_Chilis.prj`), models `Chilis1.slx` (main) and `Chili_farm.slx` (early skeleton)

## Essence
Simulink model of a fully automated indoor chili farm using an ebb-and-flow hydroponic setup, controlled by several Arduinos:

- **Sensing**: pH probe, EC (nutrient conductivity) probe, water level and water temperature, energy metering ("Stromzähler")
- **Actuation**: pump for flood/drain cycles ("Pflanzen Rückfluss (Ebbe)"), stirrer ("Rührer"), mineral-solution and pH+ dosing, refill ("Auffüllen"), grow lamps
- **Model physics**: evaporation subsystem ("Verdunstung"), tank dynamics
- **Dashboard**: gauges and lamps for live monitoring

## Key figure
- `metadata/thumbnail.png` inside `Chilis1.slx` — top-level model view (grow lamp, plant tray, tank, pumps, sensors), used as project image on the website
