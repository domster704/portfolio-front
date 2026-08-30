import { notFound } from "next/navigation";

import { getBlogBySlug } from "@entities/blog";
import { sanitizeHtml } from "@shared/lib/sanitize";
import Wrapper from "@shared/ui/wrapper";

import style from "./BlogArticle.module.scss";
import { FC } from "react";

interface BlogArticleProps {
  locale: string;
  slug: string;
}

const BlogArticle: FC<BlogArticleProps> = async ({ locale, slug }) => {
  const article = await getBlogBySlug(locale, slug);

  if (!article) {
    notFound();
  }

  const date = new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(article.createdAt));

  return (
    <article className={style.article}>
      <Wrapper>
        <header className={style.header}>
          <time
            className={["label large", style.date].join(" ")}
            dateTime={article.createdAt}
          >
            {date}
          </time>

          <h1 className={style.title}>{article.name}</h1>

          <p className={["text secondary", style.description].join(" ")}>
            {article.description}
          </p>
        </header>

        <div
          className={style.content}
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(article.content),
          }}
        />
      </Wrapper>
    </article>
  );
};

export default BlogArticle;
