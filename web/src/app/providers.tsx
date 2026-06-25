'use client'

import { adragonTheme } from "@/themes/adragon";
import { ThemeProvider } from "@adragon-web/context";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  const themes = {
    adragon: adragonTheme,
  };

  return (
    <ThemeProvider themes={themes} theme="adragon">
      {children}
    </ThemeProvider>
  );
}