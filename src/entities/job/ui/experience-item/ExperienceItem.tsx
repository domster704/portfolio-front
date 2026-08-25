import { type FC } from "react";
import style from "./ExperienceItem.module.scss";
import { Experience } from "@entities/job/model/experience.schema";
import { sanitizeHtml } from "@shared/lib/sanitize";

interface ExperienceItemProps {
  item: Experience;
}

const ExperienceItem: FC<ExperienceItemProps> = ({ item }) => {
  return (
    <article className={style.experienceItem}>
      <span className={"label"}>{item.date}</span>

      <div>
        <h3 className={"title-3"}>{item.position}</h3>
        {item.companyURL ? (
          <a href={item.companyURL} className={"text secondary"}>
            {item.companyName}
          </a>
        ) : (
          <p className={"text secondary"}>{item.companyName}</p>
        )}

        <div
          className={["text primary", style.description].join(" ")}
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(item.about),
          }}
        ></div>
        <br />

        <p className={"label lower"}>
          {item.skills.map((skill, index) => {
            const end = index === item.skills.length - 1 ? "" : " · ";
            return skill + end;
          })}
        </p>
      </div>
    </article>
  );
};

export default ExperienceItem;
