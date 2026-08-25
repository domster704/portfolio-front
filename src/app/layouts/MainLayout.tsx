import {PreLoader} from "@shared/ui/preloader";
import {ReactNode, Suspense} from "react";
import Header from "@widgets/header";

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />

      <Suspense fallback={<PreLoader />}>{children}</Suspense>
    </>
  );
}
