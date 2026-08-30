import { $apiURL } from "@shared/constants/api";
import { Blog, blogsSchema } from "@entities/blog";

export async function getAllBlogs(locale: string): Promise<Blog[]> {
  const response = await fetch(`${$apiURL}/blogs?locale=${locale}`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    return [];
  }

  const data = await response.json();

  return blogsSchema.parse(data.data);
}
