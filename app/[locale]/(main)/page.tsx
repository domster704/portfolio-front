import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Home from "@pages/home";
import PersonJsonLd from "@shared/ui/person-json-ld/PersonJsonLd";

type Props = PageProps<"/[locale]">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Metadata.home",
  });

  const canonical = locale === "en" ? "/en" : "/";

  return {
    title: t("title"),
    description: t("description"),

    alternates: {
      canonical,

      languages: {
        ru: "/",
        en: "/en",
        "x-default": "/",
      },
    },

    openGraph: {
      type: "website",
      url: canonical,
      title: t("title"),
      description: t("description"),
      siteName: "Grigory Isupov",
      locale: locale === "en" ? "en_US" : "ru_RU",
      images: ["/og-image.png"],
    },

    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.png"],
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <PersonJsonLd locale={locale} />
      <Home />
    </>
  );
}
