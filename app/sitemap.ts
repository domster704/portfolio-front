import type { MetadataRoute } from "next";

import { getAllBlogs } from "@entities/blog";
import { SITE_URL } from "@shared/seo/variables";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getAllBlogs("ru");

  const staticPages: MetadataRoute.Sitemap = [
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
    {
      url: `${SITE_URL}/blog`,
      changeFrequency: "weekly",
      priority: 0.8,

      alternates: {
        languages: {
          ru: `${SITE_URL}/blog`,
          en: `${SITE_URL}/en/blog`,
        },
      },
    },
    {
      url: `${SITE_URL}/en/blog`,
      changeFrequency: "weekly",
      priority: 0.8,

      alternates: {
        languages: {
          ru: `${SITE_URL}/blog`,
          en: `${SITE_URL}/en/blog`,
        },
      },
    },
  ];

  const articles: MetadataRoute.Sitemap = blogs.flatMap((blog) => {
    const ru = `${SITE_URL}/blog/${blog.slug}`;
    const en = `${SITE_URL}/en/blog/${blog.slug}`;

    const languages = { ru, en };

    return [ru, en].map((url) => ({
      url,
      lastModified: blog.createdAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages,
      },
    }));
  });

  return [...staticPages, ...articles];
}
