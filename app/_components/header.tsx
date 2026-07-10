"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "../../public/brand/ABWithText.svg";

const navLinks: { label: string; href: string }[] = [
  { label: "About", href: "/about" },
  { label: "Conferences", href: "/conferences" },
  { label: "Team", href: "/team" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Contact Us", href: "/contact_us" },
];

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 flex items-center px-6 md:px-16 h-24 border-b transition-all duration-300 ${
      scrolled ? "bg-white border-grey/20 shadow-sm" : "bg-white/0 border-white/0 shadow-none"
    }`}>
      <Link href="/" className="relative h-16 w-48 shrink-0 z-10">
        <Image src={logo} alt="Alberta Heart logo" fill className="object-contain object-left" />
      </Link>
      <nav className="hidden md:flex items-center gap-10 ml-10">
        {navLinks.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className={`font-heading text-lg transition-colors duration-300 tracking-wide ${
              pathname === href ? "text-light-red" : "text-dark-blue/80 hover:text-light-red"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;