import { PreLoader } from "@shared/ui/preloader";
import Wrapper from "@shared/ui/wrapper";
import { ReactNode, Suspense } from "react";
import Header from "@widgets/header";
import Hello from "@pages/hello";

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />

      <Wrapper>
        <Suspense fallback={<PreLoader />}>{children}</Suspense>
      </Wrapper>
    </>
  );
}
