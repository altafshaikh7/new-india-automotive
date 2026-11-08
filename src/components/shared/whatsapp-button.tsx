"use client";

import { MessageCircle } from "lucide-react";

import { company } from "@/content/company";

export default function WhatsAppButton() {
  const href = `https://wa.me/${company.whatsapp.primary}?text=${encodeURIComponent(
    `Hello ${company.name}, I would like to enquire about your services.`,
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact New India Automotive on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed right-[calc(1rem+env(safe-area-inset-right))] z-40 inline-flex size-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
    >
      <MessageCircle aria-hidden="true" className="size-7" />
    </a>
  );
}