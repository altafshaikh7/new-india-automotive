import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Insurance Claim Assistance",
  description:
    "Contact New India Automotive to discuss insurance-related commercial vehicle repair enquiries.",
};

const whatsappUrl = `https://wa.me/${company.whatsapp.primary}?text=${encodeURIComponent(
  `Hello ${company.name}, I would like to enquire about insurance-related vehicle repair assistance.`,
)}`;

export default function InsurancePage() {
  return (
    <section className="bg-background px-5 py-16 text-foreground sm:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
          Vehicle Repair Enquiry
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
          Insurance Claim Assistance
        </h1>
        <p className="mt-5 leading-7 text-muted-foreground">
          Insurance claim assistance is listed among {company.name}&apos;s
          services. Contact the workshop to discuss your vehicle repair
          requirements. Claim eligibility, insurer approval, and outcomes are
          determined by the relevant insurer and are not guaranteed here.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`tel:${company.phone.primary}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-red-700 px-5 font-semibold text-white transition-colors hover:bg-red-800"
          >
            <Phone aria-hidden="true" className="size-4" />
            Call {company.phone.primary}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-md border border-green-700/40 px-5 font-semibold text-green-800 hover:bg-green-50 dark:text-green-300 dark:hover:bg-green-950/40"
          >
            <MessageCircle aria-hidden="true" className="size-4" />
            WhatsApp
          </a>
        </div>
        <Link
          href="/services"
          className="mt-6 inline-flex min-h-11 items-center font-semibold text-red-700 hover:text-red-800"
        >
          View all services
        </Link>
      </div>
    </section>
  );
}