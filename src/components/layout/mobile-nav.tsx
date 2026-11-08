"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, MessageCircle, Phone, X } from "lucide-react";

import ThemeToggle from "@/components/layout/theme-toggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { company } from "@/content/company";
import {
  aboutNavigation,
  appointmentNavigation,
  navigationLabels,
  primaryNavigation,
  servicesNavigation,
} from "@/content/navigation";

function isActiveRoute(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href;
}

function isAboutRoute(pathname: string) {
  return (
    pathname === "/about" ||
    pathname === "/brands" ||
    pathname === "/faq"
  );
}

function isServicesRoute(pathname: string) {
  return pathname === "/services" || pathname.startsWith("/services/");
}

function MobileLink({
  href,
  label,
  active,
  onNavigate,
}: {
  href: string;
  label: string;
  active: boolean;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={`flex min-h-11 items-center rounded-md px-3 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
        active
          ? "bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300"
          : "text-foreground hover:bg-muted"
      }`}
    >
      {label}
    </Link>
  );
}

export default function MobileNav({
  pathname,
  overlay = false,
}: {
  pathname: string;
  overlay?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const whatsappHref = `https://wa.me/${company.whatsapp.primary}?text=${encodeURIComponent(
    `Hello ${company.name}, I would like to enquire about your services.`,
  )}`;
  const closeMenu = () => setOpen(false);

  return (
    <div className="site-nav-mobile">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className={`inline-flex size-11 items-center justify-center rounded-md border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
            overlay
              ? "border-white/30 text-white hover:bg-white/10"
              : "border-border text-foreground hover:bg-muted"
          }`}
        >
          {open ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </SheetTrigger>
        <SheetContent side="right" className="w-[min(90vw,24rem)] gap-0 overflow-y-auto p-0">
          <SheetHeader className="border-b border-border pr-14">
            <SheetTitle>New India Automotive</SheetTitle>
            <SheetDescription>Main website navigation and contact options.</SheetDescription>
          </SheetHeader>

          <nav aria-label="Mobile navigation" className="px-4 py-3">
            <div className="flex flex-col gap-1">
              <MobileLink
                {...primaryNavigation[0]}
                active={isActiveRoute(pathname, primaryNavigation[0].href)}
                onNavigate={closeMenu}
              />

              <Accordion className="w-full">
                <AccordionItem value="about" className="border-b border-border">
                  <AccordionTrigger
                    className={`min-h-11 items-center px-3 font-bold ${
                      isAboutRoute(pathname)
                        ? "text-red-700 dark:text-red-300"
                        : "text-foreground"
                    }`}
                  >
                    {aboutNavigation.label}
                  </AccordionTrigger>
                  <AccordionContent className="pb-2 pl-3">
                    <div className="flex flex-col gap-1">
                      {aboutNavigation.items.map((item) => (
                        <MobileLink
                          key={item.href}
                          {...item}
                          active={isActiveRoute(pathname, item.href)}
                          onNavigate={closeMenu}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="services" className="border-b border-border">
                  <AccordionTrigger
                    className={`min-h-11 items-center px-3 font-bold ${
                      isServicesRoute(pathname)
                        ? "text-red-700 dark:text-red-300"
                        : "text-foreground"
                    }`}
                  >
                    {servicesNavigation.label}
                  </AccordionTrigger>
                  <AccordionContent className="pb-2 pl-3">
                    <div className="flex max-h-64 flex-col gap-1 overflow-y-auto">
                      <MobileLink
                        href="/services"
                        label={servicesNavigation.allLabel}
                        active={pathname === "/services"}
                        onNavigate={closeMenu}
                      />
                      {servicesNavigation.items.map((item) => (
                        <MobileLink
                          key={item.href}
                          {...item}
                          active={pathname === item.href}
                          onNavigate={closeMenu}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {primaryNavigation.slice(1).map((item) => (
                <MobileLink
                  key={item.href}
                  {...item}
                  active={isActiveRoute(pathname, item.href)}
                  onNavigate={closeMenu}
                />
              ))}
            </div>
          </nav>

          <div className="mt-auto space-y-3 border-t border-border p-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
            <a
              href={`tel:${company.phone.primary}`}
              className="flex min-h-11 items-center justify-center gap-2 rounded-md bg-red-700 px-4 text-sm font-bold text-white transition-colors hover:bg-red-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
            >
              <Phone aria-hidden="true" className="size-4" />
              {navigationLabels.call} · {company.phone.primary}
            </a>
            <Link
              href={appointmentNavigation.href}
              onClick={closeMenu}
              className="flex min-h-11 items-center justify-center rounded-md border border-border px-4 text-sm font-bold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
            >
              {appointmentNavigation.label}
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center justify-center gap-2 rounded-md border border-green-700/40 px-4 text-sm font-bold text-green-800 transition-colors hover:bg-green-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 dark:text-green-300 dark:hover:bg-green-950/40"
            >
              <MessageCircle aria-hidden="true" className="size-4" />
              {navigationLabels.whatsapp}
            </a>
            <div className="flex items-center justify-between rounded-md bg-muted/50 px-3 py-2">
              <span className="text-sm font-medium text-foreground">
                {navigationLabels.appearance}
              </span>
              <ThemeToggle />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}