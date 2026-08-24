import { type FC } from "react";
import style from "./ExperienceSection.module.scss";
import { useTranslations } from "next-intl";
import Section from "@shared/ui/section";
import { SECTIONS } from "@shared/constants/sections";
import Wrapper from "@shared/ui/wrapper";

const ExperienceSection: FC = ({}) => {
  const t = useTranslations("Experience");

  return (
    <Wrapper>
      <Section id={SECTIONS.EXPERIENCE} title={t("title")} label={t("label")}>
        <></>
      </Section>
    </Wrapper>
  );
};

export default ExperienceSection;
