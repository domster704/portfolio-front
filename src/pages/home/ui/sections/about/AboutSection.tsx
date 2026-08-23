import { type FC } from "react";
import style from "./AboutSection.module.scss";
import Section from "@shared/ui/section";
import { useTranslations } from "next-intl";

const AboutSection: FC = ({}) => {
  const t = useTranslations("About");
  const headerT = useTranslations("Header");

  return (
    <Section
      id={"about"}
      twoColumns
      title={t("title")}
      label={headerT("about")}
    >
      <p className={"text"}>{t("description.1")}</p>
      <p className={"text"}>{t("description.2")}</p>
      <p className={"text"}>{t("description.3")}</p>
    </Section>
  );
};

export default AboutSection;
