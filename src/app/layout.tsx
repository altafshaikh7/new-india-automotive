import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/navbar";
import ThemeProvider from "@/components/layout/theme-provider";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/shared/whatsapp-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://newindiaautomotive.com"),

  title: {
    default: "New India Automotive | Commercial Vehicle Accident Repair",
    template: "%s | New India Automotive",
  },

  description:
    "New India Automotive provides commercial vehicle accident repair and workshop support for trucks and heavy vehicles in Bhiwandi, Maharashtra.",

  keywords: [
    "Commercial vehicle accident repair",
    "Truck repair Bhiwandi",
    "Truck body repair",
    "New India Automotive",
    "Accident repair Maharashtra",
    "Truck accident repair",
    "Heavy vehicle repair",
  ],

  openGraph: {
    title: "New India Automotive | Commercial Vehicle Accident Repair",
    description:
      "Reliable commercial vehicle accident repair services in Bhiwandi, Maharashtra.",
    type: "website",
    locale: "en_IN",
    siteName: "New India Automotive",
    url: "https://newindiaautomotive.com",
    images: [
      {
        url: "/images/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "New India Automotive - Commercial Vehicle Repair",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/company-logo.png",
    apple: "/company-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          <main className="flex-1">{children}</main>

          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}