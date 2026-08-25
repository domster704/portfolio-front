"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@i18n/navigation";
import style from "./LanguageToggle.module.scss";

const LanguageToggle = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = (nextLocale: "ru" | "en") => {
    if (nextLocale === locale) {
      return;
    }

    router.replace(pathname, {
      locale: nextLocale,
    });
  };

  return (
    <div className={style.toggle} role="group" aria-label="Language">
      <button
        type="button"
        className={[style.option, locale === "ru" ? style.active : ""].join(
          " ",
        )}
        onClick={() => changeLocale("ru")}
        aria-pressed={locale === "ru"}
      >
        RU
      </button>

      <button
        type="button"
        className={[style.option, locale === "en" ? style.active : ""].join(
          " ",
        )}
        onClick={() => changeLocale("en")}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
