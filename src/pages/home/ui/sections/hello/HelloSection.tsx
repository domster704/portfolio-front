import { type FC } from "react";
import style from "./HelloSection.module.scss";
import Wrapper from "@shared/ui/wrapper";
import { useTranslations } from "next-intl";

const year = new Date().getFullYear();

const HelloSection: FC = ({}) => {
  const t = useTranslations("Hello");

  return (
    <section className={style.hello}>
      <p className={["label", style.slide].join(" ")}>{t("job-name")}</p>
      <p className={["label", style.year].join(" ")}>{year}</p>

      <Wrapper className={style.container}>
        <div>
          <p className={"title-3"}>{t("status")}</p>
          <p className={"label section"}>{t("status_info")}</p>
        </div>

        <h1 className={["title-1", style.title].join(" ")}>{t("title")}</h1>
        <p className={["text", style.description].join(" ")}>
          {t.rich("description", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
      </Wrapper>
    </section>
  );
};

export default HelloSection;
