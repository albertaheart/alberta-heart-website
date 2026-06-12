import { Fragment, type ReactNode } from "react";
import EkgTrace from "../../_components/ekg-trace";
import { Placeholder } from "../../_components/placeholder";

type TimelineEntry = {
  date: string;
  location: string;
  name: string;
  description: ReactNode;
  upcoming?: boolean;
};

const EVENTS: TimelineEntry[] = [
  {
    date: "October 2025",
    location: "Canmore, Alberta",
    name: "Annual Biomedical Engineering Conference",
    description:
      "We brought our research closer to home, presenting our pumping mechanism innovations to regional researchers, mentors, and healthcare professionals at this student-focused interdisciplinary conference.",
  },
  {
    date: "December 2025",
    location: "Vienna, Austria",
    name: "Heart Hackathon Finals",
    description: (
      <>
        Alberta Heart sent three team members to the global finals as{" "}
        <span className="font-semibold text-dark-blue/90">
          the only Canadian team represented at the event.
        </span>{" "}
        We competed against international teams to pitch our total artificial
        heart technologies.
      </>
    ),
  },
  {
    date: "December 2025",
    location: "Vienna, Austria",
    name: "ISMCS Conference",
    description: (
      <>
        Our research abstract on the heart&apos;s pumping mechanism was selected
        for a{" "}
        <span className="font-semibold text-dark-blue/90">
          poster presentation
        </span>{" "}
        at the International Society for Mechanical Circulatory Support (ISMCS)
        conference, showcasing our findings to top global clinicians and
        industry leaders.
      </>
    ),
  },
  {
    date: "Upcoming",
    location: "Suzhou, China",
    name: "Heart Hackathon Finals",
    description:
      "Building on our success, we are actively expanding our device capabilities to send an even larger delegation of members to compete at the next Heart Hackathon Finals.",
    upcoming: true,
  },
];

export default function GlobalImpactSection() {
  return (
    <section>
      <p className="font-heading text-sm uppercase tracking-[0.3em] text-light-red">
        Our Global Impact
      </p>
      <h2 className="mt-4 font-impact text-4xl leading-[1.05] text-dark-blue sm:text-5xl md:text-6xl">
        Taking our work to the world stage.
      </h2>
      <p className="mt-8 font-sans text-lg leading-relaxed text-dark-blue/80 md:text-xl">
        Alberta Heart isn&apos;t just working in a lab. We are taking our
        innovation global, representing Canadian biomedical engineering on the
        world stage.
      </p>

      <div className="mt-14 grid grid-cols-[2rem_1fr] gap-x-8">
        {EVENTS.map((event, i) => {
          const isLast = i === EVENTS.length - 1;
          const nextIsUpcoming = EVENTS[i + 1]?.upcoming;

          return (
            <Fragment key={`${event.date}-${event.name}`}>
              {/* ── ROW 1: dot | header ── */}

              {/* Col 1: dot, vertically centred with the header text */}
              <div className="flex items-center justify-center">
                <span
                  className={`h-3 w-3 shrink-0 rounded-full ${
                    event.upcoming
                      ? "border-2 border-light-red/30 bg-white"
                      : "bg-light-red"
                  }`}
                />
              </div>

              {/* Col 2: date + event name */}
              <div className="py-1">
                <p
                  className={`font-heading text-base uppercase tracking-[0.2em] ${
                    event.upcoming ? "text-light-red/40" : "text-light-red/70"
                  }`}
                >
                  {event.date} · {event.location}
                </p>
                <h3
                  className={`mt-1 font-impact text-3xl leading-[1.1] sm:text-4xl ${
                    event.upcoming ? "text-dark-blue/40" : "text-dark-blue"
                  }`}
                >
                  {event.name}
                </h3>
              </div>

              {/* ── ROW 2: connector | body ── */}

              {/* Col 1: vertical line (or EKG), full height of body row */}
              <div className="flex justify-center">
                {!isLast ? (
                  nextIsUpcoming ? (
                    <EkgTrace
                      vertical
                      animated
                      className="h-full w-4"
                      colorClassName="text-light-red/40"
                      strokeWidth={0.5}
                      duration="3s"
                    />
                  ) : (
                    <span className="h-full w-px bg-light-red/20" />
                  )
                ) : null}
              </div>

              {/* Col 2: description + photo */}
              <div className={!isLast ? "pb-20" : "pb-0"}>
                <p
                  className={`max-w-2xl font-sans text-lg leading-relaxed ${
                    event.upcoming ? "text-dark-blue/40" : "text-dark-blue/70"
                  }`}
                >
                  {event.description}
                </p>
                <Placeholder
                  label={`Photo for ${event.name} in ${event.location}`}
                  aspect="aspect-[16/9]"
                  className={`mt-5 max-w-2xl ${event.upcoming ? "opacity-40" : ""}`}
                />
              </div>
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}