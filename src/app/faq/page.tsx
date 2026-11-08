import type { Metadata } from "next";
import Link from "next/link";

import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Contact New India Automotive in Bhiwandi for answers about commercial vehicle repair enquiries.",
};

export default function FAQPage() {
  return (
    <section className="bg-background px-5 py-16 text-foreground sm:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
          Help
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-5 leading-7 text-muted-foreground">
          No frequently asked questions have been published yet. For information
          about your commercial vehicle repair needs, contact {company.name}.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-11 items-center rounded-md bg-red-700 px-5 font-semibold text-white transition-colors hover:bg-red-800"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}