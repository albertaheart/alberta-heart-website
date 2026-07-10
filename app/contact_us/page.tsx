import ContactHeader from "./_components/contact-header";
import ContactChannels from "./_components/contact-channels";
import ContactForm from "./_components/contact-form";

/**
 * The Contact page. Left column lists location and contact channels
 * (LinkedIn, email, Instagram); right column embeds the team's Google
 * Form for inquiries.
 *
 * @returns The full Contact page.
 */
export default function ContactPage() {
  return (
    <main className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ContactHeader />

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <ContactChannels />
          </div>

          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
