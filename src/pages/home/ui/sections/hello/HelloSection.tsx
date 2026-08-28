import { type FC } from "react";
import style from "./HelloSection.module.scss";
import Wrapper from "@shared/ui/wrapper";
import { useTranslations } from "next-intl";

const year = new Date().getFullYear();

const HelloSection: FC = ({}) => {
  const t = useTranslations("Hello");

  return (
    <section className={style.hello}>
      <p className={["label section", style.slide].join(" ")}>
        {t("job-name")}
      </p>
      <p className={["label section", style.year].join(" ")}>{year}</p>

      <Wrapper className={style.container}>
        <div>
          <p className={"title-2"}>{t("status")}</p>
          <p className={"label section"}>{t("status_info")}</p>
        </div>

        <p aria-hidden="true" className={["title-1", style.title].join(" ")}>
          {t("title")}
        </p>
        <h1 className={style.visuallyHidden}>{t("seoTitle")}</h1>

        <p className={["text", style.description].join(" ")}>
          {t.rich("description", {
            strong: (chunks) => <strong>{chunks}</strong>,
            br: () => <br />,
          })}
        </p>
      </Wrapper>
    </section>
  );
};

export default HelloSection;
