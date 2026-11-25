export const meta = {
  name: 'tee-art-mumbai',
  description: 'Paint the Mumbai tee artwork for two directions (A: race course map, C: painted voice memo) as print-ready layered PNGs',
  phases: [{ title: 'Paint', detail: 'one artist agent per direction, iterating on its own renders' }],
}
const ROOT = '<old project>'
const COMMON = `
CONTEXT
A fan-made (not for sale) T-shirt for Fred again..'s first India tour, Dec 2026. This one is the MUMBAI tee: Mahalaxmi Race Course, 8 and 9 Dec 2026. The owner rejected a first version (${ROOT}/v1-reference.png, look at it) because it looked like "an A4 sheet slapped on a tee": flat, typographic, merch-template. He wants it GRAPHICS-HEAVY, ARTISTIC, like a real illustrator/printmaker made it. His references (web/illustration, not tees) share: hand-made illustration (wobbly ink linework, gouache/watercolour fills, painted grain), texture everywhere (paper tooth, risograph grain, print noise — never flat vector fills), illustration as the hero breaking out of its frame, a restrained palette with one bright accent, handwriting next to clean type, and illustrated maps of real places. It must NOT look AI-generated: no soft glows, no smooth gradient meshes, no airbrushed bokeh, no perfect symmetry, no generic stock motifs (no Gateway of India / Taj clip-art), no "cinematic" blur. Imperfection must be structural (hand-like line wobble, misregistered ink layers, uneven stipple), not a filter on top.

YOUR JOB: produce ONLY the artwork (no text, no lettering, no wordmark — those are added later in Figma as vectors). Leave clear zones for type and tell me where (see manifest).

TECH CONSTRAINTS
- Python 3 with Pillow 13 ONLY (no numpy, no pip installs, no other downloads). 4 CPU cores; keep each full render under ~3 minutes (prefer ImageDraw primitives, Image.effect_noise, ImageFilter, ImageChops, point(), resize; avoid per-pixel Python loops over 17M pixels).
- Work in ${ROOT}/ART_DIR (create files only there). Write a single generator script gen.py there (seeded randomness, re-runnable), plus outputs.
- Print = DTG on a T-shirt, back print 30 x 40 cm. Final canvas 3600 x 4800 px RGBA (305 dpi). Coordinates you report use a 1200 x 1600 unit space (= final px / 3).
- Two colourways, same composition: (1) for a BLACK tee (#151515): light/bright inks; the black of the tee can be the night/negative space. (2) for a CREAM tee (#ECE3CE): darker/stronger inks; cream is the paper. Max 3 inks per colourway plus optionally the accent red #E4432D (black tee) / #D8381F (cream tee) used sparingly. Choose the palettes yourself to suit the concept; report hex values.
- Alpha must be BINARY (0 or 255) — DTG prints partial transparency badly on black. Get tone by stipple, hatching and halftone dots, not by opacity. Minimum printed feature ~0.5 mm: no isolated dots or lines thinner than 6 px at 3600x4800 (2 units).
- Simulate print reality honestly: each ink is its own layer, slightly misregistered (2–8 px), with its own grain; where inks overlap, decide overprint vs knockout deliberately.

OUTPUTS (in ${ROOT}/ART_DIR):
- art-black.png and art-cream.png: 3600x4800 RGBA, binary alpha, transparent background.
- preview-black.png and preview-cream.png: the art composited on the tee colour at 900x1200.
- manifest.json: { "concept": "...", "palette_black": {...}, "palette_cream": {...}, "type_zones": [ {"name": "wordmark" | "city" | "dates" | "signoff", "x":, "y":, "w":, "h": } in 1200x1600 units, at least wordmark + city + dates ], "annotations": [ {"text": "short handwritten note", "x":, "y":, "rotation":, "points_to": [x,y] or null} up to 6, lowercase, things a fan would scrawl on the art, specific and true to the place/night ] }

PROCESS: render, then LOOK at your previews with the Read tool, critique them harshly against the brief (would an illustrator be proud of this? does any part look computer-generated or flat?), and iterate. Do at least 3 render→look→fix rounds. Also view a 1:1 crop (e.g. 1200x900 px from the full-res file) to judge texture at print scale. Stop when it is genuinely good. Your final message: the manifest JSON contents plus 3 sentences on what you'd still improve.`

const A = `DIRECTION A — "the ground you stood on": an illustrated, printmaker-style top-down MAP of Mahalaxmi Race Course, Mumbai, built from REAL OpenStreetMap geometry, as the hero of the back print.
Get the data yourself from the Overpass API (https://overpass-api.de/api/interpreter, POST data=..., send a generic User-Agent like "tee-map-sketch/1.0", be gentle: 1–3 queries total, cache the JSON in ART_DIR/osm.json and reuse it). Race course centre is about lat 18.9827, lon 72.8186; the Arabian Sea / Haji Ali bay is just west/north-west, Mahalaxmi station and the Western Railway to the east. Fetch a bbox of roughly 18.968–18.998 lat, 72.800–72.835 lon: the race track (leisure=track) and course outline, highways, railway, natural=coastline/water, parks/grass, and building footprints (buildings give wonderful hatching texture). Project lon/lat to the canvas with a proper cos(lat) correction; you may rotate/crop the map for composition (e.g. tilt so the oval sits big and dynamic), but keep the geometry real.
Render it like a risograph / screen-printed illustrated map, not a GIS plot: sea as hand-drawn wobbly wave hatching; buildings as dense hatched/stippled blocks; roads as the paper showing through; the turf of the course as a big textured green field; the oval track drawn with a confident, slightly wobbly double line. THE CROWD: on the infield near a stage, thousands of tiny hand-like marks (heads and raised hands / phone lights), dense near the stage and thinning out, so you can feel the crowd from above. Sound rings rippling out from the stage over the whole map (wobbly, broken concentric lines), the one expressive gesture. Let the illustration bleed off its edges organically (torn/ragged map edge or vignette by density, not a rectangle).
Leave space for: "fred again.." wordmark, the city name "mumbai" set large, and the dates "08 + 09 . 12 . 2026" — you choose where (overlaps on calm areas like the sea are fine).`

const C = `DIRECTION C — "the painted memo": a voice-memo recording of the Mumbai crowd turned into a painted landscape. The audio waveform becomes layered hills/ridges (3–5 ridges receding into the distance, each ridge's silhouette driven by a believable crowd-recording envelope: a murmur, then the whole crowd coming in at once — a sudden wall). The front ridge's crest is the crowd itself: hundreds of tiny silhouetted heads and raised hands with phones along the skyline. Above: on the BLACK tee version it is night — the sky is the black tee itself, filled with phone lights as stars (small hand-drawn sparks/crosses and dots of varying size, clustered over the crowd, NOT soft glows); on the CREAM tee version it is the late-afternoon/sunset sky over the Arabian Sea painted in dry-brush strokes (the show starts in the afternoon at Mahalaxmi). A subtle nod to place: the Mumbai skyline or the race course rails far on the horizon as a thin, hand-drawn line — understated, not clip-art.
Painting technique: simulate gouache/dry-brush with thousands of small directional brush strokes (short thick lines / elongated ellipses with jittered angle and length, following each ridge's contour, like the painted grass in the reference), layered per ink with grain and gaps where the paper/tee shows through. Each ridge a different ink or a different stroke density of the same ink. It should feel painted by hand, dreamy but grounded, very Fred again.. (intimate, documentary, crowd-as-community).
Leave space for: "fred again.." wordmark, the city name "mumbai" set large, and the dates "08 + 09 . 12 . 2026" — you choose where (the sky is the natural place).`

phase('Paint')
const jobs = [
  ['A-map', 'art-a-map', A],
  ['C-memo', 'art-c-memo', C],
]
const out = await parallel(jobs.map(([label, dir, brief]) => () =>
  agent(`${brief}\n${COMMON.replaceAll('ART_DIR', dir)}`, { label: `paint:${label}`, phase: 'Paint' })))
return jobs.map(([label, dir], i) => ({ label, dir: `${ROOT}/${dir}`, report: out[i] }))