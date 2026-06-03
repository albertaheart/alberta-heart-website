import HackathonSection from "./_components/hackathon-section";

/**
 * The Conferences route. Home for competition context, starting with the
 * Heart Hackathon explainer (relocated here from About so the About page
 * can focus purely on the team itself).
 *
 * Outer container matches About: `max-w-5xl` with narrow text columns
 * nested inside, so the page reads like a magazine feature rather than a
 * wall of text. More competition / conference write-ups can stack below
 * the explainer as the team attends them.
 *
 * @returns The full Conferences page.
 */
export default function Conferences() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <HackathonSection />
    </main>
  );
}
