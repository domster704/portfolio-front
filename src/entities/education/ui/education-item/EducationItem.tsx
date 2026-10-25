import { type FC } from "react";
import { useTranslations } from "next-intl";

import { type Education } from "@entities/education";

import { sanitizeHtml } from "@shared/lib/sanitize";
import { getAssetUrl } from "@shared/lib/getAssetUrl";

import ItemIndex from "@shared/ui/index";

import style from "./EducationItem.module.scss";

interface EducationItemProps {
  item: Education;
  index: number;
}

function getDocumentTitle(filename: string): string {
  return filename.replace(/\.[a-z0-9]+$/i, "") || filename;
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

        {item.documents.length > 0 && (
          <ul className={style.documents}>
            {item.documents.map((file) => (
              <li key={file.url}>
                <a
                  href={getAssetUrl(file.url)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.documentLink}
                >
                  <svg
                    className={style.documentIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M14 3v6h6M8 13h8M8 17h5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className={style.documentName}>
                    {getDocumentTitle(file.name)}
                  </span>

                  <svg
                    className={style.documentArrow}
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 17 17 7M7 7h10v10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};

export default EducationItem;
