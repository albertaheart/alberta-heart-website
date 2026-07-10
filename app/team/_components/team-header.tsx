import EkgTrace from "../../_components/ekg-trace";
import { LEADERSHIP } from "../teams-data";
import PersonCard from "./person-card";

/**
 * Lead section of the Team page: title, intro copy, project leadership
 * cards, and a static EKG trace divider ahead of the subteam rows.
 *
 * @returns The Team page header.
 */
export default function TeamHeader() {
  return (
    <header className="mx-auto max-w-5xl px-6">
      <p className="font-heading text-sm uppercase tracking-[0.3em] text-light-red">
        The Team
      </p>
      <h1 className="mt-4 font-impact text-4xl leading-[1.05] text-dark-blue sm:text-5xl md:text-6xl">
        Five teams, one heart.
      </h1>
      <p className="mt-8 font-sans text-lg leading-relaxed text-dark-blue/80 md:text-xl">
        Alberta Heart is organized into focused teams, each owning a piece of
        the Total Artificial Heart: from the pump and its electronics to the
        software and clinical work that hold the whole effort together.
      </p>

      <div className="mt-12">
        <p className="font-heading text-xs uppercase tracking-[0.2em] text-light-red">
          Project Leadership
        </p>
        <div className="mt-4 flex flex-wrap gap-10">
          {LEADERSHIP.map((p) => (
            <PersonCard key={p.name} person={p} size="lg" />
          ))}
        </div>
      </div>

      <EkgTrace
        className="mt-20 h-8 w-full md:mt-32"
        colorClassName="text-dark-blue/20"
        animated={false}
      />
    </header>
  );
}
