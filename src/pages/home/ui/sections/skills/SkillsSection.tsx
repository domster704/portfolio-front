import { type FC } from "react";
import style from "./SkillsSection.module.scss";
import Section from "@shared/ui/section";
import { useTranslations } from "next-intl";
import { SECTIONS } from "@shared/constants/sections";

const SkillsSection: FC = ({}) => {
  const t = useTranslations("Skills");

  return (
    <Section id={SECTIONS.SKILLS} title={t("title")} label={t("label")}>
      <></>
    </Section>
  );
};

export default SkillsSection;
