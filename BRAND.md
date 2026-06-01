# Moontaxi Lab — Brand Guide

A reference for building a design system (favicons, share/OG assets, marketing materials).
All values below are pulled from the live site so the system stays in sync with production.

---

## 1. Brand essence

**Moontaxi Lab is an AI-native operating studio** — Paula McMahon's advisory practice, project
archive, and launchpad for useful things. It helps AI-native companies turn early traction into
durable growth, working *alongside* leaders and founders rather than from a deck.

The visual identity is a **dark, cosmic, instrument-panel** aesthetic: a builder's console, not a
glossy agency site. Mysterious skin, legible skeleton — the surface feels like mission control,
but the substance underneath is radically plain and direct.

**Deliberate contrast with [paulamcmahon.com](https://www.paulamcmahon.com):** the personal site is
warm, editorial, and teal-accented. The Lab is the opposite — near-black, technical, honey-accented.
**Teal is reserved for the personal brand and must never appear in Lab assets.**

---

## 2. Voice & tone

- **Direct and operational.** Short declaratives. "Growth strategy. Scale ops. Build."
- **Entity voice, not first-person.** The Lab does the work ("the Lab builds…"), not "I build…".
- **Confident, not salesy.** State capability plainly; let the work imply the pitch.
- **A thread of mystery.** Hint that there's more in the lab than what's public ("The rest stays
  in the lab."). Redaction and "in progress" framing are on-brand.
- **No em-dashes in copy.** Use periods or commas instead. (Standing house rule.)
- **Confidentiality-safe.** Describe *patterns*, never client specifics.

---

## 3. Logo / wordmark

There is no pictorial logo. The identity is a **lowercase monospace wordmark**:

> `moontaxi lab`

- **Typeface:** JetBrains Mono, 400–500 weight
- **Case:** always lowercase
- **Color:** Honey `#e8b54a` on dark; never on a light background without testing contrast
- **Tracking:** slightly loose (~0.04em) at small sizes
- **Clear space:** keep at least the cap-height of the wordmark clear on all sides

When a mark/glyph is needed (favicon, avatar), derive it from the wordmark — e.g. a lowercase
**`m`** or a small instrument-panel motif (pulse dot, console caret) in honey on space-black.

---

## 4. Color palette

The system is a dark instrument panel with a single warm accent.

### Core surfaces (dark)
| Token | Hex | Role |
|---|---|---|
| `space-black` | `#08080c` | Page background. The base of everything. |
| `lab-surface` | `#0f0f16` | Card / panel background (raised from base). |
| `lab-surface2` | `#141420` | Hover / secondary panel surface. |
| `lab-border` | `#252532` | Primary borders, dividers, chips. |
| `lab-borderlt` | `#1a1a24` | Subtle/light borders, section rules. |

### Text
| Token | Hex | Role |
|---|---|---|
| `star-white` | `#f7fafc` | Headlines, highest-emphasis text. |
| `lab-text` | `#e0e0ea` | Body text (default). |
| `lab-muted` | `#5c5c72` | Secondary text, labels, captions. |
| `lab-dim` | `#363648` | Tertiary / de-emphasized, console labels, redaction. |

### Accent
| Token | Hex | Role |
|---|---|---|
| `honey` | `#e8b54a` | The single brand accent. Wordmark, links, stat figures, key CTAs, focus. Use sparingly for signal. |

### Status signals
| Token | Hex | Role |
|---|---|---|
| `lab-green` | `#6db88a` | "Live" / active indicators. |
| `lab-blue` | `#6b9bc8` | Informational / secondary signal (rare). |

### Selection / system
- Text selection: `honey` at 28% — `rgba(232, 181, 74, 0.28)`, selected text `#f7fafc`
- Scrollbar thumb hover: `honey` `#e8b54a`

**Rules**
- Honey is precious — one accent, used for signal, not decoration.
- No teal, cream, or warm-paper tones (those belong to paulamcmahon.com).
- Maintain dark-mode contrast: body text `#e0e0ea` on `#08080c`.

---

## 5. Typography

Three families, loaded via `next/font/google`:

| Role | Family | Weights | Usage |
|---|---|---|---|
| **Sans (primary)** | **Inter** | 400 / 500 / 600 | Headlines and body. Tight tracking on large headings (~-0.025em). |
| **Mono** | **JetBrains Mono** | 400 / 500 | Wordmark, console/section labels, chips, stat figures, code-flavored UI. |
| **Display** | **Rationale** | 400 | Occasional display use (legacy/decorative). Optional. |

**Type patterns**
- Big headlines: Inter 600, `clamp(2.6rem, 7vw, 4.2rem)`, leading ~1.05, tight tracking.
- Section labels: JetBrains Mono, ~0.68rem, UPPERCASE, letter-spacing ~0.14em, color `lab-dim`,
  prefixed with `//` (e.g. `// what the lab does`).
- Body: Inter, ~0.95–1rem, leading ~1.6, color `lab-text`/`lab-muted`.
- Stat figures: JetBrains Mono 500, large, color `honey`.

---

## 6. Design motifs (the "instrument panel" kit)

These recurring elements define the look and should carry into marketing assets:

- **`//` console labels** — section headers read like code comments, in dim mono caps.
- **`→` arrows** — used for list bullets, links, and CTAs ("Start a conversation →").
- **Pulse dot** — small honey dot that fades 1↔0.35, signals "live/active" (e.g. status eyebrow).
- **"Live" indicator** — tiny green dot blinking next to shipped/live items.
- **Redacted cards** — blurred/placeholder bars at ~55% opacity with a blinking caret `_`,
  used for "in progress / in the lab" mystery.
- **Hairline rules & 1px borders** — thin dividers (`lab-borderlt`) separate sections.
- **Chips** — small bordered mono tags on `lab-surface` for skills/stack/systems.
- **Rounded radii** — small: 3–7px. Nothing pill-shaped or bubbly; corners stay technical.

**Motion:** subtle and slow. Scroll-reveal fades (translateY ~14px, ~550ms ease-out), 2s pulse,
2.2s live-blink, 1.1s cursor blink. Never bouncy or fast.

---

## 7. Favicon & app icons (TO BUILD — currently missing)

The main site has **no favicon yet** (only the wedding subpage has one). Create a set:

- **Concept:** lowercase `m` or a single instrument motif (pulse dot / caret) in **honey
  `#e8b54a`** on a **space-black `#08080c`** rounded tile.
- **Keep it legible at 16px** — high contrast, no fine detail.

| Asset | Size | Notes |
|---|---|---|
| `favicon.ico` | 16, 32, 48 (multi-res) | Browser tab. |
| `icon.svg` | vector | Scalable master. |
| `apple-touch-icon.png` | 180×180 | iOS home screen, space-black tile. |
| `icon-192.png` / `icon-512.png` | 192, 512 | PWA / Android, maskable-safe padding. |

In Next.js App Router, drop `icon.svg` / `apple-icon.png` into `src/app/` to auto-wire them.

---

## 8. Social / share / Open Graph assets

Current OG metadata (in `src/app/layout.tsx`):
- **Title:** `Moontaxi Lab`
- **Description:** "The AI-native operating studio of Paula McMahon — advisory practice, project
  archive, and a launchpad for useful things." *(note: rework the em-dash if regenerating copy)*
- **URL:** `https://www.moontaxilab.com`

**OG image (TO BUILD):**
- **Size:** 1200×630px.
- **Background:** `space-black #08080c`, optional faint instrument-panel texture/grid.
- **Wordmark:** `moontaxi lab` in honey mono, lower-left or centered.
- **Headline:** a short Inter line in star-white, e.g. *"AI-native operating studio."*
- **Accent:** one honey pulse dot or `//` label for signal. Keep it sparse.
- Provide a 1×1 variant (1080×1080) for square social.

---

## 9. Marketing materials

Carry the console aesthetic into decks, one-pagers, and social:

- **Backgrounds:** always start from `space-black`; panels in `lab-surface`.
- **One accent:** honey for emphasis only; everything else is the grey text ramp.
- **Labels:** lead sections with `// label` mono captions.
- **Data/proof:** present numbers as large honey mono figures with muted captions (the "signal"
  pattern), not pie charts or busy infographics.
- **Tone in copy:** short declaratives, entity voice, a hint of mystery, no em-dashes.
- **Imagery:** technical/cosmic over lifestyle. Avoid stock-warmth, gradients-of-the-month,
  and anything that reads like the personal site.
- **Footer line:** "Run by Paula McMahon →" links the Lab back to the personal brand.

---

## 10. Quick do / don't

**Do**
- Dark-first, space-black base.
- Honey as the one signal accent.
- Mono labels, `//` and `→` motifs, hairline borders.
- Plain, confident, confidentiality-safe copy.

**Don't**
- No teal, cream, or warm-paper palettes (reserved for paulamcmahon.com).
- No em-dashes in copy.
- No first-person voice in brand materials.
- No client specifics — patterns only.
- Don't over-use honey; if everything's accented, nothing is.

---

## Token quick-reference (for design tools)

```
space-black   #08080c   bg base
lab-surface   #0f0f16   card
lab-surface2  #141420   card hover
lab-border    #252532   border
lab-borderlt  #1a1a24   subtle border / rule
star-white    #f7fafc   headline
lab-text      #e0e0ea   body
lab-muted     #5c5c72   secondary
lab-dim       #363648   tertiary / labels
honey         #e8b54a   accent (the only one)
lab-green     #6db88a   live / active
lab-blue      #6b9bc8   info (rare)

Fonts: Inter (sans), JetBrains Mono (mono/labels/wordmark), Rationale (display, optional)
```
