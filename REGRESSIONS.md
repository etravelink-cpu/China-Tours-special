# REGRESSIONS — China-Tours-special (etrips.com.au)

Permanent log. Read before making changes. Never remove entries.

## R-001 · 2026-07 · Invented off-brand colour ("brown dogshit" incident)
- **What**: An agent-led redesign (GPT-5.6 Sol via Hermes) invented a brown
  palette not present in any brand asset. Founder rejected; full revert
  (`f18436c` revert + `90c06fc` corrective blue-and-white release).
- **Root cause**: No palette law in repo; agent derived colours from taste
  instead of brand anchors.
- **Prevention**: DESIGN.md brand law — deep blue · gold · white ONLY, tokens
  certified with computed contrast. Any new hue = automatic reject.

## R-002 · 2026-07 · Unoptimised "redesign" mess from mis-prompted agent
- **What**: Hermes-driven Fable 5 build (`1e82f27`) shipped an unoptimised
  pile-up: conflicting styles, broken shared UI (`42b81a6` repaired shared
  regressions), homepage rebuilt twice.
- **Root cause**: No single design source of truth; agent prompted without DOM
  contract inventory, so shared JS-rendered components broke.
- **Prevention**: DESIGN.md "DOM contracts" section lists every class/id that
  JS renders into. Any restyle keeps those contracts; verify with the Playwright
  screenshot suite (all 13 pages × 2 viewports) before commit.

## R-003 · 2026-07-16 · Unlicensed imagery in repo (latent, caught pre-ship)
- **What**: `assets/img/hero-sydney-tmp/` holds third-party watermarked photos
  (Marcus Kung Photography) and web-scraped Opera House images; destination
  tiles are of mixed provenance.
- **Root cause**: Free-tier LLM builds pulled images without licence checks.
- **Prevention**: Imagery licensing law in DESIGN.md — Pexels-licensed,
  client-confirmed, or generated only. Never de-watermark. Flag unconfirmed
  assets to client instead of shipping.

## R-004 · 2026-07-17 · v2 shipped in wrong brand register (navy-luxe vs logo-fun)
- **What**: v2 amplification used deep navy #0B2239/#123252 + serif display +
  dusk/night imagery. Founder ruling: theme is LIGHT BLUE + gold on white,
  matching the playful rounded eTrips logo; site must match the logo's energy.
  Dark/moody imagery reads dead, not travel-joy. Layout retained too much of
  the original structure; hero motion too subtle; trust copy bland.
- **Root cause**: palette derived from premium-operator references + a
  misreading of founder's "deep blue and cold [gold]" message instead of from
  the client's own logo. Register check skipped the brand mark itself.
- **Prevention**: the LOGO is the first brand anchor, before any competitor
  reference. Confirm palette + register with a rendered swatch/mock BEFORE
  building. See DESIGN-V3-BRIEF.md.
