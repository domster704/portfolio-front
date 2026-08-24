import { type FC } from "react";
import style from "./ExperienceSection.module.scss";
import { useTranslations } from "next-intl";
import Section from "@shared/ui/section";
import { SECTIONS } from "@shared/constants/sections";

const ExperienceSection: FC = ({}) => {
  const t = useTranslations("Experience");

  return (
    <Section id={SECTIONS.EXPERIENCE} title={t("title")} label={t("label")}>
      <></>
    </Section>
  );
};

export default ExperienceSection;
