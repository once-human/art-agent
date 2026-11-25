# Output limits

Put the right profile into the brief. Units: draw in a unit space (e.g. 1200 x 1600) and render at `R` px per unit (R=1 for drafts, R=3 for the final), so drafts are fast and coordinates are stable.

## DTG T-shirt print (direct to garment)
- Canvas 3600 x 4800 px RGBA for a back print up to 38 x 51 cm (about 94 px/cm).
- **Alpha binary** (0 or 255). Partial transparency prints badly, worst on dark shirts. Tone comes from shapes, hatching and coarse halftone, never opacity.
- **Minimum printed feature about 1 mm = 10 px** at that size. No isolated dot, line or gap thinner than that. **No fine stipple, no noise dust, no specks**: they print as mush. Finish every ink layer with a morphological opening at that size (`toolkit/hand.py: clean`).
- Nothing within about 40 px of the canvas edge.
- Dark shirt: the shirt is the night/negative space; inks are light. Light shirt: the shirt is the paper; inks can overprint (multiply) like riso.
- Up to about 5 spot inks reads as printmaking; more starts to look digital.
- Deliver: `art-<shirt>.png` (transparent background), `preview-<shirt>.png` on the shirt colour at 900 x 1200, `manifest.json`.

## Screen print (real)
- One binary layer per screen. Plan traps or deliberate gaps. Halftone at a line screen the printer can hold (ask). Minimum line about 0.3-0.5 mm.

## Paper print (riso, giclée)
- Riso: one binary layer per drum, real misregistration, grain from starved ink. Overprint colours mix, so plan the third colours.
- Giclée/inkjet: binary alpha not needed, but keep the hand. Still no glows or gradients unless they are painted by strokes.

## Screen / web
- Exports at 2x the display size. Avoid hairlines under 2 px at 1x. Same no-AI rules.
