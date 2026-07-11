import Link from "next/link";

/**
 * Closing prompt on the Team page inviting prospective members to reach out.
 *
 * @returns A centered call-to-action linking to the Contact Us page.
 */
export default function JoinCta() {
  return (
    <Link
      href="/contact_us"
      className="mx-auto block max-w-5xl px-6 text-center font-sans text-lg text-dark-blue/80"
    >
      <span className="font-heading text-light-red underline underline-offset-4 transition hover:text-light-red/70">
        Want to join the team? Reach out to us!
      </span>
    </Link>
  );
}