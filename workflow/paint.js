// Template for Claude Code's Workflow tool: artist -> critic -> artist -> critic -> artist.
// Fill in DIR, KIT, FORMAT and BRIEF (from prompts/brief-template.md), then pass the whole script inline to the Workflow tool.
// 5 agents. Each artist agent runs its own render-look-fix rounds; each critic is fresh and never saw the work being made.
export const meta = {
  name: 'paint-illustration',
  description: 'Paint one illustration in code: artist rounds, fresh-eyes critiques between them, print-ready final',
  phases: [
    { title: 'Paint', detail: 'artist plans and builds the piece, at least 6 render-look-fix rounds' },
    { title: 'Critique 1', detail: 'fresh-eyes critic, ranked fixes' },
    { title: 'Repaint', detail: 'artist works through the critique, at least 5 rounds' },
    { title: 'Critique 2', detail: 'second fresh-eyes critic' },
    { title: 'Polish', detail: 'artist final rounds and full-resolution render' },
  ],
}

const DIR = '/absolute/path/to/work-folder'              // where gen.py and the outputs live
const KIT = '/home/onkar/Documents/Projects/art-agent/toolkit'
const FORMAT = 'a T-shirt back print'                    // or 'an A2 riso poster', 'an album cover', ...
const BRIEF = `
<paste the filled-in brief here: WHO IT IS FOR / THE PIECE / WHAT CAN BE IN IT / ART DIRECTION / ANTI-AI RULES / OUTPUT / TECH / OUTPUTS / REFERENCES>
Start by copying ${KIT}/hand.py and ${KIT}/check.py into ${DIR}.
`

const PROCESS = (rounds) => `
PROCESS
Plan before drawing: write PLAN.md in the folder (the medium and why, palette, a thumbnail-level composition in words with the main shapes and their unit positions, the light sources, the focal point, the order of passes). Then build in PASSES like an illustrator: 1) composition and big shapes, 2) light: where it falls, what it touches, 3) the big textured areas, 4) setting and architecture, 5) hero objects, 6) people, 7) small life and weather, 8) print physics and clean-up.
After every render, LOOK at the preview with the Read tool AND at least one 1:1 crop of the full-res art (python3 check.py crops ...), and append a harsh critique to CRITIQUE.md: would a working illustrator be proud of this? what reads as computer-made, stiff, cloned, empty, muddy, flat, generic or AI-ish? is the hero charming and correct? do the people have character? does the light carry the feeling? is it readable at thumbnail size? Then fix the worst 3-5 things and render again. Do AT LEAST ${rounds} render-look-fix rounds; keep going while there are real problems. Never stop on "good enough". Keep round-N-preview.png files.
Final message: the manifest JSON, the path of the final preview, and 3 honest sentences on what is still weakest.`

const CRITIC = (n) => `You are a fresh-eyes art director with very high standards, reviewing round ${n} of an illustration for ${FORMAT}. You did not make it. Read the brief, then look hard at ${DIR}/preview-*.png (and the latest round-*-preview.png files), and at several 1:1 crops of the full-res art (python3 ${KIT}/check.py crops ...: the focal point, the people, the main textured area, the lettering zones; and one at 25% size for the across-the-room read). Also read ${DIR}/PLAN.md, ${DIR}/CRITIQUE.md and skim ${DIR}/gen.py.
${BRIEF}
Your job: a harsh, specific, ranked critique the artist can act on. Judge: (1) does it look like a real human illustrator made it, or anywhere computer-made / AI-ish (name the exact spots and why)? (2) composition and readability at thumbnail and at arm's length; (3) light, atmosphere, the feeling the brief asks for; (4) the hero subject: charm, correctness, drawing quality; (5) the people: character, variety, silhouettes; (6) depth and sense of place without clip-art; (7) output rules: measure them with python3 ${KIT}/check.py verify; (8) the calm lettering zones; (9) what is missing that would make it sing, and what should be cut. Do not edit gen.py or any art. Write the critique to ${DIR}/REVIEW-${n}.md and return it as your final message: a ranked list of at most 12 concrete changes (most important first), each with where (unit coordinates) and how.`

const CONTINUE = (n, review) => `You are the artist for this piece, continuing your own work in ${DIR} (gen.py, PLAN.md, CRITIQUE.md are there; read them first and look at the current preview). A fresh-eyes art director has reviewed it; the review is below and in ${DIR}/REVIEW-${n}.md. Take it seriously: act on every point you agree with, and for any you reject, write why in CRITIQUE.md. Big structural changes are welcome if the review says the picture is not working; do not just polish.\n\nREVIEW:\n${review}\n${BRIEF}`

phase('Paint')
const r1 = await agent(`You are the artist for this piece.\n${BRIEF}\n${PROCESS(6)}`, { label: 'artist:paint', phase: 'Paint' })

phase('Critique 1')
const c1 = await agent(CRITIC(1), { label: 'critic:1', phase: 'Critique 1' })

phase('Repaint')
const r2 = await agent(`${CONTINUE(1, c1)}\n\nYour own last report:\n${r1}\n${PROCESS(5)}`, { label: 'artist:repaint', phase: 'Repaint' })

phase('Critique 2')
const c2 = await agent(CRITIC(2), { label: 'critic:2', phase: 'Critique 2' })

phase('Polish')
const r3 = await agent(`${CONTINUE(2, c2)}\nThen do the final refining passes: the details that reward someone looking up close (faces and gestures, the hero's details, textures of the hand), and the final output checks. Finish with a FULL-resolution render (R=3) and verify it with python3 check.py verify.\n${PROCESS(4)}`, { label: 'artist:polish', phase: 'Polish' })

return { paint: r1, review1: c1, repaint: r2, review2: c2, final: r3 }
