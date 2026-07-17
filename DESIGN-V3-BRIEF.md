# Etrips v3 — REBUILD BRIEF (founder ruling 2026-07-17, supersedes DESIGN.md register)

v2 (navy-luxe) shipped and was REJECTED: wrong energy. v3 law below.

## Register: FUN, BRIGHT, ALIVE — but PROFESSIONAL (founder ruling 2026-07-17)
Playful energy from the logo, never childish: bright + warm + energetic, yet a
trustworthy agency selling $3-20k family tours. "Contiki energy, Flight Centre
trust." Rounded type stays legible-professional (no cartoon faces for body or
long headings); layout is lively, not circus; color is sunny, not neon.
DIAL (founder, final): ~70% professional / 30% playful. Joy is carried by the
bright imagery, drone video, color accents and warm copy — NOT by novelty
layout gimmicks. Ticket-stub/tilted/mascot motifs: at most ONE, used subtly.
A parent booking a $15k family tour must feel "these people are delightful
AND completely on top of it".
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

## v3.1 addendum (founder rulings 2026-07-17, evening)
- Palette LAW tightened: PURE WHITE canvas (#FFFFFF, cream #FFF9F0 dead), logo
  light blue + gold only; support inks derived quietly. CTA = orange fill with
  WHITE text (#DB7700 computed 3.16 AA-large @16px bold; dark-on-orange dead).
- Hero: NO white card — centered white display type directly over the video
  (scrim + text-shadow); video is the star.
- Dark/saturated bands flipped light: enquiry + footer = light sky tints.
- Icon system: filled duotone (sky-deep + orange accent), no generic outlines.
- WeChat popup = chat-style card (green header, framed QR cards, tail).
- Imagery: real licensed Pexels only (AI-generated look rejected).

## v3.2 addendum (2026-07-18, founder rulings)
- 主导航精简为 5 项：首页 / 目的地▾（8 区下拉）/ 私人订制 / 关于我们 / 联系我们。
  下拉 = 悬停 + focus-within，移动端始终展开。
- 按钮统一 3D 系统：实底 + 深色下沿（--btn-edge），悬停抬 2px、按下压 2px。
  橙 CTA 下沿 #A85800，天蓝下沿 #085E8A，描边按钮下沿 line-cool。全站一致。
- 客户评价 = Trustpilot 式卡片自动轮播（4s 自动前进，悬停/触摸/聚焦暂停，
  reduced-motion 关闭自动播放），无圆点，仅左右箭头。
- 首页滚动航线：俯视袋鼠小飞机沿虚线航线随滚动飞行（GSAP ScrollTrigger +
  MotionPathPlugin，本地 vendor；仅 >1080px 且无 reduced-motion；flightradar 语言：
  虚线 #9ED4F0 + 橙色 waypoint 图钉）。
- 信任条（trust band）标题与副标题必须单行，四枚等高对齐（EN 文案按此裁剪）。

## v3.2.2 addendum (2026-07-18, founder rulings, second batch)
- 橙色 CTA 提亮为 logo 橙 #F09018（创始人：#DB7700 太闷太暗）。物理约束：任何比
  #DB7700 更亮的橙上白字都低于 3:1（#F09018 白字仅 2.41），故 CTA 文字改为 ink
  #1D3D4F（4.75 AA-large）。此项取代 v3.1 “dark-on-orange dead” 裁定。
  下沿同步提亮 #A85800 → #C06E00，光晕 rgba(240,144,24,·)。
- 页头“在线咨询”= 橙色 btn-gold（紧凑版 padding 10/20、font 14）。
- 页头目的地搜索 = 自定义胶囊下拉（.h-dest-btn + .h-menu，与主导航下拉同语言），
  原生 select 禁用。选中态跨语言切换保留。
- 滚动航线开放移动端（飞机 56px、航线 stroke 2）；回滚时机身内层 180° 翻转，
  飞机永远机头朝前，不倒飞。
