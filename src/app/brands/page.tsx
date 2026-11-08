import type { Metadata } from "next";
import Image from "next/image";

import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Commercial Vehicle Brands",
  description:
    "Commercial vehicle brands listed by New India Automotive in Bhiwandi, Maharashtra.",
};

const brandLogos: Record<string, string> = {
  "Ashok Leyland": "/brands/Ashok Leyland Blue Emblem Logo.png",
  Eicher: "/brands/Eicher Red Horse Logo.png",
  Tata: "/brands/Tata Motors Blue Logo.png",
  Mahindra: "/brands/Mahindra Red Swoosh Logo.png",
};

export default function BrandsPage() {
  return (
    <section className="bg-background px-5 py-16 text-foreground sm:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
          Commercial Vehicles
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
          Brands We Work With
        </h1>
        <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
          New India Automotive lists the following vehicle brands in its company
          information.
        </p>

        <ul className="mt-10 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {company.brands.map((brand) => (
            <li
              key={brand}
              className="flex min-h-44 flex-col items-center justify-center gap-4 rounded-xl border border-border p-6"
            >
              <div className="relative h-20 w-full">
                <Image
                  src={brandLogos[brand]}
                  alt={`${brand} logo`}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-contain"
                />
              </div>
              <span className="font-semibold">{brand}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}