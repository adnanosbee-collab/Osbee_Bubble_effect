import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ShieldCheck, Lock, Cookie, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy of OSBEE SOLUTIONS PRIVATE LIMITED, effective 1 January 2025.",
};

const sections = [
  {
    number: "01",
    title: "Information We Collect",
    icon: UserCheck,
    content: (
      <>
        <p>
          We may collect the following types of information when you use our
          website:
        </p>
        <ul>
          <li>
            Personal information provided through contact forms, such as name,
            email address, and phone number.
          </li>
          <li>
            Non-personal information, such as browser type, IP address, and
            pages visited, collected through cookies or analytics tools.
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "02",
    title: "How We Use Information",
    icon: ShieldCheck,
    content: (
      <>
        <p>We may use collected information to:</p>
        <ul>
          <li>Provide, operate, and improve our website and services.</li>
          <li>Respond to enquiries and customer support requests.</li>
          <li>Send updates and marketing communications where permitted.</li>
          <li>Analyze website traffic and usage patterns.</li>
        </ul>
      </>
    ),
  },
  {
    number: "03",
    title: "Sharing of Information",
    icon: Lock,
    content: (
      <p>
        We do not sell, rent, or trade personal information. Information may be
        shared with trusted service providers when necessary to operate our
        website, comply with legal obligations, or protect our rights.
      </p>
    ),
  },
  {
    number: "04",
    title: "Cookies",
    icon: Cookie,
    content: (
      <p>
        Our website may use cookies to improve browsing experiences. Users can
        adjust browser settings to manage cookies.
      </p>
    ),
  },
  {
    number: "05",
    title: "Data Security",
    icon: ShieldCheck,
    content: (
      <p>
        We implement reasonable measures to protect personal information.
        However, no internet transmission method is completely secure.
      </p>
    ),
  },
  {
    number: "06",
    title: "Your Rights",
    icon: UserCheck,
    content: (
      <p>
        Users may request access, correction, or deletion of their personal
        information by contacting the company through its official contact
        channels.
      </p>
    ),
  },
  {
    number: "07",
    title: "Updates to This Policy",
    icon: Lock,
    content: (
      <p>
        We may update this policy periodically. Changes will be published on
        this page with an updated effective date.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-[#202124] px-6 py-20 text-white md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-blue-200">
              <ShieldCheck size={16} />
              Your privacy matters
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              We value your privacy and are committed to explaining how
              information is collected, used, and protected when you visit our
              website.
            </p>

            <p className="mt-8 text-sm text-gray-400">
              Effective Date: 1st January, 2025
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-7 md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#326ba7]">
                Introduction
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-700">
                OSBEE SOLUTIONS PRIVATE LIMITED (&quot;we,&quot;
                &quot;our,&quot; or &quot;us&quot;) values your privacy. This
                Privacy Policy explains how we collect, use, and protect your
                information when you visit our website.
              </p>
            </div>
          </div>
        </section>

        {/* Policy sections */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#326ba7]">
                Policy details
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#202124] md:text-4xl">
                How we handle your information
              </h2>
            </div>

            <div className="space-y-5">
              {sections.map((section) => {
                const Icon = section.icon;

                return (
                  <article
                    key={section.number}
                    className="rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md md:p-8"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#326ba7]">
                        <Icon size={22} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-xs font-bold tracking-widest text-[#326ba7]">
                            {section.number}
                          </span>
                          <h3 className="text-xl font-bold text-[#202124]">
                            {section.title}
                          </h3>
                        </div>

                        <div className="policy-content mt-4 text-sm leading-7 text-gray-600">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-[#f4f5f7] px-6 py-16 md:py-20">
          <div className="mx-auto max-w-4xl rounded-2xl bg-[#202124] px-7 py-10 text-white md:px-12 md:py-14">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
              08 · Contact Us
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Questions about your privacy?
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-300">
              For privacy-related questions, users can contact OSBEE SOLUTIONS
              PRIVATE LIMITED through the website&apos;s contact page.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-lg bg-[#326ba7] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#245486]"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
