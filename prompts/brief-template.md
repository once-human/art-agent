# Brief template

Fill every section. Long and specific beats short and clever. Keep the headings; the artist and critic agents both read this.

```
WHO IT IS FOR
<Who will wear/hang/see it. Where they come from, what they love about the subject, how sophisticated they are.
What was already rejected and why, quoting the owner's words.>

THE PIECE: "<title>" — <format, e.g. back print of a BLACK tee (#151515) / A2 riso poster / album cover>
<The feeling, the moment (time, weather, light), the one sentence a viewer should feel.
What it is NOT (not a map of X, not a postcard, no landmark clip-art).
Text that will be added later as lettering — tell the artist NOT to draw it, and where the calm zones should roughly be.>

WHAT CAN BE IN IT (a menu: choose, compose, edit hard — not everything has to make it)
- <hero subject, with true details>
- <secondary subjects>
- <setting / architecture / nature, with true details>
- <people, each with character: who they are, what they're doing, what they wear>
- <weather and small life>
- <facts that keep it honest (e.g. which side traffic drives on, what is open at that hour)>

ART DIRECTION
- It must look like a REAL HUMAN ARTIST made it: an illustrator you would follow, a piece people would frame. Not AI-ish in any way.
- You CHOOSE the medium that suits this subject. Candidates: <2-4 from MEDIA.md, with one line each on why they might fit>. Pick ONE coherent language and commit.
- <On a dark ground: the ground is the night; draw the light and what it touches.>
- Composition: readable from across a room, rewarding up close; a clear focal point; real depth; big shapes first; edges that breathe and dissolve (no rectangle).
- Palette: up to <N> inks on <ground colour>; restrained; one or two accents doing real work; report hex values.
- Calm zones for lettering must be genuinely calm.

ANTI-AI RULES (hard)
<paste RULES.md "Never", "What a real hand does" and "Light without glows">

OUTPUT
<paste the right profile from OUTPUTS.md>

TECH
- Python 3 with Pillow and numpy only (no other libraries, no installs, no downloads, no image-generation models, no traced photos).
- Start from <path to this repo>/toolkit/hand.py and check.py (copy them into the work folder).
- <cores>; full render under ~4 minutes; drafts at R=1 for most rounds; no per-pixel Python loops over the full canvas.
- Work ONLY in <work dir>. One seeded, re-runnable gen.py (env R=1 draft, R=3 full). Keep round-N-preview.png files.

OUTPUTS
- art-<ground>.png, preview-<ground>.png, manifest.json: { "concept", "medium", "palette", "type_zones": [...], "annotations": [{"text","x","y","rotation","points_to"}] (short lowercase notes, true to the subject), "focal_point" }.

REFERENCES — LOOK at them with the Read tool before starting
- Quality bar (not the style to copy): <paths to images of past work, e.g. this repo's examples/images/*>
- Primitives to lift: <this repo>/toolkit/hand.py; <earlier generators if any>
- Mood: <a picture that carries the feeling>
```
