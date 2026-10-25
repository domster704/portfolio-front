import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@shared/seo/createPageMetadata";

type Props = PageProps<"/[locale]/blog">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Metadata.blog",
  });

  return createPageMetadata({
    locale: locale as "ru" | "en",

    title: t("title"),
    description: t("description"),

    ruPath: "/blog",
    enPath: "/en/blog",
  });
}

export { default } from "@pages/blog";
