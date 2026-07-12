import Image from "next/image";
import { SPONSORS, type Sponsor } from "../sponsors-data";

/**
 * Groups sponsors by tier, preserving the SPONSORS array's ordering.
 *
 * @param sponsors Sponsors to group.
 * @returns Sponsors bucketed by tier, one array per tier in order of appearance.
 */
function groupByTier(sponsors: Sponsor[]): Sponsor[][] {
  const groups = new Map<Sponsor["tier"], Sponsor[]>();
  for (const sponsor of sponsors) {
    const group = groups.get(sponsor.tier) ?? [];
    group.push(sponsor);
    groups.set(sponsor.tier, group);
  }
  return [...groups.values()];
}

/**
 * Current sponsors section of the Sponsors page: a logo grid grouped by tier,
 * with each tier's incomplete row centered instead of left-aligned.
 *
 * @returns The current sponsors section.
 */
export default function SponsorsGrid() {
  const tierGroups = groupByTier(SPONSORS);

  return (
    <section className="mt-16 md:mt-24">
      <h2 className="font-impact text-3xl leading-[1.1] text-dark-blue sm:text-4xl">
        Our current sponsors
      </h2>

      <div className="mt-10 flex flex-col gap-10">
        {tierGroups.map((group) => (
          <div
            key={group[0].tier}
            className="flex flex-wrap justify-center gap-10"
          >
            {group.map((sponsor) => (
              <div
                key={sponsor.name}
                className="relative aspect-3/2 w-full sm:w-[calc(50%-1.25rem)] md:w-[calc(33.333%-1.6667rem)]"
              >
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
        ))}
      </div>
    </section>
  );
}