"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

type NextAppProviderProps = {
  children: React.ReactNode;
};

export function NextAppProvider({ children }: NextAppProviderProps) {
  return (
    <ThemeProvider
      attribute={"data-theme"}
      defaultTheme={"system"}
      enableSystem={true}
      disableTransitionOnChange={true}
    >
      {children}
    </ThemeProvider>
  );
}
