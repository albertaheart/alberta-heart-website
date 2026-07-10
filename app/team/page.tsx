import JoinCta from "./_components/join-cta";
import TeamHeader from "./_components/team-header";
import TeamRow from "./_components/team-row";
import { TEAMS } from "./teams-data";

/**
 * The Team route. A contained header followed by full-bleed, alternating
 * subteam bands, each color-coded with its deep accent token, and closing
 * with a prompt to reach out for prospective members.
 *
 * @returns The full Team page.
 */
export default function TeamPage() {
  return (
    <main className="py-24 md:py-32">
      <TeamHeader />

      <div>
        {TEAMS.map((team, i) => (
          <TeamRow key={team.name} team={team} reversed={i % 2 === 1} />
        ))}
      </div>

      <JoinCta />
    </main>
  );
}
