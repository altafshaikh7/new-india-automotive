
export type Service = {
  title: string;
  description: string;
  image: string;
  slug: string;
};

export const services: Service[] = [
  {
    title: "Accident Repair",
    description:
      "Complete accident repair solutions for commercial vehicles. We restore damaged trucks with careful inspection, quality parts, and reliable workmanship.",
    image: "/images/services/accident-repair.webp",
    slug: "accident-repair",
  },
  {
    title: "Chassis Repair",
    description:
      "Professional chassis repair and alignment for heavy commercial vehicles to restore structural strength, stability, and road safety.",
    image: "/images/services/chassis-repair.webp",
    slug: "chassis-repair",
  },
  {
    title: "Denting",
    description:
      "Expert dent removal and body restoration to repair damaged panels and bring your vehicle back to a clean, well-maintained appearance.",
    image: "/images/services/denting.webp",
    slug: "denting",
  },
  {
    title: "Painting",
    description:
      "High-quality vehicle painting with professional surface preparation, colour matching, and a durable finish.",
    image: "/images/services/painting.webp",
    slug: "painting",
  },
  {
    title: "Mechanical Repair",
    description:
      "Reliable mechanical inspection, troubleshooting, and repair services to keep your commercial vehicles running efficiently.",
    image: "/images/services/mechanical-repair.webp",
    slug: "mechanical-repair",
  },
  {
    title: "Electrical Work",
    description:
      "Electrical diagnosis and repair for vehicle wiring, lighting, batteries, and other electrical systems.",
    image: "/images/services/electrical-work.webp",
    slug: "electrical-work",
  },
  {
    title: "Truck Body Repair",
    description:
      "Specialized truck body repair, fabrication, and restoration services designed for heavy-duty commercial vehicles.",
    image: "/images/services/truck-body-repair.webp",
    slug: "truck-body-repair",
  },
  {
    title: "Towing Service",
    description:
      "Vehicle recovery and towing assistance for breakdowns and accident situations, helping move your vehicle safely.",
    image: "/images/services/towing-service.webp",
    slug: "towing-service",
  },
];
