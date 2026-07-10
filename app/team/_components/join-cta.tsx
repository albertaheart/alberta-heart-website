import Link from "next/link";

/**
 * Closing prompt on the Team page inviting prospective members to reach out.
 *
 * @returns A centered call-to-action linking to the Contact Us page.
 */
export default function JoinCta() {
  return (
    <p className="mx-auto max-w-5xl px-6 text-center font-sans text-lg text-dark-blue/80">
      Want to join the team?{" "}
      <Link
        href="/contact_us"
        className="font-heading text-light-red underline underline-offset-4 hover:text-maroon"
      >
        Reach out to us!
      </Link>
    </p>
  );
}
