#!/usr/bin/env python3
"""demo.py: a smoke test of the toolkit, not art. R=1 python3 demo.py [out_dir] -> demo-art.png, demo-preview.png"""
import math, os, sys
from PIL import Image, ImageDraw
import hand
from hand import Art, hatch_poly, halftone, grain, composite, save_preview, UW, UH, W, H, R

out = sys.argv[1] if len(sys.argv) > 1 else '.'
art = Art(seed=11, layers=('teal', 'amber', 'key'))
# a lamp: light as a flat pool + broken rings + coarse halftone falloff, no glow
lx, ly = 600, 520
for i, r in enumerate((60, 95, 135, 180)):
    pts = [(lx + r * math.cos(t / 40 * math.tau), ly + r * 0.8 * math.sin(t / 40 * math.tau)) for t in range(41)]
    art.line(pts[: 30 - i * 3], 3.6, layer='amber', wob=1.2)
tone = Image.new('L', (W, H), 0)
d = ImageDraw.Draw(tone)
for r in range(260, 0, -10):
    d.ellipse(((lx - r) * R, (ly - r * 0.8) * R, (lx + r) * R, (ly + r * 0.8) * R), fill=int(255 * (1 - r / 260) ** 1.6))
art.add('amber', halftone(tone, cell=12, angle=0.4))
# a building drawn edge by edge, hatched by hand
bld = [(180, 700), (470, 690), (480, 1150), (175, 1160)]
art.box(bld, 4, layer='key')
hatch_poly(art, bld, 'key', angle=0.9, spacing=14)
art.blob([(220, 760), (430, 750), (440, 900), (215, 910)], 'teal')
# wet road reflections: stacked broken dashes under the lamp
for k in range(40):
    y = 1180 + k * 9
    wdt = 70 * (1 - k / 45)
    art.line([(lx - wdt, y), (lx, y + 1.5), (lx + wdt, y)], 3.6, layer='amber', wob=2.0)
# a dry-brush stroke and a carved mark
art.brush([(700, 900), (850, 860), (1010, 930)], 22, layer='teal')
art.carve([(720, 905), (980, 915)], 4, layer='teal')
inks = art.finish(order=('teal', 'amber', 'key'), shifts={'teal': (3, -2), 'amber': (-2, 3)})
inks['teal'] = grain(inks['teal'], art.rng)
rgba = composite(inks, {'teal': '#4FB3A9', 'amber': '#F0A640', 'key': '#EFE6CF'}, ('teal', 'amber', 'key'))
rgba.save(os.path.join(out, 'demo-art.png'))
save_preview(rgba, '#151515', os.path.join(out, 'demo-preview.png'))
print('ok', rgba.size)
