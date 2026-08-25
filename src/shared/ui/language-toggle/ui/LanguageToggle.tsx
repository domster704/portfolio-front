"use client";

import {useLocale} from "next-intl";
import {usePathname, useRouter} from "@i18n/navigation";
import style from "./LanguageToggle.module.scss";

const LanguageToggle = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = locale === "ru" ? "en" : "ru";

  return (
    <button
      className={style.content}
      type="button"
      onClick={() =>
        router.replace(pathname, {
          locale: nextLocale,
        })
      }
    >
      {nextLocale.toUpperCase()}
    </button>
  );
};

export default LanguageToggle;
