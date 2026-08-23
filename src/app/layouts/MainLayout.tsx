"use client";

import { PreLoader } from "@shared/ui/preloader";
import Wrapper from "@shared/ui/wrapper";
import { ReactNode, Suspense, useEffect } from "react";
import Header from "@widgets/header";

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
