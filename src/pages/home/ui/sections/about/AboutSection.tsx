import { type FC } from "react";
import Section from "@shared/ui/section";
import { useTranslations } from "next-intl";
import { SECTIONS } from "@shared/constants/sections";
import Wrapper from "@shared/ui/wrapper";

const AboutSection: FC = ({}) => {
  const t = useTranslations("About");
  const headerT = useTranslations("Header");

  return (
    <Wrapper>
      <Section
        id={SECTIONS.ABOUT}
        twoColumns
        title={t("title")}
        label={headerT("about")}
      >
        <p className={"text"}>{t("description.1")}</p>
        <p className={"text"}>{t("description.2")}</p>
        <p className={"text"}>{t("description.3")}</p>
      </Section>
    </Wrapper>
  );
};

export default AboutSection;
