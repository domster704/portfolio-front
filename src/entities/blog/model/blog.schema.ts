import { z } from "zod";

export const blogSchema = z.object({
  id: z.number(),

  name: z.string(),
  description: z.string(),

  createdAt: z.string(),
  updatedAt: z.string(),
  slug: z.string(),
});

export const blogsSchema = z.array(blogSchema);

export const blogArticleSchema = blogSchema.extend({
  content: z.string(),
});

export const blogArticlesSchema = z.array(blogArticleSchema);

export type Blog = z.infer<typeof blogSchema>;
export type BlogArticle = z.infer<typeof blogArticleSchema>;
