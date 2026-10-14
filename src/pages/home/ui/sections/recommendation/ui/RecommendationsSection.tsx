import { getFormatter, getLocale, getTranslations } from "next-intl/server";

import {
  getAllRecommendations,
  type Recommendation,
} from "@entities/recommendation";
import { SECTIONS } from "@shared/constants/sections";
import Section from "@shared/ui/section";
import Wrapper from "@shared/ui/wrapper";

import style from "./RecommendationsSection.module.scss";
import { getAssetUrl } from "@shared/lib/getAssetUrl";

const RecommendationsSection = async () => {
  const locale = await getLocale();
  const t = await getTranslations("Recommendations");
  const format = await getFormatter();
  const recommendations: Recommendation[] = await getAllRecommendations(locale);

  if (!recommendations.length) {
    return null;
  }

  return (
    <Wrapper>
      <Section
        id={SECTIONS.RECOMMENDATIONS}
        title={t("title")}
        label={t("label")}
      >
        <div className={style.list}>
          {recommendations.map((item: Recommendation) => {
            const { job, file } = item;
            const titleId = `recommendation-${item.documentId}`;
            const fileUrl = getAssetUrl(file.url);
            const period = job.date;

            const downloadUrl =
              `/api/recommendations/${encodeURIComponent(item.documentId)}/download` +
              `?locale=${encodeURIComponent(locale)}`;

            const fileMeta = [
              "PDF",
              ...(item.pageCount
                ? [t("pages", { count: item.pageCount })]
                : []),
              t("fileSize", {
                size: format.number(Math.ceil(file.size)),
              }),
            ].join(" · ");

            return (
              <article
                key={item.documentId}
                className={style.card}
                aria-labelledby={titleId}
              >
                <div className={style.content}>
                  <header className={style.meta}>
                    <p className="label">{t("kind")}</p>

                    <time className={style.date} dateTime={item.issuedAt}>
                      {format.dateTime(new Date(`${item.issuedAt}T00:00:00Z`), {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        timeZone: "UTC",
                      })}
                    </time>
                  </header>

                  <h3
                    id={titleId}
                    className={["title-3", style.company].join(" ")}
                  >
                    {job.companyName}
                  </h3>

                  <blockquote className={style.quote}>
                    <span className={style.quoteMark} aria-hidden="true">
                      “
                    </span>
                    <p>{item.quote}</p>
                  </blockquote>

                  <p className={style.period}>
                    {job.position}
                    <br />
                    {t("period", { period })}
                  </p>
                </div>

                <aside
                  className={style.document}
                  aria-label={t("documentLabel", {
                    company: job.companyName,
                  })}
                >
                  <div className={style.fileIcon} aria-hidden="true">
                    <svg
                      viewBox="0 0 48 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 2h19l13 13v35a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29 2v13h13M15 25h18M15 31h18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>PDF</span>
                  </div>

                  <div>
                    <p className={style.documentTitle}>{item.documentTitle}</p>
                    <p className={style.fileMeta}>{fileMeta}</p>
                  </div>

                  <div className={style.actions}>
                    <a
                      className={style.openButton}
                      href={fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t("openLabel", {
                        company: job.companyName,
                      })}
                    >
                      {t("open")}
                      <span aria-hidden="true">↗</span>
                    </a>

                    <a
                      className={style.downloadButton}
                      href={downloadUrl}
                      download={file.name}
                    >
                      {t("download")}
                      <span aria-hidden="true">↓</span>
                    </a>
                  </div>

                  {item.documentNote && (
                    <p className={style.note}>{item.documentNote}</p>
                  )}
                </aside>
              </article>
            );
          })}
        </div>
      </Section>
    </Wrapper>
  );
};

export default RecommendationsSection;
