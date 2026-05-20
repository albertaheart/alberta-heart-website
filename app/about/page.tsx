/**
 * About
 *
 * The About route. Three stacked sections, top to bottom:
 *
 *   1. Heart Hackathon explainer (lead). Most visitors land on the About
 *      page wondering "what is the thing they compete in?" Answering that
 *      first makes the mission statement that follows land harder.
 *   2. Mission. What Alberta Heart specifically aims to do.
 *   3. Origin story. When and why the team was founded.
 *
 * Visual direction: clean editorial. The capillaries, radial bloom, and
 * EKG trace are reserved for the home hero. This page is laid out like a
 * magazine feature, with a wider outer container (`max-w-5xl`) and narrow
 * text columns nested inside it. Images break the rhythm of the reading
 * column: a portrait alongside the first body, a wide banner under it, a
 * tall image flanking the mission quote, and a staggered collage for the
 * story, so the page never feels like an undifferentiated wall of text.
 *
 * All images are currently {@link Placeholder} components; each one carries
 * a descriptive label so whoever wires the real photos in knows what the
 * intent of each slot is.
 */
export default function About() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24 md:py-32">

      {/* ──────────────────────────────────────────────────────────────
          SECTION 1: Heart Hackathon explainer (lead)

          Layout: a single 7/5 grid where the LEFT column holds the entire
          header + body stack (eyebrow, h1, paragraphs) and the RIGHT
          column is the portrait image. `items-start` aligns the top of
          the image with the top of the eyebrow, so the photo and headline
          start at the same horizontal line. Below that grid, a full-width
          banner image and a closing paragraph in a narrow reading column.
          ────────────────────────────────────────────────────────────── */}
      <section>
        <div className="grid gap-10 md:grid-cols-12 md:items-start md:gap-12">

          {/* Left column: header + body, all stacked. */}
          <div className="md:col-span-7">
            <p className="font-heading text-sm uppercase tracking-[0.3em] text-light-red">
              About · The Competition
            </p>
            <h1 className="mt-4 font-impact text-4xl leading-[1.05] text-dark-blue sm:text-5xl md:text-6xl">
              What is the Heart Hackathon?
            </h1>

            <div className="mt-10 space-y-6 font-sans text-lg leading-relaxed text-dark-blue/80 md:text-xl">
              <p>
                The Heart Hackathon is a unique, international competition that
                engages students in developing innovations for a{" "}
                <span className="font-semibold text-light-red">
                  Total Artificial Heart
                </span>
                , aiming to address heart failure, one of the leading causes
                of death worldwide.
              </p>
              <p>
                It is an interdisciplinary contest. Engineers, doctors,
                biologists, business students, and artists from universities
                around the globe come together to design, prototype, and test
                artificial heart solutions.
              </p>
            </div>
          </div>

          {/* Right column: portrait image. With `items-start` on the grid,
              the image's top sits flush with the eyebrow's top. */}
          <div className="md:col-span-5">
            <Placeholder
              aspect="aspect-[4/5]"
              label="Team at workshop. Wide shot of members at a build session"
            />
          </div>
        </div>

        {/* Full-width banner image. Visually wraps up the first half of
            the section before the closing paragraph below. */}
        <div className="mt-16">
          <Placeholder
            aspect="aspect-[16/7]"
            label="Heart Hackathon. Competition floor group photo"
          />
        </div>

        {/* Closing paragraph back in the narrow reading column. */}
        <div className="mt-12 max-w-3xl space-y-6 font-sans text-lg leading-relaxed text-dark-blue/80 md:text-xl">
          <p>
            The event spans a full year: webinars, industry workshops, and
            mentoring from experts in the field. Students leave with hands-on
            experience in TAH technology and a network of leaders in
            cardiovascular biomechanics.
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 2: Our Mission

          Layout: header in narrow column, then a single 8/4 grid where
          the left column carries the pull quote AND the body paragraphs
          stacked vertically, and the right column is a tall portrait
          image that flanks both. The image doesn't try to match heights;
          uneven bottoms are intentional, very Vogue-feature.
          ────────────────────────────────────────────────────────────── */}
      <section className="mt-24 border-t border-dark-blue/10 pt-24 md:mt-32 md:pt-32">
        <div className="max-w-3xl">
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-light-red">
            Our Mission
          </p>
          <h2 className="mt-4 font-impact text-3xl leading-[1.1] text-dark-blue sm:text-4xl md:text-5xl">
            At the intersection of engineering excellence and saving lives.
          </h2>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-start md:gap-12">
          {/* Left column: quote stacked over body paragraphs. */}
          <div className="md:col-span-8">
            {/*
              Pull quote. Left border in light-red is the only strong
              accent on this section; italic Glacial keeps the type
              contrast subtle but distinct from body copy.
            */}
            <blockquote className="border-l-4 border-light-red pl-6 font-heading text-xl italic leading-relaxed text-dark-blue md:text-2xl">
              To work at the intersection of innovation and engineering
              excellence to develop and promote technologies associated with
              the Total Artificial Heart.
            </blockquote>

            <div className="mt-10 space-y-6 font-sans text-lg leading-relaxed text-dark-blue/80 md:text-xl">
              <p>
                Alberta Heart (AB❤️) is a student team built around that one
                ambitious goal: build the next Total Artificial Heart, and use
                the process to train a generation of engineers, scientists, and
                clinicians who can keep building them long after we graduate.
              </p>
              <p>
                Whether you&apos;re here to dive into fluid mechanics, tackle
                solid modeling, write a commercialization plan, or just
                collaborate with smart people on a problem that matters,
                there&apos;s a place for you on the team.
              </p>
            </div>
          </div>

          {/* Right column: tall image. Aspect 3:5 makes it visibly portrait,
              taller than wide, so it reads as a "feature shot" alongside
              the running copy. */}
          <div className="md:col-span-4">
            <Placeholder
              aspect="aspect-[3/5]"
              label="Lab close-up. Hands on the prototype"
            />
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          SECTION 3: Our Story

          Layout: header + (placeholder) story paragraph in narrow column,
          then a three-image staggered collage below. The vertical
          offsets (`md:mt-*`) on the second and third tiles give the
          collage a scattered/polaroid feel rather than a perfectly
          aligned gallery.
          ────────────────────────────────────────────────────────────── */}
      <section className="mt-24 border-t border-dark-blue/10 pt-24 md:mt-32 md:pt-32">
        <div className="max-w-3xl">
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-light-red">
            Our Story
          </p>
          <h2 className="mt-4 font-impact text-3xl leading-[1.1] text-dark-blue sm:text-4xl md:text-5xl">
            How we got here.
          </h2>

          <div className="mt-10 space-y-6 font-sans text-lg leading-relaxed text-dark-blue/80 md:text-xl">
            {/* TODO: replace with the team's actual origin story. */}
            <p className="italic text-dark-blue/40">
              [Placeholder. Replace with the team&apos;s founding story:
              when AB❤️ started, who founded it, what drew the first members
              in, and how the team has grown since. One or two paragraphs is
              plenty.]
            </p>
          </div>
        </div>

        {/*
          Staggered three-tile collage. On mobile they stack normally;
          from md upward the second and third tiles get top-margin so
          they don't sit on the same baseline as the first.
        */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          <Placeholder
            aspect="aspect-[4/5]"
            label="Founding members. Early team photo"
          />
          <div className="md:mt-16">
            <Placeholder
              aspect="aspect-[3/4]"
              label="First prototype. Bench shot"
            />
          </div>
          <div className="md:mt-8">
            <Placeholder
              aspect="aspect-[4/5]"
              label="Competition day. Team at the booth"
            />
          </div>
        </div>
      </section>

    </main>
  );
}


/**
 * Placeholder
 *
 * Stand-in for an image while the real photos aren't wired up yet. Renders
 * a subtly-shaded box with a dashed inner frame and a label describing what
 * photo eventually belongs there. The label doubles as a TODO note for
 * whoever swaps in the real assets.
 *
 * Why this lives in the same file as the page:
 *   It's a one-off helper used only by this route; promoting it to a
 *   shared component would be premature abstraction. If the same pattern
 *   shows up on Team or Sponsor, then we move it.
 */
type PlaceholderProps = {
  label: string;
  /** Tailwind aspect-ratio class, e.g. "aspect-[4/3]" or "aspect-square". */
  aspect?: string;
  className?: string;
};

const Placeholder = ({
  label,
  aspect = "aspect-[4/3]",
  className = "",
}: PlaceholderProps) => (
  <div
    className={`relative overflow-hidden rounded-lg bg-gradient-to-br from-grey/50 to-grey/15 ${aspect} ${className}`}
    role="img"
    /* `label` is kept as a prop because it doubles as both the screen-reader
       description and the in-code TODO note for whoever swaps in the real
       photo, even though it no longer renders as visible text. */
    aria-label={`Image placeholder: ${label}`}
  >
    {/* Inner dashed frame so the box reads as "intentional placeholder,
        not a styling bug or empty container". */}
    <div className="absolute inset-3 rounded-md border border-dashed border-dark-blue/25" />
  </div>
);
