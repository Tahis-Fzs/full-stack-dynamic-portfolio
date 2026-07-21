import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import { ModeProvider } from "@/components/providers/mode-provider";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PersonJsonLd } from "@/components/seo/json-ld";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.seo.title,
    template: "%s · Studio Tahsin",
  },
  description: site.seo.description,
  keywords: [
    "Md. Shadman Tahsin",
    "full-stack developer",
    "applied machine learning",
    "PayLite X",
    "StudentMove",
    "portfolio",
    "Dhaka",
    "React",
    "FastAPI",
    "Flutter",
  ],
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: siteUrl,
    siteName: site.title,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <PersonJsonLd />
      </head>
      <body className="grain flex min-h-dvh flex-col antialiased">
        <ModeProvider>
          <SiteHeader />
          <main className="relative z-[2] flex-1">{children}</main>
          <SiteFooter />
        </ModeProvider>
      </body>
    </html>
  );
}
