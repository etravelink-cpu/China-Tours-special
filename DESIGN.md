# Etrips 国安易游 — Design System (v2 amplification)

Single source of truth for the 2026-07 site amplification. Every page, agent, and
edit conforms to THIS file. If a page disagrees with this file, the page is wrong.

## Scene (derives everything)

A Chinese-Australian family in Sydney, evening, planning the parents' first big
trip back to China. They need to feel the agency is **established, calm, and
handles everything**. Daylit-trust register: warm paper light, deep-harbour navy
ink, one gilt accent. Premium but warm — never corporate-cold, never playful-cheap.

## Brand law (founder-locked 2026-07-16)

Three colours: **deep blue · gold · white**. Nothing else enters the palette.
The logo (sky-blue eTrips wordmark + orange kangaroo) stays as-is; its sky blue
and orange live ONLY inside the logo image. Never introduce new hues (see
REGRESSIONS.md R-001 — the "brown" incident).

## Tokens (certified 2026-07-16, WCAG computed)

```css
:root{
  --paper:#FAF7F2;        /* page bg — warm paper, never pure white page */
  --white:#FFFFFF;        /* card/panel surface on paper */
  --deep:#0B2239;         /* darkest navy: footer, hero scrim base, on-gold text */
  --navy:#123252;         /* primary structural navy: bands, headings */
  --navy-soft:#1B3A5B;    /* brand navy (README): panels on navy, hovers */
  --ink:#15263B;          /* body text on light (AAA) */
  --muted:#4E6076;        /* secondary text on light (AA) */
  --subtle:#77879B;       /* captions/labels ≥18px only (AA-large) */
  --gold:#C9962E;         /* accent: fills, borders, stars, badges */
  --gold-bright:#E8B04B;  /* accent on navy, CTA fill, hover glow */
  --gold-deep:#8F6A1D;    /* the ONLY gold allowed as text on light (AA 4.94) */
  --line:#E5DFD3;         /* hairline on paper */
  --line-navy:rgba(255,255,255,.14); /* hairline on navy */
}
```

### Certified contrast pairs (do not deviate)
| use | pair | ratio |
|---|---|---|
| body text | ink / paper | 14.3 AAA |
| secondary | muted / paper | 6.0 AA |
| headings | navy / paper·white | 12.2–13.1 AAA |
| gold text on light | **gold-deep only** / white·paper | 4.9–4.6 AA |
| ~~gold as text on light~~ | gold / white = 2.66 | **FAIL — banned** |
| text on navy band | white·paper / navy·deep | 12.2–16.1 AAA |
| gold accent on navy | gold-bright / deep·navy | 8.3–6.7 AA+ |
| primary CTA | deep text / gold-bright fill | 8.25 AAA |

### Accent rationing
Gold ≤ ~12% of any viewport. It appears on: primary CTA, section eyebrow rule,
price figures (gold-deep), stars, active states, hairline flourishes. Never as
large background fields, never as body text.

## Type (TBD-RESEARCH: final stacks land after research brief)

- Display (CN+EN): serif with real SC coverage, loaded via Google Fonts
  chinese-simplified unicode-range subsets, `font-display:swap`.
- Body: system CJK stack (`"PingFang SC","Hiragino Sans GB","Microsoft YaHei"`)
  + humanist Latin webfont.
- Banned: Inter, Roboto, Arial, Poppins, Segoe UI as a *chosen* face. Fraunces is
  the noboringsites studio face — firewalled, never here.
- CN display headings get `letter-spacing:.02em–.06em`; EN eyebrows uppercase
  tracked `.12em+`.

## Layout & rhythm

- Content max-width 1200px (`--maxw` stays). Hero full-bleed.
- Section vertical padding varied, 4.5–8rem; never uniform down the page.
- Every section opens: eyebrow (uppercase EN, tracked, subtle, gold tick) +
  large CN display heading + one-line lede (muted). Existing `.section-title`
  contract keeps working but is restyled; orange underline bar is dead.
- Hairlines over boxes. No nested cards. No drop-shadow soup: one shadow recipe
  `0 20px 60px rgba(11,34,57,.10)` for elevated cards, hairline borders elsewhere.
- Emoji icons are BANNED (✓🗣🌿🎁💡 all die). One inline-SVG icon set, 1.5px
  stroke, navy or gold, drawn consistent.

## Motion (no build step — CSS + IntersectionObserver, `assets/js/motion.js`)

- Reveal: fade + 16px rise, 0.6s ease-out-expo, stagger 60–90ms via
  `[data-reveal]` + IO. Honour `prefers-reduced-motion` (everything renders
  static-final without JS — no-JS render is the crawler render).
- Hero: slow ken-burns crossfade (existing `.hero-slide` contract) or muted
  looping video with poster; scrim = deep→transparent gradient.
- Hover: card lift 4px + shadow deepen + image scale 1.04; nothing elastic.
- Counters (trust band numbers) count up on first view; static without JS.

## DOM contracts (JS-rendered — classes/ids that MUST keep working)

`#site-header .nav .lang-btn .hamburger .header-search .h-select .h-search` ·
`#float-bar .float-btn .wx-pop` · `#hero-slides .hero-slide .hero-content
.hero-dots .dot` · `.card .thumb .body .meta .tag .price` · `.grid .grid-2/3/4`
· `.dest-row .dest-strip .ov .lbl .en` · `#biz-grid #hot-grid #adv-grid
#review-grid #tips-grid` · `.rp-banner .rp-slides .rp-slide .rp-banner-in
.rp-layout .rp-nav2 .rp-group .rp-group-title .rp-group-list .rp-route
.rp-detail-area .rp-route-pane .rp-detail-hero .rp-badge .rp-price-row
.rp-price-item .rp-tabs .rp-tab .rp-tab-panel .rp-summary .rp-pricetable
.rp-detail-cta .rp-date-* .rp-sec .rp-timeline .rp-coming-box` · `.bk-*` ·
`.form-card .form-row` · `.sp-*` · `.tabs .tab-panel .day` · `.faq-item .ans` ·
`.detail-hero .detail-tags .detail-price` · `.back-btn` · `.date-trigger
.date-pop .dp-* .dc` · `.contact-band .contact-grid .cc-*` · `.footer-*` ·
`body.printing-route #print-header .ph-*` (print PDF flow) · `body.nav-open`.

`region-plans.js` is GENERATED by `tools/gen_regions.py` from the client's Excel.
Never hand-edit it; the restyle happens in CSS against the `.rp-*` contracts.

## Signature features (survive by default — client-mode rule 3)

1. WeChat float widget + QR popover (primary conversion channel)
2. Bilingual CN/EN toggle (localStorage, re-renders header/footer)
3. Grouped route sidebar + tabbed detail panes on list.html (200 tours)
4. Print-to-PDF itinerary flow (`printRoute`, `body.printing-route`)
5. EmailJS enquiry/booking/custom forms → etripsetrips@gmail.com
6. Custom departure date-picker with real departure highlighting
7. Header destination quick-search
8. Footer QR grid (小易 / 小游 / 公众号)

## IA preservation (route-count before == after)

index · list(?d=×9) · subpage · detail · booking · custom · contact · about ·
faq · departures · tours/index (internal archive; links target gitignored files
— note in handover, do not "fix" by deletion) · tours/adora-magic-city.

## Imagery

- Licensing law: every shipped image is Pexels-licensed, client-owned-confirmed,
  or generated. The `hero-sydney-tmp/` (Marcus Kung watermark) and
  `Sydney Opera House*.jpg` scrapes are UNCONFIRMED — never ship, never
  de-watermark; flagged in handover. Wikimedia banner credits in region-plans
  stay as the client set them.
- Grade: cool navy shadows, warm golden-hour highlights — every asset graded to
  the same evening-light world. gpt-image fills gap slots (destination tiles
  needing consistent grade); real Pexels photo/video for hero + section imagery.
- Delivery: WebP, srcset widths 480/960/1440/2048, hero poster ≤120KB,
  lazy-load below fold. Manifest: TBD-RESEARCH (imagery lane).

## Copy truth constraint

Every claim traces to the client's own content. Real numbers allowed: 200+
tours, 9 destinations regions, Sydney office, two hotlines, WeChat channels.
No invented years-in-business, awards, or counts. Reviews shipped only as the
client supplied them. Voice: warm-professional 中文 first, EN parallel.

## Per-page treatment

Every page: new header (paper, hairline, refined nav), new deep-navy footer
(bright-blue footer is dead), motion.js reveals, section eyebrows.

- **index**: full-bleed cinematic hero (video/ken-burns + scrim + display type +
  gold CTA + trust chips) · navy trust band w/ real numbers + SVG icons ·
  editorial destination grid (featured asymmetric) · redesigned tour cards ·
  advantages as numbered editorial list w/ hairlines · reviews refined ·
  tips compact · enquiry navy band · footer.
- **list**: restyled rp-sidebar (paper cards, gold active states), detail panes
  (navy hero scrim, gold price chips, refined tabs/tables), card grid.
- **subpage/detail**: editorial itinerary timeline, refined tables.
- **booking**: focused single-column flow, sticky summary feel, trust reassurance.
- **contact/custom/faq/about/departures**: same system, forms refined, FAQ
  accordion restyled.
