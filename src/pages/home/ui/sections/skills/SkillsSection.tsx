import style from "./SkillsSection.module.scss";

import Section from "@shared/ui/section";
import Wrapper from "@shared/ui/wrapper";
import { SECTIONS } from "@shared/constants/sections";
import { getLocale, getTranslations } from "next-intl/server";
import {
  getAllSkillGroups,
  SkillGroup,
  SkillGroupCard,
  SkillsMarquee,
} from "@entities/skill-group";

const SkillsSection = async () => {
  const locale = await getLocale();
  const t = await getTranslations("Skills");

  const skillGroups: SkillGroup[] = await getAllSkillGroups(locale);

  const marqueeSkills = skillGroups
    .flatMap((group) => group.skills)
    .filter((_, index) => index < 40);

  return (
    <>
      <SkillsMarquee skills={marqueeSkills} />

      <Wrapper>
        <Section id={SECTIONS.SKILLS} title={t("title")} label={t("label")}>
          <div className={style.skillsGrid}>
            {skillGroups.map((group: SkillGroup) => (
              <SkillGroupCard group={group} key={group.id} />
            ))}
          </div>
        </Section>
      </Wrapper>
    </>
  );
};

export default SkillsSection;
