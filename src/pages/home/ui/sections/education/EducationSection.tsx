import { type FC } from "react";
import style from "./EducationSection.module.scss";
import { useTranslations } from "next-intl";
import Section from "@shared/ui/section";
import { SECTIONS } from "@shared/constants/sections";
import Wrapper from "@shared/ui/wrapper";

const EducationSection: FC = ({}) => {
  const t = useTranslations("Education");

  return (
    <Wrapper>
      <Section id={SECTIONS.EDUCATION} title={t("title")} label={t("label")}>
        <></>
      </Section>
    </Wrapper>
  );
};

export default EducationSection;
