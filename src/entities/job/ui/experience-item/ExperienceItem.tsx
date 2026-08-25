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
      <span className={["label", style.experienceDates].join(" ")}>
        {item.date}
      </span>

      <div>
        <h3 className={"title-3"}>{item.position}</h3>
        {item.companyURL ? (
          <a
            href={item.companyURL}
            target={"_blank"}
            className={"text secondary"}
          >
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

        <p className={"label"}>{item.skills.join("\u00A0· ")}</p>
      </div>
    </article>
  );
};

export default ExperienceItem;
