import { Placeholder } from "../../_components/placeholder";
import { type Team } from "../teams-data";
import PersonCard from "./person-card";

/**
 * A single team row: image on one side with the team's light color as a wash
 * behind it, copy on the other on a plain white background. Even rows flip
 * the image to the right for an alternating zig-zag.
 *
 * @param team - The team's content and color classes.
 * @param reversed - When true, the image sits on the right (even rows).
 * @returns The team row section.
 */
export default function TeamRow({ team, reversed }: { team: Team; reversed: boolean }) {
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

          <div className="mt-8">
            <p className={`font-heading text-xs uppercase tracking-[0.2em] ${team.accentTextClass}`}>
              {team.leads.length > 1 ? "Team Leads" : "Team Lead"}
            </p>
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {team.leads.map((p) => (
                <PersonCard key={p.name} person={p} size="lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
