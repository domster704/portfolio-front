import { SECTIONS } from "@shared/constants/sections";
import Wrapper from "@shared/ui/wrapper";
import { getTranslations } from "next-intl/server";
import style from "./ContactSection.module.scss";
import styleSection from "@shared/ui/section/ui/Section.module.scss";
import { contacts } from "@shared/constants/contacts";

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
          {Object.entries(contacts).map(([key, contact]) => {
            const external = contact.href.startsWith("http");

            return (
              <a
                key={key}
                href={contact.href}
                className={style.contact}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                <span className={["label large", style.label].join(" ")}>
                  {t(`items.${key}`)}
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
