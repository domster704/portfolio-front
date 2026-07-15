import type {Metadata, Viewport} from "next";
import {NextAppProvider} from "@app/providers/NextAppProvider";
import "./globals.scss";
import "./ui-kit.scss";

export const metadata: Metadata = {
  title: "NTV Club",
  description: "NTV Club",
  manifest: "/manifest.webmanifest",

  icons: {
    icon: [
      {
        url: "/favicon.webp",
        type: "image/webp",
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