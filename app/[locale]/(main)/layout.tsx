import { MainLayout } from "@app/layouts/MainLayout";
import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainRouteLayout({ children }: MainLayoutProps) {
  return <MainLayout>{children}</MainLayout>;
}
