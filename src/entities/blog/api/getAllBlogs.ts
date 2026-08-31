import { Blog, blogsSchema } from "@entities/blog";
import { apiFetch } from "@shared/api/client";

export async function getAllBlogs(locale: string): Promise<Blog[]> {
  try {
    return await apiFetch(`/blogs?locale=${locale}`, blogsSchema);
  } catch {
    return [];
  }
}
