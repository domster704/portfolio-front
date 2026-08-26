import { ReactNode } from "react";
import Header from "@widgets/header";
import { getTranslations } from "next-intl/server";

type MainLayoutProps = {
  children: ReactNode;
};

export async function MainLayout({ children }: MainLayoutProps) {
  const t = await getTranslations("Accessibility");

  return (
    <>
      <a href="#main-content" className="skip-link">
        {t("skipToContent")}
      </a>

      <Header />

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
    </>
  );
}
