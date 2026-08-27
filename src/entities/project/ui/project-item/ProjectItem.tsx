import { type FC } from "react";
import style from "./ProjectItem.module.scss";

import { Project } from "@entities/project/model/project.schema";
import { sanitizeHtml } from "@shared/lib/sanitize";

interface ProjectItemProps {
  item: Project;
  index: number;
}

const ProjectItem: FC<ProjectItemProps> = ({ item, index }) => {
  return (
    <article className={style.project}>
      <aside className={style.meta}>
        <span className={style.index} aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className={style.metaInfo}>
          {item.target && (
            <span className={["label", "section", style.target].join(" ")}>
              {item.target}
            </span>
          )}

          <time className="label large" dateTime={String(item.year)}>
            {item.year}
          </time>
        </div>
      </aside>

      <h3 className={["title-3", style.title].join(" ")}>{item.name}</h3>

      <div>
        <div
          className={style.description}
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(item.about),
          }}
        />

        {item.skills.length > 0 && (
          <p className={["label", style.skills].join(" ")}>
            {item.skills.join("\u00A0· ")}
          </p>
        )}
      </div>
    </article>
  );
};

export default ProjectItem;
