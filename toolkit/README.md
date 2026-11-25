# toolkit

Copy `hand.py` and `check.py` into the work folder and build `gen.py` on them.

- `hand.py`: `Art` (layers + the pen: `line`, `ink`, `box`, `dot`, `blob`, `brush`, `carve`, `tube`, `masked`, `knock`, `add`, `finish`), `hatch_poly`, `halftone`, print physics (`spread`, `grain`, `clean`, `misregister`, `margin`), `composite` (knockout), `composite_overprint` (riso on paper), `save_preview`.
  Set the canvas with env vars before import: `R` (px per unit, 1 draft / 3 full), `UW`, `UH` (unit space, default 1200 x 1600), `MINW` (minimum stroke in units, default 3.4 = ~1 mm at 3600 px over 38 cm).
- `check.py`: `crops` (1:1 crops + thumbnails to LOOK at), `crop` (one crop at unit coords), `verify` (binary alpha, ink thinner than the minimum, edge margin).
- `demo.py`: a smoke test, not art. `R=1 python3 demo.py /tmp/out`.

Never assign `art.L[name] = something`: the pen keeps drawing on the old image. Merge masks with `art.add(name, mask)`.
