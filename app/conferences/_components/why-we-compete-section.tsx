const PILLARS = [
  {
    number: "01",
    title: "Driving Innovation",
    body: "We push the boundaries of total artificial heart technology to tackle advanced heart failure head-on.",
  },
  {
    number: "02",
    title: "Hands-On R&D",
    body: "Our members gain intensive, direct experience in biomedical engineering, hardware design, and software automation.",
  },
  {
    number: "03",
    title: "Bridging the Gap",
    body: "We actively connect classroom learning with real-world medical device design, rigorous testing protocols, and regulatory commercialization strategies.",
  },
];

/**
 * Explains why Alberta Heart competes in the Heart Hackathon, broken into
 * three numbered pillars, followed by a "Did You Know" callout about ISMCS.
 *
 * @returns The "Why We Compete" section.
 */
export default function WhyWeCompeteSection() {
  return (
    <section className="mt-24 md:mt-32">
      <p className="font-heading text-sm uppercase tracking-[0.3em] text-light-red">
        Why We Compete
      </p>
      <h2 className="mt-4 font-impact text-3xl leading-[1.1] text-dark-blue sm:text-4xl md:text-5xl">
        The Heart Hackathon.
      </h2>
      <p className="mt-6 max-w-3xl font-sans text-lg leading-relaxed text-dark-blue/80">
        A prestigious global, multidisciplinary competition challenging student
        teams to design, build, and iterate next-generation mechanical
        circulatory support technologies. For Alberta Heart, competing serves
        three core purposes:
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {PILLARS.map((p) => (
          <div key={p.title}>
            <span className="font-heading text-4xl font-bold text-light-red/15">
              {p.number}
            </span>
            <h3 className="mt-2 font-impact text-xl text-dark-blue sm:text-2xl">
              {p.title}
            </h3>
            <div className="mt-2 h-0.5 w-10 rounded-full bg-light-red/30" />
            <p className="mt-3 font-sans text-base leading-relaxed text-dark-blue/70">
              {p.body}
            </p>
          </div>
        ))}
      </div>

      {/* ISMCS callout */}
      <div className="mt-16 max-w-3xl border-l-2 border-light-red/30 pl-6">
        <p className="font-heading text-sm uppercase tracking-[0.2em] text-light-red/70">
          Did You Know
        </p>
        <p className="mt-3 font-sans text-lg leading-relaxed text-dark-blue/80">
          The ISMCS conference is the premier global gathering for mechanical
          heart technology, bringing together the world&apos;s leading
          researchers, engineers, and surgeons. Having our undergraduate
          research selected to share the stage with these experts highlights
          the caliber of engineering happening right here at Alberta Heart.
        </p>
      </div>
    </section>
  );
}
