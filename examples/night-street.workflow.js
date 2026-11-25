export const meta = {
  name: 'tee-art-bengaluru-street',
  description: 'Paint the new Bengaluru back print (a night street, "bengaluru (i stayed)") the way the Mumbai art was made, with more rounds and fresh-eyes critics between them',
  phases: [
    { title: 'Paint', detail: 'artist builds the piece, at least 6 render-look-fix rounds' },
    { title: 'Critique 1', detail: 'fresh-eyes critic, harsh, ranked fixes' },
    { title: 'Repaint', detail: 'artist works through the critique, at least 5 rounds' },
    { title: 'Critique 2', detail: 'second fresh-eyes critic' },
    { title: 'Polish', detail: 'artist final rounds and print-ready render' },
  ],
}

const ART = '/home/onkar/Documents/Projects/still-breathing/pipeline/art'
const DIR = ART + '/art-f-street'
const SP = '/tmp/claude-1000/-home-onkar-Documents/a4dfe67b-0718-408b-8186-b5f2b378874d/scratchpad'
const REF = '<old project>'

const BRIEF = `
WHO IT IS FOR
Still Breathing, lineup 01 "again..": shirts for Fred again..'s India shows, December 2026, sold to fans. This is a NEW extra Bengaluru shirt. The owner wants to "show Bangalore more love" and wants this one to be the best piece in the lineup.
The buyer is NOT a Bengaluru local. It is the Fred again.. crowd: people who moved to Bengaluru from other cities and other countries (for a job, a course, a person) and stayed because they fell for it. Cosmopolitan, international, sophisticated, mostly in their twenties and thirties. They love Bengaluru for its CITY LIGHTS, its WEATHER (the famous mild nights everyone brags about to friends back home), its RAIN, its night streets, pubs and rooftops. They take cabs and autos, not buses. Anything folk, traditional or hyper-local (rangoli, jasmine strings, bus boards, temple motifs) was rejected outright: "no one will know what that is".

THE PIECE: "bengaluru (i stayed)" — the back print of a BLACK tee (#151515)
An artsy, imaginary Bengaluru night street, composited from the vibe of the city's famous going-out streets: MG Road (the Namma Metro Purple Line runs ABOVE it on a concrete viaduct with round-ish piers), Church Street (narrow, paved in stone setts/cobbles, bookshops, cafes, pubs, people spilling out), Indiranagar 100 Feet Road / 12th Main (pubs and rooftop bars strung with lights, big old trees). It is NOT a faithful map of any one street and must not show identifiable shop names or brands. It is the feeling of being out on a Bengaluru street at 01:14 in light rain, a little in love with the city.
The title "bengaluru (i stayed)" and one small line "22° · light rain · 01:14" are set LATER as vector lettering — do NOT draw any of that text. Leave calm zones for them (title: large, near the top, probably over the sky between the tree canopies; the small line: near the bottom). Small handwritten notes are also added later from your manifest.

WHAT CAN BE IN IT (choose, compose, edit hard — not everything has to make it; the composition and the feeling matter more than the inventory)
- A Bengaluru auto rickshaw as the hero (Bengaluru autos are green and yellow), seen from behind / three-quarter at street level, taillights on, maybe two friends' legs and a tote bag sticking out the side, the driver's arm hanging out. Very drawn, very characterful.
- Cabs (white/silver hatchbacks and sedans with YELLOW commercial number plates), a delivery rider on a scooter with a box on the back, a two-wheeler with a pillion. Indian traffic drives on the LEFT: vehicles going away from the viewer are on the left half of the road, oncoming headlights on the right.
- The Metro viaduct crossing overhead or running along the street: concrete deck on piers, its underside catching the street light. At 01:14 the metro is NOT running (last trains are well before 1 am), so no lit passenger train: the empty viaduct, maybe a station's lights left on, is the honest and lovelier choice.
- Old rain trees (huge spreading canopies, fine leaves) arching over the road, lit from underneath by sodium street lamps; a tangle of overhead cables between poles; one traffic signal.
- Wet road after rain: every light doubled as long, broken reflections on the tarmac; puddles; stone setts on the pavement shining.
- Storefronts and upstairs windows lit warm; neon or lit signs as abstract glowing shapes (no readable brand names — if any word appears on a sign keep it generic like "books", "coffee", "open", or better, abstract squiggles that read as neon); a rooftop bar with string lights; a shutter half down; a cafe light still on.
- People, drawn with real character (South Asian and international, cosmopolitan, stylish, varied bodies; nobody generic): three friends under one umbrella laughing; someone holding a phone up; a couple sharing one jacket; two people smoking under an awning (ember dots); someone in a hoodie with headphones walking alone and smiling; a group spilling out of a pub at closing time (Bengaluru pubs close around 1 am: that's why the street is full at 01:14); a street dog asleep on a warm step; a corn seller's ember glow. Not all of them; choose what makes the picture sing.
- Light rain: visible only where light catches it.

ART DIRECTION — the most important part
- It must look like a REAL HUMAN ARTIST made it: an illustrator you would follow, a piece people would frame. Very illustrative, very artsy, full of life and atmosphere. NOT AI-ish in any way. Read the anti-AI list below as hard rules.
- You CHOOSE the medium and hand that suits a rainy night street on a black shirt. The Mumbai pieces (below) set the quality bar and the feeling of the hand, but their exact style (stipple map, thin line crowd) was made for a map and a crowd; do not copy it. Good candidates to consider and decide between: (a) gouache/poster-paint on black paper — flat opaque shapes of light, dry-brush edges, the black is the night; (b) hand-pulled screen print / risograph with 4-5 spot inks, misregistered, with bold flat shapes and hand-cut halftone; (c) confident brush-and-ink line drawing with flat colour shapes of light behind it (like the Mumbai crowd, but richer and more painterly); (d) linocut/woodcut — carved light out of black, gouge marks as rain and reflections. Or a mix you can defend. Pick ONE coherent language and commit.
- On a black tee the shirt IS the night: draw the light and what the light touches. Darkness is free; every mark is light.
- Composition: a strong, simple, readable picture from across a room, with deep rewards up close. One-point or two-point street perspective with a clear focal point (the auto and the light around it). Big shapes first, detail second. Foreground/midground/background with real depth (atmospheric thinning of detail and colour into the distance). Edges should breathe and dissolve organically (no hard rectangle frame), with the canopy and the wet road as natural vignettes.
- Palette: you choose, up to 5 inks on black (for example a warm cream key, sodium amber, neon coral/red for tail lights and signs, metro purple, a cool teal/green for wet reflections and the auto's green). Restrained and harmonious; one or two accents doing real work. Report hex values.
- Lettering zones must be genuinely calm (the drawing can thin and quiet there; it does not have to be empty).

ANTI-AI RULES (hard)
- No soft airbrushed glows, no gaussian blooms, no smooth gradients, no bokeh, no lens flares, no "cinematic" blur, no photoreal rendering.
- Light must be expressed by hand means: flat shapes of light, rays as brush strokes, broken concentric rings, carved lines, hand-made halftone with coarse dots, dry-brush, hatching.
- No clone-stamped repetition (every window, cobble, person, leaf cluster varied), no perfect symmetry, no ruler-perfect perspective lines (perspective drawn by eye, slightly off, alive), no generic stock figures, no clip-art landmarks (no Vidhana Soudha, no palace), no emoji-like faces.
- Imperfection must be structural (the hand: wobble, pressure, overshoot, re-drawn lines, misregistered inks, uneven edges), never a filter laid on top.
- Every person and vehicle must be drawn with intention and character, readable as a silhouette.

PRINT (DTG on a black tee, back print 38.1 x 50.8 cm)
- Canvas 3600 x 4800 px RGBA (about 94 px/cm). Report coordinates in 1200 x 1600 units (= px / 3).
- Alpha BINARY (0 or 255): tone comes from shapes, hatching and coarse halftone, never opacity.
- MINIMUM PRINTED FEATURE ~1 mm = 10 px at full res (3.3 units): no isolated dot, line or gap thinner than that. NO FINE STIPPLE, no noise-dust, no specks (they print as mush on DTG). Clean every ink layer with a morphological opening at that size at the end.
- Nothing within ~40 px of the canvas edge.
- Each ink its own layer, honestly simulated: slight misregistration, ink spread on edges, decide knockout vs overprint deliberately.

TECH
- Python 3 with Pillow and numpy only (no scipy/cv2/skimage, no pip installs, no downloads, no image-generation models, no traced photos). Fonts are in /home/onkar/Documents/Projects/still-breathing/pipeline/fonts if you ever need a glyph shape for a neon squiggle (but prefer drawn marks).
- 4 CPU cores; keep a full render under ~4 minutes; work at a draft resolution (e.g. 1200x1600) for most rounds; no per-pixel Python loops over the full canvas (use numpy / ImageDraw / filters).
- Work ONLY in ${DIR} (create it). One seeded, re-runnable generator gen.py (env R=1 for draft, R=3 for full), plus outputs. Keep earlier rounds' previews as round-N-preview.png so the history is visible.

OUTPUTS (in ${DIR})
- art-black.png: 3600x4800 RGBA, binary alpha, transparent background.
- preview-black.png: the art on #151515 at 900x1200.
- manifest.json: { "concept", "medium", "palette": {name: hex}, "type_zones": [{"name": "title"|"line", "x","y","w","h"}] (1200x1600 units), "annotations": [{"text","x","y","rotation","points_to"}] up to 5 short lowercase handwritten fan notes, TRUE to Bengaluru and the night (e.g. about pubs closing at one, the weather, missing the last metro, the rain), "focal_point": [x,y] }.

REFERENCES — LOOK AT THEM with the Read tool before you start
- The Mumbai pieces the owner loves (quality bar and the feeling of a real hand; not the style to copy): ${SP}/mumbai-crowd-ref.png (black tee crowd, hand-inked lines + flat colour) and ${SP}/mumbai-map-ref.png (printmaker map).
- Their generators, to see how a convincing hand was built in code (pressure-varying strokes on jittered paths, overshoots, re-drawn passes, print physics): ${REF}/art-b-lines/gen.py and ${ART}/art-a-map/gen.py. Lift primitives if useful, invent better ones where the street needs them (brush with dry edges, carved gouge marks, flat light shapes, reflection streaks).
- Fred again.. mood: ${SP}/ref/actual-life-cover.jpg (intimate, diaristic, the beauty of an ordinary moment).
`

const PROCESS_ARTIST = (rounds) => `
PROCESS
Plan before drawing: write PLAN.md in the folder (medium and why, palette, a thumbnail-level composition in words with the main shapes and their unit positions, the light sources, the focal point, the order of passes). Then build in PASSES like an illustrator: 1) perspective and big shapes, 2) light: where it falls, what it touches, 3) the wet road and reflections, 4) architecture, trees, viaduct, cables, 5) vehicles, 6) people, 7) rain and small life, 8) print physics and clean-up.
After every render, LOOK at the preview with the Read tool AND at least one 1:1 crop of the full-res art (e.g. a 1200x900 px crop around the focal point, and another of the people or the road), and write a harsh critique in CRITIQUE.md (append a dated round section): would a working illustrator be proud of this? what reads as computer-made, stiff, cloned, empty, muddy, flat, generic or AI-ish? is the auto charming and correct? do the people have character? does the light feel like a rainy Bengaluru night? is the composition readable at thumbnail size? Then fix the worst 3-5 things and render again. Do AT LEAST ${rounds} render-look-fix rounds; keep going while there are real problems. Never stop on "good enough".
Final message: the manifest JSON, the path of the final preview, and 3 honest sentences on what is still weakest.`

phase('Paint')
const r1 = await agent(`You are the artist for this piece.\n${BRIEF}\n${PROCESS_ARTIST(6)}`, { label: 'artist:paint', phase: 'Paint' })

const CRITIC = (n) => `You are a fresh-eyes art director with very high standards, reviewing round ${n} of an illustration for a T-shirt back print. You did not make it. Read the brief, then look hard at ${DIR}/preview-black.png (and the latest round-*-preview.png files), and at several 1:1 crops of ${DIR}/art-black.png (write a tiny numpy/Pillow script to crop: the focal point, the people, the road and reflections, the canopy, the lettering zones; and one composited on #151515 at 25% size for the across-the-room read). Also read ${DIR}/PLAN.md, ${DIR}/CRITIQUE.md and skim ${DIR}/gen.py.
${BRIEF}
Your job: a harsh, specific, ranked critique the artist can act on. Judge: (1) does it look like a real human illustrator made it, or anywhere computer-made / AI-ish (name the exact spots and why)? (2) the composition and readability at thumbnail and at arm's length; (3) the light and the rainy-night atmosphere; (4) the auto rickshaw: charm, correct Bengaluru-ness, drawing quality; (5) the people: character, variety, silhouettes, are they the cosmopolitan crowd described; (6) depth and the street's vibe (MG Road metro, Church Street, Indiranagar) without clip-art; (7) print rules: binary alpha, nothing under ~10 px, no stipple dust, edge margin — measure them with a script; (8) the calm lettering zones; (9) what is missing that would make it sing, and what should be cut. Do not edit gen.py or any art. Write your critique to ${DIR}/REVIEW-${n}.md and return it as your final message: a ranked list of at most 12 concrete changes (most important first), each with where (unit coordinates) and how.`

phase('Critique 1')
const c1 = await agent(CRITIC(1), { label: 'critic:1', phase: 'Critique 1' })

phase('Repaint')
const r2 = await agent(`You are the artist for this piece, continuing your own work in ${DIR} (gen.py, PLAN.md, CRITIQUE.md are there; read them first and look at the current preview). A fresh-eyes art director has reviewed it; their review is below and in ${DIR}/REVIEW-1.md. Take it seriously: act on every point you agree with, and for any you reject, write why in CRITIQUE.md. Big structural changes are welcome if the review says the picture is not working; do not just polish.\n\nREVIEW:\n${c1}\n\nYour own last report:\n${r1}\n${BRIEF}\n${PROCESS_ARTIST(5)}`, { label: 'artist:repaint', phase: 'Repaint' })

phase('Critique 2')
const c2 = await agent(CRITIC(2), { label: 'critic:2', phase: 'Critique 2' })

phase('Polish')
const r3 = await agent(`You are the artist for this piece, finishing your own work in ${DIR} (read gen.py, PLAN.md, CRITIQUE.md, REVIEW-1.md first and look at the current preview). A second fresh-eyes review is below and in ${DIR}/REVIEW-2.md. Act on it, then do the final refining passes: the details that reward someone looking up close (faces and gestures, the auto's details, reflections, the rain, the textures of the hand), and the final print checks (binary alpha, nothing under 10 px, no dust, 40 px margin). Finish with a FULL-resolution render (R=3) of art-black.png, preview-black.png and manifest.json, and verify the files (size 3600x4800, binary alpha, measured minimum feature).\n\nREVIEW:\n${c2}\n${BRIEF}\n${PROCESS_ARTIST(4)}`, { label: 'artist:polish', phase: 'Polish' })

return { paint: r1, review1: c1, repaint: r2, review2: c2, final: r3 }
