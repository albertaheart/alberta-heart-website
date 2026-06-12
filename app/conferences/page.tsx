import GlobalImpactSection from "./_components/global-impact-section";
import WhyWeCompeteSection from "./_components/why-we-compete-section";

/**
 * The Conferences route. Three stacked sections:
 *   1. Heart Hackathon explainer (what the competition is).
 *   2. Global Impact timeline (where Alberta Heart has been and is headed).
 *   3. Why We Compete (three pillars + ISMCS callout).
 *
 * Outer container matches About: `max-w-5xl` with narrow text columns
 * nested inside, so the page reads like a magazine feature rather than a
 * wall of text.
 *
 * @returns The full Conferences page.
 */
export default function Conferences() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <GlobalImpactSection />
      <WhyWeCompeteSection />
    </main>
  );
}
