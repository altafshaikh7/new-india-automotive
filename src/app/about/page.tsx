import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Truck,
  Wrench,
  ShieldCheck,
} from "lucide-react";

import ScrollReveal from "@/components/ui/scroll-reveal";
import AwardsSection from "@/components/awards/awards-section";

export const metadata: Metadata = {
  title: "About New India Automotive | Bhiwandi",
  description:
    "Learn about New India Automotive, established in 2017 and focused on commercial vehicle accident repair in Bhiwandi, Maharashtra.",
};

const companyHighlights = [
  {
    icon: Truck,
    title: "Commercial Vehicle Focus",
    description:
      "Our main specialization is accident repair for trucks and heavy commercial vehicles.",
  },
  {
    icon: Wrench,
    title: "Repair Expertise",
    description:
      "Repair services based on vehicle damage and customer-specific requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Economical Approach",
    description:
      "We aim to provide practical and comparatively economical repair solutions.",
  },
];

const values = [
  "Focus on commercial vehicle repairs",
  "Customer-specific repair requirements",
  "Practical and economical solutions",
  "Attention to repair needs",
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-background text-foreground">
      {/* HERO SECTION */}
      <section className="relative isolate flex flex-col overflow-hidden bg-neutral-950 sm:min-h-[720px] sm:justify-center">
        <div className="relative aspect-video w-full shrink-0 sm:absolute sm:inset-0 sm:aspect-auto">
          <Image
            src="/images/hero/home-hero.webp"
            alt="New India Automotive commercial vehicle repair workshop"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative mx-auto flex w-full max-w-7xl items-center px-5 py-10 sm:min-h-[720px] sm:px-8 sm:py-24 lg:px-12">
          <ScrollReveal direction="up">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                About New India Automotive
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                Keeping Commercial Vehicles
                <span className="block text-red-500">
                  Moving Forward.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white sm:text-lg">
                Commercial vehicle accident repair specialists in
                Bhiwandi, Maharashtra.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Explore Our Services
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section id="who-we-are" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <ScrollReveal direction="left" effect="rise">
            <div className="order-1">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Who We Are
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                A Workshop Focused on
                <span className="block text-red-600">
                  Commercial Vehicle Repair
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-muted-foreground">
                Located in Bhatale, Vehele, Bhiwandi, Maharashtra,
                New India Automotive focuses on repair requirements
                of trucks and heavy commercial vehicles.
              </p>

              <p className="mt-4 text-base leading-8 text-muted-foreground">
                The company prioritizes fast repairs, customer-specific
                requirements, and comparatively economical repair
                solutions.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {values.map((value) => (
                  <div
                    key={value}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-red-600"
                    />

                    <p className="text-sm font-medium leading-6 text-foreground/90">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-9">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-bold text-red-600 transition hover:gap-3"
                >
                  Discover Our Repair Services
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" effect="scale">
            <div className="order-2 relative aspect-[3/2] overflow-hidden rounded-2xl">
              <Image
                src="/images/workshop/workshop-about.webp"
                alt="New India Automotive workshop in Bhiwandi"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* COMPANY DIRECTORS */}
      <section
        id="directors"
        className="scroll-mt-24 border-y border-border bg-muted/50 px-5 py-14 sm:px-8 sm:py-16 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="up" effect="fade">
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Our Company Directors
            </h2>
          </ScrollReveal>

          <div className="mx-auto mt-7 grid max-w-3xl gap-5 md:grid-cols-2 md:gap-6">
            {[
              {
                name: "Riyaz Shaikh",
                image: "/images/team/owner-1.png",
                quote:
                  "Success is built on trust, hard work, and the courage to move forward.",
              },
              {
                name: "Vijendra Yadav",
                image: "/images/team/owner-2.png",
                quote:
                  "Great journeys begin with a vision and grow through dedication.",
              },
            ].map((director, index) => (
              <ScrollReveal
                key={director.name}
                direction="up"
                effect="rise"
                delay={index * 0.08}
              >
                <article className="overflow-hidden rounded-xl border border-border bg-card text-card-foreground transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md hover:shadow-foreground/5">
                  <div className="relative h-[350px] overflow-hidden bg-white sm:h-[380px]">
                    <Image
                      src={director.image}
                      alt={director.name}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 40vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="px-6 py-5 text-center">
                    <h3 className="text-xl font-bold tracking-tight">
                      {director.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                      Company Director
                    </p>
                    <p className="mx-auto mt-3 max-w-xs text-sm italic leading-6 text-muted-foreground">
                      {director.quote}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY HIGHLIGHTS */}
      <section className="border-y border-border bg-muted/50 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="up" effect="fade">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Our Approach
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Focused on Your Repair Needs
              </h2>

              <p className="mt-4 leading-7 text-muted-foreground">
                Our work is centered around commercial vehicle
                accident repair and the requirements of vehicle owners.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {companyHighlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <ScrollReveal
                  key={item.title}
                  direction="up"
                  effect="rise"
                  delay={index * 0.06}
                >
                  <article className="h-full rounded-2xl border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-foreground/5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={26} />
                    </div>

                    <h3 className="mt-6 text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORKSHOP LOCATION */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <ScrollReveal direction="left" effect="fade">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Visit Our Workshop
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Find Us in
                <span className="block text-red-600">
                  Bhiwandi, Maharashtra
                </span>
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-muted-foreground">
                New India Automotive is located at Bhatale, Vehele,
                Bhiwandi. Customers can contact the workshop to discuss
                their commercial vehicle repair requirements.
              </p>

              <div className="mt-8 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin size={23} />
                </div>

                <div>
                  <h3 className="font-bold">
                    Workshop Address
                  </h3>

                  <p className="mt-2 leading-7 text-muted-foreground">
                    63W3+XXR, Bhatale, Vehele,
                    <br />
                    Bhiwandi, Maharashtra 421302
                  </p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=63W3%2BXXR%2C+Bhatale%2C+Vehele%2C+Bhiwandi%2C+Maharashtra+421302"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-red-600 transition hover:gap-3"
                  >
                    Get Directions
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" effect="scale">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/workshop/workshop.webp"
                alt="New India Automotive commercial vehicle workshop"
                width={1730}
                height={909}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-xl border border-white/20 bg-black/50 p-4 text-white backdrop-blur-sm">
                <MapPin size={20} className="text-red-400" />

                <div>
                  <p className="font-semibold">
                    New India Automotive
                  </p>

                  <p className="text-sm text-neutral-300">
                    Bhatale, Vehele, Bhiwandi
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <AwardsSection id="awards" />

    </div>
  );
}
