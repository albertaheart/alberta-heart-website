"use client";

import { useState, type FormEvent } from "react";

/**
 * Right column of the Contact page: a simple contact form (name, email,
 * message) that submits by opening a pre-filled mailto: link in the
 * user's email client, rather than posting to a backend.
 *
 * @returns The contact form.
 */
export default function ContactForm() {
  const CONTACT_EMAIL = "abheart@ualberta.ca";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const subject = `Website inquiry from ${name || "Anonymous"}`;
    const body = `${message}\n\n— ${name} (${email})`;

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoUrl, "_blank");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="font-heading text-sm uppercase tracking-[0.2em] text-dark-blue/50"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full rounded-lg border border-dark-blue/15 px-4 py-3 font-sans text-dark-blue outline-none transition focus:border-light-red"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="font-heading text-sm uppercase tracking-[0.2em] text-dark-blue/50"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded-lg border border-dark-blue/15 px-4 py-3 font-sans text-dark-blue outline-none transition focus:border-light-red"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-heading text-sm uppercase tracking-[0.2em] text-dark-blue/50"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 w-full resize-none rounded-lg border border-dark-blue/15 px-4 py-3 font-sans text-dark-blue outline-none transition focus:border-light-red"
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-light-red px-8 py-3 font-heading text-sm uppercase tracking-[0.2em] text-white transition hover:bg-light-red/90"
      >
        Send Message
      </button>
    </form>
  );
}