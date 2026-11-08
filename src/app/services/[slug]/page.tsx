import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Phone,
  Wrench,
  ShieldCheck,
  Clock,
} from "lucide-react";

import { services } from "@/content/services";
import { company } from "@/content/company";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | New India Automotive",
    };
  }

  return {
    title: `${service.title} | New India Automotive`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter(
    (item) => item.slug !== service.slug,
  );

  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* HERO */}
      <section className="relative flex min-h-0 flex-col overflow-hidden bg-gray-950 sm:min-h-[500px] sm:flex-row sm:items-center md:min-h-[max(31.25rem,56.25vw)] lg:min-h-[min(56.25vw,47.5rem)]">
        <div className="relative aspect-video w-full shrink-0 sm:absolute sm:inset-0 sm:aspect-auto">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-10 sm:px-10 sm:py-24 lg:px-16">
          <Link
            href="/services"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Services
          </Link>

          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-red-500">
              New India Automotive
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
              {service.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-red-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Enquire About This Service
                <ArrowRight size={18} />
              </Link>

              <a
                href={`tel:${company.phone}`}
                className="inline-flex items-center gap-3 border border-white/40 px-7 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                <Phone size={18} />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE INTRO */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Our Expertise
            </p>

            <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              Professional{" "}
              <span className="text-red-600">{service.title}</span>{" "}
              for Commercial Vehicles
            </h2>

            <p className="mt-6 text-base leading-8 text-muted-foreground">
              New India Automotive provides commercial vehicle repair
              services with a focus on careful inspection, dependable
              workmanship, and practical repair solutions.
            </p>

            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Contact our team to discuss your vehicle’s condition,
              repair requirements, and the next steps for service.
            </p>
          </div>

          <div className="relative aspect-video overflow-hidden bg-muted">
            <Image
              src={service.image}
              alt={`${service.title} at New India Automotive`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* SERVICE BENEFITS */}
      <section className="bg-muted/50 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Why Choose Us
            </p>

            <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              Repair Support You Can Rely On
            </h2>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "Quality Workmanship",
                description:
                  "Attention to detail throughout the repair process.",
              },
              {
                icon: Wrench,
                title: "Experienced Team",
                description:
                  "Commercial vehicle repair and restoration support.",
              },
              {
                icon: Clock,
                title: "Timely Service",
                description:
                  "Efficient work to help reduce unnecessary downtime.",
              },
              {
                icon: CheckCircle2,
                title: "Practical Solutions",
                description:
                  "Repair options based on your vehicle's service needs.",
              },
            ].map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Explore More
              </p>

              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Other Repair Services
              </h2>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 transition hover:gap-3"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.slice(0, 3).map((relatedService) => (
              <Link
                key={relatedService.slug}
                href={`/services/${relatedService.slug}`}
                className="group overflow-hidden border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={relatedService.image}
                    alt={relatedService.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                    {relatedService.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
                    {relatedService.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-red-600 transition-all group-hover:gap-3">
                    Explore Service
                    <ArrowRight size={17} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-foreground px-6 py-16 text-background sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Need Repair Assistance?
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Let’s Get Your Vehicle
              <span className="block text-red-500">
                Back on the Road
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-background/75">
              Contact New India Automotive to discuss your commercial
              vehicle repair requirements.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 bg-red-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Contact Our Team
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}