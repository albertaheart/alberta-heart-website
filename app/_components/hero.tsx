import Image from "next/image";
import logoMark from "../../public/brand/AB.svg";
import Capillaries from "./capillaries";
import EkgTrace from "./ekg-trace";

/**
 * Top-of-page hero for the home route. Presentational server component.
 *
 * @returns The full-viewport hero section.
 */
const Hero = () => {
  return (
    // -mt-24 pulls the section up behind the sticky header (h-24 = 6rem).
    <section className="relative flex min-h-screen -mt-24 items-center overflow-hidden bg-white">

      {/*
        Radial bloom anchored at the right edge. Uses inline style for
        precise stop control; not worth a theme token for a one-off gradient.
          rgb(73, 50, 107)  = admin purple
          rgb(188, 24, 35)  = light-red
      */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 100% 60%, rgba(73, 50, 107, 0.22), rgba(188, 24, 35, 0.12) 20%, transparent 50%)",
        }}
      />

      {/* Capillary network covers the right half so it frames the logomark. */}
      <Capillaries
        seed={7}
        density={0.6}
        width={900}
        height={900}
        glowDuration="3s"
        className="absolute right-0 top-0 h-full w-1/2"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row md:gap-16 md:px-16 md:py-28">

        {/* Left: copy + CTAs */}
        <div className="flex-1 text-center md:text-left">
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-light-red">
            Alberta Heart · Heart Hackathon
          </p>

          <h1 className="mt-6 font-impact text-5xl leading-[0.95] text-dark-blue sm:text-6xl md:text-7xl lg:text-8xl">
            Engineering<br />
            a heart that<br />
            <span className="text-light-red">doesn&apos;t quit.</span>
          </h1>

          <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-dark-blue/70 md:text-xl">
            A student team designing the next Total Artificial Heart for the
            international Heart Hackathon. Five subteams. One mission.
            Save lives.
          </p>

          <EkgTrace className="mt-10 h-12 w-full max-w-md" />

          {/* Primary (Join) leads because prospective members are the priority audience. */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-5 md:items-start md:justify-start">
            <a
              href="/contact_us"
              className="rounded-lg bg-light-red px-8 py-3 font-heading font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-maroon"
            >
              Join the Team
            </a>
            <a
              href="/sponsors"
              className="rounded-lg border-2 border-dark-blue px-8 py-3 font-heading font-semibold text-dark-blue transition-colors duration-300 hover:bg-dark-blue hover:text-white"
            >
              Sponsor Us
            </a>
          </div>
        </div>

        {/* Right: logomark kept still; the capillaries carry all the motion. */}
        <div className="relative flex-1">
          <div className="relative mx-auto aspect-square w-64 sm:w-80 md:w-full md:max-w-md">
            <Image
              src={logoMark}
              alt="Alberta Heart logomark"
              fill
              className="relative object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;