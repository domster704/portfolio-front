import { type FC, ReactNode } from "react";
import style from "./Section.module.scss";

interface SectionProps {
  id?: string;
  title: string;
  label: string;
  children: ReactNode;
  twoColumns?: boolean;
}

const Section: FC<SectionProps> = ({
  id,
  title,
  label,
  children,
  twoColumns = false,
}) => {
  return (
    <section
      id={id}
      className={[style.section, twoColumns ? style.twoColumn : ""].join(" ")}
    >
      <header className={style.headerSection}>
        <p className="label">{label}</p>
        <h2 className="title-2">{title}</h2>
      </header>

      <div>{children}</div>
    </section>
  );
};

export default Section;
