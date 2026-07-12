import { Fragment } from "react";
import EkgTrace from "../../_components/ekg-trace";
import Image from "next/image";
import { EVENTS } from "./timeline";

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
          const leadsToLast = i === EVENTS.length - 2;

          return (
            <Fragment key={`${event.date}-${event.name}`}>
              {/* ── ROW 1: dot | header ── */}

              {/* Col 1: dot, vertically centred with the header text */}
              <div className="flex items-center justify-center">
                <span
                  className={`h-3 w-3 shrink-0 rounded-full bg-light-red`}
                />
              </div>

              {/* Col 2: date + event name */}
              <div className="py-1">
                <p className={`font-heading text-base uppercase tracking-[0.2em] text-light-red/70`}>
                  {event.date} · {event.location}
                </p>
                <h3 className={`mt-1 font-impact text-3xl leading-[1.1] sm:text-4xl text-dark-blue`}>
                  {event.name}
                </h3>
              </div>

              {/* ── ROW 2: connector | body ── */}

              {/* Col 1: vertical line (or EKG), full height of body row */}
              <div className="flex justify-center">
                {!isLast ? (
                  leadsToLast ? (
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
                  className={`max-w-2xl font-sans text-lg leading-relaxed text-dark-blue/70`}
                >
                  {event.description}
                </p>
                <div
                  className={`relative mt-5 ${event.aspect ?? "aspect-video"} max-w-2xl overflow-hidden rounded-lg`}
                >
                  <Image
                    src={event.image}
                    alt={`Photo from ${event.name} in ${event.location}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 42rem, 100vw"
                  />
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}