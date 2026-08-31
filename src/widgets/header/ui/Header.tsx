import { type FC } from "react";
import { useTranslations } from "next-intl";

import { Link } from "@i18n/navigation";
import { SECTIONS } from "@shared/constants/sections";
import LanguageToggle from "@shared/ui/language-toggle";
import ThemeToggle from "@shared/ui/theme-toggle";
import Wrapper from "@shared/ui/wrapper";

import style from "./Header.module.scss";

const links = [
  {
    href: `/#${SECTIONS.ABOUT}`,
    label: "about",
  },
  {
    href: `/#${SECTIONS.SKILLS}`,
    label: "skills",
  },
  {
    href: `/#${SECTIONS.EXPERIENCE}`,
    label: "experience",
  },
  {
    href: `/#${SECTIONS.EDUCATION}`,
    label: "education",
  },
  {
    href: `/#${SECTIONS.PROJECTS}`,
    label: "projects",
  },
  {
    href: "/blog",
    label: "blog",
  },
  {
    href: `/#${SECTIONS.CONTACT}`,
    label: "contacts",
  },
] as const;

const Header: FC = () => {
  const t = useTranslations("Header");

  return (
    <header className={style.header}>
      <Wrapper className={style.headerInner}>
        <Link href="/" className={style.logo}>
          Domster704
        </Link>

        <nav aria-label={t("navigation")} className={style.navLinks}>
          <ul className={style.links}>
            {links.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{t(link.label)}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={style.contacts}>
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
