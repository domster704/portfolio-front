import { type FC } from "react";
import style from "./EducationItem.module.scss";

import { Education } from "@entities/education";
import { sanitizeHtml } from "@shared/lib/sanitize";
import { useTranslations } from "next-intl";
import ItemIndex from "@shared/ui/index";

interface EducationItemProps {
  item: Education;
  index: number;
}

const EducationItem: FC<EducationItemProps> = ({ item, index }) => {
  const t = useTranslations("Education");

  return (
    <article className={style.educationItem}>
      <aside className={style.meta}>
        <ItemIndex index={index} />

        {/*<span className="label">*/}
        {/*  {t(`educationTypes.${item.educationType}`)}*/}
        {/*</span>*/}
      </aside>

      <div className={style.content}>
        <div className={style.header}>
          <div>
            <h3 className="title-3">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={style.name}
              >
                {item.name}
              </a>
            </h3>

            <h4 className={["label section", style.specialization].join(" ")}>
              {t(`educationTypes.${item.educationType}`)}
              {/*{item.specialization}*/}
            </h4>
          </div>

          <time className="label large">{item.date}</time>
        </div>

        <div
          className={style.description}
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(item.description),
          }}
        />
      </div>
    </article>
  );
};

export default EducationItem;
