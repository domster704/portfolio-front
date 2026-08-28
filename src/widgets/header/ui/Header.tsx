import { type FC } from "react";
import style from "./Header.module.scss";
import ThemeToggle from "@shared/ui/theme-toggle";
import LanguageToggle from "@shared/ui/language-toggle";
import { useTranslations } from "next-intl";
import Wrapper from "@shared/ui/wrapper";
import { Link } from "@i18n/navigation";
import { SECTIONS } from "@shared/constants/sections";

const links = [
  {
    type: "anchor",
    href: `#${SECTIONS.ABOUT}`,
    label: "about",
  },
  {
    type: "anchor",
    href: `#${SECTIONS.SKILLS}`,
    label: "skills",
  },
  {
    type: "anchor",
    href: `#${SECTIONS.EXPERIENCE}`,
    label: "experience",
  },
  {
    type: "anchor",
    href: `#${SECTIONS.EDUCATION}`,
    label: "education",
  },
  {
    type: "anchor",
    href: `#${SECTIONS.PROJECTS}`,
    label: "projects",
  },
  // {
  //   type: "anchor",
  //   href: `#${SECTIONS.RESEARCH}`,
  //   label: "research",
  // },
  {
    type: "anchor",
    href: `#${SECTIONS.CONTACT}`,
    label: "contacts",
  },
  // {
  //   type: "route",
  //   href: "/blog",
  //   label: "blog",
  // },
] as const;

const Header: FC = () => {
  const t = useTranslations("Header");

  return (
    <header className={style.header}>
      <Wrapper className={style.headerInner}>
        <a href="#top" className={style.logo}>
          Domster704.
        </a>

        <nav aria-label={t("navigation")} className={style.navLinks}>
          <ul className={style.links}>
            {links.map((link) => (
              <li key={link.label}>
                {link.type === "anchor" ? (
                  <a href={link.href}>{t(link.label)}</a>
                ) : (
                  <Link href={link.href}>{t(link.label)}</Link>
                )}
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
