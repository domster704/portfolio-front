import {getRequestConfig} from "next-intl/server";
import {locale as rootLocale} from "next/root-params";
import {hasLocale} from "next-intl";
import {routing} from "@i18n/routing";

export default getRequestConfig(async () => {
  const requestedLocale = await rootLocale();

  const locale = hasLocale(routing.locales, requestedLocale)
    ? requestedLocale
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`@messages/${locale}.json`)).default,
  };
});
