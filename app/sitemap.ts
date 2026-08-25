import type { MetadataRoute } from "next";
import { SITE_URL } from "@shared/constants/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,

      alternates: {
        languages: {
          ru: SITE_URL,
          en: `${SITE_URL}/en`,
        },
      },
    },

    {
      url: `${SITE_URL}/en`,
      changeFrequency: "weekly",
      priority: 1,

      alternates: {
        languages: {
          ru: SITE_URL,
          en: `${SITE_URL}/en`,
        },
      },
    },
  ];
}
