import style from "./SkillGroupCard.module.scss";
import { SkillGroup } from "@entities/skill-group/model/skill-group.schema";
import { FC } from "react";

interface SkillGroupProps {
  group: SkillGroup;
}

const SkillGroupCard: FC<SkillGroupProps> = ({ group }) => {
  return (
    <article key={group.id} className={style.skillGroup}>
      <h3 className={"title-4"}>{group.title}</h3>

      <div className={style.skillList}>
        {group.skills.map((skill: string) => (
          <span key={skill} className={style.skill}>
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
};

export default SkillGroupCard;
