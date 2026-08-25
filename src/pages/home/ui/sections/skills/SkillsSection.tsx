import style from "./SkillsSection.module.scss";

import Section from "@shared/ui/section";
import Wrapper from "@shared/ui/wrapper";
import {SECTIONS} from "@shared/constants/sections";
import {getLocale, getTranslations} from "next-intl/server";
import {getAllSkillGroups} from "@entities/skill-group/api/getAllSkillGroups";
import {SkillGroup} from "@entities/skill-group/model/skill-group.schema";

const SkillsSection = async () => {
  const locale = await getLocale();
  const t = await getTranslations("Skills");

  const skillGroups: SkillGroup[] = await getAllSkillGroups(locale);

  const SKILL_NAMES = Array.from(
    new Set(skillGroups.flatMap((group) => group.skills)),
  );

  return (
    <>
      <div className={style.skillContainer}>
        <div className={style.skillScroll}>
          {[...SKILL_NAMES, ...SKILL_NAMES].map((skill, index) => (
            <span key={`${skill}-${index}`}>{skill}</span>
          ))}
        </div>
      </div>

      <Wrapper>
        <Section id={SECTIONS.SKILLS} title={t("title")} label={t("label")}>
          <div className={style.skillsGrid}>
            {skillGroups.map((group: SkillGroup) => (
              <article key={group.id} className={style.skillGroup}>
                <h4 className={"title-4"}>{group.title}</h4>

                <div className={style.skillList}>
                  {group.skills.map((skill: string) => (
                    <span key={skill} className={style.skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>
      </Wrapper>
    </>
  );
};

export default SkillsSection;
