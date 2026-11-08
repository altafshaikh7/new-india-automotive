import { services } from "@/content/services";

export type NavigationLink = {
  label: string;
  href: string;
};

export const primaryNavigation: NavigationLink[] = [
  { label: "Home", href: "/" },
  { label: "Insurance", href: "/insurance" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const aboutNavigation = {
  label: "About Us",
  items: [
    { label: "Our Company", href: "/about" },
    { label: "Our Directors", href: "/about#directors" },
    { label: "Awards & Recognition", href: "/about#awards" },
    { label: "Brands", href: "/brands" },
    { label: "FAQs", href: "/faq" },
  ] satisfies NavigationLink[],
};

export const servicesNavigation = {
  label: "Services",
  allLabel: "All Services",
  items: services.map((service) => ({
    label: service.title,
    href: `/services/${service.slug}`,
  })),
};

export const navigationLabels = {
  call: "Call Now",
  appointment: "Book Appointment",
  whatsapp: "WhatsApp",
  appearance: "Appearance",
};

export const appointmentNavigation: NavigationLink = {
  label: navigationLabels.appointment,
  href: "/book-appointment",
};

export const footerNavigation: NavigationLink[] = [
  primaryNavigation[0],
  aboutNavigation.items[0],
  { label: servicesNavigation.allLabel, href: "/services" },
  primaryNavigation[2],
  { label: "Contact Us", href: "/contact" },
  appointmentNavigation,
];