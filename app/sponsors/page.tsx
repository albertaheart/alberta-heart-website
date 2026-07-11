import SponsorsHeader from "./_components/sponsors-header";
import SponsorsGrid from "./_components/sponsors-grid";

/**
 * The Sponsors page. A short pitch on why sponsorship matters, followed by
 * a flat logo grid of current sponsors.
 *
 * @returns The full Sponsors page.
 */
export default function SponsorsPage() {
  return (
    <main className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SponsorsHeader />
        <SponsorsGrid />
      </div>
    </main>
  );
}
