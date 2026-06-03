import { Placeholder } from "../../_components/placeholder";

/**
 * Heart Hackathon explainer. Originally the lead section of the About
 * page; moved here when Conferences became its own route. Layout is a
 * 7/5 grid (header + body on the left, portrait image on the right),
 * followed by a full-width banner image and a closing paragraph in a
 * narrow reading column.
 *
 * @returns The Heart Hackathon explainer section.
 */
export default function HackathonSection() {
  return (
    <section>
      <div className="grid gap-10 md:grid-cols-12 md:items-start md:gap-12">
        {/* Left column: header + body stacked together. */}
        <div className="md:col-span-7">
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-light-red">
            Conferences · The Competition
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

        {/* Right column: portrait image, top-aligned with the eyebrow. */}
        <div className="md:col-span-5">
          <Placeholder
            aspect="aspect-[4/5]"
            label="Team at workshop. Wide shot of members at a build session"
          />
        </div>
      </div>

      {/* Full-width banner image breaking the first half of the section. */}
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
  );
}
