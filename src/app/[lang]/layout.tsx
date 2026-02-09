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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return {
    title: dictionary.common.meta.title,
    description: dictionary.common.meta.description,
    metadataBase: new URL("https://webfine.com.tr"),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        tr: "/tr",
        en: "/en",
      },
    },
    icons: {
      icon: "/favicon.svg?v=1",
      shortcut: "/favicon.svg?v=1",
    },
    openGraph: {
      title: dictionary.common.meta.title,
      description: dictionary.common.meta.description,
      url: `https://webfine.com.tr/${lang}`,
      siteName: "WebFine",
      locale: lang === "tr" ? "tr_TR" : "en_US",
      type: "website",
    },
  };
}

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
        <link rel="icon" href="/favicon.svg?v=1" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg?v=1" type="image/svg+xml" />
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
