"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Wrench,
  Truck,
  Settings,
  Paintbrush,
  Zap,
  CarFront,
} from "lucide-react";

import { services } from "@/content/services";

const serviceIcons = {
  "accident-repair": CarFront,
  "chassis-repair": Settings,
  denting: Wrench,
  painting: Paintbrush,
  "mechanical-repair": Settings,
  "electrical-work": Zap,
  "truck-body-repair": Truck,
  "towing-service": Truck,
};

const benefits = [
  {
    icon: ShieldCheck,
    title: "Quality Workmanship",
    description:
      "Repairs performed with attention to detail and a focus on dependable results.",
  },
  {
    icon: Wrench,
    title: "Experienced Team",
    description:
      "Skilled professionals for commercial vehicle repair and restoration.",
  },
  {
    icon: Clock,
    title: "Timely Service",
    description:
      "Efficient repair processes to help reduce unnecessary vehicle downtime.",
  },
  {
    icon: CheckCircle2,
    title: "Reliable Solutions",
    description:
      "Practical repair solutions for different vehicle damage and service needs.",
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const revealFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const revealScale = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1 },
};

export default function ServicesPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* HERO */}
      <section className="relative flex min-h-0 flex-col overflow-hidden bg-[#111827] sm:min-h-[480px] sm:flex-row sm:items-center md:min-h-[max(30rem,56.25vw)] lg:min-h-[min(56.25vw,47.5rem)]">
        <div className="relative aspect-video w-full shrink-0 sm:absolute sm:inset-0 sm:aspect-auto">
          <Image
            src="/images/services/services-hero.webp"
            alt="Commercial vehicle repair workshop"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-10 sm:px-10 sm:py-24 lg:px-16">
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            variants={reveal}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-red-500">
              New India Automotive
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Complete Commercial
              <span className="block text-red-500">
                Vehicle Repair Services
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
              From accident repair and chassis restoration to mechanical,
              electrical, and bodywork services — we help keep your commercial
              vehicles ready for the road.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-red-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Get in Touch
                <ArrowRight size={18} />
              </Link>

              <Link
                href="#our-services"
                className="inline-flex items-center gap-3 border border-white/40 px-7 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealFade}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-7xl"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                What We Do
              </p>

              <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                Reliable Repair Solutions
                <span className="block text-red-600">
                  for Heavy Vehicles
                </span>
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:ml-auto">
              New India Automotive provides a range of commercial vehicle
              repair and maintenance services. Our focus is on dependable
              workmanship, practical solutions, and getting vehicles back
              on the road safely.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section
        id="our-services"
        className="bg-muted/50 px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-14 text-center"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Our Services
            </p>

            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Services We Provide
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              Explore our repair services. Hover over a service image to
              discover more about what we do.
            </p>
          </motion.div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon =
                serviceIcons[service.slug as keyof typeof serviceIcons];

              return (
                <motion.article
                  key={service.slug}
                  initial={shouldReduceMotion ? false : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={revealScale}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                    ease: "easeOut",
                  }}
                  className="group relative isolate aspect-[4/3] cursor-pointer overflow-hidden bg-muted shadow-sm transition-shadow duration-300 hover:shadow-2xl"
                >
                  {/* IMAGE */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center"
                  />

                  {/* INITIAL DARK FADE */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5 transition-opacity duration-500 group-hover:opacity-0" />

                  {/* HOVER IMAGE + COLOR FADE */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-red-950/95 via-red-900/55 to-black/10 opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100" />

                  {/* SOFT RED TINT */}
                  <div className="pointer-events-none absolute inset-0 bg-red-600/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                  {/* DEFAULT TITLE */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-4 transition-all duration-500 ease-in-out group-hover:translate-y-6 group-hover:opacity-0 sm:p-6">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center border border-white/20 bg-white/10 text-white backdrop-blur-md sm:mb-4 sm:h-12 sm:w-12">
                      <Icon size={23} />
                    </div>

                    <h3 className="text-xl font-bold text-white">
                      {service.title}
                    </h3>

                    <div className="mt-3 h-1 w-12 bg-red-600" />
                  </div>

                  {/* SLIDE-UP INFORMATION */}
                  <div className="absolute inset-x-0 bottom-0 z-20 flex h-full translate-y-full flex-col justify-end bg-gradient-to-t from-red-950/95 via-red-900/70 to-red-900/10 p-4 backdrop-blur-[1px] transition-transform duration-600 ease-in-out group-hover:translate-y-0 sm:p-6">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center border border-white/30 bg-white/15 text-white backdrop-blur-md">
                      <Icon size={23} />
                    </div>

                    <h3 className="mb-2 text-lg font-bold text-white">
                      {service.title}
                    </h3>

                    <p className="line-clamp-2 text-xs leading-5 text-white/90">
                      {service.description}
                    </p>

                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-3 inline-flex w-fit items-center gap-3 border-b border-white/60 pb-2 text-sm font-semibold text-white transition-all duration-300 hover:gap-5 hover:border-white"
                    >
                      Explore Service
                      <ArrowRight size={18} />
                    </Link>
                  </div>

                  {/* TOP RED ACCENT */}
                  <div className="absolute left-0 top-0 z-30 h-1 w-0 bg-red-500 transition-all duration-500 group-hover:w-full" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-14 text-center"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Why Choose Us
            </p>

            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Built Around Your Vehicle Needs
            </h2>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={shouldReduceMotion ? false : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={revealFade}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className="border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center bg-primary/10 text-primary">
                    <Icon size={27} />
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-foreground">
                    {benefit.title}
                  </h3>

                  <p className="text-sm leading-7 text-muted-foreground">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACCIDENT REPAIR CTA */}
      <section className="bg-foreground px-6 py-16 text-background sm:px-10 lg:px-16">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"
        >
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Accident Repair Assistance
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Need Help After a Vehicle Accident?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-background/75">
              Contact our team to discuss your vehicle damage and repair
              requirements. We will help you understand the next steps.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 bg-red-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
            Get Started
          </p>

          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Let’s Get Your Vehicle
            <span className="block text-red-600">
              Back on the Road
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
            Have a repair requirement or need more information about our
            services? Get in touch with New India Automotive.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 bg-red-600 px-8 py-4 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Get a Service Enquiry
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}