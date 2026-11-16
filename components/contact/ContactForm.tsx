"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const emailBody = [
      "New website enquiry",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const gmailUrl = new URL("https://mail.google.com/mail/");
    gmailUrl.searchParams.set("view", "cm");
    gmailUrl.searchParams.set("fs", "1");
    gmailUrl.searchParams.set("to", "osbee_solutions@outlook.com");
    gmailUrl.searchParams.set("su", `[Website Enquiry] ${subject}`);
    gmailUrl.searchParams.set("body", emailBody);

    const newTab = window.open(
      gmailUrl.toString(),
      "_blank",
      "noopener,noreferrer"
    );

    if (!newTab) {
      window.location.href = gmailUrl.toString();
    } else {
      setStatus(
        "Gmail has been opened with your enquiry. Please review the email and click Send to submit it."
      );
      form.reset();
    }
  }

  const inputClass =
    "w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#326ba7] focus:ring-2 focus:ring-blue-100";

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            placeholder="Your full name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          maxLength={150}
          placeholder="What would you like to discuss?"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          maxLength={5000}
          placeholder="Tell us a little about your enquiry..."
          className={`${inputClass} resize-y`}
        />
      </div>

      {status && (
        <p
          role="status"
          aria-live="polite"
          className="rounded-lg bg-green-50 p-4 text-sm leading-6 text-green-800"
        >
          {status}
        </p>
      )}

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-lg bg-[#326ba7] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#245486]"
      >
        Open Gmail &amp; Send
        <Send size={16} />
      </button>

      <p className="text-xs leading-5 text-gray-500">
        Your email application will open with your enquiry prepared.
        Please click Send in Gmail to complete your submission.
      </p>
    </form>
  );
}
