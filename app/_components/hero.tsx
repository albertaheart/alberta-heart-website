import Image from "next/image";
import logoMark from "../../public/AB.svg";
import Capillaries from "./capillaries";

/**
 * Hero
 *
 * Top-of-page section for the home route. Two responsibilities:
 *   1. Hit the visitor with the mission in one breath (headline + subhead).
 *   2. Funnel two audiences toward action: prospective members and sponsors.
 *
 * Visually it's a two-column layout (stacks on mobile, side-by-side from md
 * upward) with an animated EKG trace as the recurring brand motif and a
 * gently-pulsing logomark on the right.
 *
 * No interactive state lives here. It's a presentational server component.
 */
const Hero = () => {
  /*
    `min-h-[calc(100vh-6rem)]` fills the viewport minus the sticky header
    (which is `h-24` = 6rem), so the hero is always at least one full
    screen tall and there's no blank gap below it. `flex items-center`
    vertically centers the content within that area on tall viewports
    while still letting the section grow naturally if the content (e.g.
    stacked mobile layout) exceeds viewport height.
  */
  return (
    <section className="relative flex min-h-[calc(100vh-6rem)] items-center overflow-hidden bg-white">

      {/*
        Radial bloom: three-stop gradient anchored at the right edge of the
        section that transitions from a blue-ish purple (innermost, hugging
        the right side) through light-red and out to fully transparent
        before reaching the headline on the left.

        Colors used:
          - rgb(73, 50, 107)  = admin subteam purple (#49326b, see globals.css)
          - rgb(188, 24, 35)  = light-red brand color (#bc1823)

        Sits at the deepest z-layer so the capillaries and the traveling
        glow wave still read clearly on top of it.

        Using inline style here rather than a Tailwind utility because we
        need precise control over the gradient's stops and origin; this
        bloom is a one-off and not worth promoting to a theme token.
      */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 100% 60%, rgba(73, 50, 107, 0.22), rgba(188, 24, 35, 0.12) 20%, transparent 50%)",
        }}
      />

      {/*
        Capillary network. Covers only the right half of the hero so it
        wraps around the logomark without crowding the headline. A glow wave
        is built into the component: every 3 seconds a narrow band of red
        light radiates outward from a point at the SVG's left edge (which,
        because the SVG is right-aligned, sits right at screen center), and
        the wave is masked to the exact shape of the capillaries, so only
        the vessels themselves "light up" as the pulse passes through them.
        Reads as blood flushing outward from a still heart.
      */}
      <Capillaries
        seed={7}
        density={0.6}
        width={900}
        height={900}
        glowDuration="3s"
        className="absolute right-0 top-0 h-full w-1/2"
      />

      {/*
        Outer container caps content width and provides the symmetric padding
        used across the site. `flex-col-reverse` on mobile keeps the logo
        above the copy when stacked; `md:flex-row` swaps to side-by-side.
        `relative z-10` lifts the content above the capillaries layer.
        `w-full` is needed so the flex child stretches to fill the now
        viewport-sized section.
      */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row md:gap-16 md:px-16 md:py-28">

        {/* ──────────────────────────────────────────────────────────────
            LEFT COLUMN: Copy + CTAs
            ────────────────────────────────────────────────────────────── */}
        <div className="flex-1 text-center md:text-left">

          {/* Eyebrow: small uppercased label that anchors the team + competition. */}
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-light-red">
            Alberta Heart · Heart Hackathon
          </p>

          {/*
            Headline.
            - `font-impact` is Norwester (display face).
            - Manual <br> tags hold the line-break rhythm regardless of viewport;
              the final line is colored light-red to pull the eye to the payoff.
            - Sizes scale from 5xl (mobile) to 8xl (lg+) to stay readable.
          */}
          <h1 className="mt-6 font-impact text-5xl leading-[0.95] text-dark-blue sm:text-6xl md:text-7xl lg:text-8xl">
            Engineering<br />
            a heart that<br />
            <span className="text-light-red">doesn&apos;t quit.</span>
          </h1>

          {/* Subhead: one-sentence framing for visitors who don't know the team. */}
          <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-dark-blue/70 md:text-xl">
            A student team designing the next Total Artificial Heart for the
            international Heart Hackathon. Five subteams. One mission.
            Save lives.
          </p>

          {/*
            EKG trace: the brand motif.

            How the animation works:
              - The <path> is a hand-tuned ECG waveform (flat baseline, two
                QRS-like spikes, flat again).
              - `pathLength={1}` normalises the path to a length of 1 regardless
                of the actual SVG geometry, so the dasharray/dashoffset math
                stays simple.
              - `strokeDasharray="1"` makes the dash the full path length.
              - The <animate> tag sweeps `stroke-dashoffset` from 1 to -1 over
                3s, which visually draws the trace left-to-right and then
                "erases" it the same way, looping forever.
              - All SMIL, no JS, no extra deps, works server-rendered.
          */}
          <svg
            className="mt-10 h-12 w-full max-w-md"
            viewBox="0 0 600 80"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 40 L120 40 L140 40 L150 30 L160 50 L170 10 L180 70 L190 40 L210 40 L290 40 L310 40 L320 30 L330 50 L340 10 L350 70 L360 40 L380 40 L600 40"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-light-red"
              pathLength={1}
              strokeDasharray="1"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="1"
                to="-1"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>
          </svg>

          {/*
            CTA pair.
            Order matters: primary action (Join) leads because prospective
            members are the highest-priority audience for the home page.
            Sponsor is the secondary outline button.
          */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-5 md:items-start md:justify-start">
            <a
              href="#join"
              className="rounded-lg bg-light-red px-8 py-3 font-heading font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-maroon"
            >
              Join the Team
            </a>
            <a
              href="#sponsor"
              className="rounded-lg border-2 border-dark-blue px-8 py-3 font-heading font-semibold text-dark-blue transition-colors duration-300 hover:bg-dark-blue hover:text-white"
            >
              Sponsor Us
            </a>
          </div>
        </div>

        {/* ──────────────────────────────────────────────────────────────
            RIGHT COLUMN: Logomark
            ────────────────────────────────────────────────────────────── */}
        <div className="relative flex-1">
          {/*
            Logomark only: no frame, no glow, no animation. The heartbeat
            lives in the capillaries surrounding the logo (see <Capillaries>
            above), so the eye reads the logo as the still anchor and the
            surrounding tissue as the part that's alive.
          */}
          <div className="relative mx-auto aspect-square w-64 sm:w-80 md:w-full md:max-w-md">
            <Image
              src={logoMark}
              alt="Alberta Heart logomark"
              fill
              className="relative object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
