"use client";

import React from "react";
import { ThemeProvider } from "@app/providers/ThemeProvider";

type NextAppProviderProps = {
  children: React.ReactNode;
};

export function NextAppProvider({ children }: NextAppProviderProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
