import type {Metadata, Viewport} from "next";
import {NextAppProvider} from "@app/providers/NextAppProvider";
import "../globals.scss";
import "../ui-kit.scss";
import {FC} from "react";
import {hasLocale, NextIntlClientProvider} from "next-intl";
import {routing} from "@i18n/routing";
import {notFound} from "next/navigation";
import {inter} from "../fonts";
import {getMessages} from "next-intl/server";

export const metadata: Metadata = {
  title: "Портфолио",
  description:
    "Сайт-портфолио Fullstack разработчика и программиста Исупова Григория",
  manifest: "/manifest.webmanifest",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
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
            {children}
          </NextIntlClientProvider>
        </NextAppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
