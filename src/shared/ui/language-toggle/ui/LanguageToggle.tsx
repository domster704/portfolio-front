"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@i18n/navigation";
import style from "./LanguageToggle.module.scss";

const LanguageToggle = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === "ru" ? "en" : "ru";

    router.replace(pathname, {
      locale: nextLocale,
      scroll: false,
    });
  };

  return (
    <button
      type="button"
      className={style.toggle}
      onClick={toggleLocale}
      aria-label={
        locale === "ru"
          ? "Switch language to English"
          : "Переключить язык на русский"
      }
    >
      <span
        className={[style.option, locale === "ru" ? style.active : ""].join(
          " ",
        )}
      >
        RU
      </span>

      <span
        className={[style.option, locale === "en" ? style.active : ""].join(
          " ",
        )}
      >
        EN
      </span>
    </button>
  );
};

export default LanguageToggle;
