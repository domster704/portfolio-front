import Section from "@shared/ui/section";
import { SECTIONS } from "@shared/constants/sections";
import style from "./AboutSection.module.scss";
import Wrapper from "@shared/ui/wrapper";
import { getLocale, getTranslations } from "next-intl/server";
import { About, getAbout } from "@entities/about";
import { sanitizeHtml } from "@shared/lib/sanitize";

const AboutSection = async () => {
  const locale = await getLocale();
  const t = await getTranslations("About");
  const headerT = await getTranslations("Header");

  const about: About | null = await getAbout(locale);

  return (
    <Wrapper>
      <Section
        id={SECTIONS.ABOUT}
        twoColumns
        title={t("title")}
        label={headerT("about")}
      >
        <div
          className={style.aboutSection}
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(about?.description || ""),
          }}
        ></div>
      </Section>
    </Wrapper>
  );
};

export default AboutSection;
