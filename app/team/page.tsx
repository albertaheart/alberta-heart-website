import { Placeholder } from "../_components/placeholder";
import EkgTrace from "../_components/ekg-trace";
import { type Team, TEAMS } from "./teams-data";

/**
 * A single team row: image on one side with the team's light color as a wash
 * behind it, copy on the other on a plain white background. Even rows flip
 * the image to the right for an alternating zig-zag.
 *
 * @param team - The team's content and color classes.
 * @param reversed - When true, the image sits on the right (even rows).
 * @returns The team row section.
 */
function TeamRow({ team, reversed }: { team: Team; reversed: boolean }) {
  return (
    <section className="mt-24 md:mt-32">
      <div className="mx-auto grid max-w-6xl md:grid-cols-2 md:items-stretch">
        <div
          className={`relative min-h-64 md:min-h-112 ${reversed ? "md:order-2" : ""}`}
        >
          <Placeholder
            aspect="aspect-[9/10]"
            label={team.imageLabel}
            className="absolute inset-0 rounded-none"
          />
        </div>

        <div
          className={`flex flex-col justify-center px-6 py-12 md:px-12 md:py-16 ${
            reversed ? "md:order-1" : ""
          }`}
        >
          <div className="flex items-baseline gap-4">
            <span className={`font-heading text-3xl leading-none ${team.accentTextLightClass}`}>
              {team.index}
            </span>
            <p className={`font-heading text-sm uppercase tracking-[0.2em] ${team.accentTextClass}`}>
              {team.tagline}
            </p>
          </div>

          <h2 className={`mt-3 font-impact text-3xl leading-[1.1] text-dark-blue sm:text-4xl`}>
            {team.name}
          </h2>

          <div className={`mt-4 h-0.5 w-16 rounded-full ${team.accentBgLightClass}`} />

          <p className="mt-6 font-sans text-lg leading-relaxed text-dark-blue/70">
            {team.description}
          </p>

          <ul className="mt-5 space-y-2">
            {team.bullets.map((b) => (
              <li key={b.label} className="flex gap-2 font-sans text-lg leading-relaxed text-dark-blue/70">
                <span className={`mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full ${team.accentBgClass}`} />
                <span>
                  <span className={`font-semibold ${team.accentTextClass}`}>{b.label}:</span>{" "}
                  {b.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/**
 * The Team route. A contained header followed by full-bleed, alternating
 * subteam bands, each color-coded with its deep accent token.
 *
 * @returns The full Team page.
 */
export default function TeamPage() {
  return (
    <main className="py-24 md:py-32">
      <header className="mx-auto max-w-5xl px-6">
        <p className="font-heading text-sm uppercase tracking-[0.3em] text-light-red">
          The Team
        </p>
        <h1 className="mt-4 font-impact text-4xl leading-[1.05] text-dark-blue sm:text-5xl md:text-6xl">
          Four teams, one heart.
        </h1>
        <p className="mt-8 font-sans text-lg leading-relaxed text-dark-blue/80 md:text-xl">
          Alberta Heart is organized into focused teams, each owning a piece of
          the Total Artificial Heart: from the pump and its electronics to the
          software and clinical work that hold the whole effort together.
        </p>

        <EkgTrace
          className="mt-20 h-8 w-full md:mt-32"
          colorClassName="text-dark-blue/20"
          animated={false}
        />
      </header>

      <div>
        {TEAMS.map((team, i) => (
          <TeamRow key={team.name} team={team} reversed={i % 2 === 1} />
        ))}
      </div>
    </main>
  );
}
