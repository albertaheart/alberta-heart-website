import EkgTrace from "../../_components/ekg-trace";

/**
 * Lead section of the Contact page: title, intro copy, and a static EKG
 * trace divider ahead of the channels/form grid.
 *
 * @returns The Contact page header.
 */
export default function ContactHeader() {
  return (
    <>
      <header className="max-w-2xl">
        <p className="font-heading text-sm uppercase tracking-[0.3em] text-light-red">
          Contact Us
        </p>
        <h1 className="mt-4 font-impact text-4xl leading-[1.05] text-dark-blue sm:text-5xl md:text-6xl">
          Let&apos;s talk.
        </h1>
        <p className="mt-8 font-sans text-lg leading-relaxed text-dark-blue/80 md:text-xl">
          Questions about 
          <span className="font-bold text-light-red"> sponsoring, joining, or collaborating </span> 
          with Alberta Heart? Reach out through any of these channels or send us
          a message directly.
        </p>
      </header>

      <EkgTrace
        className="mt-16 h-8 w-full md:mt-24"
        colorClassName="text-light-red"
        animated={true}
      />
    </>
  );
}
