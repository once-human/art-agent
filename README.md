# art-agent

How to get Claude to make illustrations that look made by a real human artist, not AI.

This is a method, not a style. Use it for any illustration: a T-shirt print, a poster, an album cover, a book plate, a map, a portrait of a street. The style changes every time. The way the work gets made stays the same.

## If you are a Claude session reading this

You were pointed here to make a piece of art. Read the files in this order, then follow the playbook:

1. [PLAYBOOK.md](PLAYBOOK.md): the whole method, step by step. **Follow it.**
2. [RULES.md](RULES.md): the anti-AI rules and what a human hand actually does. These are hard rules.
3. [MEDIA.md](MEDIA.md): how to fake real media in code (ink line, riso and screen print, gouache, linocut, printmaker maps), so you can pick the one that fits.
4. [OUTPUTS.md](OUTPUTS.md): print and screen limits (DTG tees, screen print, paper, web).
5. [LESSONS.md](LESSONS.md): what the owner loved and what he threw out. Read it before you brainstorm.
6. [prompts/](prompts/): the brief template, the artist prompt and the critic prompt.
7. [workflow/paint.js](workflow/paint.js): the multi-agent run (artist → critic → artist → critic → artist), ready to fill in.
8. [toolkit/](toolkit/): `hand.py` (a pen that wobbles, presses and overshoots, plus spot-colour screens, halftone, hatching and print physics) and `check.py` (print checks and close-up crops). Start from these. Don't rebuild them.
9. [examples/](examples/): the real briefs behind the pieces the owner loved, and pictures of the results.

The short version: **write a long, specific brief → one artist agent draws it in code and keeps looking at its own renders, critiquing them harshly and fixing them → a fresh-eyes critic reviews it → the artist reworks it → repeat → final print-ready render.** The quality comes from the brief and from the loop, not from any one style.

## If you are the owner

Start a new session and say something like:

> Read ~/Documents/Projects/art-agent/README.md and follow it. I want an illustration of …

Then brainstorm with it first. It should come back with directions to pick from before it draws anything.

## Requirements

- Python 3 with Pillow and numpy. Nothing else: no image-generation models, no traced photos, no downloads of art.
- Claude Code with the Workflow tool, for the multi-agent loop. Without it, run the same loop by hand: the artist and critic prompts work as plain prompts too.
