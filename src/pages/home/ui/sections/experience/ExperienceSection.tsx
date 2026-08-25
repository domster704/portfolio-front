import Section from "@shared/ui/section";
import { SECTIONS } from "@shared/constants/sections";
import Wrapper from "@shared/ui/wrapper";
import { getLocale, getTranslations } from "next-intl/server";
import { Experience, ExperienceItem, getAllExperience } from "@entities/job";

const ExperienceSection = async ({}) => {
  const locale = await getLocale();
  const t = await getTranslations("Experience");

  const experiences: Experience[] = await getAllExperience(locale);

  return (
    <Wrapper>
      <Section id={SECTIONS.EXPERIENCE} title={t("title")} label={t("label")}>
        <div>
          {experiences
            .sort((a, b) => a.order - b.order)
            .map((experience) => {
              return <ExperienceItem item={experience} key={experience.id} />;
            })}
        </div>
      </Section>
    </Wrapper>
  );
};

export default ExperienceSection;
