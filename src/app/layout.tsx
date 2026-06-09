import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";

import { LenisProvider } from "@/components/providers/lenis-provider";
import { buildFaqSchema, buildOrganizationSchema, buildProductSchema } from "@/lib/schema";

import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tiggi-kids.com"),
  title: "Tiggi Kids Chocolate | Премиальный детский шоколад для маленьких побед",
  description:
    "Премиальный сайт бренда Tiggi Kids Chocolate: вкус, польза, натуральные ингредиенты и современный D2C-опыт, который нравится детям и вызывает доверие у родителей.",
  openGraph: {
    title: "Tiggi Kids Chocolate",
    description:
      "Детский шоколад, который выглядит premium, вызывает доверие у родителей и нравится детям уже с первого экрана.",
    url: "https://tiggi-kids.com",
    siteName: "Tiggi Kids Chocolate",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiggi Kids Chocolate",
    description:
      "Premium playful luxury сайт для детского шоколада Tiggi с фокусом на mobile-first UX и высокую конверсию.",
  },
  keywords: [
    "детский шоколад",
    "Tiggi Kids",
    "шоколад для детей",
    "витамин D3",
    "омега 3",
    "кокосовый сахар",
  ],
};

const jsonLd = [
  buildOrganizationSchema(),
  buildProductSchema(),
  buildFaqSchema(),
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={`${display.variable} ${body.variable}`}>
      <body>
        <LenisProvider />
        {children}
        {jsonLd.map((item, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
      </body>
    </html>
  );
}
