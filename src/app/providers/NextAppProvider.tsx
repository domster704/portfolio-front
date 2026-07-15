"use client";

import React from "react";

type NextAppProviderProps = {
  children: React.ReactNode;
};

function BootstrapProvider({children}: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function NextAppProvider({children}: NextAppProviderProps) {
  return (
    <BootstrapProvider>{children}</BootstrapProvider>
  );
}
