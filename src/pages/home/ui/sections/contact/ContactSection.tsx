import { SECTIONS } from "@shared/constants/sections";
import Wrapper from "@shared/ui/wrapper";
import { getTranslations } from "next-intl/server";
import style from "./ContactSection.module.scss";
import styleSection from "@shared/ui/section/ui/Section.module.scss";

const contacts = [
  {
    key: "email",
    value: "domster704@mail.ru",
    href: "mailto:domster704@mail.ru",
  },
  {
    key: "telegram",
    value: "@domster704",
    href: "https://t.me/domster704",
  },
  {
    key: "phone",
    value: "+7 912 745-89-00",
    href: "tel:+79127458900",
  },
  {
    key: "github",
    value: "github.com/domster704",
    href: "https://github.com/domster704",
  },
  {
    key: "linkedin",
    value: "linkedin.com/in/domster704",
    href: "https://www.linkedin.com/in/domster704",
  },
] as const;

const ContactSection = async () => {
  const t = await getTranslations("Contact");

  return (
    <section id={SECTIONS.CONTACT} className={style.contacts}>
      <Wrapper>
        <header
          className={[styleSection.headerSection, style.header].join(" ")}
        >
          <p className="label">{t("label")}</p>
          <h2 className="title-2">{t("title")}</h2>
        </header>

        <div className={style.list}>
          {contacts.map((contact) => {
            const external = contact.href.startsWith("http");

            return (
              <a
                key={contact.key}
                href={contact.href}
                className={style.contact}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                <span className={["label large", style.label].join(" ")}>
                  {t(`items.${contact.key}`)}
                </span>

                <span className={style.value}>{contact.value}</span>

                <span className={style.arrow} aria-hidden="true">
                  ↗
                </span>
              </a>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
};

export default ContactSection;
