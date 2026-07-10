/**
 * A single contact channel row: icon, label, and a linked value.
 *
 * @param icon - Icon element shown at the left, sized to fit a 20x20 slot.
 * @param label - Small uppercase heading (e.g. "Email").
 * @param href - Link target for the value.
 * @param external - When true, opens in a new tab with rel="noopener noreferrer".
 * @param children - The visible link text.
 * @returns A contact channel row.
 */
export default function ContactChannel({
  icon,
  label,
  href,
  external = false,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 h-5 w-5 shrink-0">{icon}</div>
      <div>
        <h2 className="font-heading text-sm uppercase tracking-[0.2em] text-dark-blue/50">
          {label}
        </h2>
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="mt-2 block font-sans text-lg leading-relaxed text-dark-blue transition hover:text-light-red"
        >
          {children}
        </a>
      </div>
    </div>
  );
}
