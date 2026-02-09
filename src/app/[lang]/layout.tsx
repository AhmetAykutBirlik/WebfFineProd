import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { getDictionary } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "WebFine | Profesyonel Web Çözümleri",
  description: "Web Tasarım, Hosting ve SEO Hizmetleri",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang}>
      <head>
        <title>{dictionary.common.meta.title}</title>
        <meta name="description" content={dictionary.common.meta.description} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar dictionary={dictionary} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer dictionary={dictionary} lang={lang} />
        <WhatsAppButton
          message={dictionary.common.whatsapp.message}
          cta={dictionary.common.whatsapp.floating}
        />
        <CookieConsent dictionary={dictionary} lang={lang} />
      </body>
    </html>
  );
}
