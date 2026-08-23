import type {Metadata, Viewport} from "next";
import {NextAppProvider} from "@app/providers/NextAppProvider";
import "./globals.scss";
import "./ui-kit.scss";

export const metadata: Metadata = {
  title: "Портфолио",
  description: "Сайт-портфолио Fullstack разработчика и программиста Исупова Григория",
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

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body suppressHydrationWarning>

      <NextAppProvider>{children}</NextAppProvider>

      </body>
    </html>
  );
}