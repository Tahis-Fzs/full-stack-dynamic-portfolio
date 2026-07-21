# Studio Tahsin — Creative Brief

**Version:** 1.0 · Step 0 lock  
**Owner:** Md. Shadman Tahsin  
**Product:** Industry-grade portfolio (`full-stack-dynamic-portfolio`)

---

## North star

Sell **thinking process**, not screenshots. Every project follows:

**Problem → Approach → Challenges → Impact → Production notes**

Positioning line:

> Full-stack products & applied ML — from Dhaka transport to digital wallets — with documented trade-offs, not just demos.

Signature hook: **Dual-mode entry** (Recruiter / Engineer) + **Project Constellation** (Engineer hero, balanced 3D) + **product-launch case studies** (PayLite X, StudentMove).

---

## Audience modes

| Mode | Budget | Experience |
|------|--------|------------|
| **Recruiter** | Minimal JS, no WebGL | Problem + Impact cards, skills, CV, contact in ~30s |
| **Engineer** | Lazy WebGL + GSAP | Constellation hero, shader backdrop, scroll cinema, view transitions |

Rules:

- Mode choice persisted in `localStorage` key `studio-tahsin-mode`
- Nav toggle switches modes without reload
- `prefers-reduced-motion: reduce` → Recruiter motion only (opacity, no parallax)

---

## Brand

### Palette (PayLite family — no generic purple mesh)

| Token | Hex | Usage |
|-------|-----|--------|
| `--bg-void` | `#020617` | Page background |
| `--bg-elevated` | `#0f172a` | Sections, panels |
| `--surface-glass` | `rgba(255,255,255,0.06)` | Glass cards |
| `--border-subtle` | `rgba(148,163,184,0.12)` | Dividers |
| `--accent-cyan` | `#22d3ee` | Links, focus, tech highlights |
| `--accent-paylite` | `#e2136e` | Flagship accent, CTAs |
| `--text-primary` | `#f8fafc` | Headlines |
| `--text-muted` | `#94a3b8` | Body secondary |
| `--text-dim` | `#64748b` | Captions |

### Typography

| Role | Font | Weight |
|------|------|--------|
| Display | Instrument Serif | 400–600 |
| UI | Inter | 400–600 |
| Mono | JetBrains Mono | 400 |

Scale: display hero  clamp(2.5rem, 6vw, 4.5rem) · section  clamp(1.75rem, 3vw, 2.5rem) · body 1rem · small 0.875rem

### Spatial system

- Max content width: `72rem` (1152px)
- Section padding: `clamp(4rem, 10vw, 7rem)` vertical
- Card radius: `1rem` (16px) · pill radius: `9999px`
- Glass blur: `backdrop-blur-xl` (24px)

---

## Motion system

### Easing & duration

```css
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--duration-fast: 320ms;
--duration-base: 480ms;
--duration-cinematic: 1000ms;
--stagger: 60ms;
```

### Library roles (do not overlap blindly)

| Library | Scope |
|---------|--------|
| Lenis | Engineer mode scroll physics only |
| GSAP ScrollTrigger | Pinned case-study sections, split headlines |
| Motion (Framer) | UI state, filters, layout, nav |
| View Transitions API | Project card → case study morph |
| R3F + drei | Constellation hero only, dynamic import, `ssr: false` |

### Anti-patterns (never ship)

- Purple gradient blob hero
- `fade-in-up` on every section
- Equal-weight 14-project grid
- Stack tags as card headline
- Fake accuracy / user metrics
- WebGL on mobile hero
- “Passionate developer” copy

---

## Page architecture

| Route | Type |
|-------|------|
| `/` | Mode entry + home |
| `/works` | Tiered bento + filters |
| `/works/paylite-x` | Launch case study |
| `/works/studentmove` | Launch case study |
| `/works/[slug]` | Standard case study |
| `/about` | Timeline + philosophy |
| `/resume` | Interactive CV + PDF |
| `/contact` | Form + socials |

---

## Case study template (fixed order)

1. Hero — Problem (display type) + impact line
2. Context — who / why it matters
3. Approach — architecture + whyStack
4. Challenges — decision cards
5. Impact — outcome + live CTA
6. Production — scale / security / infra
7. Gallery — screenshots (lazy)
8. Footer CTA — next project · contact · CV

---

## Project tiers

| Tier | Treatment |
|------|-----------|
| **1 Launch** | PayLite X, StudentMove — full pinned case studies |
| **2 Featured** | CKD, OCT, CICIDS, Flutter app, AgroCulture — template pages |
| **3 Archive** | smart-cart, OpenGL, collab repos — compact cards |

Excluded: empty Agro duplicates, old static `Portfolio` HTML, Laravel CMS frontend.

---

## Performance gates

| Metric | Recruiter | Engineer |
|--------|-----------|----------|
| Lighthouse Performance | ≥ 90 | ≥ 75 acceptable |
| Accessibility | ≥ 95 | ≥ 95 |
| LCP | < 2.5s | < 3.5s |
| WebGL | None | Lazy after mode select |

---

## Build sequence (locked)

0. Creative brief + tokens + content ← **current**
1. Next.js scaffold + layout + dual-mode entry
2. Recruiter home
3. Works grid + content wiring
4. PayLite launch page
5. StudentMove launch page
6. Engineer constellation hero
7. About + Resume
8. Contact + SEO + deploy

---

## Success criteria

- [ ] Recruiter understands **why PayLite exists** in < 60 seconds
- [ ] Tier 1–2 projects show thinking without opening GitHub
- [ ] Live demos linked with architecture story
- [ ] CV one-click download
- [ ] Engineer 3D does not block Recruiter performance
- [ ] Sendable to senior hiring manager
