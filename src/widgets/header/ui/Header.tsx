import { type FC } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getPathname, Link } from "@i18n/navigation";

import { SECTIONS } from "@shared/constants/sections";

import LanguageToggle from "@shared/ui/language-toggle";
import ThemeToggle from "@shared/ui/theme-toggle";
import Wrapper from "@shared/ui/wrapper";

import style from "./Header.module.scss";
import HeaderLogo from "@widgets/header/ui/HeaderLogo";

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
    href: `/#${SECTIONS.RECOMMENDATIONS}`,
    label: "recommendations",
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
  const locale = useLocale();
  const homeHref = getPathname({ locale, href: "/" });

  return (
    <header className={style.header}>
      <Wrapper className={style.headerInner}>
        <HeaderLogo />

        <nav aria-label={t("navigation")} className={style.navLinks}>
          <ul className={style.links}>
            {links.map((link) => (
              <li key={link.label}>
                {link.href.startsWith("/#") ? (
                  <a href={`${homeHref}${link.href.slice(1)}`}>
                    {t(link.label)}
                  </a>
                ) : (
                  <Link href={link.href} prefetch={false}>
                    {t(link.label)}
                  </Link>
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
