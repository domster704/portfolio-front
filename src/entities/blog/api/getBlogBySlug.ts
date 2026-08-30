import { $apiURL } from "@shared/constants/api";
import {
  BlogArticle,
  blogArticlesSchema,
} from "@entities/blog/model/blog.schema";

export async function getBlogBySlug(
  locale: string,
  slug: string,
): Promise<BlogArticle | null> {
  const response = await fetch(
    `${$apiURL}/blogs?locale=${locale}&filters[slug][$eq]=${encodeURIComponent(slug)}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  );

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  const articles = blogArticlesSchema.parse(data.data);

  return articles[0] ?? null;
}
