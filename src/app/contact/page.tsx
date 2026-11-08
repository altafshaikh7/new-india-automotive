import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { company } from "@/content/company";
import { appointmentNavigation, navigationLabels } from "@/content/navigation";

export const metadata: Metadata = {
  title: "Contact New India Automotive",
  description:
    "Contact New India Automotive in Bhiwandi, Maharashtra by phone, email, WhatsApp, or get directions to the workshop.",
};

const address = `${company.address.line1}, ${company.address.city}, ${company.address.state} ${company.address.pincode}`;
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  address,
)}`;
const whatsappUrl = `https://wa.me/${company.whatsapp.primary}?text=${encodeURIComponent(
  `Hello ${company.name}, I would like to enquire about your services.`,
)}`;

export default function ContactPage() {
  return (
    <section className="bg-background px-5 py-16 text-foreground sm:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
          Get in Touch
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
          Contact {company.name}
        </h1>
        <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
          For commercial vehicle repair enquiries, contact the workshop using
          the options below. This website does not submit an online contact
          form.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <section className="rounded-xl border border-border p-6">
            <h2 className="text-lg font-bold">Call the Workshop</h2>
            <div className="mt-4 space-y-3">
              {[company.phone.primary, company.phone.alternate].map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="flex min-h-11 items-center gap-3 text-foreground transition-colors hover:text-red-700"
                >
                  <Phone aria-hidden="true" className="size-5 text-red-600" />
                  {phone}
                </a>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-border p-6">
            <h2 className="text-lg font-bold">Message or Email</h2>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-3 text-foreground transition-colors hover:text-green-700"
              >
                <MessageCircle aria-hidden="true" className="size-5 text-green-600" />
                {navigationLabels.whatsapp}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex min-h-11 items-center gap-3 break-all text-foreground transition-colors hover:text-red-700"
              >
                <Mail aria-hidden="true" className="size-5 shrink-0 text-red-600" />
                {company.email}
              </a>
            </div>
          </section>

          <section className="rounded-xl border border-border p-6 sm:col-span-2">
            <h2 className="text-lg font-bold">Workshop Location</h2>
            <p className="mt-4 flex items-start gap-3 leading-7 text-muted-foreground">
              <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-red-600" />
              {address}, India
            </p>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-red-700 hover:text-red-800"
            >
              Get Directions
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </section>
        </div>

        <Link
          href={appointmentNavigation.href}
          className="mt-8 inline-flex min-h-11 items-center rounded-md bg-red-700 px-5 font-semibold text-white transition-colors hover:bg-red-800"
        >
          {appointmentNavigation.label}
        </Link>
      </div>
    </section>
  );
}