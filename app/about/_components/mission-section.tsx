import EkgTrace from "../../_components/ekg-trace";
import Image from "next/image";
import image from "../../../public/about/hardware_on_table.jpg";

/**
 * Mission section of the About page. Header in a narrow column, then an
 * 8/4 grid where a pull quote sits over the body paragraphs on the left
 * and a tall portrait image flanks both on the right. Uneven column
 * bottoms are intentional and lend a magazine-feature feel.
 *
 * @returns The "Our Mission" section.
 */
export default function MissionSection() {
  return (
    <section className="mt-24 md:mt-32">
      {/* Grey EKG line stands in for a plain divider rule. */}
      <EkgTrace
        className="mb-24 h-8 w-full md:mb-32"
        colorClassName="text-dark-blue/20"
      />
      <div className="max-w-3xl">
        <p className="font-heading text-sm uppercase tracking-[0.3em] text-light-red">
          Our Mission
        </p>
        <h2 className="mt-4 font-impact text-3xl leading-[1.1] text-dark-blue sm:text-4xl md:text-5xl">
          At the intersection of engineering excellence and saving lives.
        </h2>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-start md:gap-12">
        {/* Left column: pull quote stacked over body paragraphs. */}
        <div className="md:col-span-8">
          {/* Light-red left border is the only strong accent in this section. */}
          <blockquote className="border-l-4 border-light-red pl-6 font-heading text-xl italic leading-relaxed text-dark-blue md:text-2xl">
            To work at the intersection of innovation and engineering
            excellence to develop and promote technologies associated with
            the Total Artificial Heart.
          </blockquote>

          <div className="mt-10 space-y-6 font-sans text-lg leading-relaxed text-dark-blue/80 md:text-xl">
            <p>
              That goal breaks down into three things we work on every year:
            </p>

            {/*
              The three goals. Each is a short label (light-red, font-heading)
              followed by a one-line explanation, so the section scans in a
              couple of seconds instead of reading as three more paragraphs.
            */}
            <ul className="space-y-5">
              <li>
                <span className="font-heading font-semibold text-light-red">
                  Develop:
                </span>{" "}
                build a functioning Total Artificial Heart, and learn to find
                and fix failures early along the way.
              </li>
              <li>
                <span className="font-heading font-semibold text-light-red">
                  Partner:
                </span>{" "}
                work with faculty, industry, and clinicians so the engineering
                stays clinically grounded.
              </li>
              <li>
                <span className="font-heading font-semibold text-light-red">
                  Grow:
                </span>{" "}
                stay a sustainable club that keeps training new engineers and
                representing Edmonton and Canada on the world stage.
              </li>
            </ul>
          </div>
        </div>

        {/* Right column: tall 3:5 portrait, reads as a feature shot. */}
        <div className="relative md:col-span-4 aspect-3/5 overflow-hidden rounded-lg">
          <Image
            src={image}
            alt="Lab close-up. Hands on the prototype"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
