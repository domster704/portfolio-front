import type { Metadata, Viewport } from "next";
import { NextAppProvider } from "@app/providers/NextAppProvider";
import "../globals.scss";
import "../ui-kit.scss";
import { FC } from "react";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@i18n/routing";
import { notFound } from "next/navigation";
import { inter } from "../fonts";
import { getMessages } from "next-intl/server";
import { SITE_URL } from "@shared/seo/variables";
import { MainLayout } from "@app/layouts/MainLayout";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  applicationName: "Grigory Isupov — Portfolio",

  manifest: "/manifest.webmanifest",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],

    shortcut: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const RootLayout: FC<LayoutProps<"/[locale]">> = async ({
  children,
  params,
}) => {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={inter.variable}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body suppressHydrationWarning>
        <NextAppProvider>
          <NextIntlClientProvider messages={messages}>
            <MainLayout>{children}</MainLayout>
          </NextIntlClientProvider>
        </NextAppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
