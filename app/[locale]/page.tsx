import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Home from "@pages/home";
import PersonJsonLd from "@shared/ui/person-json-ld/PersonJsonLd";
import { createPageMetadata } from "@shared/seo/createPageMetadata";

type Props = PageProps<"/[locale]">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Metadata.home",
  });

  return createPageMetadata({
    locale: locale as "ru" | "en",

    title: t("title"),
    description: t("description"),

    ruPath: "/",
    enPath: "/en",
  });
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
