import EkgTrace from "../../_components/ekg-trace";
import Image from "next/image";
import early_image from "../../../public/about/The OG's.jpg";
import late_image from "../../../public/about/Team - 2026.jpg";

/**
 * Story section of the About page. Header and origin-story copy in a
 * narrow column, then a three-tile photo collage below.
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

      {/* Two-tile collage. Stacks on mobile, sits side-by-side from md up. */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:h-112 md:grid-cols-5 md:gap-8">
        <div className="relative aspect-4/5 overflow-hidden rounded-lg md:col-span-2 md:aspect-auto md:h-full">
          <Image
            src={early_image}
            alt="The original five Alberta Heart members"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative aspect-3/2 overflow-hidden rounded-lg md:col-span-3 md:aspect-auto md:h-full">
          <Image
            src={late_image}
            alt="The Alberta Heart team in 2026"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
