import Image from "next/image";
import { Placeholder } from "../../_components/placeholder";
import { type Person } from "../teams-data";

/**
 * Avatar + name (and optional blurb) for a team lead or project lead.
 * Renders the real photo when `person.image` is set, otherwise a Placeholder.
 *
 * @param person - The person's name, image label, optional blurb, and optional photo.
 * @param size - "lg" for leads, "sm" for project leads. Defaults to "sm".
 * @param accentTextClass - The team's accent color class, applied to the name so it visually ties to the "Team Lead" label above.
 * @returns A person card.
 */
export default function PersonCard({
  person,
  size = "sm",
  accentTextClass = "text-dark-blue",
}: {
  person: Person;
  size?: "sm" | "lg";
  accentTextClass?: string;
}) {
  const dims = size === "lg" ? "h-28 w-28" : "h-14 w-14";
  const nameClass =
    size === "lg"
      ? `font-heading text-xl font-semibold leading-tight ${accentTextClass}`
      : `font-heading text-base font-semibold leading-tight ${accentTextClass}`;

  return (
    <div className="flex items-center gap-4">
      {person.image ? (
        <div className={`relative shrink-0 overflow-hidden rounded-full ${dims}`}>
          <Image src={person.image} alt={person.imageLabel} fill className="object-cover" />
        </div>
      ) : (
        <Placeholder
          aspect="aspect-square"
          label={person.imageLabel}
          className={`shrink-0 rounded-full ${dims}`}
        />
      )}
      <div>
        <p className={nameClass}>{person.name}</p>
        {person.blurb && (
          <p className="mt-1 font-sans text-sm leading-snug text-dark-blue/60">{person.blurb}</p>
        )}
      </div>
    </div>
  );
}