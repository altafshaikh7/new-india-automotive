"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NavigationMenu } from "@base-ui/react/navigation-menu";
import { ChevronDown, Phone } from "lucide-react";

import MobileNav from "@/components/layout/mobile-nav";
import CompanyLogo from "@/components/layout/company-logo";
import ThemeToggle from "@/components/layout/theme-toggle";
import { company } from "@/content/company";
import {
  aboutNavigation,
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

function formatPhoneNumber(phone: string) {
  return phone.length === 10
    ? `${phone.slice(0, 5)} ${phone.slice(5)}`
    : phone;
}

function navigationLinkClassName(active: boolean, overlay: boolean) {
  return [
    "inline-flex min-h-11 items-center gap-1 whitespace-nowrap rounded-md px-2.5 text-sm font-bold transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2",
    overlay
      ? "hover:bg-white/10 hover:text-white"
      : "hover:bg-red-50 hover:text-red-700 dark:hover:bg-red-950/40 dark:hover:text-red-300",
    active
      ? overlay
        ? "relative text-white after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:rounded-full after:bg-white"
        : "relative text-red-700 after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:rounded-full after:bg-red-700 dark:text-red-300 dark:after:bg-red-300"
      : overlay
        ? "text-white/90"
        : "text-foreground/80",
  ].join(" ");
}

function DropdownLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <li>
      <NavigationMenu.Link
        href={href}
        render={<Link href={href} />}
        closeOnClick
        aria-current={active ? "page" : undefined}
        data-active={active ? "true" : undefined}
        className="block rounded-md px-3 py-2.5 text-sm font-bold text-foreground/80 transition-colors hover:bg-red-50 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 data-active:bg-red-50 data-active:text-red-700 dark:hover:bg-red-950/40 dark:hover:text-red-300 dark:data-active:bg-red-950/40 dark:data-active:text-red-300"
      >
        {label}
      </NavigationMenu.Link>
    </li>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const homepage = pathname === "/";
  const overlayRoute =
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/services" ||
    pathname.startsWith("/services/");
  const [pastHomeHero, setPastHomeHero] = useState(false);
  const overlay = overlayRoute && !(homepage && pastHomeHero);

  useEffect(() => {
    if (!homepage) return;

    const updateHeroState = () => {
      const hero = document.getElementById("home");
      setPastHomeHero(
        Boolean(hero && window.scrollY >= hero.offsetHeight - 80),
      );
    };

    const initialUpdate = window.requestAnimationFrame(updateHeroState);
    window.addEventListener("scroll", updateHeroState, { passive: true });
    window.addEventListener("resize", updateHeroState);

    return () => {
      window.cancelAnimationFrame(initialUpdate);
      window.removeEventListener("scroll", updateHeroState);
      window.removeEventListener("resize", updateHeroState);
    };
  }, [homepage]);
  const aboutActive = isAboutRoute(pathname);
  const servicesActive = isServicesRoute(pathname);

  return (
    <header
      className={`${
        homepage
          ? "sticky top-0 -mb-20"
          : overlayRoute
            ? "absolute inset-x-0 top-0"
            : "sticky top-0"
      } z-50 w-full border-b border-transparent bg-transparent ${
        overlay ? "text-white" : "text-foreground"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
          aria-label="New India Automotive home"
        >
          <CompanyLogo />
        </Link>

        <NavigationMenu.Root
          aria-label="Main navigation"
          className="site-nav-desktop min-w-0 flex-1 items-center justify-center"
          delay={100}
          closeDelay={100}
        >
          <NavigationMenu.List className="flex items-center gap-0.5">
            {primaryNavigation.slice(0, 1).map((item) => {
              const active = isActiveRoute(pathname, item.href);
              return (
                <NavigationMenu.Item key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={navigationLinkClassName(active, overlay)}
                  >
                    {item.label}
                  </Link>
                </NavigationMenu.Item>
              );
            })}

            <NavigationMenu.Item>
              <NavigationMenu.Trigger
                className={`${navigationLinkClassName(aboutActive, overlay)} group`}
                data-active={aboutActive ? "true" : undefined}
              >
                {aboutNavigation.label}
                <NavigationMenu.Icon className="transition-transform group-data-[popup-open]:rotate-180">
                  <ChevronDown aria-hidden="true" className="size-4" />
                </NavigationMenu.Icon>
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="w-60 rounded-lg border border-border bg-popover p-2 text-popover-foreground shadow-lg">
                <ul className="m-0 list-none p-0">
                  {aboutNavigation.items.map((item) => (
                    <DropdownLink
                      key={item.href}
                      {...item}
                      active={isActiveRoute(pathname, item.href)}
                    />
                  ))}
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger
                className={`${navigationLinkClassName(servicesActive, overlay)} group`}
                data-active={servicesActive ? "true" : undefined}
              >
                {servicesNavigation.label}
                <NavigationMenu.Icon className="transition-transform group-data-[popup-open]:rotate-180">
                  <ChevronDown aria-hidden="true" className="size-4" />
                </NavigationMenu.Icon>
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="max-h-[min(70vh,32rem)] w-72 overflow-y-auto rounded-lg border border-border bg-popover p-2 text-popover-foreground shadow-lg">
                <ul className="m-0 list-none p-0">
                  <DropdownLink
                    href="/services"
                    label={servicesNavigation.allLabel}
                    active={pathname === "/services"}
                  />
                  {servicesNavigation.items.map((item) => (
                    <DropdownLink
                      key={item.href}
                      {...item}
                      active={pathname === item.href}
                    />
                  ))}
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            {primaryNavigation.slice(1).map((item) => {
              const active = isActiveRoute(pathname, item.href);
              return (
                <NavigationMenu.Item key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={navigationLinkClassName(active, overlay)}
                  >
                    {item.label}
                  </Link>
                </NavigationMenu.Item>
              );
            })}
          </NavigationMenu.List>
          <NavigationMenu.Portal>
            <NavigationMenu.Positioner
              sideOffset={8}
              className="z-50 h-[var(--positioner-height)] w-[var(--positioner-width)] max-w-[calc(100vw-2rem)]"
            >
              <NavigationMenu.Popup className="relative h-[var(--popup-height)] w-[var(--popup-width)] max-w-[calc(100vw-2rem)] overflow-hidden rounded-lg border border-border bg-popover text-popover-foreground shadow-lg outline-none">
                <NavigationMenu.Viewport className="relative h-full w-full overflow-y-auto" />
              </NavigationMenu.Popup>
            </NavigationMenu.Positioner>
          </NavigationMenu.Portal>
        </NavigationMenu.Root>

        <div className="site-nav-actions shrink-0 items-center gap-2">
          <ThemeToggle overlay={overlay} />
          <a
            href={`tel:${company.phone.primary}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-red-700 px-3 text-sm font-bold text-white transition-colors hover:bg-red-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
          >
            <Phone aria-hidden="true" className="size-4" />
            <span>{navigationLabels.call}</span>
            <span className="site-nav-phone">
              {formatPhoneNumber(company.phone.primary)}
            </span>
          </a>
        </div>

        <MobileNav pathname={pathname} overlay={overlay} />
      </div>
    </header>
  );
}
