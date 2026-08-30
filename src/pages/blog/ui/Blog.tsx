import { getLocale, getTranslations } from "next-intl/server";

import { BlogItem, getAllBlogs } from "@entities/blog";
import Wrapper from "@shared/ui/wrapper";

import style from "./Blog.module.scss";
import Section from "@shared/ui/section";

const Blog = async () => {
  const t = await getTranslations("Blog");
  const locale = await getLocale();

  const blogs = (await getAllBlogs(locale)).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  return (
    <Wrapper>
      <Section title={t("title")} label={t("label")}>
        {blogs.length > 0 ? (
          <div className={style.list}>
            {blogs.map((blog, index) => (
              <BlogItem
                key={blog.id}
                item={blog}
                index={index}
                locale={locale}
              />
            ))}
          </div>
        ) : (
          <p className={["text secondary", style.empty].join(" ")}>
            {t("empty")}
          </p>
        )}
      </Section>
    </Wrapper>
  );
};

export default Blog;
