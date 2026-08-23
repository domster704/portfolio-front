import { type FC } from "react";
import style from "./Hello.module.scss";
import { useTranslations } from "next-intl";
import Wrapper from "@shared/ui/wrapper";

const Hello: FC = ({}) => {
  const t = useTranslations("Hello");

  return (
    <div className={style.hello}>
      <p className={["label", style.slide].join(" ")}>{t("job-name")}</p>

      <Wrapper className={style.container}>
        <div>
          <p className={"title-3"}>45</p>
          <p className={"label"}>{t("status")}</p>
        </div>

        <h1 className={["title-1", style.title].join(" ")}>{t("title")}</h1>
        <p className={"text"}>{t("description")}</p>
      </Wrapper>
    </div>
  );
};

export default Hello;
