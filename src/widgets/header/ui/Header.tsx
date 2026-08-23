import { type FC } from "react";
import style from "./Header.module.scss";
import { ThemeToggle } from "@shared/ui/theme-toggle/ui/ThemeToggle";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className={style.header}>
      <nav className={style.headerInner}>
        <a href="#top" className={style.logo}>
          domster704
        </a>

        <ul className={style.links}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#research">Research</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>

        <div className={style.contacts}>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
