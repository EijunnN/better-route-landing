import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Chakra_Petch } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const chakraPetch = Chakra_Petch({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BetterRoute — Open Source Route Optimization Platform",
  description:
    "Self-hosted route optimization for logistics companies. Save $24K-$48K/year vs commercial solutions. VROOM + OSRM engines, fleet management, real-time monitoring. MIT License.",
  keywords: [
    "route optimization",
    "logistics",
    "fleet management",
    "open source",
    "delivery management",
    "VROOM",
    "OSRM",
    "self-hosted",
  ],
  openGraph: {
    title: "BetterRoute — Open Source Route Optimization Platform",
    description:
      "Self-hosted route optimization that saves logistics companies $24K-$48K/year. Enterprise-grade features, zero per-driver fees.",
    type: "website",
    siteName: "BetterRoute",
  },
  twitter: {
    card: "summary_large_image",
    title: "BetterRoute — Open Source Route Optimization",
    description:
      "Stop overpaying for route optimization. Self-hosted, MIT licensed, saves up to $48K/year.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${chakraPetch.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
