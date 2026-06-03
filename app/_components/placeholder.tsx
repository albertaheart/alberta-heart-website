/**
 * Image stand-in for slots where the real photo isn't wired up yet.
 * Shaded box with a dashed inner frame; the `label` doubles as the
 * screen-reader description and an in-code TODO for whoever swaps
 * in the real asset.
 *
 * Lives in the shared `app/_components` folder because more than one
 * route (About, Conferences) leans on it.
 *
 * @param label  Description of the photo that belongs here.
 * @param aspect Tailwind aspect-ratio class (e.g. "aspect-[4/5]").
 * @param className Extra classes to merge onto the wrapper.
 * @returns A placeholder image element with role="img".
 */
type PlaceholderProps = {
  label: string;
  aspect?: string;
  className?: string;
};

export const Placeholder = ({
  label,
  aspect = "aspect-[4/3]",
  className = "",
}: PlaceholderProps) => (
  <div
    className={`relative overflow-hidden rounded-lg bg-gradient-to-br from-grey/50 to-grey/15 ${aspect} ${className}`}
    role="img"
    aria-label={`Image placeholder: ${label}`}
  >
    <div className="absolute inset-3 rounded-md border border-dashed border-dark-blue/25" />
  </div>
);
