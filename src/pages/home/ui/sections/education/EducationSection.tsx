import Section from "@shared/ui/section";
import { SECTIONS } from "@shared/constants/sections";
import Wrapper from "@shared/ui/wrapper";
import { getLocale, getTranslations } from "next-intl/server";
import { getAllEducations, EducationItem } from "@entities/education";

const EducationSection = async () => {
  const locale = await getLocale();
  const t = await getTranslations("Education");

  const educations = await getAllEducations(locale);

  return (
    <Wrapper>
      <Section id={SECTIONS.EDUCATION} title={t("title")} label={t("label")}>
        <div>
          {educations
            .sort((a, b) => a.order - b.order)
            .map((education, index) => (
              <EducationItem
                key={education.id}
                item={education}
                index={index}
              />
            ))}
        </div>
      </Section>
    </Wrapper>
  );
};

export default EducationSection;
