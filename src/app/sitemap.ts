import type { MetadataRoute } from "next";

import { siteSeo } from "@/content/seo";
import { services } from "@/content/services";

const siteUrl = siteSeo.siteUrl;

const staticRoutes = [
  "",
  "/about",
  "/book-appointment",
  "/brands",
  "/contact",
  "/faq",
  "/gallery",
  "/insurance",
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