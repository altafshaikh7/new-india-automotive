import Image from "next/image";

import { company } from "@/content/company";

type CompanyLogoProps = {
  size?: "navbar" | "footer";
};

const logoSizes = {
  navbar: {
    image: "w-[76px] sm:w-20",
  },
  footer: {
    image: "w-24 sm:w-28",
  },
};

export default function CompanyLogo({ size = "navbar" }: CompanyLogoProps) {
  const classes = logoSizes[size];

  return (
    <Image
      src={company.logo}
      alt=""
      width={1312}
      height={1199}
      sizes={size === "navbar" ? "80px" : "112px"}
      className={`block h-auto shrink-0 object-contain ${classes.image}`}
      aria-hidden="true"
    />
  );
}
