import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Workshop Gallery",
  description:
    "View New India Automotive workshop images from Bhiwandi, Maharashtra.",
};

const workshopImages = [
  {
    src: "/images/workshop/workshop.webp",
    alt: "New India Automotive commercial vehicle workshop",
    width: 1730,
    height: 909,
  },
  {
    src: "/images/workshop/workshop-about.webp",
    alt: "New India Automotive workshop in Bhiwandi",
    width: 1578,
    height: 996,
  },
];

export default function GalleryPage() {
  return (
    <section className="bg-background px-5 py-16 text-foreground sm:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
          New India Automotive
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
          Workshop Gallery
        </h1>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {workshopImages.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-xl border border-border"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}