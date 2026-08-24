import { type FC } from "react";
import style from "./EducationSection.module.scss";
import {useTranslations} from "next-intl";
import Section from "@shared/ui/section";
import {SECTIONS} from "@shared/constants/sections";

const EducationSection: FC = ({}) => {
  const t = useTranslations("Education");

  return (
    <Section id={SECTIONS.EDUCATION} title={t("title")} label={t("label")}>
      <></>
    </Section>
  );
};

export default EducationSection;
