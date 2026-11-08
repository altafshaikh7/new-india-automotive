
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import { company } from "@/content/company";
import CompanyLogo from "@/components/layout/company-logo";
import { footerNavigation, servicesNavigation } from "@/content/navigation";

const quickLinks = footerNavigation;

const workshopAddress =
  "63W3+XXR, Bhatale, Vehele, Bhiwandi, Maharashtra 421302";

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=63W3%2BXXR%2C+Bhatale%2C+Vehele%2C+Bhiwandi%2C+Maharashtra+421302";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card text-card-foreground">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Information */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="New India Automotive Home"
            >
              <CompanyLogo size="footer" />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-muted-foreground">
              {company.description}
            </p>

            <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-red-500">
              <span className="h-2 w-2 rounded-full bg-red-600" />
              {company.tagline}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-base font-bold">Quick Links</h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ArrowUpRight className="h-4 w-4 text-red-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-base font-bold">Our Services</h3>

            <ul className="space-y-3">
              {servicesNavigation.items.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-5 text-base font-bold">Contact Us</h3>

            <div className="space-y-5">
              {/* Phone */}
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-red-600" />

                <div>
                  <p className="font-semibold text-foreground">Call Us</p>
                  {[company.phone.primary, company.phone.alternate].map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="block transition-colors hover:text-foreground"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <a
                href={`mailto:${company.email}`}
                className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="mt-1 h-4 w-4 shrink-0 text-red-600" />

                <div>
                  <p className="font-semibold text-foreground">Email Us</p>
                  <p className="break-all">{company.email}</p>
                </div>
              </a>

              {/* Workshop Location */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-red-600" />

                <div>
                  <p className="font-semibold text-foreground">
                    Visit Our Workshop
                  </p>

                  <p className="leading-6">
                    {workshopAddress}
                  </p>

                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-red-500">
                    Get Directions
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} New India Automotive. All rights
            reserved.
          </p>

          <p>
            Built for reliable commercial vehicle repair.
          </p>
        </div>
      </div>
    </footer>
  );
}
