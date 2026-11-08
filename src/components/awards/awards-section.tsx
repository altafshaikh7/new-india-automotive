"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { awards, type Award } from "@/content/awards";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

type AwardsSectionProps = {
  id?: string;
  compact?: boolean;
};

export default function AwardsSection({
  id,
  compact = false,
}: AwardsSectionProps) {
  const [selectedAward, setSelectedAward] = useState<Award | null>(null);

  return (
    <section
      id={id}
      className={`scroll-mt-24 bg-background px-5 text-foreground sm:px-8 lg:px-12 ${
        compact ? "py-16 sm:py-20" : "py-20 sm:py-24"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
            New India Automotive
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Awards &amp; Recognition
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Recognitions received for our performance and commitment to the
            commercial vehicle industry.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
          {awards.map((award) => (
            <article
              key={award.image}
              className={`overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-colors ${
                selectedAward?.image === award.image
                  ? "border-red-600 ring-1 ring-red-600"
                  : "border-border"
              }`}
            >
              <button
                type="button"
                onClick={() => setSelectedAward(award)}
                aria-pressed={selectedAward?.image === award.image}
                aria-label={`View certificate details: ${award.title}`}
                className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-inset"
              >
                <span className="block bg-muted p-4">
                  <Image
                    src={award.image}
                    alt={`${award.title} — ${award.issuer}`}
                    width={award.width}
                    height={award.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-auto w-full object-contain"
                  />
                </span>

                <span className="block p-5">
                  <span className="block text-lg font-bold leading-snug">
                    {award.title}
                  </span>
                  <span className="mt-2 block text-sm text-muted-foreground">
                    {award.issuer}
                    {award.yearOrValidity ? ` · ${award.yearOrValidity}` : ""}
                  </span>
                  <span className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-semibold text-red-700 underline-offset-4 dark:text-red-300">
                    View Certificate
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </span>
                </span>
              </button>
            </article>
          ))}
        </div>

        <Dialog
          open={selectedAward !== null}
          onOpenChange={(open) => {
            if (!open) setSelectedAward(null);
          }}
        >
          <DialogContent
            className="flex max-h-[calc(100dvh-2rem)] flex-col gap-4 overflow-y-auto p-4 sm:p-6"
            style={{
              left: "50vw",
              top: "50dvh",
              width: "min(calc(100vw - 2rem), 44rem)",
              maxWidth: "calc(100vw - 2rem)",
            }}
          >
            {selectedAward && (
              <>
                <DialogDescription className="sr-only">
                  Award or certificate details and full image. Press Escape to close.
                </DialogDescription>
                <div className="flex w-full items-center justify-center">
                  <Image
                    src={selectedAward.image}
                    alt={`${selectedAward.title} — ${selectedAward.issuer}`}
                    width={selectedAward.width}
                    height={selectedAward.height}
                    unoptimized
                    loading="eager"
                    className="h-auto max-h-[42dvh] w-full object-contain sm:max-h-[32rem]"
                  />
                </div>
                <div className="border-t border-border pt-4">
                  <DialogTitle className="text-xl font-bold leading-tight sm:text-2xl">
                    {selectedAward.title}
                  </DialogTitle>
                  <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
                    <div>
                      <dt className="font-semibold text-muted-foreground">
                        Issuer
                      </dt>
                      <dd className="mt-1">{selectedAward.issuer}</dd>
                    </div>
                    {selectedAward.yearOrValidity && (
                      <div>
                        <dt className="font-semibold text-muted-foreground">
                          {selectedAward.yearOrValidity.startsWith("Valid through")
                            ? "Validity"
                            : "Year"}
                        </dt>
                        <dd className="mt-1">
                          {selectedAward.yearOrValidity.replace(/^Valid through /, "")}
                        </dd>
                      </div>
                    )}
                    {selectedAward.event && (
                      <div>
                        <dt className="font-semibold text-muted-foreground">
                          Event
                        </dt>
                        <dd className="mt-1">{selectedAward.event}</dd>
                      </div>
                    )}
                    <div>
                      <dt className="font-semibold text-muted-foreground">
                        Recipient
                      </dt>
                      <dd className="mt-1">{selectedAward.recipient}</dd>
                    </div>
                    {selectedAward.description && (
                      <div>
                        <dt className="font-semibold text-muted-foreground">
                          Description
                        </dt>
                        <dd className="mt-1 leading-6">
                          {selectedAward.description}
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {compact && (
          <div className="mt-8 text-center">
            <a
              href="/about#awards"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-semibold text-red-700 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 dark:text-red-300"
            >
              View All Awards &amp; Recognition
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
