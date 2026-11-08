
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

import { company } from "@/content/company";
import { appointmentNavigation } from "@/content/navigation";
import ScrollReveal from "@/components/ui/scroll-reveal";
import BrandMarquee from "@/components/ui/brand-marquee";
import AwardsSection from "@/components/awards/awards-section";
import HomeStatistics from "@/components/home/home-statistics";

const heroImages = [
  "/images/hero/slideshow/multi-brand-truck-lineup.webp",
  "/images/hero/slideshow/premium-workshop-scene.webp",
  "/images/hero/slideshow/truck-hero-final.webp",
  "/images/hero/slideshow/truck-on-highway.webp",
  "/images/hero/slideshow/truck-workshop-exterior.webp",
  "/images/hero/slideshow/workshop-interior.webp",
];

const services = [
  {
    title: "Accident Repair",
    description:
      "Commercial vehicle accident damage repair with attention to safety and workmanship.",
    icon: Truck,
    href: "/services/accident-repair",
  },
  {
    title: "Truck Body Repair",
    description:
      "Bodywork and restoration solutions for damaged trucks and heavy vehicles.",
    icon: Wrench,
    href: "/services",
  },
  {
    title: "Painting & Finishing",
    description:
      "Vehicle body painting and finishing after repair work.",
    icon: ShieldCheck,
    href: "/services",
  },
];

export default function Home() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      {/* Hero Section */}
      <section
        id="home"
        className="relative flex min-h-[85vh] items-center overflow-hidden bg-zinc-950"
      >
        {/* Background Image Slideshow */}
        <div className="absolute inset-x-0 top-0 aspect-video sm:inset-0 sm:aspect-auto">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
              style={{ opacity: activeImage === index ? 1 : 0 }}
              aria-hidden="true"
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Existing Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        {/* Hero Content */}
        <div className="relative mx-auto w-full max-w-7xl px-5 pt-[calc(56.25vw+3rem)] pb-12 sm:px-8 sm:pt-32 sm:pb-24">
          <ScrollReveal effect="fade">
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-1 w-12 bg-red-600" />

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
                  New India Automotive
                </p>
              </div>

              <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                Commercial Vehicle
                <br />
                Accident Repair
                <br />
                <span className="text-red-500">You Can Rely On.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
                We provide accident repair and restoration solutions for
                trucks and commercial vehicles. Our goal is to help get your
                vehicle back on the road.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 bg-red-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-red-700"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={appointmentNavigation.href}
                  className="inline-flex items-center gap-3 border border-white/30 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  {appointmentNavigation.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href={`tel:${company.phone.primary}`}
                  className="inline-flex items-center gap-3 border border-white/30 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  Call Us
                </a>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      <HomeStatistics />

      {/* Brands */}
      <BrandMarquee />

      {/* Services Preview */}
      <section id="services" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <ScrollReveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                  Our Services
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                  Repair Solutions
                  <br />
                  <span className="text-red-600">
                    For Heavy Vehicles
                  </span>
                </h2>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-bold text-foreground transition hover:text-primary"
              >
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <ScrollReveal
                  key={service.title}
                  effect="rise"
                  delay={index * 0.15}
                >
                  <Link
                    href={service.href}
                    className="group block h-full border border-border p-7 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                  >
                    <div className="flex h-14 w-14 items-center justify-center bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="mt-7 text-xl font-bold">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {service.description}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section
        id="about"
        className="bg-muted py-20 text-foreground sm:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
          <ScrollReveal direction="right" effect="slide">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                About Our Company
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
                Helping Keep
                <br />
                Your Business Moving.
              </h2>

              <p className="mt-6 text-base leading-7 text-muted-foreground">
                {company.description}
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-3 bg-red-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-red-700"
              >
                About New India Automotive
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal
            direction="left"
            effect="scale"
            delay={0.15}
          >
            <div             className="relative flex min-h-[320px] items-center justify-center overflow-hidden border border-border bg-card">
              <div className="relative w-full min-w-0 px-3 text-center">
                <Truck className="mx-auto h-20 w-20 text-primary" />

                <p className="mt-5 text-lg font-black leading-tight sm:text-2xl">
                  Commercial Vehicle Care
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  Accident Repair & Restoration
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Awards Preview */}
      <AwardsSection compact />

      {/* Contact CTA */}
      <section className="bg-red-600 py-16 text-white">
        <ScrollReveal effect="fade">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 md:flex-row md:items-center md:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-100">
                Need Vehicle Repair?
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Let’s Get Your Truck Back on the Road.
              </h2>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-white px-6 py-4 text-sm font-bold text-red-600 transition hover:bg-zinc-100"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
