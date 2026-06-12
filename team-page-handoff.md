# Team page handoff

Status of the `/team` route as of 2026-06-09, so the next person (or future me) can pick up and revise.

## What the page is

`app/team/page.tsx`. A contained intro header followed by one full-bleed colored band per subteam, alternating image side down the page (zig-zag). Wired into the header nav (`app/_components/header.tsx`, "Team" -> `/team`).

Four teams, mapped to existing accent color tokens:

| # | Team | Accent token |
|---|---|---|
| 01 | Electrical and Embedded Systems | `electrical` |
| 02 | Pumping Mechanism & Mock Circulatory | `mechanical` |
| 03 | Alberta Bot | `admin` |
| 04 | Clinical Assurance | `bio` |

Note: the source info listed **4 teams**, with names that differ from the 5/6-subteam taxonomy mentioned elsewhere in `CLAUDE.md` and on the About page. The page intentionally avoids stating a subteam count to sidestep that inconsistency. Worth reconciling the taxonomy across the site at some point.

## Design decisions (the questions asked + answers)

The redesign started from a contained, light-background row layout. Revised it via these four choices:

1. **Color shade of the block background** -> *Muted deep, white text.* The team's primary color pulled toward `dark-blue` (sits between the pale `-light` token and the full primary), so it's rich but not neon and white text stays legible. (Other option considered: a soft half-strength wash with dark text.)
2. **How blocks sit on the page** -> *Full-bleed bands.* Each band spans the full viewport width, stacked directly with no gaps. (Other option: contained rounded cards inside the page column.)
3. **How the image and color meet** -> *Split, image fades inward.* Image fills its half and gradient-fades into the deep color where the text sits. (Other option: full image background with a color scrim over the whole block.)
4. **Layout rhythm** -> *Keep alternating left/right* zig-zag. (Other option: uniform, same side every row.)

## Files changed

- **`app/globals.css`** — added four muted-deep tokens in the `@theme inline` block, built with `color-mix(... toward var(--dark-blue))`:
  `--color-electrical-deep`, `--color-mechanical-deep`, `--color-admin-deep`, `--color-bio-deep`.
  This makes `bg-*-deep` / `to-*-deep` / `from-*-deep` utilities available. Only the four in-use teams have a `-deep` token; add more if the page grows.
- **`app/team/page.tsx`** — full rewrite to the band layout (see structure below).
- **`app/_components/header.tsx`** — "Team" nav link now points to `/team`.

## How a band is built (`TeamRow`)

- Full-bleed `<section className={team.bgClass}>` (the deep color).
- Inner centered `max-w-6xl` grid, `md:grid-cols-2 md:items-stretch`. `reversed` (even rows) swaps sides with `md:order-*`.
- **Image side:** `relative min-h-64 md:min-h-[28rem]`. `Placeholder` fills it (`absolute inset-0 rounded-none`). A sibling gradient overlay (`from-transparent` -> `team.gradientStop`) blends the image into the band: `bg-gradient-to-b` on mobile (image stacks on top), `md:bg-gradient-to-r` / `md:bg-gradient-to-l` (reversed) on desktop.
- **Text side:** transparent (shows band color). Faded index `text-white/30`, eyebrow in the pale `team.lightText` (`*-light` token), `name` h2 in white, `bg-white/40` underline rule, body in `text-white/80`.

Per-team data lives in the `TEAMS` array. Color classes are stored as full literal strings (`bg-electrical-deep`, etc.) so Tailwind's scanner picks them up; do not build them by interpolation.

## Still pending

- **Real photos.** Every image is a `Placeholder`; its `aria-label` describes the intended shot. Swap for `next/image` with `fill` + `object-cover` in the same `absolute inset-0` slot, keeping the gradient overlay as a sibling.
- **Copy review.** Team descriptions were lightly edited from the supplied source into web prose (no em dashes, per project rule). Confirm accuracy with each team.
- **Taxonomy reconciliation** with About / `CLAUDE.md` (see note above).

## Knobs likely to be revised

- Deep-shade mix ratios in `globals.css` (currently 75-80% primary).
- Band height (`md:min-h-[28rem]`).
- Fade strength/direction of the image overlay.
- Header intro headline ("Four teams, one heart.") and copy.

## Verify

- `npx tsc --noEmit` (clean).
- `npm run dev`, open `/team`: full-width alternating bands, deep team colors with legible white text, image fading into the color, and a mobile check (columns stack, image fades downward).
