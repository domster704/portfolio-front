import { type FC } from "react";

import { Blog } from "@entities/blog";
import { Link } from "@i18n/navigation";

import style from "./BlogItem.module.scss";
import ItemIndex from "@shared/ui/index";

interface BlogItemProps {
  item: Blog;
  index: number;
  locale: string;
}

const BlogItem: FC<BlogItemProps> = ({ item, index, locale }) => {
  const date = new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(item.updatedAt));

  return (
    <article className={style.item}>
      <Link href={`/blog/${item.slug}`} className={style.link}>
        <aside className={style.meta}>
          <ItemIndex index={index} />

          <time className="label large" dateTime={item.updatedAt}>
            {date}
          </time>
        </aside>

        <div className={style.content}>
          <h3 className={["title-3", style.title].join(" ")}>{item.name}</h3>

          <p className={["text secondary", style.description].join(" ")}>
            {item.description}
          </p>
        </div>

        <span className={style.arrow} aria-hidden="true">
          ↗
        </span>
      </Link>
    </article>
  );
};

export default BlogItem;
