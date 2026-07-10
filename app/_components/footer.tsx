"use client";

import { usePathname } from "next/navigation";
import Capillaries from "./capillaries";

/**
 * Footer
 *
 * Decorative bottom strip shown on all non-home routes. Mirrors the hero's
 * visual language: a red radial bloom and capillary glow network, anchored
 * at the bottom with vessels growing upward.
 *
 * @returns The footer element, or null on the home route.
 */
const Footer = () => {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <footer className="relative h-72 overflow-hidden bg-white">
      {/* Radial bloom from the bottom center, mirroring the hero's right-side bloom. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(188, 24, 35, 0.40) 0%, rgba(188, 24, 35, 0.12) 60%, transparent 100%)",
        }}
      />

      {/* Capillary network, vessels growing upward from the bottom edge. */}
      <Capillaries
        seed={10}
        density={0.5}
        width={1600}
        height={600}
        variant="bottom"
        glowOriginX={800}
        glowOriginY={600}
        glowDuration="3.5s"
        className="absolute inset-0 h-full w-full"
      />

      <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center pb-5">
        <p className="font-heading text-xs uppercase tracking-[0.25em] text-light-red">
          Alberta Heart
        </p>
      </div>
    </footer>
  );
};

export default Footer;
