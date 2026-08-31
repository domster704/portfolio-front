import { $apiURL } from "@shared/constants/api";
import {
  BlogArticle,
  blogArticlesSchema,
} from "@entities/blog/model/blog.schema";
import { apiFetch } from "@shared/api/client";

export async function getBlogBySlug(
  locale: string,
  slug: string,
): Promise<BlogArticle | null> {
  try {
    const article = await apiFetch(
      `/blogs?locale=${locale}&filters[slug][$eq]=${encodeURIComponent(slug)}`,
      blogArticlesSchema,
    );

    return article[0] ?? null;
  } catch {
    return null;
  }
}
