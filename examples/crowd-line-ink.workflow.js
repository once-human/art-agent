export const meta = {
  name: 'tee-art-mumbai-b',
  description: 'Paint the Mumbai tee artwork for direction B (hand ink line drawing of the crowd) as print-ready layered PNGs',
  phases: [{ title: 'Paint', detail: 'one artist agent, iterating on its own renders' }],
}
const ROOT = '<old project>'
const DIR = 'art-b-lines'
const BRIEF = `DIRECTION B — "line drawings of the night": a naive, confident hand-inked LINE ILLUSTRATION (think the Woset / "Cossot plays the drum whilst Greeba paints a rock" style: single-weight-ish brush/marker lines with natural wobble, simple charming figures, black ink on paper, a few flat spot-colour fills that sit slightly off the lines like a misregistered print) of the Mumbai crowd at Mahalaxmi Race Course, seen from behind, looking toward the stage. Foreground: the backs of a few characterful people drawn larger (a girl on someone's shoulders, a guy with a phone up filming, two friends hugging, someone with eyes closed singing), each drawn with real personality (hair, kurta/hoodie/tees, a bindi, specs, a bandana); behind them the crowd thinning into rows of simpler heads and raised hands with phones; at the back a low stage with a simple light rig and tiny figure. Horizon: the race course rails and a thin, hand-drawn Mumbai skyline (towers, not landmark clip-art), maybe crows/kites in the sky. Hand-drawn music/sound marks coming off the stage. The lines must look drawn by a person: variable pressure (stroke width swelling and tapering), slight overshoots at corners, lines not quite meeting, occasional re-drawn strokes. Spot colour: 1–2 inks filled loosely (sometimes overflowing, sometimes leaving gaps), plus the red accent for a few phone lights/stage dots.
For the BLACK tee version the line ink becomes the light colour (cream/off-white lines on the black tee) and fills stay bright; for the CREAM tee version, near-black lines on cream.
Leave space for: "fred again.." wordmark, the city name "mumbai" set large (hand-lettered later), and the dates "08 + 09 . 12 . 2026" — you choose where (sky is natural).
Build a small library of drawing primitives first (pressure-varying brush stroke along a jittered Catmull-Rom path rendered as a filled polygon; head/hair/shoulder/arm/phone figure builders with randomised proportions) so the crowd is many different people, not clones.`
const COMMON = `
CONTEXT
A fan-made (not for sale) T-shirt for Fred again..'s first India tour, Dec 2026. This one is the MUMBAI tee: Mahalaxmi Race Course, 8 and 9 Dec 2026. The owner rejected a first version (${ROOT}/v1-reference.png, look at it) because it looked like "an A4 sheet slapped on a tee": flat, typographic, merch-template. He wants it GRAPHICS-HEAVY, ARTISTIC, and it must look REALLY DRAWN BY A HUMAN, not AI-generated and not computer-generated: no soft glows, no gradient meshes, no perfect symmetry, no clone-stamped repetition, no generic stock motifs (no Gateway of India / Taj clip-art). Imperfection must be structural (line wobble, pressure, misregistered ink layers), not a filter on top.

YOUR JOB: produce ONLY the artwork (no text, no lettering — added later in Figma). Leave clear zones for type and report them.

TECH CONSTRAINTS
- Python 3 with Pillow 13 ONLY (no numpy, no pip installs, no downloads). 4 CPU cores shared with two other artists running now; keep each full render under ~3 minutes (ImageDraw polygons/lines, effect_noise, ImageFilter, ImageChops, point(); no per-pixel Python loops over the full canvas).
- Work only in ${ROOT}/${DIR}. One generator script gen.py (seeded, re-runnable) plus outputs.
- DTG back print 30 x 40 cm. Final canvas 3600 x 4800 px RGBA (305 dpi). Report coordinates in 1200 x 1600 units (= px / 3).
- Two colourways, same drawing: BLACK tee (#151515) and CREAM tee (#ECE3CE). Max 3 inks per colourway plus optional accent red #E4432D (black) / #D8381F (cream), used sparingly. Report hex values.
- Alpha BINARY (0 or 255). Minimum printed feature 6 px at full res (lines ≥ 6 px wide, dots ≥ 6 px).

OUTPUTS (in ${ROOT}/${DIR}): art-black.png, art-cream.png (3600x4800 RGBA, transparent bg); preview-black.png, preview-cream.png (composited on the tee colour at 900x1200); manifest.json: { "concept", "palette_black", "palette_cream", "type_zones": [{"name": "wordmark"|"city"|"dates"|"signoff", "x","y","w","h"}], "annotations": [{"text","x","y","rotation","points_to"}] up to 6 lowercase fan notes, specific and true }.

PROCESS: render, LOOK at your previews with the Read tool, critique harshly (would an illustrator be proud? does anything look computer-made, cloned or stiff?), iterate at least 3 rounds; also check a 1:1 crop of the full-res art. Final message: the manifest JSON plus 3 sentences on what you'd still improve.`
phase('Paint')
const report = await agent(`${BRIEF}\n${COMMON}`, { label: 'paint:B-lines', phase: 'Paint' })
return { label: 'B-lines', dir: `${ROOT}/${DIR}`, report }