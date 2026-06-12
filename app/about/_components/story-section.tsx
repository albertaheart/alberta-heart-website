import { Placeholder } from "../../_components/placeholder";
import EkgTrace from "../../_components/ekg-trace";

/**
 * Story section of the About page. Header and origin-story copy in a
 * narrow column, then a three-tile staggered collage below. The vertical
 * offsets on the second and third tiles (`md:mt-16`, `md:mt-8`) give the
 * collage a scattered/polaroid feel rather than a strict gallery grid.
 *
 * @returns The "Our Story" section.
 */
export default function StorySection() {
  return (
    <section className="mt-24 md:mt-32">
      {/* Grey EKG line stands in for a plain divider rule. */}
      <EkgTrace
        className="mb-24 h-8 w-full md:mb-32"
        colorClassName="text-dark-blue/20"
        animated={false}
      />
      <div className="max-w-3xl">
        <p className="font-heading text-sm uppercase tracking-[0.3em] text-light-red">
          Our Story
        </p>
        <h2 className="mt-4 font-impact text-3xl leading-[1.1] text-dark-blue sm:text-4xl md:text-5xl">
          How we got here.
        </h2>

        <div className="mt-10 space-y-6 font-sans text-lg leading-relaxed text-dark-blue/80 md:text-xl">
          <p>
            Alberta Heart began with five undergraduates who shared one idea:
            build a lasting, multidisciplinary biomedical club at the
            University of Alberta.
          </p>
          <p>
            What started as a dream has grown into a large team across
            engineering, medicine, and science, united by collaboration,
            innovation, and a drive to learn by building something real.
          </p>
        </div>
      </div>

      {/* Staggered three-tile collage. Stacks on mobile, scatters from md up. */}
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
  );
}
