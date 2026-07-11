import Image from "next/image";
import { SPONSORS } from "../sponsors-data";

/**
 * Current sponsors section of the Sponsors page: a flat logo grid.
 *
 * @returns The current sponsors section.
 */
export default function SponsorsGrid() {
  return (
    <section className="mt-16 md:mt-24">
      <h2 className="font-impact text-3xl leading-[1.1] text-dark-blue sm:text-4xl">
        Our current sponsors
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
        {SPONSORS.map((sponsor) => (
          <div key={sponsor.name} className="relative aspect-3/2">
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              fill
              className="object-contain"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}