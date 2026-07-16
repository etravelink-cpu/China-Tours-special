# Etrips v3 — REBUILD BRIEF (founder ruling 2026-07-17, supersedes DESIGN.md register)

v2 (navy-luxe) shipped and was REJECTED: wrong energy. v3 law below.

## Register: FUN, BRIGHT, ALIVE — match the logo
The eTrips logo (rounded bubbly letterforms, sky blue #2FA8DD-family, orange
kangaroo #F59B23-family) is the brand anchor. The site must feel like the
logo: playful, warm, sunny, exciting. NOT corporate-luxe, NOT moody.

## Palette (light blue + gold/orange on white)
- Canvas: white / very light warm white
- Primary: logo sky blue (sample exact hexes FROM assets/img/yiyou.png)
- Accent: logo orange-gold (kangaroo hex), used generously for CTAs/energy
- Deep navy is DEAD sitewide. Compute AA pairs fresh (sky blue fails as small
  text on white — need a certified darker blue for text, but it must read as
  "dark sky blue", not navy).

## Type
- Kill Cormorant Garamond. Display = rounded/friendly to echo the logo:
  Baloo 2 / Fredoka (Latin) + a friendly SC (ZCOOL KuaiLe for short headings,
  or rounded-weight Noto Sans SC 700) — test renders, pick what matches the
  wordmark without going childish. Body: clean rounded sans (Nunito/Varela +
  system CJK).

## Imagery: BRIGHT daylight, saturated, joyful
- Regenerate all 20 slots via gpt-image: golden sunshine, blue skies, vivid
  color, people-scale joy where possible. No night/dusk moodscapes.
- tools/fetch_images.py + scratchpad gen pipeline already exist.

## HERO = VIDEO (the centerpiece)
- arc-studio → seedance 2.0 / gemini omni flash drone-flyover clips:
  Twelve Apostles coast, Zhangjiajie pillars (the "Avatar mountains" — plot
  the real drone path from Google Maps coords 29.315°N 110.434°E over the
  Yuanjiajie pillars), Sydney Harbour sweep, Milford Sound.
  Bright daylight, fast-but-smooth drone energy, 5-10s loops, muted autoplay,
  poster fallback, ≤6MB each (re-encode CRF 28 1080p).
- Skills: video-studio / arc-studio / seedance-core / gemini-omni-core.

## Layout: REINVENT, don't restyle
- v2 kept the original section order — v3 should restructure: bold asymmetric
  hero w/ video, ticket-stub/boarding-pass motifs, tilted cards, big rounded
  shapes echoing the logo curves, kangaroo mark as a recurring motif/mascot.
  Steal energy from: Club Med, Contiki, Flight Centre, Student Flights,
  Intrepid Travel (fun-register travel brands) — clean-room principles only.
- DOM contracts in DESIGN.md STILL BIND (JS-rendered classes + gen_regions
  pipeline). Reinvent visuals within those contracts.

## Specific reworks demanded
- Trust band: kill "licensed agency / bilingual advisors" corporate phrasing —
  rewrite warm + concrete ("悉尼出发 · 说中文 · 全程有人管" energy), playful
  icons or the kangaroo motif.
- QR codes: design pretty frames (rounded cards, logo-colored borders, WeChat
  green kept functional), not bare pasted PNGs.
- Hero motion: video replaces ken-burns; motion elsewhere can be bouncier
  (still no elastic overshoot on UI, but livelier reveals ok in this register).

## Process gates (non-negotiable after R-004)
1. Sample logo hexes first; render a palette/typography mock + ONE hero mock;
   SHOW FOUNDER BEFORE building anything.
2. RENDER+LOOK per section; impeccable critique before ship.
3. All v2 verification infra (playwright suite, contracts, a11y fixes) carries
   over — do not regress a11y/perf/bilingual work.
