import type { Metadata } from "next";

type Locale = "ru" | "en";

interface CreatePageMetadataParams {
  locale: Locale;

  title: string;
  description: string;

  ruPath: string;
  enPath: string;

  image?: string;
}

export function createPageMetadata({
  locale,
  title,
  description,
  ruPath,
  enPath,
  image = "/og-image.png",
}: CreatePageMetadataParams): Metadata {
  const canonical = locale === "en" ? enPath : ruPath;

  return {
    title,
    description,

    alternates: {
      canonical,

      languages: {
        ru: ruPath,
        en: enPath,
        "x-default": ruPath,
      },
    },

    openGraph: {
      type: "website",
      url: canonical,

      title,
      description,

      siteName: "Grigory Isupov",

      locale: locale === "en" ? "en_US" : "ru_RU",

      images: [image],
    },

    twitter: {
      card: "summary_large_image",

      title,
      description,

      images: [image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}
