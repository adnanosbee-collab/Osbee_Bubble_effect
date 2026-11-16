
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight,
  ArrowUpRight,
  TrendingDown,
  BriefcaseBusiness,
  Lightbulb,
  Target,
  ShieldCheck,
  Users,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Cost Optimization",
    description:
      "Helping businesses identify opportunities to reduce operational expenses and improve efficiency.",
    icon: TrendingDown,
  },
  {
    number: "02",
    title: "Commercial Consulting",
    description:
      "Providing practical guidance to support informed commercial and business decisions.",
    icon: BriefcaseBusiness,
  },
  {
    number: "03",
    title: "Business Solutions",
    description:
      "Identifying suitable and cost-effective solutions based on individual client requirements.",
    icon: Lightbulb,
  },
  {
    number: "04",
    title: "Strategic Support",
    description:
      "Helping businesses work towards their operational and financial objectives.",
    icon: Target,
  },
];

const benefits = [
  "Customer-focused approach",
  "Cost-effective recommendations",
  "Transparent and unbiased advice",
  "Industry experience",
  "Long-term client relationships",
  "Commitment to business objectives",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#f4f6f9]">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">

          <div>
            <div className="hero-enter hero-enter-1 mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-[#326ba7]">
              <span className="h-2 w-2 rounded-full bg-[#326ba7]" />
              ECONOMIC CONSULTING
            </div>

            <h1 className="hero-enter hero-enter-2 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-[#202124] sm:text-5xl lg:text-6xl">
              Economic Consulting &
              <span className="text-[#326ba7]">
                {" "}Smart Business Solutions
              </span>
            </h1>

            <p className="hero-enter hero-enter-3 mt-7 max-w-xl text-base leading-8 text-gray-600 md:text-lg">
              Helping businesses reduce costs, make informed decisions,
              and achieve their business objectives through reliable
              commercial consulting and practical solutions.
            </p>

            <div className="hero-enter hero-enter-4 mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-lg bg-[#326ba7] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/10 transition hover:-translate-y-1 hover:bg-[#245486]"
              >
                Contact Us
                <ArrowUpRight size={18} />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-3 rounded-lg border border-gray-300 bg-white px-7 py-4 text-sm font-semibold text-[#202124] transition hover:border-[#326ba7] hover:text-[#326ba7]"
              >
                Learn More
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="hero-enter hero-enter-5 mt-12 flex items-center gap-3 border-t border-gray-200 pt-7">
              <ShieldCheck className="text-[#326ba7]" size={25} />
              <p className="text-sm text-gray-600">
                Practical guidance. Transparent advice.
                <span className="font-semibold text-[#202124]">
                  {" "}Business-focused solutions.
                </span>
              </p>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative">
            <div className="hero-visual-enter relative overflow-hidden rounded-3xl bg-[#202124] p-8 text-white shadow-2xl md:p-12">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
              <div className="absolute -right-5 -top-5 h-44 w-44 rounded-full border border-white/10" />

              <div className="relative">
                <div className="mb-16 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.2em] text-blue-200">
                    OSBEE SOLUTIONS
                  </span>
                  <TrendingDown size={25} className="text-blue-300" />
                </div>

                <p className="text-sm text-gray-400">
                  OUR APPROACH
                </p>

                <h2 className="mt-4 max-w-sm text-3xl font-semibold leading-snug md:text-4xl">
                  Better decisions begin with better understanding.
                </h2>

                <div className="mt-12 space-y-5">
                  {[
                    "Understand your requirements",
                    "Identify opportunities",
                    "Recommend practical solutions",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 border-b border-white/10 pb-4"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#326ba7] text-sm font-bold">
                        0{index + 1}
                      </span>
                      <span className="text-sm text-gray-200">{item}</span>
                      <CheckCircle2 className="ml-auto text-blue-300" size={18} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-gray-100 bg-white p-5 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <Users className="text-[#326ba7]" size={25} />
                <div>
                  <p className="text-sm font-bold text-[#202124]">
                    Client Focused
                  </p>
                  <p className="text-xs text-gray-500">
                    Solutions built around your needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          <div>
            <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#326ba7]">
              ABOUT OUR COMPANY
            </p>

            <h2 className="text-3xl font-bold leading-tight text-[#202124] md:text-4xl">
              Welcome to OSBEE SOLUTIONS PRIVATE LIMITED
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Osbee Solutions is a commercial consulting company based
              in India. We have one simple aim: to save our customers
              money while building a company where our employees would
              be proud to work.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              We build trusting relationships with you at the centre,
              understanding your needs and providing solutions designed
              to reduce costs and achieve your business objectives.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              With industry experience and a commitment to transparency,
              we provide accurate, unbiased advice and cost-effective
              business utility solutions.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-3 font-semibold text-[#326ba7] transition hover:gap-5"
            >
              Learn More About Us
              <ArrowRight size={19} />
            </Link>
          </div>

          <div className="rounded-3xl bg-[#f4f6f9] p-8 md:p-12">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#326ba7] text-white">
              <BriefcaseBusiness size={27} />
            </div>

            <h3 className="mt-7 text-2xl font-bold text-[#202124]">
              Your business goals matter.
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              We believe successful consulting starts by understanding
              the people and businesses we work with. Our approach
              centres on trust, transparency and practical thinking.
            </p>

            <div className="mt-8 h-1.5 w-24 rounded-full bg-[#326ba7]" />
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#f4f6f9] px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#326ba7]">
              WHAT WE DO
            </p>

            <h2 className="text-3xl font-bold text-[#202124] md:text-4xl">
              Practical Thinking. Meaningful Solutions.
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              A client-focused consulting approach designed to
              understand requirements and identify opportunities
              for improvement.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.number}
                  className="service-card-reveal group rounded-2xl border border-gray-100 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#326ba7] transition group-hover:bg-[#326ba7] group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <span className="text-sm font-bold text-gray-300">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-bold text-[#202124]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          <div>
            <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#326ba7]">
              WHY CHOOSE US
            </p>

            <h2 className="text-3xl font-bold leading-tight text-[#202124] md:text-4xl">
              A commitment to your business objectives.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              We believe in building lasting professional relationships
              through practical recommendations, transparent communication
              and a clear understanding of client requirements.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-[#326ba7]"
                  size={21}
                />
                <span className="text-sm font-medium leading-6 text-gray-700">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-[#202124] px-6 py-20 text-white md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">

          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-300">
              LET&apos;S CONNECT
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Have Something in Mind?
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-gray-400">
              Tell OSBEE SOLUTIONS PRIVATE LIMITED what you&apos;re looking
              for. We&apos;re here to help you get started.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-[#326ba7] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#245486]"
          >
            Contact Us
            <ArrowUpRight size={19} />
          </Link>

        </div>
      </section>
      <Footer />
    </main>
  );
}
