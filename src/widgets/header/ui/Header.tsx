import { type FC } from "react";
import style from "./Header.module.scss";
import { ThemeToggle } from "@shared/ui/theme-toggle/ui/ThemeToggle";
import { useTranslations } from "next-intl";
import Wrapper from "@shared/ui/wrapper";

const Header: FC = ({}) => {
  const t = useTranslations("Header");

  return (
    <header className={style.header}>
      <Wrapper className={style.headerInner}>
        <a href="#top" className={style.logo}>
          Domster704.
        </a>

        <ul className={style.links}>
          <li>
            <a href="#about">{t("about")}</a>
          </li>
          <li>
            <a href="#skills">{t("skills")}</a>
          </li>
          <li>
            <a href="#experience">{t("experience")}</a>
          </li>
          <li>
            <a href="#education">{t("education")}</a>
          </li>
          <li>
            <a href="#projects">{t("projects")}</a>
          </li>
          <li>
            <a href="#research">{t("research")}</a>
          </li>
          <li>
            <a href="#blog">{t("blog")}</a>
          </li>
          <li>
            <a href="#contacts">{t("contacts")}</a>
          </li>
        </ul>

        <div className={style.contacts}>
          <ThemeToggle />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
