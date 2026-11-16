
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Target,
  Eye,
  ShieldCheck,
  Handshake,
  ArrowRight,
  } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about OSBEE SOLUTIONS PRIVATE LIMITED, our mission, values and commercial consulting approach.",
};

const approach = [
  "Understand the client's requirements.",
  "Identify opportunities for improvement.",
  "Recommend practical and cost-effective solutions.",
  "Build long-term relationships based on trust and transparency.",
];

const values = [
  {
    title: "Customer Focus",
    description:
      "Understanding individual client requirements and putting their needs at the centre.",
    icon: Handshake,
  },
  {
    title: "Transparency",
    description:
      "Providing accurate and unbiased advice through clear communication.",
    icon: ShieldCheck,
  },
  {
    title: "Practical Thinking",
    description:
      "Identifying realistic opportunities and cost-effective solutions.",
    icon: Target,
  },
  {
    title: "Long-term Vision",
    description:
      "Building professional relationships that support lasting business objectives.",
    icon: Eye,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Page Hero */}
      <section className="bg-[#f4f6f9] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.2em] text-[#326ba7]">
            GET TO KNOW US
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-[#202124] md:text-6xl">
            About OSBEE SOLUTIONS PRIVATE LIMITED
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Commercial consulting focused on understanding your
            requirements, reducing unnecessary costs and supporting
            better business decisions.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2 md:px-10">
        <div>
          <p className="text-sm font-bold tracking-[0.2em] text-[#326ba7]">
            WHO WE ARE
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#202124] md:text-4xl">
            Building relationships through practical solutions.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-gray-600">
          <p>
            Osbee Solutions is a commercial consultant based in India.
            Our primary aim is to help customers save money while
            building a company where employees are proud to work.
          </p>

          <p>
            We believe in building trusting relationships by
            understanding each client&apos;s individual requirements and
            providing practical solutions that help reduce costs and
            achieve business objectives.
          </p>

          <p>
            Our industry experience allows us to provide accurate,
            unbiased advice and cost-effective business utility
            solutions.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#202124] px-6 py-24 text-white md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">

          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#326ba7]">
              <Target size={28} />
            </div>

            <h2 className="mt-7 text-3xl font-bold">Our Mission</h2>

            <p className="mt-5 max-w-xl leading-8 text-gray-300">
              To help businesses make smarter commercial decisions,
              reduce unnecessary expenses, and achieve their objectives
              through practical and reliable consulting.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-bold tracking-[0.2em] text-blue-300">
              OUR COMMITMENT
            </p>

            <h3 className="mt-5 text-2xl font-semibold leading-relaxed">
              Understanding your business before recommending
              solutions.
            </h3>

            <p className="mt-5 leading-7 text-gray-400">
              We believe that meaningful consulting starts with
              listening, understanding and identifying what matters
              most to each client.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid gap-14 md:grid-cols-2">

          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-[#326ba7]">
              HOW WE WORK
            </p>

            <h2 className="mt-5 text-3xl font-bold text-[#202124] md:text-4xl">
              Our Approach
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              A clear and practical approach helps us understand
              requirements and work towards suitable solutions.
            </p>
          </div>

          <div className="space-y-6">
            {approach.map((item, index) => (
              <div key={item} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-[#326ba7]">
                  0{index + 1}
                </div>

                <p className="pt-2 leading-7 text-gray-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f4f6f9] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold tracking-[0.2em] text-[#326ba7]">
              WHAT GUIDES US
            </p>

            <h2 className="mt-5 text-3xl font-bold text-[#202124] md:text-4xl">
              The principles behind our work.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon size={27} className="text-[#326ba7]" />

                  <h3 className="mt-6 text-lg font-bold text-[#202124]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Overview */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="rounded-3xl border border-gray-100 p-8 md:p-12">
          <p className="text-sm font-bold tracking-[0.2em] text-[#326ba7]">
            BUSINESS OVERVIEW
          </p>

          <h2 className="mt-5 text-3xl font-bold text-[#202124]">
            Company Information
          </h2>

          <div className="mt-9 grid gap-7 sm:grid-cols-2">
            <div>
              <p className="text-sm text-gray-500">Company Name</p>
              <p className="mt-2 font-semibold text-[#202124]">
                OSBEE SOLUTIONS PRIVATE LIMITED
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Industry</p>
              <p className="mt-2 font-semibold text-[#202124]">
                Economic Consulting
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="mt-2 font-semibold text-[#202124]">India</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Business Category</p>
              <p className="mt-2 font-semibold text-[#202124]">
                Economic Consultant
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supplied Review */}
      

      {/* CTA */}
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-3xl bg-[#326ba7] p-9 text-white md:flex-row md:items-center md:p-14">
          <div>
            <h2 className="text-3xl font-bold">
              Let&apos;s discuss your requirements.
            </h2>

            <p className="mt-4 text-blue-100">
              Get in touch with OSBEE SOLUTIONS PRIVATE LIMITED.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-white px-7 py-4 font-semibold text-[#326ba7] transition hover:bg-blue-50"
          >
            Contact Us
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
