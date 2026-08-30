import type { Metadata } from "next";

import { getBlogBySlug } from "@entities/blog";
import BlogArticle from "@pages/blog-article";
import { createPageMetadata } from "@shared/seo/createPageMetadata";

type Props = PageProps<"/[locale]/blog/[slug]">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  const article = await getBlogBySlug(locale, slug);

  if (!article) {
    return {
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return createPageMetadata({
    locale: locale as "ru" | "en",

    title: article.name,
    description: article.description,

    ruPath: `/blog/${slug}`,
    enPath: `/en/blog/${slug}`,

    type: "article",
    publishedTime: article.createdAt,
  });
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;

  return <BlogArticle locale={locale} slug={slug} />;
}
