import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with OSBEE SOLUTIONS PRIVATE LIMITED for commercial consulting and business solutions.",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        <section className="bg-[#202124] px-6 py-20 text-white md:py-28">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#82b5e8]">
              Get in touch
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Let&apos;s start a conversation.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Have a business challenge or an idea you would like to discuss?
              We would be glad to hear from you.
            </p>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#326ba7]">
                Contact information
              </p>
              <h2 className="mt-4 text-3xl font-bold text-[#202124]">
                We&apos;re here to help.
              </h2>
              <p className="mt-5 leading-8 text-gray-600">
                Reach out to discuss commercial consulting, cost optimization,
                or practical business solutions.
              </p>

              <div className="mt-10 space-y-7">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#326ba7]">
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#202124]">
                      Let&apos;s talk
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Tell us about your requirements and business goals.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#326ba7]">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#202124]">
                      Business hours
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Monday – Friday: 1:00 PM – 9:00 PM (IST)
                    </p>
                    <p className="text-sm leading-6 text-gray-600">
                      Saturday – Sunday: Not specified
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#326ba7]">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#202124]">Phone</h3>
                    <a href="tel:+919088200195" className="mt-1 block text-sm text-gray-600 hover:text-[#326ba7]">
                      +91 9088200195
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#326ba7]">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#202124]">Email</h3>
                    <a href="mailto:osbee_solutions@outlook.com" className="mt-1 block break-all text-sm text-gray-600 hover:text-[#326ba7]">
                      osbee_solutions@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#326ba7]">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#202124]">Office address</h3>
                    <a
                      href="https://maps.app.goo.gl/QHvfChQbP8WEnnTLA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm leading-6 text-gray-600 hover:text-[#326ba7]"
                    >
                      Azmat Manzil, 2nd Floor, 14 Syed Amir Ali Avenue, Park Circus, Kolkata – 700017
                      <span className="mt-1 block text-xs font-semibold text-[#326ba7]">View on Google Maps ↗</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="font-semibold text-[#202124]">
                  OSBEE SOLUTIONS PRIVATE LIMITED
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Economic Consulting &amp; Smart Business Solutions.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#326ba7]">
                Send an enquiry
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#202124]">
                How can we help?
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Complete the fields below and send your enquiry directly to our team.
              </p>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
