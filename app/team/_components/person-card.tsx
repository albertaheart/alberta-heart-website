import Image from "next/image";
import { Placeholder } from "../../_components/placeholder";
import { type Person } from "../teams-data";

/**
 * Avatar + name (and optional blurb) for a team lead or project lead.
 * Renders the real photo when `person.imagePath` is set, otherwise a Placeholder.
 *
 * @param person - The person's name, image label, optional blurb, and optional photo path.
 * @param size - "lg" for leads, "sm" for project leads. Defaults to "sm".
 * @returns A person card.
 */
export default function PersonCard({ person, size = "sm" }: { person: Person; size?: "sm" | "lg" }) {
  const dims = size === "lg" ? "h-28 w-28" : "h-14 w-14";

  return (
    <div className="flex items-start gap-3">
      {person.imagePath ? (
        <div className={`relative shrink-0 overflow-hidden rounded-full ${dims}`}>
          <Image src={person.imagePath} alt={person.imageLabel} fill className="object-cover" />
        </div>
      ) : (
        <Placeholder
          aspect="aspect-square"
          label={person.imageLabel}
          className={`shrink-0 rounded-full ${dims}`}
        />
      )}
      <div>
        <p className="font-sans font-semibold text-dark-blue">{person.name}</p>
        {person.blurb && (
          <p className="mt-0.5 font-sans text-sm leading-snug text-dark-blue/60">{person.blurb}</p>
        )}
      </div>
    </div>
  );
}
