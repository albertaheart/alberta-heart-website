import Image from "next/image";
import Link from "next/link";
import logo from "../../public/ABWithText.svg";

/*
  Nav routes. Each entry pairs a display label with its href. Routes that
  don't have pages yet are left as "#" so they're visibly inert until the
  page exists. Easier to spot a TODO than chase a 404.
*/
const navLinks: { label: string; href: string }[] = [
  { label: "About", href: "/about" },
  { label: "Team", href: "#" },
  { label: "Sponsor", href: "#" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center px-6 md:px-16 h-24 bg-white border-b border-grey/20 shadow-sm">

      {/* Logo links back to home. */}
      <Link href="/" className="relative h-16 w-48 shrink-0 z-10">
        <Image src={logo} alt="Alberta Heart logo" fill className="object-contain object-left" />
      </Link>

      {/* Nav: uses Next.js Link so navigation is client-side (no full page reload). */}
      <nav className="hidden md:flex items-center gap-10 ml-10">
        {navLinks.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="font-heading text-lg text-dark-blue/80 hover:text-light-red transition-colors duration-300 tracking-wide"
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Contact Us Button */}
      <a
        href="#contact"
        className="hidden md:block bg-light-red text-white px-6 py-2 rounded-lg font-heading font-semibold text-sm hover:bg-maroon transition-colors duration-300 ml-auto"
      >
        Contact Us
      </a>

    </header>
  );
};

export default Header;