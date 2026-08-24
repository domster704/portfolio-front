import { type FC } from "react";
import style from "./ExperienceItem.module.scss";
import { Experience } from "@entities/job/model/experience.schema";

interface ExperienceItemProps {
  item: Experience;
}

const ExperienceItem: FC<ExperienceItemProps> = ({ item }) => {
  return <div className={style.content}>{item.about}</div>;
};

export default ExperienceItem;
