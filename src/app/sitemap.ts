import type { MetadataRoute } from "next";

import { services } from "@/content/services";

const siteUrl = "https://newindiaautomotive.com";

const staticRoutes = [
  "",
  "/about",
  "/book-appointment",
  "/brands",
  "/contact",
  "/faq",
  "/gallery",
  "/services",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = [
    ...staticRoutes,
    ...services.map((service) => `/services/${service.slug}`),
  ];

  return urls.map((route) => ({
    url: new URL(route, siteUrl).toString(),
  }));
}