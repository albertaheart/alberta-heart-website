"use client";

import Link from "next/link";
import Capillaries from "./capillaries";

type NavLink = { label: string; href: string };

/**
 * Full-screen vertical nav shown on mobile when the header menu is open.
 * @param open Whether the menu is currently visible.
 * @param links Nav entries to render, in order.
 * @param pathname Current route, used to highlight the active link.
 * @returns The mobile nav overlay.
 */
const MobileMenu = ({
  open,
  links,
  pathname,
}: {
  open: boolean;
  links: NavLink[];
  pathname: string;
}) => {
  return (
    <nav
      className={`md:hidden fixed inset-0 top-24 bg-white overflow-hidden flex flex-col items-center gap-8 pt-12 transition-all duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <Capillaries
        variant="bottom"
        width={800}
        height={400}
        density={0.7}
        baseThickness={2.2}
        glowDuration="4s"
        glowOriginX={400}
        glowOriginY={700}
        className="absolute inset-0 h-full w-full"
      />
      {links.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className={`relative font-heading text-2xl tracking-wide ${
            pathname === href ? "text-light-red" : "text-dark-blue/80"
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default MobileMenu;
