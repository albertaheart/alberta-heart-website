import { Placeholder } from "../../_components/placeholder";

/**
 * Lead section of the About page. Merges the old "what we do" and "who we
 * are" blurbs into a single block: a short two-paragraph intro on the left
 * and a portrait image on the right, with a stat strip underneath that
 * turns the team's headline numbers into a quick scan.
 *
 * The numbers (45 / 5 / 1) are the credibility hook for sponsors and
 * recruits, so they get their own visual row rather than being buried in
 * prose. Update the figures here if the team grows.
 *
 * @returns The "Who we are" section.
 */
export default function WhoWeAreSection() {
  return (
    <section>
      <div className="grid gap-10 md:grid-cols-12 md:items-start md:gap-12">
        {/* Left column: eyebrow, headline, and the merged intro copy. */}
        <div className="md:col-span-7">
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-light-red">
            Who We Are
          </p>
          <h1 className="mt-4 font-impact text-4xl leading-[1.05] text-dark-blue sm:text-5xl md:text-6xl">
            Engineering a heart, training the people who build it.
          </h1>

          <div className="mt-10 space-y-6 font-sans text-lg leading-relaxed text-dark-blue/80 md:text-xl">
            <p>
              Alberta Heart is a student team at the University of
              Alberta designing and developing a{" "}
              <span className="font-semibold text-light-red">
                Total Artificial Heart
              </span>
              , turning classroom concepts into real prototypes and research.
            </p>
            <p>
              We&apos;re 45 students from engineering, medicine, and science,
              organized into five subteams that each own a piece of the
              problem, from pump design and electronics to the clinical and
              business side of getting a device into the world.
            </p>
          </div>
        </div>

        {/* Right column: portrait image, top-aligned with the eyebrow. */}
        <div className="md:col-span-5">
          <Placeholder
            aspect="aspect-[4/5]"
            label="The team. Group portrait of Alberta Heart members"
          />
        </div>
      </div>

      {/*
        Stat strip. Three headline numbers in a row (stacks on mobile),
        each a big font-impact figure over a small label. Divider borders
        between cells from sm up give it a "by the numbers" feel.
      */}
      <dl className="mt-16 grid grid-cols-1 gap-8 border-y border-dark-blue/10 py-10 sm:grid-cols-3 sm:gap-0">
        {[
          { value: "45", label: "Students" },
          { value: "5", label: "Subteams" },
          { value: "1", label: "Artificial heart" },
        ].map(({ value, label }, i) => (
          <div
            key={label}
            className={
              // Left divider on the 2nd and 3rd cells once they sit in a row.
              i === 0
                ? "text-center"
                : "text-center sm:border-l sm:border-dark-blue/10"
            }
          >
            <dt className="font-impact text-5xl text-light-red md:text-6xl">
              {value}
            </dt>
            <dd className="mt-2 font-heading text-sm uppercase tracking-[0.2em] text-dark-blue/60">
              {label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
