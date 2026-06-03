import WhoWeAreSection from "./_components/who-we-are-section";
import StorySection from "./_components/story-section";
import MissionSection from "./_components/mission-section";

/**
 * The About route. Composes three stacked editorial sections, top to bottom:
 *   1. Who we are (lead). What the team is, who's on it, and the headline
 *      numbers. The competition explainer that used to lead this page now
 *      lives on the Conferences route.
 *   2. Story. When and why the team was founded.
 *   3. Mission. What Alberta Heart aims to do, as a statement plus goals.
 *
 * Outer container is `max-w-5xl` with narrow text columns nested inside,
 * so the page reads like a magazine feature instead of a wall of text.
 * Visual flourishes (capillaries, EKG trace, radial bloom) are reserved
 * for the home hero, this page is intentionally calmer.
 *
 * @returns The full About page.
 */
export default function About() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <WhoWeAreSection />
      <StorySection />
      <MissionSection />
    </main>
  );
}
