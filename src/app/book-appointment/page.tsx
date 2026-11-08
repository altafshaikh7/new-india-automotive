import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Phone } from "lucide-react";

import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Request an Appointment",
  description:
    "Contact New India Automotive to request an appointment for commercial vehicle repair in Bhiwandi.",
};

const whatsappUrl = `https://wa.me/${company.whatsapp.primary}?text=${encodeURIComponent(
  `Hello ${company.name}, I would like to request an appointment to discuss a vehicle repair.`,
)}`;

export default function BookAppointmentPage() {
  return (
    <section className="bg-background px-5 py-16 text-foreground sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-red-700 hover:text-red-800"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to Home
        </Link>

        <p className="mt-10 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
          Contact the Workshop
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
          Request an Appointment
        </h1>
        <p className="mt-5 leading-7 text-muted-foreground">
          Online appointment booking is not available on this website yet.
          Please call or message the workshop to discuss your vehicle and
          request a suitable time. Contacting us does not itself confirm an
          appointment.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href={`tel:${company.phone.primary}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-red-700 px-5 font-semibold text-white transition-colors hover:bg-red-800"
          >
            <Phone aria-hidden="true" className="size-5" />
            Call {company.phone.primary}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-green-700/40 px-5 font-semibold text-green-800 transition-colors hover:bg-green-50 dark:text-green-300 dark:hover:bg-green-950/40"
          >
            <MessageCircle aria-hidden="true" className="size-5" />
            WhatsApp
          </a>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Alternate number:{" "}
          <a
            href={`tel:${company.phone.alternate}`}
            className="font-semibold text-foreground underline underline-offset-4"
          >
            {company.phone.alternate}
          </a>
        </p>
      </div>
    </section>
  );
}