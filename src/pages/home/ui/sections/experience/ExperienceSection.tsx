import Section from "@shared/ui/section";
import { SECTIONS } from "@shared/constants/sections";
import Wrapper from "@shared/ui/wrapper";
import { getLocale, getTranslations } from "next-intl/server";
import { getAllExperience } from "@entities/job/api/fetchAllExperience";
import { Experience } from "@entities/job/model/experience.schema";
import ExperienceItem from "@entities/job/ui/experience-item";

const ExperienceSection = async ({}) => {
  const locale = await getLocale();
  const t = await getTranslations("Experience");

  const experiences: Experience[] = await getAllExperience(locale);

  return (
    <Wrapper>
      <Section id={SECTIONS.EXPERIENCE} title={t("title")} label={t("label")}>
        {experiences
          .sort((a, b) => a.order - b.order)
          .map((experience) => {
            return <ExperienceItem item={experience} key={experience.id} />;
          })}
      </Section>
    </Wrapper>
  );
};

export default ExperienceSection;
