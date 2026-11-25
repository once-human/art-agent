# Media: faking real media in code

Pick ONE language per piece and commit to it. Mixing is fine only when you can say why. All of these are built from the primitives in `toolkit/hand.py`.

## Ink line + loose spot colour
*(the black-tee crowd in examples/images/crowd-line-ink.png)*
- One pen: a pressure-varying brush stroke on a jittered Catmull-Rom path, rendered as a filled polygon (`Art.line`, `Art.ink`).
- Shapes drawn edge by edge with overshoot (`Art.box`).
- Spot colour as loose blobs on separate screens (`Art.blob`), shifted off register, trimmed under the line.
- People built from parts (head, hair, shoulders, arms as tubes, hands, phones) with random proportions, so the crowd is many people. Build a few heroes larger, then rows of simpler heads thinning back.
- On dark grounds the line ink is the light colour, and the dark of the ground can be hair and shadow.

## Printmaker / risograph map
*(examples/images/printmaker-map.png)*
- Real geometry (OpenStreetMap via Overpass, cached once) projected with a cos(lat) correction, plus a slow hand-drawn warp.
- Each ink a binary layer: key (buildings hatched, outlines wobbled), green (fields as hand-set halftone), blue (water as coastal echo lines + wave hatching), one accent (the one expressive gesture, e.g. sound rings).
- A density field decides object by object what gets drawn, thinning toward a ragged edge and quieting the type zones.
- Ink spread (blur + paper-tooth noise + re-threshold), riso grain (holes where the drum ran dry), opening to a minimum feature, misregistration per ink.
- Careful on DTG prints: fine stipple prints as mush. Keep halftone dots coarse (see OUTPUTS.md).

## Gouache / poster paint
- Flat opaque shapes with dry-brush edges: build a shape, then roughen only its edge with many short directional strokes that break up as they leave the shape.
- Brush strokes follow the form (contour-following short thick strokes with jittered angle and length).
- Layers: dark ground first, then mid shapes, then lights; later layers cover earlier ones (knockout).
- Leave gaps where the ground shows through. That's what makes it read as painted.

## Screen print / poster
- 3-5 spot inks, bold flat shapes, deliberate overprint where two inks make a third.
- Hand-cut halftone: coarse dots on a slightly rotated, slightly irregular grid, dot size from a tone field.
- Misregistration 2-8 px per ink. A thin trap (overlap) or a thin gap between neighbours.

## Linocut / woodcut
- Start from solid ink and **carve light out**: gouge marks are tapered strokes subtracted from the block, following form (rain, reflections, contours).
- Edges of the block uneven; ink starved in places (holes in solids).
- Works beautifully on dark grounds where the carved marks become the light.

## Painted landscape from data
*(e.g. a voice memo's waveform as hills)*
- Ridges from a believable envelope, receding in layers with fewer, smaller strokes in the distance.
- Thousands of short directional strokes following each ridge's contour; the front ridge's crest can be a crowd.
