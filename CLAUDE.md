# Alberta Heart Website. Project Notes for Claude

## What this site is for

Public-facing site for **Alberta Heart (AB❤️)**, a student team competing in the **Heart Hackathon**: an international, year-long, interdisciplinary competition to design innovations for a **Total Artificial Heart (TAH)**.

The team's mission: *to work at the intersection of innovation and engineering excellence to develop and promote technologies associated with the Total Artificial Heart.*

## Subteams

The team is organized into five subteams. Each has a dedicated primary + secondary color already defined in `app/globals.css`. Use these when building subteam-specific UI.

| Subteam | What they do | Tailwind colors |
|---|---|---|
| **Admin** | Commercialization, sponsorship, outreach, ops | `admin` / `admin-light` |
| **Mechanical** | Solid modeling, structural design | `mechanical` / `mechanical-light` |
| **Electrical** | Electronics, controls, instrumentation | `electrical` / `electrical-light` |
| **Bio** | Biology / medicine side of the TAH | `bio` / `bio-light` |
| **Simulations** | Fluid mechanics, CFD, modeling | `simulations` / `simulations-light` |

## Audience for the site

In rough priority order:
1. **Prospective student members**: engineers/scientists/business students looking for a team
2. **Sponsors**: companies that might fund the team; need a polished, credible feel
3. **Heart Hackathon judges / wider public**: context, mission, project progress

## Stack

- Next.js 16 (App Router) + React 19
- Tailwind CSS 4 (theme tokens in `app/globals.css` via `@theme`)
- TypeScript
- Local fonts via `next/font/local` (see `app/_fonts/fonts.tsx`)

## Design tokens (already defined)

**Brand palette:** `light-red` `#bc1823`, `maroon` `#560216`, `dark-blue` `#0d203b`, `medium-blue` `#0d566d`, `light-blue` `#1b7895`, `grey` `#e6e6e4`.

**Fonts** (use the Tailwind classes, not the raw vars):
- `font-impact` → Norwester (display / big impact headlines)
- `font-heading` → Glacial Indifference (section headings, nav)
- `font-sans` → DM Sans (body)

## Progress so far

### Built

**Header (`app/_components/header.tsx`)**
Sticky top bar with the AB logo, three nav links (About, Team, Sponsor), and a Contact Us CTA. Nav routes live in a `navLinks` array at the top of the file; About is wired to `/about`, Team and Sponsor are still `#` (left inert until their pages exist, so the TODO is obvious). Uses Next.js `<Link>` so navigation is client-side.

**Home hero (`app/_components/hero.tsx`)**
Two-column layout, fills the viewport (`min-h-[calc(100vh-6rem)]` accounts for the sticky header). Left: eyebrow, headline ("Engineering a heart that doesn't quit."), subhead, animated EKG trace, two CTAs (Join, Sponsor). Right: the static AB logomark. Three decorative layers sit behind the content:
1. Radial bloom (inline-styled gradient): admin-purple at the right edge transitioning through light-red to transparent before reaching the headline.
2. `<Capillaries>` (right half only): generative SVG network with a built-in traveling glow wave.
3. White section background.

**Capillaries component (`app/_components/capillaries.tsx`)**
Procedurally generates a branching capillary network using a seeded mulberry32 PRNG (deterministic, so server and client render identical SVG with no hydration mismatch). Trunks spawn only from the right side / top-right / bottom-right of the SVG so nothing appears to come out of mid-page. The "glow wave" is an animated SVG radial gradient masked to the capillary path shapes: a narrow band of bright red sweeps outward from the SVG's left edge (which sits at screen center) every 3 seconds, illuminating the vessels as it passes through them. Knobs: `seed`, `density`, `width`, `height`, `glow`, `glowDuration`, `glowOriginX`, `glowOriginY`.

**About page (`app/about/page.tsx`)**
Magazine-style editorial layout (`max-w-5xl` outer, narrow text columns inside). Three sections:
1. **Heart Hackathon explainer** (lead, h1). 7/5 grid: header + body on left, portrait image on right (top-aligned with the eyebrow). Wide banner image below, then a closing paragraph in a narrow reading column.
2. **Our Mission**. Pull quote with light-red left border + body paragraphs on the left (8 cols), tall portrait image flanking on the right (4 cols). Uneven bottoms intentional.
3. **Our Story**. Header + placeholder paragraph, then a three-tile staggered collage (second tile drops 16, third drops 8 from md+) for a polaroid-scattered feel.

The page has a local `<Placeholder>` component (defined at the bottom of the same file) for image stubs: gradient-shaded box with a dashed inner frame. The `label` prop is the screen-reader description and an in-code TODO note for whoever wires the real photos.

### Pending content (need from the team)

- **Team origin story** copy for About section 3.
- **Real photos** for all `<Placeholder>` slots on About (see `aria-label` on each for what the slot is meant to be).
- **Team page** and **Sponsor page** copy and structure (routes don't exist yet).
- **Contact** target (where the header's "Contact Us" CTA should go).

### Pending features / sections

- The five-subteam grid (planned for home, not yet built). Strongest visual asset that the design tokens already support.
- "What's the Heart Hackathon?" explainer block on home (currently only on About).
- Sponsor wall, By-the-Numbers, This Year's Project sections on home.
- Mobile layout for `<Capillaries>` (currently positioned `right-0 w-1/2` regardless of breakpoint).

## Conventions

- Components live in `app/_components/` (underscore prefix means not a route).
- Use the Tailwind color tokens (e.g. `bg-light-red`, `text-dark-blue`); don't hardcode hex values in components.
- New top-level pages should slot into the header `navLinks` array.
- Logo assets: `public/AB.svg` (mark) and `public/ABWithText.svg` (lockup).
- **Write generous code comments.** Top-of-file JSDoc on every component explaining its role; section banners for structural regions; inline comments for non-obvious bits (animation tricks, layout hacks, magic numbers). This overrides the usual "no comments unless surprising" default. The site is read by new team members, so comments are pedagogical.
- **TSDoc rules.** Every exported component/function gets a TSDoc block. Keep the prose to a short paragraph (a couple of sentences, what it is and what's notable about its layout/behavior). Then **always** use `@param` for every parameter or prop and **always** use `@returns` for the return value. Even when a component takes no props, include a `@returns` line describing what renders. Skipping these tags is not allowed, even when the types make them feel redundant.
- **No em dashes (—).** Anywhere. Body copy, code comments, placeholder labels. Use commas, colons, parentheses, or a period instead.

## Don't

- Don't introduce a UI library (shadcn/MUI/etc.) without asking. The project is intentionally hand-rolled with Tailwind.
- Don't hardcode brand colors in components; extend `@theme` if a new token is needed.
- Don't add `*.md` docs unless asked.
- Don't bring back animations on the logomark itself. The current design intentionally keeps the logo still and lets the surrounding capillaries carry the heartbeat motion.
