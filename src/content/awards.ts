export type Award = {
  image: string;
  title: string;
  issuer: string;
  yearOrValidity?: string;
  event?: string;
  recipient: string;
  description?: string;
  width: number;
  height: number;
};

export const awards: Award[] = [
  {
    image: "/images/awards/eicher-parts-performance-2025-26.jpeg",
    title: "Second Runner Up — Overall Parts Business Performance",
    issuer: "Eicher",
    yearOrValidity: "2025–26",
    event: "Retailer Meet & Award Night",
    recipient: "New India Automotive (Bhiwandi)",
    width: 1373,
    height: 749,
  },
  {
    image: "/images/awards/eicher-star-performer-2023-24.jpeg",
    title: "Star Performer — Eicher",
    issuer: "Eicher",
    yearOrValidity: "2023–24",
    event: "Retailer Meet & Award Night",
    recipient: "New India Automotive (Bhiwandi)",
    width: 1020,
    height: 697,
  },
];
