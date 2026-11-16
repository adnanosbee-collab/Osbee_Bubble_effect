import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="bg-[#17191c] px-6 py-14 text-gray-400 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 md:grid-cols-3">
        {/* Company */}
        <div>
          <Link href="/" className="inline-block rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">
            <h3 className="text-xl font-extrabold tracking-widest text-white transition-colors hover:text-blue-300">
              OSBEE
            </h3>
            <p className="mt-2 text-xs tracking-widest text-blue-300">
              SOLUTIONS PRIVATE LIMITED
            </p>
          </Link>

          <p className="mt-5 max-w-xs text-sm leading-7">
            Economic consulting and practical business solutions focused on
            understanding client requirements.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <div className="mt-5 flex flex-col items-start gap-3 text-sm">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="footer-link inline-flex items-center gap-1 transition-colors duration-200 hover:text-blue-300 focus-visible:outline-2 focus-visible:outline-blue-300"
              >
                {item.label}
                <ArrowUpRight
                  size={13}
                  className="footer-link-icon opacity-0 transition-all duration-200"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white">Contact Information</h4>

          <div className="mt-5 space-y-5 text-sm">
            <a
              href="tel:+919088200195"
              className="group flex items-start gap-3 transition-colors hover:text-blue-300"
            >
              <Phone size={17} className="mt-0.5 shrink-0 text-blue-300" />
              <span>+91 9088200195</span>
            </a>

            <a
              href="mailto:osbee_solutions@outlook.com"
              className="group flex items-start gap-3 transition-colors hover:text-blue-300"
            >
              <Mail size={17} className="mt-0.5 shrink-0 text-blue-300" />
              <span className="break-all">osbee_solutions@outlook.com</span>
            </a>

            <a
              href="https://maps.app.goo.gl/QHvfChQbP8WEnnTLA"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 transition-colors hover:text-blue-300"
            >
              <MapPin size={17} className="mt-0.5 shrink-0 text-blue-300" />
              <span>
                Azmat Manzil, 2nd Floor, 14 Syed Amir Ali Avenue, Park Circus,
                Kolkata – 700017
              </span>
            </a>

            <p className="pt-1 text-xs text-gray-500">
              Monday–Friday: 1:00 PM – 9:00 PM (IST)
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-7 text-center text-xs text-gray-500">
        © 2026 OSBEE SOLUTIONS PRIVATE LIMITED. All Rights Reserved.
      </div>
    </footer>
  );
}
