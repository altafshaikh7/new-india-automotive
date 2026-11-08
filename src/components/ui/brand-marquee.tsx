
"use client";

import Image from "next/image";

const brands = [
  {
    name: "AMW",
    logo: "/brands/AMW Peak Logo with Red Swoosh.png",
  },
  {
    name: "Ashok Leyland",
    logo: "/brands/Ashok Leyland Blue Emblem Logo.png",
  },
  {
    name: "BharatBenz",
    logo: "/brands/BharatBenz Chrome Emblem Logo.png",
  },
  {
    name: "SML Isuzu",
    logo: "/brands/Bold Red SML Isuzu Logo.png",
  },
  {
    name: "Eicher",
    logo: "/brands/Eicher Red Horse Logo.png",
  },
  {
    name: "Force Motors",
    logo: "/brands/Force Motors Blue and Black Logo.png",
  },
  {
    name: "Hindustan Motors",
    logo: "/brands/Hindustan Motors Blue and Yellow Logo.png",
  },
  {
    name: "Mahindra",
    logo: "/brands/Mahindra Red Swoosh Logo.png",
  },
  {
    name: "Tata Daewoo",
    logo: "/brands/Tata Daewoo Blue Logo.png",
  },
  {
    name: "Tata Motors",
    logo: "/brands/Tata Motors Blue Logo.png",
  },
];

export default function BrandMarquee() {
  const repeatedBrands = [...brands, ...brands];

  return (
    <section
      id="brands"
      className="overflow-hidden bg-white py-16 sm:py-20"
    >
      {/* Section Heading */}
      <div className="mx-auto mb-10 max-w-7xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
          Trusted Vehicle Brands
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Brands We Work With
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
          We provide repair solutions for commercial vehicles from leading
          automotive manufacturers.
        </p>
      </div>

      {/* Brand Marquee */}
      <div className="brand-marquee group relative w-full overflow-hidden">
        {/* Left Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-28" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-28" />

        <div className="brand-marquee-track flex w-max items-start">
          {repeatedBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="mx-3 flex w-44 shrink-0 flex-col items-center sm:mx-5 sm:w-52"
            >
              {/* Logo Card - Only Logo */}
              <div
                title={brand.name}
                className="flex h-32 w-full items-center justify-center rounded-xl border border-border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md sm:h-36"
              >
                <div className="relative h-20 w-full">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    sizes="208px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Brand Name - Below Card */}
              <p className="mt-3 text-center text-sm font-semibold text-foreground sm:text-base">
                {brand.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        .brand-marquee-track {
          animation: brand-marquee 35s linear infinite;
        }

        .brand-marquee:hover .brand-marquee-track {
          animation-play-state: paused;
        }

        @keyframes brand-marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .brand-marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
