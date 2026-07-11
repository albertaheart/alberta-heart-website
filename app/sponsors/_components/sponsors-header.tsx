import Link from "next/link";
import EkgTrace from "../../_components/ekg-trace";

/**
 * Lead section of the Sponsors page: title, pitch on why sponsorship
 * matters, and a static EKG trace divider ahead of the logo grid.
 *
 * @returns The Sponsors page header.
 */
export default function SponsorsHeader() {
  return (
    <>
      <header className="max-w-2xl">
        <p className="font-heading text-sm uppercase tracking-[0.3em] text-light-red">
          Why Sponsor Us
        </p>
        <h1 className="mt-4 font-impact text-4xl leading-[1.05] text-dark-blue sm:text-5xl md:text-6xl">
          Fund the future of cardiac care.
        </h1>
        <p className="mt-8 font-sans text-lg leading-relaxed text-dark-blue/80 md:text-xl">
          Your support helps students transform innovative ideas into life-saving
          medical technology. Sponsorship directly funds prototyping, testing,
          competition travel, and the development of Canada&apos;s first
          student-led total artificial heart.
        </p>

        <Link
          href="/contact_us"
          className="mt-4 inline-block font-heading text-lg text-light-red underline underline-offset-4 transition hover:text-light-red/70"
        >
          Reach out to us to learn how your organization can help Alberta Heart!
        </Link>
      </header>

      <EkgTrace
        className="mt-16 h-8 w-full md:mt-24"
        colorClassName="text-dark-blue/20"
        animated={true}
      />
    </>
  );
}
